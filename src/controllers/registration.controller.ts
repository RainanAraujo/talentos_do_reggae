import { Registered } from "@/models/registered.model";
import { auth } from "@/services/auth.service";
import { firestore } from "@/services/firestore.service";
import dayjs from 'dayjs';
import { signInAnonymously } from "firebase/auth";
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore/lite";
import { map, set, uniq } from "lodash";

export class RegistrationController {
    static instance: RegistrationController | null = null;

    static async getInstance() {
        try {
            await signInAnonymously(auth)
            if (!this.instance) {
                this.instance = new RegistrationController();
            }
            return this.instance;
        } catch {
            throw new Error('Erro ao cadastrar');
        }
    }

    async register(registered: Registered) {
        const id = Date.now().toString();
        const cpfList = [];
        let changes = {};

        if (registered.type === 'band') {
            set(changes,
                'cantores', registered.cantores
                    .map((cantor) => ({...cantor, nascimento: dayjs(cantor.nascimento).toDate()})));
            set(changes,
                'instrumentistas', registered.instrumentistas
                    .map((instrumentista) => ({...instrumentista, nascimento: dayjs(instrumentista.nascimento).toDate()})));
            cpfList.push(...map(registered.cantores, 'cpf'), ...map(registered.instrumentistas, 'cpf'));
        }
        if (registered.type === 'dancers') {
            set(changes,
                'dancarinos', registered.dancarinos
                    .map((dancarino) => ({...dancarino, nascimento: dayjs(dancarino.nascimento).toDate()})));
            cpfList.push(...map(registered.dancarinos, 'cpf'));
        }
        if (registered.type === 'dj') {
            set(changes,'nascimento', dayjs(registered.nascimento).toDate());
            cpfList.push(registered.cpf);
        }
        
        if (uniq(cpfList).length !== cpfList.length) {
            throw new Error('CPF duplicado no registro.');
        }

        const sameCpf = query(collection(firestore, 'registrations'), where('cpfList', 'array-contains-any', cpfList));
        const querySnapshot = await getDocs(sameCpf);
        if (!querySnapshot.empty) {
            throw new Error('CPF já cadastrado em outra inscrição.');
        }


        try {
            await setDoc(
                doc(collection(firestore, 'registrations'), id),
                { ...registered, ...changes, cpfList}
            );
        } catch {
            throw new Error('Erro ao cadastrar');
        }
    }

}