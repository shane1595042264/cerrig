import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="relative h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="fixed top-0 left-0 object-cover object-center min-w-full min-h-full w-auto h-auto z-[-1]"
            src="/1.mp4"
            type="video/mp4"
            autoPlay
            loop
            muted
          />
        </div>

        <div className="absolute inset-0 z-10 pt-20">
          <div className="mx-auto py-16 px-6">
            {/* Main heading */}
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-white">Invest in Mexico with Confidence</h1>
              <p className="mt-4 text-lg text-gray-300">
                Our mission is to help Chinese investors navigate the complexities of setting up operations in Mexico.
              </p>
              <button 
                className="mt-8 px-8 py-4 border-2 border-white text-white text-2xl rounded-lg transition duration-500 ease-in-out hover:bg-white hover:text-blue-700"
                onClick={() => navigate('/about')}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
