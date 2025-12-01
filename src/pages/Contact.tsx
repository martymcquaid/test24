import React from 'react';

const Contact = () => {
  return (
    <section className="py-24 bg-light-gray">
      <h2 className="text-5xl text-center mb-12">Get in Touch</h2>
      <form className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <div className="mb-4">
          <label className="block text-lg mb-2" htmlFor="name">Name</label>
          <input type="text" id="name" className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-light-blue" placeholder="Your Name" required />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2" htmlFor="email">Email</label>
          <input type="email" id="email" className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-light-blue" placeholder="Your Email" required />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2" htmlFor="message">Message</label>
          <textarea id="message" rows="4" className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-light-blue" placeholder="Your Message" required></textarea>
        </div>
        <button className="bg-gradient-to-r from-light-blue to-pastel-coral text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;