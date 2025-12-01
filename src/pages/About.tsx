import React from 'react';

const About = () => {
  return (
    <section className="py-24 bg-soft-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center justify-center">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop" alt="Team" className="rounded-2xl" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl mb-4">Who We Are</h2>
          <p className="text-lg">We are passionate creators dedicated to transforming visions into reality. Our team combines experience and innovation to deliver high-quality craftsmanship in every project.</p>
        </div>
      </div>
    </section>
  );
};

export default About;