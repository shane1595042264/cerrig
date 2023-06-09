import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

const ServicesPage = () => {
  return (
    <ReactFullpage
      licenseKey={'gplv3-license'}
      scrollingSpeed={1000}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section h-screen flex flex-col justify-center items-center text-white">
              <h1 className="text-4xl font-bold">Our Services</h1>
              <p className="mt-4 text-lg">
                We provide top-notch consulting services to help you navigate the complexities of setting up operations in Mexico.
              </p>
            </div>

            <div className="section h-screen flex flex-col justify-center items-center text-white">
              <h2 className="text-2xl font-bold">Featured Case Study</h2>
              <p className="mt-4 text-lg">
                Here's how we helped a client successfully establish their business in Mexico.
              </p>
              <button className="mt-8 px-8 py-4 bg-white bg-opacity-50 text-blue-700 text-2xl rounded-lg transition duration-500 ease-in-out hover:bg-opacity-100">
                Learn More
              </button>
            </div>

            <div className="section h-screen flex flex-col justify-center items-center text-white">
              <h2 className="text-2xl font-bold">Our Core Services</h2>
              {/* Add your services here */}
            </div>

            <div className="section h-screen flex flex-col justify-center items-center text-white">
              <h2 className="text-2xl font-bold">Our Team</h2>
              {/* Add your testimonials here */}
            </div>

            <div className="section h-screen flex flex-col justify-center items-center text-white">
              <h2 className="text-2xl font-bold">Case Studies</h2>
              {/* Add your case studies here */}
            </div>

            <div className="section h-screen flex flex-col justify-center items-center text-white">
              <h2 className="text-2xl font-bold">Get in Touch</h2>
              <p className="mt-4 text-lg">
                Are you ready to rethink and transform your business? Contact us today.
              </p>
              <button className="mt-8 px-8 py-4 bg-white bg-opacity-50 text-blue-700 text-2xl rounded-lg transition duration-500 ease-in-out hover:bg-opacity-100">
                Contact Us
              </button>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default ServicesPage;
