import MealCard from '@/components/MealCard/MealCard';
import { meals } from '@/data/meals';

const Page: React.FC = () => {
  return (
    <div className="container py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Meals</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {meals.map((meal) => (
          <MealCard
            key={meal.id}
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
