// src/pages/index.tsx
import MealCard from "@/components/MealCard/MealCard";

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

const Page: React.FC = () => {
  return (
    <div className="container py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Meals</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {meals.map((meal, index) => (
          <MealCard
            key={index}
            id={meal.id}
            imageSrc={meal.imageSrc}
            title={meal.title}
            price={meal.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
