import { signOut, useSession } from 'next-auth/react';
import React, { useEffect, useRef } from 'react'
import { useState } from "react";
const ProfileAvatar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const session = useSession();

    const userData = session.data?.user;
    let Name = userData?.name || userData?.email;
    let userName = Name.toUpperCase()
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
   
    let menuRef = useRef();

    useEffect(() => {
      let handler = (e)=>{
        if(!menuRef.current.contains(e.target)){
          setIsMenuOpen(false);
          console.log(menuRef.current);
        }      
      };
  
      document.addEventListener("mousedown", handler);
      
  
      return() =>{
        document.removeEventListener("mousedown", handler);
      }
  
    });
    return (
        <div className='relative' ref={menuRef}>

            <img id="avatarButton" type="button" onClick={toggleMenu} className={`w-10 h-10 rounded-full cursor-pointer`} src="/profile.png" alt="User dropdown" />


            <div id="userDropdown" className={`z-10 ${isMenuOpen ? "block" : "hidden"} absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 -translate-x-[80%]`}>
                <div className="px-4 py-3 text-sm text-gray-900 ">
                    <div>{userName}</div>
                </div>
                <ul className="py-2 text-sm text-gray-700 " aria-labelledby="avatarButton">
                    <li>
                        <a href="/profile" className="block px-4 py-2 hover:bg-gray-100  ">User Info</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100  ">Order History</a>
                    </li>

                </ul>
                <div className="py-1">
                    <button href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   " onClick={() => signOut()}>Sign out</button>
                </div>
            </div>

        </div>
    )
}

export default ProfileAvatar
