import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('656d6495263133e69c8e'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';