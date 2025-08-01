// components/Login.js
"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'; // Import Link from next/link

// QuackWash Logo SVG component
const QuackWashLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#147942]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.026 15.659c-.482.261-1.02.404-1.58.404-.56 0-1.098-.143-1.58-.404-1.637-.886-2.52-2.883-2.52-4.159 0-2.316 2.05-4.2 4.6-4.2s4.6 1.884 4.6 4.2c0 1.276-.883 3.273-2.52 4.159z"/>
    </svg>
);

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
    // Add your email/password login logic here
  };

  const handleGoogleLogin = () => {
      console.log('Initiating Google login...');
      // Implement your Google OAuth flow here, e.g., using a library like next-auth
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
    <div className="flex items-center justify-center min-h-screen bg-[#f0f8ff] p-4">
      <motion.div
        initial="offscreen"
        animate="onscreen"
        variants={cardVariants}
        className="w-full max-w-md p-8 space-y-6 bg-white rounded-3xl shadow-lg border border-gray-200"
      >
        {/* Back to Home Button with Logo */}
        <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-[#147942] transition-colors duration-200 mb-6">
            <QuackWashLogo />
            <span className="font-bold text-xl">QuackWash</span>
        </Link>

        <h2 className="text-3xl font-bold text-center text-[#147942]">Welcome Back!</h2>
        <p className="text-center text-gray-600">Login to access your QuackWash account</p>
        
        {/* Google Login Button */}
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center space-x-3 px-4 py-3 bg-white text-gray-700 font-semibold rounded-full border border-gray-300 hover:bg-gray-50 transition duration-200 shadow-sm"
        >
            <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google Logo" className="w-6 h-6" />
            <span>Login with Google</span>
        </motion.button>
        
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-400 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

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
                className="block w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#147942] focus:border-[#147942] text-sm"
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
                className="block w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#147942] focus:border-[#147942] text-sm"
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
          Not a member?{' '}
          <a href="#" className="font-medium text-[#147942] hover:text-green-700">Sign up now</a>
        </p>
      </motion.div>
    </div>
  );
}