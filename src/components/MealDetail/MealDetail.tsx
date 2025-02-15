'use client';

import { useEffect, useState } from 'react';
import { Meal } from '@/types/meal';
import { getMealById } from '@/firebase/entities/meals';

interface MealDetailProps {
    mealId: string;
}

const MealDetail: React.FC<MealDetailProps> = ({ mealId }) => {
    const [meal, setMeal] = useState<Meal | null>(null);

    useEffect(() => {
        getMealById(mealId).then((meal) => {
            setMeal(meal);
        });
    }, [mealId]);

    if (!meal) return <div>Loading...</div>;

    const mainStyle = {
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        minHeight: '100vh', // Full viewport height
        backgroundColor: '#f8f8f8', // Light background color
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
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#ff6600', // Orange background for header
        padding: '10px',
        borderRadius: '8px', // Rounded corners
        marginBottom: '20px', // Space below the header
    };

    const priceStyle = {
        fontSize: '20px',
        color: '#ff6600',
        fontWeight: 'bold',
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
            </div>
        </div>
    );
};

export default MealDetail;
