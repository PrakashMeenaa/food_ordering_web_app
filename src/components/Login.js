"use client"
import { useState } from 'react';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle sign-in logic here, e.g., sending credentials to an API
        console.log('Email:', email);
        console.log('Password:', password);
    };

    const handleGoogleSignIn = () => {
        // Implement Google sign-in logic here
        console.log('Signing in with Google...');
    };

    return (
        <div className="max-w-md mx-auto mt-8 px-4">
            <h2 className="text-3xl font-bold mb-4 text-center">Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
                </div>
                <div className="mb-4">
                    <button type="submit" className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Sign In</button>
                </div>
            </form>
            <div className="text-center">
                <p className="text-gray-700 mb-2">Or sign in with</p>
                <button onClick={handleGoogleSignIn} className="w-full bg-white text-gray-800 py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
                    <img src="/google-icon.svg" alt="Google Icon" className="w-5 h-5 inline-block mr-2" />
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default SignIn;
