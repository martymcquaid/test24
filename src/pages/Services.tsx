import React from 'react';

const Services = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-light-blue to-soft-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-light-blue to-pastel-coral">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <img src="https://images.unsplash.com/photo-1507032341225-2e2b4c3cc6bc?w=300&h=200&fit=crop" alt="Custom Design" className="w-full h-48 object-cover rounded-t-2xl mb-4" />
            <h3 className="text-3xl mb-3">Custom Design</h3>
            <p>We create tailored designs that meet your specific needs and preferences, ensuring a personal touch in every project.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <img src="https://images.unsplash.com/photo-1593642632823-e0e4b7b92a11?w=300&h=200&fit=crop" alt="Quality Craftsmanship" className="w-full h-48 object-cover rounded-t-2xl mb-4" />
            <h3 className="text-3xl mb-3">Quality Craftsmanship</h3>
            <p>Our skilled artisans deliver impeccable craftsmanship, using only the best materials to bring your vision to life.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <img src="https://images.unsplash.com/photo-1604013705495-4b5e0a9e08f0?w=300&h=200&fit=crop" alt="Consultation Services" className="w-full h-48 object-cover rounded-t-2xl mb-4" />
            <h3 className="text-3xl mb-3">Consultation Services</h3>
            <p>We offer expert consultation to guide you through the design and execution process, ensuring a smooth experience.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <img src="https://images.unsplash.com/photo-1614893454779-c2c6e90b7e5a?w=300&h=200&fit=crop" alt="Project Management" className="w-full h-48 object-cover rounded-t-2xl mb-4" />
            <h3 className="text-3xl mb-3">Project Management</h3>
            <p>Our dedicated team ensures that your project stays on track and meets all deadlines, keeping you informed every step of the way.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <img src="https://images.unsplash.com/photo-1587273780498-47c3c896b2e3?w=300&h=200&fit=crop" alt="Interior Design" className="w-full h-48 object-cover rounded-t-2xl mb-4" />
            <h3 className="text-3xl mb-3">Interior Design</h3>
            <p>We specialize in creating stunning interiors that blend functionality and style, tailored to your unique aesthetic preferences.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <img src="https://images.unsplash.com/photo-1564564305926-5f1b6b4e2a58?w=300&h=200&fit=crop" alt="Sustainability Consulting" className="w-full h-48 object-cover rounded-t-2xl mb-4" />
            <h3 className="text-3xl mb-3">Sustainability Consulting</h3>
            <p>We guide you in making environmentally conscious choices that benefit both your project and the planet.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;