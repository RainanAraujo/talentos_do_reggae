import { Registered } from "@/models/registered.model";
import { auth } from "@/services/auth.service";
import { firestore } from "@/services/firestore.service";
import { signInAnonymously } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore/lite";



class RegistrationController {
    static instance: RegistrationController | null = null;

    static async getInstance() {
        await signInAnonymously(auth)
        if (!this.instance) {
            this.instance = new RegistrationController();
        }
    }

    async register(registered: Registered) {
        const id = Date.now().toString();
        console.log('Registering', id);

        await setDoc(
            doc(collection(firestore, 'registrations'), id),
            registered
        )
    }

}