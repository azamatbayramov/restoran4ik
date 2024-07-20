import { Meal } from '@/types/meal';
import {
    addDocument,
    deleteDocument,
    getCollection,
    getDocument,
    updateDocument,
} from '@/firebase/firestore';

const collectionName = 'meals';

export const getMeals = async (): Promise<Meal[]> => {
    return (await getCollection(collectionName)) as Meal[];
};

export const getMealById = async (id: string): Promise<Meal | null> => {
    return (await getDocument(collectionName, id)) as Meal | null;
};

export const addMeal = async (meal: Meal) => {
    return await addDocument(collectionName, meal);
};

export const updateMeal = async (id: string, meal: Partial<Meal>) => {
    return await updateDocument(collectionName, id, meal);
};

export const deleteMeal = async (id: string) => {
    return await deleteDocument(collectionName, id);
};
