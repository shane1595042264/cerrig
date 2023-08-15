import React, { useState, useEffect } from 'react';
import fetchImages, { imageFilenames} from './helpers/fetchImages';

const imageDirectories = [
  { path: './0322- For Use', description: "工业园" },
  { path: './0628- For Use', description: "Description for 0628" },
  { path: './character', description: "Description for character" },
];

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [currentDirectory, setCurrentDirectory] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const fetchedImages = fetchImages(imageDirectories[currentDirectory].path);
    setImages(fetchedImages);
  }, [currentDirectory]);

  const nextImage = () => {
    if (currentImage < images.length - 1) {
        setCurrentImage(currentImage + 1);
    } else {
        if (currentDirectory < imageDirectories.length - 1) {
            setCurrentDirectory(currentDirectory + 1);
            setCurrentImage(0);  // Start at the first image of the next directory
        } else {
            setCurrentDirectory(0);  // Loop back to the first directory
            setCurrentImage(0);
        }
    }
};

const prevImage = () => {
  if (currentImage > 0) {
    setCurrentImage(currentImage - 1);
  } else {
    if (currentDirectory > 0) {
      setCurrentDirectory(currentDirectory - 1);
      setCurrentImage(imageFilenames[imageDirectories[currentDirectory - 1].path].length - 1);  // Load the last image of the previous directory
    } else {
      setCurrentDirectory(imageDirectories.length - 1);  // Loop to the last directory
      setCurrentImage(imageFilenames[imageDirectories[imageDirectories.length - 1].path].length - 1);  // Load the last image of the last directory
    }
  }
};

return (
  <div className="relative h-screen">
    <div className="absolute inset-0 overflow-hidden">
      <img
        className="fixed top-0 left-0 object-cover w-full h-full z-[-1]"
        src={images[currentImage]}
        alt={`Gallery Image ${currentImage + 1}`}
      />
    </div>

    <div className="absolute inset-0 z-10 flex items-center justify-center">
      <div className="text-center">
        <div className="bg-black bg-opacity-40 rounded-lg px-4 py-2">
          <h1 className="text-4xl font-bold text-white">{imageDirectories[currentDirectory].description}</h1>
        </div>
      </div>
    </div>


    <button 
      style={{
        fontSize: '2rem',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        padding: '10px 20px',
        borderRadius: '50%',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
        transition: '0.3s'
      }}
      className="absolute top-1/2 left-0 z-20 text-white"
      onClick={prevImage}
      onMouseOver={e => e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'}
      onMouseOut={e => e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'}
    >
      ←
    </button>
    
    <button 
      style={{
        fontSize: '2rem',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        padding: '10px 20px',
        borderRadius: '50%',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
        transition: '0.3s'
      }}
      className="absolute top-1/2 right-0 z-20 text-white"
      onClick={nextImage}
      onMouseOver={e => e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'}
      onMouseOut={e => e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'}
    >
      →
    </button>
  </div>
);
};

export default Gallery;
