import configVariable from "../config_variables/configVariable";
import { Client, Account, ID } from "appwrite";

class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(configVariable.appWriteURL)
      .setProject(configVariable.appWriteProjectID);

    this.account = new Account(this.client)  
  }

  async createAccount({email,password,name}){
    try{
        const userAccount = await this.account.create(ID.unique(),email,password,name)
        if(userAccount){
            //if user exist login directly 

        }else{
            return userAccount
        }
    }catch(err){
        console.log("Appwrite service :: createAccount :: error", err);
        throw err
    }
  }

  async login({email,password}){
    try{
      return await this.account.createEmailSession(email,password)  
    }catch(err){
        console.log("Appwrite service :: login :: error", err);
        throw err
    }
  }

  async getCurrentUser(){
      try{
        return await this.account.get()
     }catch (err){
         console.log("Appwrite service :: getCurrentUser :: error", err);
         // throw err
     }
  }

  async logout(){
    try{
       await this.account.deleteSession('current')
    }catch(err){
        console.log("Appwrite service :: logout :: error", err);
        throw err
    }
  }


}

const authService = new AuthService()

export default authService
