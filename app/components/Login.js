// components/Login.js
"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Login({ onBackToHome, onSignUpClick }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
    // Add your login logic here
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
        <button onClick={onBackToHome} className="flex items-center space-x-4 mb-4 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#147942]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.026 15.659c-.482.261-1.02.404-1.58.404-.56 0-1.098-.143-1.58-.404-1.637-.886-2.52-2.883-2.52-4.159 0-2.316 2.05-4.2 4.6-4.2s4.6 1.884 4.6 4.2c0 1.276-.883 3.273-2.52 4.159z"/>
          </svg>
        </button>

        <h2 className="text-3xl font-bold text-center text-[#147942]">Welcome Back!</h2>
        <p className="text-center text-gray-600">Login to access your dashboard.</p>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#147942] text-sm"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#147942] text-sm"
              />
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#147942] border-gray-300 rounded focus:ring-[#147942]"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-[#147942] hover:text-green-700">Forgot your password?</a>
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-[#147942] hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#147942] transition duration-300"
          >
            Sign in
          </motion.button>
        </form>
        
        <p className="text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <a onClick={onSignUpClick} className="font-medium text-[#147942] hover:text-green-700 cursor-pointer">
            Sign Up
          </a>
        </p>
      </motion.div>
    </div>
  );
}
