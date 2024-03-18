import { Registered } from "@/models/registered.model";
import { auth } from "@/services/auth.service";
import { firestore } from "@/services/firestore.service";
import dayjs from 'dayjs';
import { signInAnonymously } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore/lite";
import { set } from "lodash";

export class RegistrationController {
    static instance: RegistrationController | null = null;

    static async getInstance() {
        await signInAnonymously(auth)
        if (!this.instance) {
            this.instance = new RegistrationController();
        }
        return this.instance;
    }

    async register(registered: Registered) {
        const id = Date.now().toString();
        let changes = {};

        if (registered.type === 'band') {
            set(changes,
                'cantores', registered.cantores
                    .map((cantor) => ({...cantor, nascimento: dayjs(cantor.nascimento).toDate()})));
            set(changes,
                'instrumentistas', registered.instrumentistas
                    .map((instrumentista) => ({...instrumentista, nascimento: dayjs(instrumentista.nascimento).toDate()})));
        }
        if (registered.type === 'dancers') {
            set(changes,
                'dancarinos', registered.dancarinos
                    .map((dancarino) => ({...dancarino, nascimento: dayjs(dancarino.nascimento).toDate()})));
        }
        if (registered.type === 'dj') {
            set(changes,'nascimento', dayjs(registered.nascimento).toDate());
        }
        
        await setDoc(
            doc(
                collection(firestore, 'registrations'), id),
                { ...registered, ...changes}
            );
    }

}