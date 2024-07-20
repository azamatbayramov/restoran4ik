import MealDetail from '../../../components/MealDetail/MealDetail';
import { getMeals } from '@/firebase/entities/meals';

export async function generateStaticParams() {
    return getMeals().then((meals) => {
        return meals.map((meal) => ({ id: meal.id }));
    });
}

interface MealDetailPageProps {
    params: {
        id: string;
    };
}

const MealDetailPage: React.FC<MealDetailPageProps> = ({ params }) => {
    const { id } = params;

    return <MealDetail mealId={id} />;
};

export default MealDetailPage;
