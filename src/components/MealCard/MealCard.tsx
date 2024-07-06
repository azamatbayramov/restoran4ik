// components/MealCard.tsx
import Image from 'next/image';
import React from "react";

interface MealCardProps {
    imageSrc: string;
    title: string;
    price: string;
}

const MealCard: React.FC<MealCardProps> = ({ imageSrc, title, price }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img className="w-full" src={imageSrc} alt={title} width={400} height={300} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">${price}</p>
            </div>
        </div>
    );
};

export default MealCard;
