import {getFirestore, collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc} from 'firebase/firestore';
import app from './config';

const db = getFirestore(app);

const getCollection = async (collectionName: string) => {
    const querySnapshot = await getDocs(collection(db, collectionName));
    return querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
};

const getDocument = async (collectionName: string, id: string) => {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return {id: docSnap.id, ...docSnap.data()};
    } else {
        return null;
    }
};

const addDocument = async (collectionName: string, data: any) => {
    return await addDoc(collection(db, collectionName), data);
};

const updateDocument = async (collectionName: string, id: string, data: any) => {
    const docRef = doc(db, collectionName, id);
    return await updateDoc(docRef, data);
};

const deleteDocument = async (collectionName: string, id: string) => {
    const docRef = doc(db, collectionName, id);
    return await deleteDoc(docRef);
};

export {getCollection, getDocument, addDocument, updateDocument, deleteDocument};
