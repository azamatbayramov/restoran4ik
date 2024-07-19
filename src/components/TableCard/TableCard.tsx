import React from "react";

interface TableCardProps {
  title: string;
  isOccupied: boolean;
  onCircleClick?: () => void;
  onTitleClick?: () => void;
}

const TableCard: React.FC<TableCardProps> = ({ title, isOccupied, onCircleClick, onTitleClick }) => {
  return (
    <div className="w-72 h-32 flex justify-center items-center bg-gray-300 rounded relative shadow-md">
      <div
        className="text-2xl font-semibold cursor-pointer"
        onClick={onTitleClick}
      >
        {title}
      </div>
      <div
        className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full cursor-pointer ${
          isOccupied ? "bg-yellow-300" : "bg-green-500"
        }`}
        onClick={onCircleClick}
      ></div>
    </div>
  );
};

export default TableCard;
