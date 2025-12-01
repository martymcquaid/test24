import React from 'react';

const About = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-light-blue to-soft-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center justify-center">
          <div className="overflow-hidden rounded-2xl shadow-lg group">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop" 
              alt="Team" 
              className="transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-6xl bg-clip-text text-transparent bg-gradient-to-r from-light-blue to-pastel-coral mb-4">Who We Are</h2>
          <p className="text-lg text-gray-700 mb-6">
            We are passionate creators dedicated to transforming visions into reality. Our team combines experience and innovation to deliver high-quality craftsmanship in every project.
          </p>
          <h3 className="text-2xl font-semibold mb-2">Our Values:</h3>
          <ul className="list-disc ml-5 text-lg text-gray-600">
            <li>Quality: We never compromise on excellence.</li>
            <li>Innovation: We embrace new ideas and techniques.</li>
            <li>Collaboration: Teamwork is at the heart of our process.</li>
            <li>Customer Focus: Your satisfaction drives our mission.</li>
          </ul>
          <div className="mt-8">
            <button className="bg-gradient-to-r from-light-blue to-pastel-coral text-white px-8 py-4 rounded-full shadow-xl hover:scale-105 transition-all duration-300">
              Connect with Us Today!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;