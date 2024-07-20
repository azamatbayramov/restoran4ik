import {Table} from '@/types/table';
import {addDocument, deleteDocument, getCollection, getDocument, updateDocument} from '@/firebase/firestore';

const collectionName = 'tables';

export const getTables = async (): Promise<Table[]> => {
    return await getCollection(collectionName) as Table[];
};

export const getTableById = async (id: string): Promise<Table | null> => {
    return await getDocument(collectionName, id) as Table | null;
};

export const addTable = async (table: Table) => {
    return await addDocument(collectionName, table);
};

export const updateTable = async (id: string, table: Partial<Table>) => {
    return await updateDocument(collectionName, id, table);
};

export const deleteTable = async (id: string) => {
    return await deleteDocument(collectionName, id);
};
