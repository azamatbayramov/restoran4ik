'use client';

import { useEffect, useState } from 'react';
import { meals } from '../../data/meals';

interface BJU {
  protein: number;
  fat: number;
  carbs: number;
}

interface Meal {
  id: number;
  title: string;
  price: string;
  imageSrc: string;
  composition: string;
  bju: BJU;
  description: string;
}

interface MealDetailProps {
  mealId: number;
}

const MealDetail: React.FC<MealDetailProps> = ({ mealId }) => {
  const [meal, setMeal] = useState<Meal | null>(null);

  useEffect(() => {
    const fetchedMeal = meals.find((m) => m.id === mealId);
    setMeal(fetchedMeal || null);
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
    objectFit: 'cover',
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

  const bjuContainerStyle = {
    display: 'flex',
    gap: '10px',
    margin: '10px 0',
  };

  const bjuItemStyle = {
    backgroundColor: '#ff6600', // Orange background
    color: '#fff', // White text
    width: '100px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px', // Rounded corners
    fontSize: '14px',
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
        <img style={imageStyle} src={meal.imageSrc} alt={meal.title} />
        <div style={detailsStyle}>
          <div style={headerStyle}>{meal.title}</div> {/* Dish name in colored block */}
          <p style={priceStyle}>Price: ${meal.price}</p>
          <p style={compositionStyle}>Composition: {meal.composition}</p>
          <div style={bjuContainerStyle}>
            <div style={bjuItemStyle}>Protein: {meal.bju.protein}g</div>
            <div style={bjuItemStyle}>Fat: {meal.bju.fat}g</div>
            <div style={bjuItemStyle}>Carbs: {meal.bju.carbs}g</div>
          </div>
          <div style={descriptionContainerStyle}>Description: {meal.description}</div>
        </div>
      </div>
    </div>
  );
};

export default MealDetail;
