'use client';
import React, { useState } from 'react';
import MealCard from '@/components/MealCard/MealCard';
import { Dish } from '@/types/dish';

const initialMeals: Dish[] = [
    {
        id: '1',
        image: 'https://via.placeholder.com/400x300',
        name: 'Spaghetti Carbonara',
        price: 14.99,
        available: false,
        tags: ['Italian', 'Pasta'],
        description:
            'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
    },
    {
        id: '2',
        image: 'https://via.placeholder.com/400x300',
        name: 'Chicken Parmesan',
        price: 16.99,
        available: true,
        tags: ['Italian', 'Chicken'],
        description:
            'Breaded chicken cutlets topped with marinara sauce and melted cheese.',
    },
    {
        id: '3',
        image: 'https://via.placeholder.com/400x300',
        name: 'Caesar Salad',
        price: 12.99,
        available: true,
        tags: ['Salad', 'Healthy'],
        description:
            'A fresh salad with romaine lettuce, croutons, and Caesar dressing.',
    },
];

interface NewDish {
    image: string | null;
    name: string;
    price: number;
    available: boolean;
    tags: string[];
    description: string;
    imageFile: File | null;
}

const Page: React.FC = () => {
    const [meals, setMeals] = useState<Dish[]>(initialMeals);
    const [newDish, setNewDish] = useState<NewDish>({
        image: null,
        name: '',
        price: 0,
        available: false,
        tags: [],
        description: '',
        imageFile: null,
    });
    const [isFormVisible, setFormVisible] = useState<boolean>(false);

    // State for validation errors
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    // Function to validate form
    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        if (!newDish.name.trim()) {
            newErrors.name = 'Name is required.';
        }

        if (newDish.price <= 0) {
            newErrors.price = 'Price must be greater than zero.';
        }

        if (!newDish.description.trim()) {
            newErrors.description = 'Description is required.';
        }

        if (newDish.tags.length === 0) {
            newErrors.tags = 'At least one tag is required.';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleAddDish = () => {
        if (validateForm()) {
            // Data for DB (adding new meal). imageFile - uploaded file, image - just temp URL
            const dishToAdd: Dish = {
                ...newDish,
                image: newDish.imageFile
                    ? URL.createObjectURL(newDish.imageFile)
                    : (newDish.image ?? 'https://via.placeholder.com/400x300'),
                price: parseFloat(newDish.price.toString()),
                id: (meals.length + 1).toString(),
            };

            setMeals([...meals, dishToAdd]);
            setNewDish({
                image: null,
                name: '',
                price: 0,
                available: false,
                tags: [],
                description: '',
                imageFile: null,
            });
            setFormVisible(false);
            setErrors({});
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        if (file) {
            setNewDish({
                ...newDish,
                imageFile: file,
                image: URL.createObjectURL(file),
            });
        } else {
            setNewDish({
                ...newDish,
                imageFile: null,
                image: null,
            });
        }
    };

    return (
        <div className="container py-10 px-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Meals</h1>

            <div className="ml-12 mb-6 flex flex-col items-start">
                <button
                    onClick={() => setFormVisible(!isFormVisible)}
                    className="bg-cyan-400 font-bold text-white py-2 px-4 rounded hover:bg-cyan-500 mb-4"
                >
                    {isFormVisible ? 'Cancel' : '+ Add dish'}
                </button>

                {isFormVisible && (
                    <div className="flex flex-col items-start">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="mb-4"
                        />
                        <input
                            type="text"
                            placeholder="Dish name"
                            value={newDish.name}
                            onChange={(e) =>
                                setNewDish({ ...newDish, name: e.target.value })
                            }
                            className={`border py-2 px-4 mb-2 rounded w-full max-w-xs ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.name && (
                            <p className="text-red-500 mb-2">{errors.name}</p>
                        )}

                        <input
                            type="number"
                            placeholder="Price"
                            value={newDish.price}
                            onChange={(e) =>
                                setNewDish({
                                    ...newDish,
                                    price: parseFloat(e.target.value),
                                })
                            }
                            className={`border py-2 px-4 mb-2 rounded w-full max-w-xs ${errors.price ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.price && (
                            <p className="text-red-500 mb-2">{errors.price}</p>
                        )}

                        <input
                            type="text"
                            placeholder="Tags (comma separated)"
                            value={newDish.tags.join(', ')}
                            onChange={(e) =>
                                setNewDish({
                                    ...newDish,
                                    tags: e.target.value
                                        .split(',')
                                        .map((tag) => tag.trim()),
                                })
                            }
                            className={`border py-2 px-4 mb-2 rounded w-full max-w-xs ${errors.tags ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.tags && (
                            <p className="text-red-500 mb-2">{errors.tags}</p>
                        )}

                        <textarea
                            placeholder="Description"
                            value={newDish.description}
                            onChange={(e) =>
                                setNewDish({
                                    ...newDish,
                                    description: e.target.value,
                                })
                            }
                            className={`border py-2 px-4 mb-2 rounded w-full max-w-xs ${errors.description ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.description && (
                            <p className="text-red-500 mb-2">
                                {errors.description}
                            </p>
                        )}

                        <label className="inline-flex items-center mb-2">
                            <input
                                type="checkbox"
                                checked={newDish.available}
                                onChange={(e) =>
                                    setNewDish({
                                        ...newDish,
                                        available: e.target.checked,
                                    })
                                }
                                className="form-checkbox"
                            />
                            <span className="ml-2">Available</span>
                        </label>

                        <button
                            onClick={handleAddDish}
                            className="bg-cyan-400 font-bold text-white py-2 px-4 rounded hover:bg-cyan-500"
                        >
                            + Add dish
                        </button>
                    </div>
                )}
            </div>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-12">
                {meals.map((dish) => (
                    <div key={dish.id} className="max-w-xs w-full">
                        <MealCard
                            id={dish.id}
                            imageSrc={dish.image}
                            title={dish.name}
                            price={dish.price.toFixed(2)}
                            available={dish.available}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;
