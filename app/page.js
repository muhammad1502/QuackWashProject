// app/page.js
"use client";
import { useState } from 'react';
import Login from './components/Login'; // Corrected import

// Main App Component
export default function App() {
  const [address, setAddress] = useState('');
  const [isLoginPage, setIsLoginPage] = useState(false);

  const handleLoginClick = (e) => {
    e.preventDefault();
    setIsLoginPage(true);
  };

  const services = [    
    { title: 'Spring Cleaning', description: 'Deep cleaning, from top to bottom, including hard-to-reach areas.' },
    { title: 'Home Sanitization', description: 'Using eco-friendly products to sanitize surfaces and common touchpoints.' },
    { title: 'Office Cleaning', description: 'Maintain a clean and professional workspace for your employees.' },
    { title: 'Carpet & Upholstery', description: 'Professional steam cleaning and stain removal for carpets and furniture.' },
  ];

  const features = [
    { title: 'Verified Cleaners', description: 'All cleaners undergo a strict background check and vetting process.' },
    { title: 'Easy Booking', description: 'Book a cleaner in under 60 seconds with our intuitive platform.' },
    { title: 'Custom Schedules', description: 'Set up recurring cleanings or one-time appointments that fit your life.' },
    { title: '100% Secured Payments', description: 'All payments are securely processed and protected.' },
    { title: 'Vetted & Trained Professionals Only', description: 'Our professionals are trained to deliver the highest quality service.' },
  ];

  if (isLoginPage) {
    return <Login />;
  }

  return (
    <div className="bg-[#e4eff3] font-sans text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col md:flex-row items-center justify-between py-6 px-4">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#147942]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.026 15.659c-.482.261-1.02.404-1.58.404-.56 0-1.098-.143-1.58-.404-1.637-.886-2.52-2.883-2.52-4.159 0-2.316 2.05-4.2 4.6-4.2s4.6 1.884 4.6 4.2c0 1.276-.883 3.273-2.52 4.159z"/>
            </svg>
            <span className="text-2xl font-bold text-[#147942]">QuackWash</span>
          </div>
          <nav className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-[#147942]">Become a Cleaner</a>
            <a href="#" onClick={handleLoginClick} className="text-gray-600 hover:text-[#147942]">Login</a>
            <a href="#" className="bg-[#147942] text-white px-4 py-2 rounded-full font-semibold hover:bg-green-700 transition duration-300">Sign Up</a>
          </nav>
        </header>

        <main className="min-h-screen">
          {/* Hero Section */}
          <section className="relative flex flex-col items-center justify-center text-center p-8 md:p-16 lg:p-24 bg-gradient-to-br from-[#e4eff3] to-white rounded-3x1 mb-12 shadow-inner">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#147942] mb-4 drop-shadow-md">
              CHOOSE YOUR CLEANER, <br className="hidden sm:block" /> SET YOUR SCHEDULE, <br className="hidden sm:block" /> RELAX!
            </h1>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-sm mt-8">
              <input
                type="text"
                placeholder="Enter Postal Code"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full sm:flex-1 p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#147942] text-gray-700 text-sm md:text-base shadow-sm"
              />
              <button className="w-full sm:w-auto px-8 py-3 bg-[#147942] text-white font-semibold rounded-full hover:bg-green-700 transition duration-300 shadow-lg">
                FIND CLEANER
              </button>
            </div>
            
            {/* Duck with broom */}
            <div className="absolute bottom-[-16px] left-0 md:bottom-10 md:left-10 w-24 sm:w-32 lg:w-40 xl:w-48">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-full h-auto">
                <path d="M473.1 332.2c-15.3-15.3-37.4-23.7-61.7-23.7-24.3 0-46.4 8.4-61.7 23.7-15.3 15.3-23.7 37.4-23.7 61.7 0 24.3 8.4 46.4 23.7 61.7 15.3 15.3 37.4 23.7 61.7 23.7 24.3 0 46.4-8.4 61.7-23.7 15.3-15.3 23.7-37.4 23.7-61.7 0-24.3-8.4-46.4-23.7-61.7z" fill="#f0c62e"/><path d="M411.4 308.5c-24.3 0-46.4 8.4-61.7 23.7-15.3 15.3-23.7 37.4-23.7 61.7 0 24.3 8.4 46.4 23.7 61.7 15.3 15.3 37.4 23.7 61.7 23.7 24.3 0 46.4-8.4 61.7-23.7 15.3-15.3 23.7-37.4 23.7-61.7z" fill="#fce46c"/><path d="M228.3 252.1c-15.3-15.3-37.4-23.7-61.7-23.7-24.3 0-46.4 8.4-61.7 23.7-15.3 15.3-23.7 37.4-23.7 61.7 0 24.3 8.4 46.4 23.7 61.7 15.3 15.3 37.4 23.7 61.7 23.7 24.3 0 46.4-8.4 61.7-23.7 15.3-15.3 23.7-37.4 23.7-61.7z" fill="#f0c62e"/><path d="M166.6 228.4c-24.3 0-46.4 8.4-61.7 23.7-15.3 15.3-23.7 37.4-23.7 61.7 0 24.3 8.4 46.4 23.7 61.7 15.3 15.3 37.4 23.7 61.7 23.7 24.3 0 46.4-8.4 61.7-23.7 15.3-15.3 23.7-37.4 23.7-61.7z" fill="#fce46c"/><path d="M125.1 278.4c-15.3-15.3-37.4-23.7-61.7-23.7-24.3 0-46.4 8.4-61.7 23.7-15.3 15.3-23.7 37.4-23.7 61.7 0 24.3 8.4 46.4 23.7 61.7 15.3 15.3 37.4 23.7 61.7 23.7 24.3 0 46.4-8.4 61.7-23.7 15.3-15.3 23.7-37.4 23.7-61.7z" fill="#f0c62e"/><path d="M63.4 254.7c-24.3 0-46.4 8.4-61.7 23.7-15.3 15.3-23.7 37.4-23.7 61.7 0 24.3 8.4 46.4 23.7 61.7 15.3 15.3 37.4 23.7 61.7 23.7 24.3 0 46.4-8.4 61.7-23.7 15.3-15.3 23.7-37.4 23.7-61.7z" fill="#fce46c"/><path d="M473.1 332.2c-15.3-15.3-37.4-23.7-61.7-23.7-24.3 0-46.4 8.4-61.7 23.7-15.3 15.3-23.7 37.4-23.7 61.7 0 24.3 8.4 46.4 23.7 61.7 15.3 15.3 37.4 23.7 61.7 23.7 24.3 0 46.4-8.4 61.7-23.7 15.3-15.3 23.7-37.4 23.7-61.7z" fill="#f0c62e"/><path d="M411.4 308.5c-24.3 0-46.4 8.4-61.7 23.7-15.3 15.3-23.7 37.4-23.7 61.7 0 24.3 8.4 46.4 23.7 61.7 15.3 15.3 37.4 23.7 61.7 23.7 24.3 0 46.4-8.4 61.7-23.7 15.3-15.3 23.7-37.4 23.7-61.7z" fill="#fce46c"/><path d="M228.3 252.1c-15.3-15.3-37.4-23.7-61.7-23.7-24.3 0-46.4 8.4-61.7 23.7-15.3 15.3-23.7 37.4-23.7 61.7 0 24.3 8.4 46.4 23.7 61.7 15.3 15.3 37.4 23.7 61.7 23.7 24.3 0 46.4-8.4 61.7-23.7 15.3-15.3 23.7-37.4 23.7-61.7z" fill="#f0c62e"/><path d="M166.6 228.4c-24.3 0-46.4 8.4-61.7 23.7-15.3 15.3-23.7 37.4-23.7 61.7 0 24.3 8.4 46.4 23.7 61.7 15.3 15.3 37.4 23.7 61.7 23.7 24.3 0 46.4-8.4 61.7-23.7 15.3-15.3 23.7-37.4 23.7-61.7z" fill="#fce46c"/><path d="M125.1 278.4c-15.3-15.3-37.4-23.7-61.7-23.7-24.3 0-46.4 8.4-61.7 23.7-15.3 15.3-23.7 37.4-23.7 61.7 0 24.3 8.4 46.4 23.7 61.7 15.3 15.3 37.4 23.7 61.7 23.7 24.3 0 46.4-8.4 61.7-23.7 15.3-15.3 23.7-37.4 23.7-61.7z" fill="#f0c62e"/><path d="M63.4 254.7c-24.3 0-46.4 8.4-61.7 23.7-15.3 15.3-23.7 37.4-23.7 61.7 0 24.3 8.4 46.4 23.7 61.7 15.3 15.3 37.4 23.7 61.7 23.7 24.3 0 46.4-8.4 61.7-23.7 15.3-15.3 23.7-37.4 23.7-61.7z" fill="#fce46c"/>
              </svg>
            </div>
          </section>

          {/* Best Cleaners Section */}
          <section className="py-12 bg-white rounded-3xl mb-12 shadow-md">
            <div className="flex justify-between items-center px-8 mb-8">
              <h2 className="text-2xl font-bold text-[#147942]">BEST CLEANERS</h2>
              <a href="#" className="text-sm font-semibold text-[#147942] hover:underline">VIEW ALL</a>
            </div>
            <div className="relative px-8">
              {/* Cleaner Cards - placeholder */}
              <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="flex-none w-56 p-4 bg-white rounded-3xl shadow-md border border-gray-200">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gray-200 mb-4"></div>
                    <h3 className="font-semibold text-lg text-center">Cleaner {i}</h3>
                    <div className="flex justify-center my-2">
                      <span className="text-yellow-400">★★★★☆</span>
                    </div>
                    <button className="mt-4 px-6 py-2 bg-[#147942] text-white text-sm rounded-full hover:bg-green-700 transition duration-300 w-full">
                      View Profile
                    </button>
                  </div>
                ))}
              </div>
              {/* Navigation arrows */}
              <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between px-4">
                <button className="bg-white p-2 rounded-full shadow-lg border border-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button className="bg-white p-2 rounded-full shadow-lg border border-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          </section>

          {/* Our Services Section */}
          <section className="py-12 px-8">
            <h2 className="text-2xl font-bold text-center text-[#147942] mb-8">OUR SERVICES</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-3xl shadow-md border border-gray-200">
                  <div className="w-16 h-16 bg-[#147942] rounded-full flex items-center justify-center text-white mb-4">
                    {/* SVG Icons - placeholder */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l-2-2m0 0l-7-7-7 7M10 12h2v8m-6-6h6v6m-6-6v6m6-6v6m0-6h-6m6 0v6" /></svg>
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Use QuackWash Section */}
          <section className="py-12 px-8">
            <h2 className="text-2xl font-bold text-center text-[#147942] mb-8">WHY USE QUACKWASH?</h2>
            <div className="relative flex flex-col items-center">
              {/* Duck in the middle */}
              <div className="w-24 h-24 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-full h-auto">
                  <path d="M473.1 332.2c-15.3-15.3-37.4-23.7-61.7-23.7-24.3 0-46.4 8.4-61.7 23.7-15.3 15.3-23.7 37.4-23.7 61.7 0 24.3 8.4 46.4 23.7 61.7 15.3 15.3 37.4 23.7 61.7 23.7 24.3 0 46.4-8.4 61.7-23.7 15.3-15.3 23.7-37.4 23.7-61.7z" fill="#f0c62e"/><path d="M411.4 308.5c-24.3 0-46.4 8.4-61.7 23.7-15.3 15.3-23.7 37.4-23.7 61.7 0 24.3 8.4 46.4 23.7 61.7 15.3 15.3 37.4 23.7 61.7 23.7 24.3 0 46.4-8.4 61.7-23.7 15.3-15.3 23.7-37.4 23.7-61.7z" fill="#fce46c"/><path d="M228.3 252.1c-15.3-15.3-37.4-23.7-61.7-23.7-24.3 0-46.4 8.4-61.7 23.7-15.3 15.3-23.7 37.4-23.7 61.7 0 24.3 8.4 46.4 23.7 61.7 15.3 15.3 37.4 23.7 61.7 23.7 24.3 0 46.4-8.4 61.7-23.7 15.3-15.3 23.7-37.4 23.7-61.7z" fill="#f0c62e"/><path d="M166.6 228.4c-24.3 0-46.4 8.4-61.7 23.7-15.3 15.3-23.7 37.4-23.7 61.7 0 24.3 8.4 46.4 23.7 61.7 15.3 15.3 37.4 23.7 61.7 23.7 24.3 0 46.4-8.4 61.7-23.7 15.3-15.3 23.7-37.4 23.7-61.7z" fill="#fce46c"/><path d="M125.1 278.4c-15.3-15.3-37.4-23.7-61.7-23.7-24.3 0-46.4 8.4-61.7 23.7-15.3 15.3-23.7 37.4-23.7 61.7 0 24.3 8.4 46.4 23.7 61.7 15.3 15.3 37.4 23.7 61.7 23.7 24.3 0 46.4-8.4 61.7-23.7 15.3-15.3 23.7-37.4 23.7-61.7z" fill="#f0c62e"/><path d="M63.4 254.7c-24.3 0-46.4 8.4-61.7 23.7-15.3 15.3-23.7 37.4-23.7 61.7 0 24.3 8.4 46.4 23.7 61.7 15.3 15.3 37.4 23.7 61.7 23.7 24.3 0 46.4-8.4 61.7-23.7 15.3-15.3 23.7-37.4 23.7-61.7z" fill="#fce46c"/><path d="M195.4 300c-8-8-12.4-19.5-12.4-31.5 0-12 4.4-23.5 12.4-31.5 8-8 19.5-12.4 31.5-12.4 12 0 23.5 4.4 31.5 12.4 8 8 12.4 19.5 12.4 31.5 0 12-4.4 23.5-12.4 31.5-8 8-19.5 12.4-31.5 12.4-12 0-23.5-4.4-31.5-12.4z" fill="#f0c62e"/><path d="M228.3 268.9c-8 0-15.5 3.1-21.2 8.8-5.7 5.7-8.8 13.2-8.8 21.2s3.1 15.5 8.8 21.2c5.7 5.7 13.2 8.8 21.2 8.8 8 0 15.5-3.1 21.2-8.8 5.7-5.7 8.8-13.2 8.8-21.2s-3.1-15.5-8.8-21.2c-5.7-5.7-13.2-8.8-21.2-8.8z" fill="#fce46c"/><path d="M166.6 257.6c-8 0-15.5 3.1-21.2 8.8-5.7 5.7-8.8 13.2-8.8 21.2 0 8 3.1 15.5 8.8 21.2 5.7 5.7 13.2 8.8 21.2 8.8s15.5-3.1 21.2-8.8c5.7-5.7 8.8-13.2 8.8-21.2 0-8-3.1-15.5-8.8-21.2-5.7-5.7-13.2-8.8-21.2-8.8z" fill="#f0c62e"/><path d="M125.1 289.4c-8 0-15.5 3.1-21.2 8.8-5.7 5.7-8.8 13.2-8.8 21.2s3.1 15.5 8.8 21.2c5.7 5.7 13.2 8.8 21.2 8.8 8 0 15.5-3.1 21.2-8.8 5.7-5.7 8.8-13.2 8.8-21.2 0-8-3.1-15.5-8.8-21.2-5.7-5.7-13.2-8.8-21.2-8.8z" fill="#f0c62e"/><path d="M63.4 278.1c-8 0-15.5 3.1-21.2 8.8-5.7 5.7-8.8 13.2-8.8 21.2s3.1 15.5 8.8 21.2c5.7 5.7 13.2 8.8 21.2 8.8 8 0 15.5-3.1 21.2-8.8 5.7-5.7 8.8-13.2 8.8-21.2 0-8-3.1-15.5-8.8-21.2-5.7-5.7-13.2-8.8-21.2-8.8z" fill="#fce46c"/>
                </svg>
              </div> 
            </div>
          </section>

          {/* How it works Section */}
          <section className="py-12 px-8 bg-white rounded-3xl mb-12 shadow-md">
            <h2 className="text-2xl font-bold text-center text-[#147942] mb-8">HOW IT WORKS</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-20 h-20 bg-[#147942] rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-semibold text-xl mb-2">Enter Your Postal Code</h3>
                <p className="text-gray-600 text-sm">Tell us where you are, and we&apos;ll show you the best cleaners in your area.</p>
              </div>
              <div>
                <div className="w-20 h-20 bg-[#147942] rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-semibold text-xl mb-2">Choose Your Cleaner</h3>
                <p className="text-gray-600 text-sm">Browse verified cleaner profiles, read reviews, and find the perfect match.</p>
              </div>
              <div>
                <div className="w-20 h-20 bg-[#147942] rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-semibold text-xl mb-2">Book & Relax</h3>
                <p className="text-gray-600 text-sm">Secure your booking and let our professionals handle the rest.</p>
              </div>
            </div>
          </section>

          {/* Our Features Section */}
          <section className="py-12 px-8 bg-gradient-to-tr from-white to-[#e4eff3] rounded-3xl mb-12 shadow-md">
            <h2 className="text-2xl font-bold text-center text-[#147942] mb-8">QUACKWASH FEATURES</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-3xl shadow-md border border-gray-200">
                  <div className="w-16 h-16 bg-[#147942] rounded-full flex items-center justify-center text-white mb-4">
                    {/* SVG Icons - placeholder */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.416A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 4.64h0A12.062 12.062 0 006 12h12a12.062 12.062 0 00-2.382-4.416zM12 12a4 4 0 100 8 4 4 0 000-8z" /></svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-12 px-8 mb-12">
            <h2 className="text-2xl font-bold text-center text-[#147942] mb-8">TESTIMONIALS</h2>
            <div className="relative px-8">
              {/* Testimonial Cards - placeholder */}
              <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex-none w-80 p-6 bg-white rounded-3xl shadow-md border border-gray-200">
                    <p className="text-gray-600 italic mb-4">&quot;QuackWash is a lifesaver! The cleaners are professional and always do a fantastic job.&quot;</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                      <div>
                        <h4 className="font-semibold">Client Name {i}</h4>
                        <p className="text-sm text-gray-500">City, State</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Navigation arrows */}
              <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between px-4">
                <button className="bg-white p-2 rounded-full shadow-lg border border-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button className="bg-white p-2 rounded-full shadow-lg border border-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          </section>
        </main>

        <footer className="py-8 text-center text-sm text-gray-500 border-t border-gray-200">
          © 2023 QuackWash. All rights reserved.
        </footer>
      </div>
    </div>
  );
}