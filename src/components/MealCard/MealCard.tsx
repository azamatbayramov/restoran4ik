import React from "react";

interface MealCardProps {
    imageSrc: string;
    title: string;
    price: string;
    available: boolean;
}

const MealCard: React.FC<MealCardProps> = ({ imageSrc, title, price, available }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <div className="relative w-full" style={{ paddingTop: '75%' }}> {}
                <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src={imageSrc}
                    alt={title}
                />
            </div>
            <div className="px-6 py-4 flex items-center justify-between">
                <div className="flex-1">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base flex justify-between">
                        ${price}
                        <span
                            className={`ml-2 w-3 h-3 rounded-full inline-block ${available ? 'bg-green-500' : 'bg-red-500'}`}
                            aria-label={available ? 'Available' : 'Not Available'}
                        />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MealCard;
