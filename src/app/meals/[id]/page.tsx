import MealDetail from '../../../components/MealDetail/MealDetail';
import { meals } from '@/data/meals';

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

    return <MealDetail mealId={mealId} />;
};

export default MealDetailPage;
