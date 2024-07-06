// components/TableCard.tsx

interface TableCardProps {
    title: string;
    isOccupied: boolean;
}

const TableCard: React.FC<TableCardProps> = ({ title, isOccupied }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className={`text-base ${isOccupied ? 'text-red-500' : 'text-green-500'}`}>
                {isOccupied ? 'Occupied' : 'Available'}
            </p>
        </div>
    );
};

export default TableCard;
