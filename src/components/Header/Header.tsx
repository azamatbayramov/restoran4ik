import React from "react";

const Header: React.FC = () => {
    return (
    <header className="bg-orange-600 shadow h-16">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center h-full">
            <div className="flex space-x-4">
                <a href="/meals" className="text-white hover:text-gray-200">Meals</a>
                <a href="/tables" className="text-white hover:text-gray-200">Tables</a>
            </div>
            <div>
                <a href="#" className="text-white hover:text-gray-200">Log in</a>
            </div>
        </div>
    </header>
    )
}

export default Header;