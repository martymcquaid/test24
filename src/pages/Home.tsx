import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-b from-light-blue to-soft-white">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
      <div className="flex flex-col items-center justify-center min-h-screen relative z-10 text-center">
        <h1 className="text-8xl text-transparent bg-gradient-to-r from-light-blue to-pastel-coral bg-clip-text leading-tight mb-6">Pluimmers - Quality, Craftsmanship, and Care.</h1>
        <p className="text-lg text-white">Transforming visions into reality with passion and precision.</p>
        <div className="mt-8">
          <button className="bg-gradient-to-r from-light-blue to-pastel-coral text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">Get Started</button>
          <button className="border-2 border-gray-400 text-gray-400 px-8 py-4 rounded-full ml-4 hover:bg-gray-200">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;