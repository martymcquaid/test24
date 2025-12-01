import React from 'react';

const Gallery = () => {
  return (
    <section className="py-24 bg-soft-white">
      <h2 className="text-5xl text-center mb-12">Our Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="overflow-hidden rounded-2xl shadow-lg group">
          <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop" alt="Gallery Image 1" className="w-full h-auto group-hover:scale-110 transition-all duration-500" />
        </div>
        <div className="overflow-hidden rounded-2xl shadow-lg group">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop" alt="Gallery Image 2" className="w-full h-auto group-hover:scale-110 transition-all duration-500" />
        </div>
        <div className="overflow-hidden rounded-2xl shadow-lg group">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop" alt="Gallery Image 3" className="w-full h-auto group-hover:scale-110 transition-all duration-500" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;