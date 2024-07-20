import React from "react";
import Link from 'next/link';

interface MealCardProps {
    id: string;
    imageSrc: string;
    title: string;
    price: string;
    available: boolean;
}

const MealCard: React.FC<MealCardProps> = ({id, imageSrc, title, price, available }) => {
    return (
        <div className="max-w-lg w-full rounded overflow-hidden shadow-lg bg-white">
            <div className="relative w-full" style={{ paddingTop: '85%' }}> {}
                <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src={imageSrc}
                    alt={title}
                />
            </div>
            <div className="px-6 py-4 flex items-center justify-between">
                <div className="flex-1">
                    <div className="font-bold text-xl mb-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {title}
                    </div>
                    <p className="text-gray-700 text-base flex justify-between">
                        ${price}
                        <span
                            className={`ml-2 w-3 h-3 rounded-full inline-block ${available ? 'bg-green-500' : 'bg-red-500'}`}
                            aria-label={available ? 'Available' : 'Not Available'}
                        />
                    </p>
                </div>
            </div>
            <div className="mt-auto mb-2 ml-6 flex justify-left">
                <Link href={`/meals/${id}`}>
                    <p className="text-cyan-400 hover:underline font-semibold">View Details</p>
                </Link>
            </div>
        </div>
    );
}

export default MealCard;
