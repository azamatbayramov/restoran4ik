import React from "react";

interface TableCardProps {
  title: string;
  isOccupied: boolean;
}

const TableCard: React.FC<TableCardProps> = ({ title, isOccupied }) => {
  return (
    <div className="w-72 h-32 flex justify-center items-center bg-gray-300 rounded relative shadow-md">
      <div className="text-2xl font-semibold">{title}</div>
      <div
        className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full ${
          isOccupied ? "bg-yellow-300" : "bg-green-500"
        }`}
      ></div>
    </div>
  );
};

export default TableCard;