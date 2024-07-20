// src/app/meals/[id]/page.tsx
import MealDetail from '../../../components/MealDetail/MealDetail';

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

export async function generateStaticParams() {
  return meals.map((meal) => ({
    id: meal.id.toString(),
  }));
}

interface MealDetailPageProps {
  params: {
    id: string;
  };
}

const MealDetailPage: React.FC<MealDetailPageProps> = ({ params }) => {
  const { id } = params;
  const mealId = parseInt(id, 10);
  const meal = meals.find((meal) => meal.id === mealId);

  if (!meal) {
    return <div>Meal not found</div>;
  }

  return <MealDetail meal={meal} />;
};

export default MealDetailPage;
