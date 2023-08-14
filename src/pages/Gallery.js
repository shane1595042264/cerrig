import React from 'react';

const Gallery = () => {
    const images = [
      "/path-to-your-images/img1.jpg",
      "/path-to-your-images/img2.jpg",
      "/path-to-your-images/img3.jpg",
      "/path-to-your-images/img4.jpg"
      // Continue for all your images
    ];
  
    return (
      <div className="flex flex-wrap justify-around items-center h-full py-10 px-5 md:px-20 bg-gray-200">
        {images.map((img, idx) => (
          <div key={idx} className="m-2 md:m-5">
            <img className="w-full h-full object-cover" src={img} alt={`Gallery ${idx + 1}`} />
          </div>
        ))}
      </div>
    );
  };
  
  export default Gallery;
  