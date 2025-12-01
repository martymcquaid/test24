import React from 'react';

const Contact = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-light-blue to-soft-white">
      <h2 className="text-6xl text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-light-blue to-pastel-coral">Get in Touch</h2>
      <form className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-lg">
        <div className="mb-6">
          <label className="block text-lg mb-2" htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-light-blue transition duration-300 ease-in-out" 
            placeholder="Your Name" 
            required 
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg mb-2" htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-light-blue transition duration-300 ease-in-out" 
            placeholder="Your Email" 
            required 
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg mb-2" htmlFor="message">Message</label>
          <textarea 
            id="message" 
            rows="4" 
            className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-light-blue transition duration-300 ease-in-out" 
            placeholder="Your Message" 
            required 
          ></textarea>
        </div>
        <button className="bg-gradient-to-r from-light-blue to-pastel-coral text-white px-10 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">Send Message</button>
      </form>
      <div className="mt-12 text-center">
        <p className="text-lg text-dark-gray">Or reach us at:</p>
        <p className="text-lg text-dark-gray">info@pluimmers.com | (123) 456-7890</p>
      </div>
    </section>
  );
};

export default Contact;