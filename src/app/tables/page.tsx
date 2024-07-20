'use client';
import React, { useState } from 'react';
import TableCard from '@/components/TableCard/TableCard';
import { Table } from '@/types/table';

// Initial list of tables
const initialTables: Table[] = [
    { id: '1', title: 'Table 1', isOccupied: true },
    { id: '2', title: 'Table 2', isOccupied: false },
    { id: '3', title: 'Table 3', isOccupied: true },
    { id: '4', title: 'Table 4', isOccupied: false },
    { id: '5', title: 'Table 5', isOccupied: true },
];

const Page: React.FC = () => {
    // State to manage the list of tables, edit mode, and current editing table
    const [tables, setTables] = useState<Table[]>(initialTables);
    const [editMode, setEditMode] = useState<boolean>(false);
    const [editingTableId, setEditingTableId] = useState<string | null>(null);
    const [newTitle, setNewTitle] = useState<string>('');
    const [nameError, setNameError] = useState<boolean>(false);

    // Function to add a new table
    const addTable = () => {
        if (newTitle.trim().length > 14) {
            setNameError(true);
            return;
        }
        const maxId = tables.reduce(
            (max, table) => Math.max(max, parseInt(table.id)),
            0,
        );
        const newTableNumber = maxId + 1;
        const title =
            newTitle.trim().length === 0
                ? `Table ${newTableNumber}`
                : newTitle.trim();

        const newTable: Table = {
            id: newTableNumber.toString(),
            title,
            isOccupied: false,
        };
        setTables((prevTables) => [...prevTables, newTable]);
        setNewTitle(''); // Reset the new title after adding
        setNameError(false); // Reset error after successful add
    };

    // Function to toggle edit mode
    const toggleEditMode = () => {
        setEditMode((prevEditMode) => !prevEditMode);
        if (editMode) {
            setEditingTableId(null);
            setNewTitle('');
            setNameError(false); // Reset error when exiting edit mode
        }
    };

    // Function to delete a table by id
    const deleteTable = (id: string) => {
        setTables((prevTables) =>
            prevTables.filter((table) => table.id !== id),
        );
    };

    // Function to toggle the isOccupied status of a table
    const toggleOccupiedStatus = (id: string) => {
        if (editMode) {
            setTables((prevTables) =>
                prevTables.map((table) =>
                    table.id === id
                        ? { ...table, isOccupied: !table.isOccupied }
                        : table,
                ),
            );
        }
    };

    // Function to handle renaming a table
    const handleRename = () => {
        if (newTitle.trim().length > 14) {
            setNameError(true);
            return;
        }
        if (editingTableId !== null) {
            setTables((prevTables) =>
                prevTables.map((table) =>
                    table.id === editingTableId
                        ? { ...table, title: newTitle.trim() }
                        : table,
                ),
            );
            setEditingTableId(null);
            setNewTitle('');
            setNameError(false); // Reset error after successful rename
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen py-10 flex flex-col items-center">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-6 text-center">Tables</h1>
                <div className="flex space-x-4 mb-6">
                    <input
                        type="text"
                        value={newTitle}
                        onChange={(e) => {
                            setNewTitle(e.target.value);
                            if (e.target.value.length <= 14) {
                                setNameError(false);
                            }
                        }}
                        className={`border ${newTitle.length > 14 ? 'border-red-500' : 'border-gray-300'} p-2 rounded focus:outline-none`}
                        placeholder="Enter table title"
                        disabled={editMode} // Disable input in edit mode
                    />
                    <button
                        onClick={addTable}
                        disabled={editMode}
                        className={`bg-cyan-400 text-white font-bold py-2 px-4 rounded hover:bg-cyan-500 focus:outline-none ${
                            editMode ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                    >
                        + Add Table
                    </button>
                    <button
                        onClick={toggleEditMode}
                        className={`font-bold py-2 px-4 rounded text-white ${
                            editMode
                                ? 'bg-green-500 hover:bg-green-600'
                                : 'bg-yellow-400 hover:bg-yellow-500'
                        }`}
                    >
                        {editMode ? 'Done' : 'Edit'}
                    </button>
                </div>
                {nameError && (
                    <p className="text-red-500 mb-4">
                        Table name must not exceed 14 characters.
                    </p>
                )}
                {editMode && editingTableId !== null && (
                    <div className="mb-6 flex items-center">
                        <input
                            type="text"
                            value={newTitle}
                            onChange={(e) => {
                                setNewTitle(e.target.value);
                                if (e.target.value.length <= 14) {
                                    setNameError(false);
                                }
                            }}
                            className={`border ${
                                newTitle.length > 14
                                    ? 'border-red-500'
                                    : 'border-gray-300'
                            } p-2 rounded focus:outline-none`}
                            placeholder="Enter new title"
                        />
                        <button
                            onClick={handleRename}
                            disabled={newTitle.length > 14}
                            className="ml-4 bg-cyan-400 text-white font-bold py-2 px-4 rounded hover:bg-cyan-500"
                        >
                            Rename
                        </button>
                    </div>
                )}
                <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                    {tables.map((table) => (
                        <div key={table.id} className="relative">
                            <TableCard
                                title={table.title}
                                isOccupied={table.isOccupied}
                                onCircleClick={() => {
                                    if (editMode) {
                                        toggleOccupiedStatus(table.id);
                                    }
                                }}
                                onTitleClick={() => {
                                    if (editMode) {
                                        setEditingTableId(table.id);
                                        setNewTitle(table.title);
                                    }
                                }}
                            />
                            {editMode && (
                                <button
                                    onClick={() => deleteTable(table.id)}
                                    className="absolute top-2 right-2 bg-red-600 text-white rounded-full h-6 w-6 flex items-center justify-center hover:bg-red-800"
                                >
                                    X
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
