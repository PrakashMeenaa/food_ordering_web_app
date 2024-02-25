"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser, setLoginUser] = useState(false);

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setLoginUser(true);

    await signIn('credentials', {email, password, callbackUrl: '/'});

    setLoginUser(false);
  }
  return (
    <div className="font-[sans-serif] text-[#333]">
      <div className="flex fle-col mt-20 mb-36 h-max justify-center py-6 px-4">
        <div className="flex justify-center  max-w-6xl w-full">
          <form className="space-y-6 max-w-md  max-md:mx-auto w-full" onSubmit={handleFormSubmit}>
            <h3 className="text-5xl text-center font-extrabold mb-8 max-md:text-center">Sign in</h3>

            <div>
              <input name="email" type="email" className="bg-gray-100 disabled:bg-gray-300 w-full text-sm px-4 py-3.5 rounded-xl outline-primary" placeholder="Email address" value={email} onChange={(ev) => setEmail(ev.target.value)} disabled={loginUser} />
            </div>
            <div>
              <input name="password" type="password" className="bg-gray-100 disabled:bg-gray-300 w-full text-sm px-4 py-3.5 rounded-xl outline-primary" placeholder="Password" value={password} onChange={(ev) => setPassword(ev.target.value)} disabled={loginUser} />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input name="remember-me" type="checkbox" className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-3 block text-sm">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="text-primary hover:text-primary">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div className="!mt-10">
              <button type="submit" className="w-full shadow-xl py-2.5 px-4  font-semibold rounded-xl text-white bg-primary disabled:bg-red-800 hover:bg-red-600 focus:outline-none" disabled={loginUser}>
                Log in
              </button>
            </div>
            <p className="my-10 text-sm text-gray-400 text-center">or continue with</p>
            <div className="space-x-6 flex justify-center">
              <button
                type="button"
                className="flex  justify-center gap-7 rounded-xl text-black w-full  py-2.5 px-4 font-semibold border-[1px] border-gray-400 items-center outline-primary hover:bg-primary hover:text-white focus:outline-red-800 h-max"
                onClick={() => signIn("google", { callbackUrl: "/" })}
              >
                <img className="h-7" src="/google.png" alt="" /> Login with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


