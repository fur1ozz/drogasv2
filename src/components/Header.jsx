import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {useDarkMode} from "../utils/HeaderUtils";

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkMode, toggleDarkMode] = useDarkMode();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <header className={`hidden md:block p-4 top-0 w-full fixed z-20 dark:bg-[#212527]/20 bg-gray-100/20 `}>
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-6">
                        <Link
                            to="/Link1"
                            className={`text-[#81294f] hover:text-[#6d2143] dark:text-[#e7c02a] dark:hover:text-[#cbaa29]`}
                        >
                            Link 1
                        </Link>
                        <Link
                            to="/Link2"
                            className={`text-[#81294f] hover:text-[#6d2143] dark:text-[#e7c02a] dark:hover:text-[#cbaa29]`}
                        >
                            Link 2
                        </Link>
                        <Link
                            to="/Link3"
                            className={`text-[#81294f] hover:text-[#6d2143] dark:text-[#e7c02a] dark:hover:text-[#cbaa29]`}
                        >
                            Shops
                        </Link>
                    </div>

                    <Link
                        to="/home"
                        className={`text-[#902e59] dark:text-[#fad02e] text-2xl font-bold uppercase`}
                    >
                        Drogas
                    </Link>

                    <div className="flex items-center space-x-6">
                        <button className="text-[#81294f] hover:text-[#6d2143] dark:text-[#e7c02a] dark:hover:text-[#cbaa29]" onClick={toggleDarkMode}>
                            {isDarkMode === "dark" ? (
                                <div className="flex">
                                    <div>Dark mode </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                    </svg>
                                </div>
                            ) : (
                                <div className="flex">
                                    <div>Light mode </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                    </svg>
                                </div>
                            )}
                        </button>
                        <Link
                            to="/register"
                            className={`text-[#81294f] hover:text-[#6d2143] dark:text-[#e7c02a] dark:hover:text-[#cbaa29]`}
                        >
                            About
                        </Link>
                        <Link
                            to="/Login"
                            className={`text-[#81294f] hover:text-[#6d2143] dark:text-[#e7c02a] dark:hover:text-[#cbaa29]`}
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </header>

            <header className={`block md:hidden p-4 top-0 w-full sticky z-20 dark:bg-[#16191c] bg-gray-100`}>
                <div className="container mx-auto flex justify-between items-center">
                    <div>
                        <button
                            className={`focus:outline-none text-cyan-500 hover:text-cyan-600 dark:text-[#fad02e] dark:hover:text-[#cbaa29]`}
                            onClick={toggleMobileMenu}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>

                    <div className={`text-cyan-500 dark:text-[#fad02e] text-2xl font-bold uppercase`}>
                        Dogas
                    </div>
                </div>
            </header>

            {isMobileMenuOpen && (
                <div className={`md:hidden fixed top-16 left-0 w-full h-full z-10`}>
                    <nav className="flex flex-col items-center pt-5">
                        <Link
                            to="/Login"
                            className={`text-cyan-500 hover:text-cyan-600 dark:text-[#212527] dark:hover:text-[#cbaa29]`}
                        >
                            Login
                        </Link>
                    </nav>
                </div>
            )}
        </>
    );
}

export default Header;
