"use client";
import {signIn} from "next-auth/react";
import Link from "next/link";
import {useState} from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);
  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);
    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {'Content-Type': 'application/json'},
    });
    if (response.ok) {
      setUserCreated(true);
      
    }
    else {
      setError(true);
    }
    setCreatingUser(false);
  }
  return (
    <div className="font-[sans-serif] text-[#333]">
      <div className="flex fle-col mt-20 mb-36 h-max justify-center py-6 px-4">
        <div className="flex justify-center  max-w-6xl w-full">
          <form className="space-y-6 max-w-md  max-md:mx-auto w-full" onSubmit={handleFormSubmit}>
            <h3 className="text-5xl text-center font-extrabold mb-8 max-md:text-center">Sign up</h3>
            {userCreated && (
              <div className="my-4 text-center">
                User created.<br />
                Now you can{' '}
                <Link className="underline" href={'/login'}>Login &raquo;</Link>
              </div>
            )}
            {error && (
              <div className="my-4 text-center">
                An error has occurred.
                Please try again later
              </div>
            )}
            <div>
              <input name="email" type="email" className="bg-gray-100 w-full text-sm px-4 py-3.5 disabled:bg-gray-300 disabled:cursor-not-allowed rounded-xl outline-primary" placeholder="Email address" value={email} onChange={(ev) => setEmail(ev.target.value)} disabled={creatingUser} />
            </div>
            <div>
              <input name="password" type="password" className="bg-gray-100 disabled:bg-gray-300 disabled:cursor-not-allowed w-full text-sm px-4 py-3.5 rounded-xl outline-primary" placeholder="Password" value={password} onChange={(ev) => setPassword(ev.target.value)} disabled={creatingUser} />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-3 block text-sm">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="jajvascript:void(0);" className="text-primary hover:text-primary">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div className="!mt-10">
              <button type="submit" className="w-full shadow-xl py-2.5 px-4 disabled:cursor-not-allowed disabled:bg-gray-300 font-semibold rounded-xl text-white bg-primary hover:bg-red-600 focus:outline-none" disabled={creatingUser}>
                Register
              </button>
            </div>
            <p className="my-10 text-sm text-gray-400 text-center">or continue with</p>
            <div className="space-x-6 flex justify-center">
              <button type="button" className="flex  justify-center gap-7 rounded-xl text-black w-full  py-2.5 px-4 font-semibold border-[1px] border-gray-400 items-center outline-primary hover:bg-primary hover:text-white focus:outline-red-800 h-max" onClick={() => signIn("google", { callbackUrl: "/" })}>
                <img className="h-7" src="/google.png" alt="" /> Login with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


