import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen relative bg-light-blue">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
      <div 
        className="flex flex-col items-center justify-center min-h-screen relative z-10 text-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511174508070-9a6f8f3d76f8?w=1920&h=1080&fit=crop')" }}
      >
        <h1 className="text-7xl text-transparent bg-clip-text bg-gradient-to-r from-light-blue to-pastel-coral leading-tight mb-6 drop-shadow-lg">Pluimmers</h1>
        <p className="text-lg text-white mb-8">Transforming visions into reality with passion and precision.</p>
        <div className="mt-8 space-x-4">
          <button className="bg-gradient-to-r from-light-blue to-pastel-coral text-white px-10 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">Get Started</button>
          <button className="border-2 border-gray-400 text-gray-400 px-10 py-4 rounded-full hover:bg-gray-200 hover:scale-105 transition-all duration-300">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;