import React from 'react';

const Gallery = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-light-blue to-soft-white relative">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1920&h=1080&fit=crop')" }} />
      <h2 className="text-6xl text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-light-blue to-pastel-coral relative z-10">Our Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
        {[
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
          "https://images.unsplash.com/photo-1536939020208-0b3b4e3b7f58?w=1200&h=800&fit=crop",
          "https://images.unsplash.com/photo-1607452086586-4a7e41c8a5d7?w=1200&h=800&fit=crop",
          "https://images.unsplash.com/photo-1570127462029-802f7ce3ad38?w=1200&h=800&fit=crop",
        ].map((src, index) => (
          <div key={index} className="overflow-hidden rounded-2xl shadow-lg group">
            <img 
              src={src} 
              alt={`Gallery Image ${index + 1}`} 
              className="w-full h-auto group-hover:scale-110 transition-transform duration-500" 
              onClick={() => window.open(src, "_blank")} // Open image in a new tab
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;