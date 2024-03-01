"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import ProfileAvatar from "./ProfileAvatar";
import { CartContext } from "./CartContext";
import Cart from "./Cart";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const session = useSession();
  const status = session?.status;
  const userData = session.data?.user;
  
  const {addItemToCart, cart}=useContext(CartContext)
  let userName = userData?.name || userData?.email;
  if (userName && userName.includes(' ')) {
    userName = userName.split(' ')[0];
  }
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
        
      }
    };

    document.addEventListener("mousedown", handler);


    return () => {
      document.removeEventListener("mousedown", handler);
    }

  });
  return (
    <nav className="bg-[#c20d0d] sticky top-0 z-20" ref={menuRef}>
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <a href="/" className="text-white text-3xl font-bold">
          J FOOD
        </a>{" "}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? (
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
        <div className="hidden lg:flex lg:items-center lg:space-x-5">
          <Link href="/" className="text-white hover:text-gray-300 transition duration-300">
            Home
          </Link>
          <a href="/menu" className="text-white hover:text-gray-300 transition duration-300">
            Menu
          </a>
          <Link href="/about" className="text-white hover:text-gray-300 transition duration-300">
            About Us
          </Link>
          <Link href="/contactus" className="text-white hover:text-gray-300 transition duration-300">
            Contact
          </Link>


          {status == "authenticated" && (
            <>
              <ProfileAvatar />

            </>
          )}

          {status == "unauthenticated" && (
            <>
              <Link href="/login" className="px-4 py-1.5 bg-white rounded-2xl text-[#c20d0d] font-bold ">
                Login
              </Link>
              <Link href="/register" className="px-4 py-1.5 bg-white rounded-2xl text-[#c20d0d] font-bold ">
                Register
              </Link>
            </>
          )}
          <Link href='/cart'>
            <Cart/>
          </Link>

        </div>
      </div>

      <div id="mobile-menu" className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} bg-gray-900`}>
        <Link href="/" className="block px-4 py-2 text-white hover:bg-gray-800 transition duration-300">
          Home
        </Link>
        <a href="/menu" className="block px-4 py-2 text-white hover:bg-gray-800 transition duration-300">
          Menu
        </a>
        {status == "authenticated" && (
          <button className="block px-4 py-2 text-white hover:bg-gray-800 transition duration-300" onClick={() => signOut()}>
            LogOut
          </button>)}
        {status == "unauthenticated" && (
          <>
            <Link href="/login" className="block px-4 py-2 text-white hover:bg-gray-800 transition duration-300">
              Login
            </Link>
            <Link href="/register" className="block px-4 py-2 text-white hover:bg-gray-800 transition duration-300 ">
              Register
            </Link>
          </>
        )}
        <Link className='text-white flex flex-row gap-x-2 px-4 py-2 hover:bg-gray-800 transition duration-300 items-center ' href='/cart'> Cart
          <svg className="w-4 h-4 text-slate-200 hover:text-gray-300 transition duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.3L19 7H7.3" />
          </svg>
        </Link>
        <Link href="/about" className="block px-4 py-2 text-white hover:bg-gray-800 transition duration-300">
          About Us
        </Link>
        <Link href="/contactus" className="block px-4 py-2 text-white hover:bg-gray-800 transition duration-300">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Header;
