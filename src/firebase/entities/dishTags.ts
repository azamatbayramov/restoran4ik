import { DishTag } from '@/types/dishTag';
import {
    addDocument,
    deleteDocument,
    getCollection,
    getDocument,
    updateDocument,
} from '@/firebase/firestore';

const collectionName = 'dishTags';

export const getDishTags = async (): Promise<DishTag[]> => {
    return (await getCollection(collectionName)) as DishTag[];
};

export const getDishTagById = async (id: string): Promise<DishTag | null> => {
    return (await getDocument(collectionName, id)) as DishTag | null;
};

export const addDishTag = async (dishTag: DishTag) => {
    return await addDocument(collectionName, dishTag);
};

export const updateDishTag = async (id: string, dishTag: Partial<DishTag>) => {
    return await updateDocument(collectionName, id, dishTag);
};

export const deleteDishTag = async (id: string) => {
    return await deleteDocument(collectionName, id);
};
