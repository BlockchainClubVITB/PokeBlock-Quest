import { Client, Account, Databases } from "appwrite";

// Initialize the Appwrite Client
const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_APP_APPWRITE_URL) // Appwrite API Endpoint
  .setProject(import.meta.env.VITE_APP_APPWRITE_PROJECT_ID); // Appwrite Project ID

// Export Account and Database objects for use
export const account = new Account(client);
export const database = new Databases(client);

export default client;
