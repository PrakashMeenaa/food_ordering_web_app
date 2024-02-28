"use client"
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation';
import React, { useState } from 'react'

const page = () => {
  const session = useSession();
  const status = session?.status;
  console.log(session);
  let FirstName;
  let LastName;
  
  let userData;
  if (status == 'authenticated') {
    userData = session.data?.user;
    let Name = userData?.name || userData?.email;
    let userName = Name.toUpperCase()
    let fullName = userName.split(' ')
    FirstName=fullName[0],
    LastName =fullName[fullName.length - 1];
  }
  

  if (status == 'loading') {
    return "loading..."
  }
  if (status == "unauthenticated") {
    return redirect("/login")
  }

  return (
    <div className='mx-auto w-1/2 mt-10'>
      <div className='flex flex-col justify-center items-center object-center gap-y-2  mb-10'>
      <img className="rounded-full h-44 w-44 object-cover" src="/profile.jpeg" alt="" />
      <button className='text-blue-500'>Edit</button>
      </div>
      <form>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">First name"</label>
            <input type="text" id="first_name" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={FirstName} placeholder="First Name" />
          </div>
          <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 ">Last name"</label>
            <input type="text" id="last_name" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={LastName} placeholder="Last Name"  />
          </div>

          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Phone number</label>
            <input type="tel" id="phone" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      " placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
            <input type="tel" id="phone" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="123-45-678" value={userData.email} disabled/>
          </div>

        </div>
        <div className="mb-6">
          <label htmlFor="Address" className="block mb-2 text-sm font-medium text-gray-900 ">Address</label>
          <input type="Address" id="Address" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Your Address" />
        </div>

        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-white focus:ring-3 focus:ring-blue-300    " />
          </div>
          <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 ">I agree with the <a href="#" className="text-blue-600 hover:underline ">terms and conditions</a>.</label>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  ">Submit</button>
      </form>

    </div>
  )
}

export default page
