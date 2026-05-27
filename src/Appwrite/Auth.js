import conf from '../conf/conf'
import { Client, Account, ID } from "appwrite";

class AuthService {

    client = new Client();
    Account;

    constructor() {
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteID);

        this.Account = new Account(this.client);
    }

    async createAccount({ name, email, password }) {
        try {
            const userAccount = await this.Account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({ email, password });
            }
            return userAccount;
        } catch (err) {
            console.log(err);
        }
    }

    async login({email, password}){
        try{
            const createSession = await this.Account.createEmailPasswordSession(email, password)
            return createSession
        }catch(err){
            console.log(err);
        }
    }

    async getCurrentUser(){
       try{
             const currUser = await this.Account.get()
             return currUser
       }catch(err){
        console.log(err)
       }
    }

    async logOut(){
        try{
            await this.Account.deleteSession("current")
        }catch(err){
            console.log()
        }
    }
}

const authService = new AuthService();
export default authService