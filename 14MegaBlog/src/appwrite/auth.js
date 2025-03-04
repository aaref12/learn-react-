import config from "../config/configEnv";
import {Client,Account,ID } from 'appwrite'


export class AuthService{
   client=new Client();
   account;

   constructor(){
    this.client
       .setEndpoint(config.AppwriteUrl)
       .setProject(config.ProjectId);
       this.account=new Account(this.client)
   }

   async createAccount({email,password,name}){
   try {
       const userAccount= await this.account.create(ID.unique(),email,password,name);
     if (userAccount) {
        //call another methode
        return this.login({email,password})
        
     } else {
        return userAccount;
     }


   } catch (error) {
    throw new error;
    
   }
   
   }

   async login({email,password}){
    try {
       return await this.account.createEmailPasswordSession(email,password);
    } catch (error) {
        throw new error
    }
   }


   async getCurrentUser(){
   try {
     return await this.account.get()
   } catch (error) {
    console.log('getCurrenuser erro', error)
   }
   return null;
   }
  



 async logout(){
    try {
        await this.account.deleteSession();
    } catch (error) {
        console.log(error)
    }
 }
}

const authservice=new AuthService()

export default authservice