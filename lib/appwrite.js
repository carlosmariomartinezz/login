import { Avatars, Client, Databases, Account, ID } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',  // Corregido 'endpoit' a 'endpoint'
    platform: 'com.edu.sena.soy',  // Corregido 'Platform' a 'platform'
    projectId: '66ea6d6900379effb09a',
    databaseId: '66ea701c0019ae1a760e',  // Corregido 'DatabasesId' a 'databaseId'
    userCollectionId: '66ea7080001547a12980',  // Corregido 'userColletionId' a 'userCollectionId'
    videosCollectionId: '66ea72aa002507c697da',  // Corregido 'videosColletionId' a 'videosCollectionId'
    storageId: '66ea75bc0025a4033320'
};

const client = new Client()
    .setEndpoint(config.endpoint) 
    .setProject(config.projectId) 
    .setPlatform(config.platform);  // Corregido 'Platform' a 'platform'

const account = new Account(client);
const avatars = new Avatars(client);  // Corregido 'Avatars' a 'avatars' para evitar la duplicación
const databases = new Databases(client);  // Corregido 'Client' a 'client' en el constructor de 'Databases'

export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),  // Corregido 'ID.Unique()' a 'ID.unique()'
            email,
            password,
            username
        );

        if (!newAccount) throw new Error('Account creation failed');

        const avatarUrl = avatars.getInitials(username);  // Corregido 'Avatars.getinitials' a 'avatars.getInitials'

        await signIn(email, password);

        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),  // Corregido 'ID.Unique()' a 'ID.unique()'
            {
                accountId: newAccount.$id,  // Corregido '$Id' a '$id'
                email,
                username,
                avatar: avatarUrl
            }
        );

        return newUser;

    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};

export async function signIn(email, password) {
    try {
        const session = await account.createEmailSession(email, password);  // Corregido 'createEmailSeccion' a 'createEmailSession'

        return session;
    } catch (error) {
        throw new Error(error);
    }
}
