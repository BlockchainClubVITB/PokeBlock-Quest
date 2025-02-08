import { Client, Account, Databases, ID ,Query} from "appwrite";

// Initialize Appwrite client
const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Endpoint URL
  .setProject("6749aac90038687908b7"); // Your Appwrite project ID

// Initialize services
export const account = new Account(client);
export const database = new Databases(client);
export {Query};

// Export a function for generating a unique ID (random string)
export const uniqueId = () => {
  return Math.random().toString(36).substr(2, 9); // Generates a random 9-character string
};

export default client; // Default export for the Appwrite client
