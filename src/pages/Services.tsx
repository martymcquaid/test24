import React from 'react';

const Services = () => {
  return (
    <section className="py-24 bg-light-gray">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl mb-3">Custom Design</h3>
            <p>We create tailored designs that meet your specific needs and preferences, ensuring a personal touch in every project.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl mb-3">Quality Craftsmanship</h3>
            <p>Our skilled artisans deliver impeccable craftsmanship, using only the best materials to bring your vision to life.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl mb-3">Consultation Services</h3>
            <p>We offer expert consultation to guide you through the design and execution process, ensuring a smooth experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;