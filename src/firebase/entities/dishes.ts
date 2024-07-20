import { Dish } from '@/types/dish';
import {
    addDocument,
    deleteDocument,
    getCollection,
    getDocument,
    updateDocument,
} from '@/firebase/firestore';

const collectionName = 'dishes';

export const getDishes = async (): Promise<Dish[]> => {
    return (await getCollection(collectionName)) as Dish[];
};

export const getDishById = async (id: string): Promise<Dish | null> => {
    return (await getDocument(collectionName, id)) as Dish | null;
};

export const addDish = async (dish: Dish) => {
    return await addDocument(collectionName, dish);
};

export const updateDish = async (id: string, dish: Partial<Dish>) => {
    return await updateDocument(collectionName, id, dish);
};

export const deleteDish = async (id: string) => {
    return await deleteDocument(collectionName, id);
};
