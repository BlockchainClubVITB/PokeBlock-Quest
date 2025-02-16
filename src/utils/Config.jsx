import { Client, Account, Databases, ID, Query } from "appwrite";

const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_APP_APPWRITE_URL)
  .setProject(import.meta.env.VITE_APP_APPWRITE_PROJECT_ID);

export const account = new Account(client);
export const database = new Databases(client);
export { Query };

export const DatabaseId = import.meta.env.VITE_APP_APPWRITE_DATABASE_ID;

export const CollectionId = import.meta.env.VITE_APP_APPWRITE_COLLECTION_ID;

export const uniqueId = () => {
  return ID.unique();
};

export default client;
