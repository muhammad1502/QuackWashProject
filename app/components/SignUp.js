// components/SignUp.js
"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

// SignUp component takes a prop for navigating back to the home page
export default function SignUp({ onBackToHome, onLoginClick }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log('Signing up with:', { name, email, password });
    // Add your sign-up logic here
  };

  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f0f8ff] p-4 font-sans">
      <motion.div
        initial="offscreen"
        animate="onscreen"
        variants={cardVariants}
        className="w-full max-w-md p-8 space-y-6 bg-white rounded-3xl shadow-lg border border-gray-200"
      >
        <div className="flex flex-col items-center">
          <button onClick={onBackToHome} className="focus:outline-none mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#147942] hover:text-green-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.172 16.732a1.5 1.5 0 01-1.42 1.04H8.248a1.5 1.5 0 01-1.42-1.04l-1.04-4.85a1.5 1.5 0 01.4-1.34L11.5 6.78a1.5 1.5 0 012.302.261l5.421 9.539a1.5 1.5 0 01-.4 1.34l-1.04 1.812zm-3.048-1.748a.75.75 0 01-1.124-.955l4.85-8.527a.75.75 0 011.124.955l-4.85 8.527z"/>
            </svg>
          </button>
          <h2 className="text-3xl font-bold text-center text-[#147942]">Join the QuackWash Family!</h2>
          <p className="text-center text-gray-600">Create your account to book your first cleaning.</p>
        </div>

        <form className="space-y-4" onSubmit={handleSignUp}>
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className="appearance-none rounded-full relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#147942] focus:border-[#147942] focus:z-10 sm:text-sm transition duration-300"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="appearance-none rounded-full relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#147942] focus:border-[#147942] focus:z-10 sm:text-sm transition duration-300"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="appearance-none rounded-full relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#147942] focus:border-[#147942] focus:z-10 sm:text-sm transition duration-300"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-[#147942] hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#147942] transition duration-300"
          >
            Create Account
          </motion.button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a
            href="#"
            onClick={onLoginClick}
            className="font-medium text-[#147942] hover:text-green-700"
          >
            Log in
          </a>
        </p>
      </motion.div>
    </div>
  );
}