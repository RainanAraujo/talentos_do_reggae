import { SubscribeParams } from "@/models/subscribe_params.model";
import { Vote } from "@/models/vote.model";
import { auth } from "@/services/auth.service";
import axios from "axios";
import { signInAnonymously } from "firebase/auth";

export class APIController {
    private api = axios.create({
        baseURL: 'https://us-central1-talentos-do-reggae.cloudfunctions.net/api',
    })
    static instance: APIController | null = null;

    static async getInstance() {
        try {
            if (auth.currentUser == null) await signInAnonymously(auth)
            if (!this.instance) {
                this.instance = new APIController();
            }
            return this.instance;
        } catch {
            throw new Error('Erro ao cadastrar');
        }
    }
    async register(params: SubscribeParams) {
        try {
            const {data} = await this.api.post('/subscribe', params);
            const {success, message} = data;
            if (!success) {
                throw new Error(message);
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new Error(error.response?.data?.message);
            }else {
                throw error;
            }
        }
    }

    async vote(params: Vote) {
        try{
            const {data} = await this.api.post('/vote', params, {
                headers: {
                    'Authorization': 'Bearer ' + await auth.currentUser?.getIdToken(),
                }
            });
            const {success, message} = data;
            if (!success) {
                throw new Error(message);
            }
        }catch (error) {
            if (axios.isAxiosError(error)) {
                throw new Error(error.response?.data?.message);
            }else {
                throw error;
            }
        }
    }
}