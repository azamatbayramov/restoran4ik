// src/components/MealCard.tsx
import Link from 'next/link';

interface MealCardProps {
  id: number;
  imageSrc: string;
  title: string;
  price: string;
}

const MealCard: React.FC<MealCardProps> = ({ id, imageSrc, title, price }) => {
  return (
    <div className="meal-card">
      <img src={imageSrc} alt={title} />
      <h2>{title}</h2>
      <p>Price: ${price}</p>
      <Link href={`/meals/${id}`}>
        <p>View Details</p>
      </Link>
    </div>
  );
};

export default MealCard;
