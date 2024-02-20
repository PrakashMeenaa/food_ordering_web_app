"use client"
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-[#c20d0d] sticky top-0 z-10">
            <div className="container mx-auto flex justify-between items-center px-4 py-3">
                {/* Logo */}
                <a href="#" className="text-white text-3xl font-bold">J FOOD</a>

                {/* Mobile Menu Button */}
                <div className="block lg:hidden">
                    <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
                        {isMobileMenuOpen ? (
                            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M6 6h8v1H6V6zm0 3h8v1H6V9zm0 4h8v1H6v-1z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 9h14v2H3V9zm0-4h14v2H3V5zm0 8h14v2H3v-2z" clipRule="evenodd" />
                            </svg>
                        )}
                    </button>
                </div>
                
                    {/* Desktop Menu */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-6">
                        <Link href="/" className="text-white hover:text-gray-300 transition duration-300">Home</Link>
                        <a href="#" className="text-white hover:text-gray-300 transition duration-300">Menu</a>
                        <a href="#" className="text-white hover:text-gray-300 transition duration-300">About Us</a>
                        <a href="#" className="text-white hover:text-gray-300 transition duration-300">Contact</a>
                        <a href="#" className="text-white hover:text-gray-300 transition duration-300">Profile info</a>
                        <Link href="/login" className='px-4 py-3 bg-white rounded-md text-[#c20d0d] font-bold '>Login</Link>
                        <img src="/cart.svg" alt="" />
                    </div>
                    
                </div>

            

            {/* Mobile Menu */}
            <div id="mobile-menu" className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-gray-900`}>
                <Link href="/" className="block px-4 py-2 text-white hover:bg-gray-800 transition duration-300">Home</Link>
                <a href="#" className="block px-4 py-2 text-white hover:bg-gray-800 transition duration-300">Menu</a>
                <Link href="/login" className="block px-4 py-2 text-white hover:bg-gray-800 transition duration-300">Login</Link>
                <a href="#" className="block px-4 py-2 text-white hover:bg-gray-800 transition duration-300">About Us</a>
                <a href="#" className="block px-4 py-2 text-white hover:bg-gray-800 transition duration-300">Contact</a>
            </div>

        </nav>
    );
};

export default Header;
