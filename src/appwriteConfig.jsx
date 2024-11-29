import { Client, Account, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6749aac90038687908b7");

export const account = new Account(client);
export const database = new Databases(client);
export default client;
