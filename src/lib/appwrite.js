import { Client, Databases, ID } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://[https://cloud.appwrite.io/v1]') // Your Appwrite Endpoint
    .setProject('[67a468c3001fbee4d49e]'); // Your project ID

const databases = new Databases(client);
const promise = databases.createDocument('67a5a9cb00001b044652','67a5a9eb002edf9835b3',ID.unique(),
    { "name": "Hamlet" }
);
promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});