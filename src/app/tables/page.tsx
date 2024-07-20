'use client';
import React, { useState } from 'react';
import TableCard from '@/components/TableCard/TableCard';
import { Table } from '@/types/table';
import { addTable, deleteTable, getTableById, getTables, updateTable } from '@/firebase/entities/tables';

const Page: React.FC = () => {
    // State to manage the list of tables, edit mode, and current editing table
    const [tables, setTables] = useState<Table[]>([]);
    const [editMode, setEditMode] = useState<boolean>(false);
    const [editingTableId, setEditingTableId] = useState<string | null>(null);
    const [newTitle, setNewTitle] = useState<string>('');
    const [nameError, setNameError] = useState<boolean>(false);

    getTables().then((tables) => setTables(tables));

    // Function to add a new table
    const addTable1 = () => {
        if (newTitle.trim().length > 14 || newTitle.trim().length === 0) {
            setNameError(true);
            return;
        }

        const title = newTitle.trim();

        const newTable: Table = {
            title,
            isOccupied: false,
        };

        addTable(newTable);

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
    const deleteTableFunc = (id: string) => {
        deleteTable(id);
    };

    // Function to toggle the isOccupied status of a table
    const toggleOccupiedStatus = (id: string) => {
        if (editMode) {
            const table = tables.find((table) => table.id === id);

            updateTable(id, { isOccupied: !table?.isOccupied });
        }
    };

    // Function to handle renaming a table
    const handleRename = () => {
        if (newTitle.trim().length > 14) {
            setNameError(true);
            return;
        }
        if (editingTableId !== null) {
            updateTable(editingTableId, { title: newTitle });

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
                        onClick={addTable1}
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
                                    onClick={() => deleteTableFunc(table.id)}
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
