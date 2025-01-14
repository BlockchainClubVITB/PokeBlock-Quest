import { Client, Account, Databases, ID } from "appwrite";

const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_APP_APPWRITE_URL) 
  .setProject(import.meta.env.VITE_APP_APPWRITE_PROJECT_ID); 

export const account = new Account(client);
export const database = new Databases(client);
export const uniqueId = ID.unique();

export default client;
