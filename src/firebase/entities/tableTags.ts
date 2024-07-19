import {TableTag} from '@/types/tableTag';
import {addDocument, deleteDocument, getCollection, getDocument, updateDocument} from '@/firebase/firestore';

const collectionName = 'tableTags';

export const getTableTags = async (): Promise<TableTag[]> => {
    return await getCollection(collectionName) as TableTag[];
};

export const getTableTagById = async (id: string): Promise<TableTag | null> => {
    return await getDocument(collectionName, id) as TableTag | null;
};

export const addTableTag = async (tableTag: TableTag) => {
    return await addDocument(collectionName, tableTag);
};

export const updateTableTag = async (id: string, tableTag: Partial<TableTag>) => {
    return await updateDocument(collectionName, id, tableTag);
};

export const deleteTableTag = async (id: string) => {
    return await deleteDocument(collectionName, id);
};
