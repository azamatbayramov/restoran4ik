'use client';
import { useEffect, useState } from 'react';
import { Meal, NewMeal } from '@/types/meal';
import { getMealById, updateMeal } from '@/firebase/entities/meals';
import { useRouter } from 'next/navigation';

interface MealDetailProps {
    mealId: string;
}

const MealDetail: React.FC<MealDetailProps> = ({ mealId }) => {
    const [meal, setMeal] = useState<Meal | null>(null);
    const [isFormVisible, setFormVisible] = useState<boolean>(false);
    const router = useRouter();

    const [newDish, setNewDish] = useState<NewMeal>({
        image: null,
        title: '',
        price: 0,
        available: false,
        tags: [],
        description: '',
        imageFile: null,
        composition: '',
        bju: { protein: 0, fat: 0, carbs: 0 },
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        getMealById(mealId).then((meal) => {
            setMeal(meal);
            if (meal) {
                setNewDish({
                    image: meal.imageSrc,
                    title: meal.title,
                    price: meal.price,
                    available: meal.available,
                    tags: meal.tags,
                    description: meal.description,
                    imageFile: null,
                    composition: meal.composition,
                    bju: meal.bju,
                });
            }
        });
    }, [mealId]);

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        if (!newDish.title.trim()) {
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

    const handleUpdateDish = () => {
        if (validateForm()) {
            const updatedMeal: Meal = {
                ...meal,
                title: newDish.title,
                price: parseFloat(newDish.price.toString()),
                available: newDish.available,
                tags: newDish.tags,
                description: newDish.description,
                composition: newDish.composition,
                bju: newDish.bju,
                imageSrc: newDish.imageFile
                    ? URL.createObjectURL(newDish.imageFile)
                    : newDish.image ?? meal.imageSrc,
            };

            setMeal(updatedMeal);
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

    const handleDeleteMeal = () => {
        setMeal(null);
        router.push('/meals');
    };

    if (!meal) return <div>Loading...</div>;

    const mainStyle = {
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        minHeight: '100vh', // Full viewport height
        backgroundColor: '#f8f8f8', // Light background color
        position: 'relative' as 'relative',
    };

    const containerStyle = {
        display: 'flex',
        border: '1px solid #ddd',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        maxWidth: '800px',
        width: '100%',
        gap: '20px', // Space between image and details
    };

    const imageStyle = {
        width: '300px',
        height: '300px',
        backgroundColor: '#e0e0e0',
        borderRadius: '8px',
        marginRight: '20px',
    };

    const detailsStyle = {
        flex: 1,
    };

    const headerStyle = {
        fontSize: '24px',
        fontWeight: 'bold' as 'bold',
        color: '#fff',
        backgroundColor: '#ff6600', // Orange background for header
        padding: '10px',
        borderRadius: '8px', // Rounded corners
        marginBottom: '20px', // Space below the header
    };

    const priceStyle = {
        fontSize: '20px',
        color: '#ff6600',
        fontWeight: 'bold' as 'bold',
    };

    const compositionStyle = {
        fontSize: '16px',
        margin: '10px 0',
    };

    const descriptionContainerStyle = {
        backgroundColor: '#4CAF50', // Green background
        color: '#fff', // White text
        padding: '10px',
        borderRadius: '8px', // Rounded corners
        fontSize: '16px',
        margin: '10px 0',
    };

    const editButtonStyle = {
        position: 'absolute' as 'absolute', // Use absolute positioning
        top: '10px',
        right: '10px',
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '8px 12px',
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer',
    };

    const deleteButtonStyle = {
        position: 'absolute' as 'absolute',
        top: '10px',
        right: '90px',
        backgroundColor: '#dc3545',
        color: '#fff',
        padding: '8px 12px',
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer',
    };

    return (
        <div style={mainStyle}>
            <div style={containerStyle}>
                <img
                    style={imageStyle}
                    src={meal.imageSrc || 'https://via.placeholder.com/300'}
                    alt={meal.title}
                />
                <div style={detailsStyle}>
                    <div style={headerStyle}>{meal.title}</div>{' '}
                    {/* Dish name in colored block */}
                    <p style={priceStyle}>Price: ${meal.price}</p>
                    <p style={compositionStyle}>
                        Composition: {meal.composition}
                    </p>
                    <div style={descriptionContainerStyle}>
                        Description: {meal.description}
                    </div>
                </div>
                <button
                    style={editButtonStyle}
                    onClick={() => setFormVisible(!isFormVisible)}
                >
                    {isFormVisible ? 'Cancel' : 'Edit'}
                </button>
                <button
                    style={deleteButtonStyle}
                    onClick={handleDeleteMeal}
                >
                    Delete
                </button>
            </div>

            {isFormVisible && (
                <div className="flex flex-col items-start mt-4">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="mb-4"
                    />
                    <input
                        type="text"
                        placeholder="Meal name"
                        value={newDish.title}
                        onChange={(e) =>
                            setNewDish({
                                ...newDish,
                                title: e.target.value,
                            })
                        }
                        className={`border py-2 px-4 mb-2 rounded w-full max-w-xs ${
                            errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
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
                        className={`border py-2 px-4 mb-2 rounded w-full max-w-xs ${
                            errors.price ? 'border-red-500' : 'border-gray-300'
                        }`}
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
                        className={`border py-2 px-4 mb-2 rounded w-full max-w-xs ${
                            errors.tags ? 'border-red-500' : 'border-gray-300'
                        }`}
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
                        className={`border py-2 px-4 mb-2 rounded w-full max-w-xs ${
                            errors.description
                                ? 'border-red-500'
                                : 'border-gray-300'
                        }`}
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
                        onClick={handleUpdateDish}
                        className="bg-cyan-400 font-bold text-white py-2 px-4 rounded hover:bg-cyan-500"
                    >
                        Save Changes
                    </button>
                </div>
            )}
        </div>
    );
};

export default MealDetail;
