// src/components/MealDetail.tsx
'use client';

import { useEffect, useState } from 'react';
import styles from '../../styles/MealPage.module.css'; // Adjust the path as necessary

interface Meal {
  id: number;
  title: string;
  price: string;
  imageSrc: string;
}

const meals = [
  {
    id: 1,
    imageSrc: 'https://via.placeholder.com/400x300',
    title: 'Spaghetti Carbonara',
    price: '14.99',
  },
  {
    id: 2,
    imageSrc: 'https://via.placeholder.com/400x300',
    title: 'Chicken Parmesan',
    price: '16.99',
  },
  {
    id: 3,
    imageSrc: 'https://via.placeholder.com/400x300',
    title: 'Caesar Salad',
    price: '12.99',
  },
];

interface MealDetailProps {
  meal: Meal;
}

const MealDetail: React.FC<MealDetailProps> = ({ meal }) => {
  const [fetchedMeal, setFetchedMeal] = useState<Meal | null>(meal);

  useEffect(() => {
    if (!fetchedMeal) {
      const fetched = meals.find((m) => m.id === meal.id);
      if (fetched) {
        setFetchedMeal(fetched);
      }
    }
  }, [fetchedMeal, meal.id]);

  if (!fetchedMeal) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <h1>{fetchedMeal.title}</h1>
      <img src={fetchedMeal.imageSrc} alt={fetchedMeal.title} />
      <p>Price: ${fetchedMeal.price}</p>
    </div>
  );
};

export default MealDetail;
