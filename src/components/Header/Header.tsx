    'use client';
    import React from 'react';
    import "boxicons/css/boxicons.min.css";

    const Header: React.FC = () => {
        const toggleMenu = (e: React.MouseEvent) => {
            const menuIcon = e.currentTarget as HTMLElement;
            const menu = document.getElementById('menu-list');

            if (menu) {
                if (menuIcon.classList.contains('bx-menu')) {
                    menuIcon.classList.remove('bx-menu');
                    menuIcon.classList.add('bx-x');
                    menu.classList.add('top-[64px]');
                    menu.classList.add('opacity-100');
                    menu.classList.remove('pl-7');
                    menu.classList.add('pl-4');
                } else {
                    menuIcon.classList.remove('bx-x');
                    menuIcon.classList.add('bx-menu');
                    menu.classList.remove('top-[64px]');
                    menu.classList.remove('opacity-100');
                    menu.classList.remove('pl-4');
                    menu.classList.add('pl-7');
                }
            }
        };

        return (
            <header className="fixed top-0 left-0 w-full h-16 bg-orange-600 shadow md:flex md:items-center md:justify-between z-1000">
                <div className="container flex justify-between items-center h-full px-6">
                    <a href="/" className="text-xl font-bold">
                        Restoran4ik
                    </a>
                    <span className="text-3xl cursor-pointer md:hidden block">
                        <i className="bx bx-menu" onClick={toggleMenu}></i>
                    </span>
                </div>
                <div id="menu-list" className="md:flex md:items-center bg-orange-600 md:z-auto md:static fixed w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-300 z-1000">
                    <a href="/meals" className="block mx-6 my-6 md:my-0 text-white hover:text-gray-300 font-semibold">Meals</a>
                    <a href="/tables" className="block mx-6 my-6 md:my-0 text-white hover:text-gray-300 font-semibold">Tables</a>
                    <a href="#" className="inline-block bg-cyan-400 text-white duration-500 px-6 py-2 mx-6 hover:bg-cyan-500 rounded whitespace-nowrap font-semibold">
                        Log in
                    </a>
                </div>
            </header>
        );
    }

    export default Header;
