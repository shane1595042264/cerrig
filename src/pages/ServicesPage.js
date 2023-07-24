import React, { useState, useEffect } from 'react';
import { Link, Element, Container } from 'react-scroll';
import img1 from '../images/0322- For Use/groupo.JPEG';
import Header from '../components/Header';
import park from "../images/0322- For Use/park.MP4";
import teamBackground from "../images/character/group1.JPEG";

const ServicesPage = () => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return (
    <div >
      <Header />
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 p-4 z-50">
      <Link to="services" smooth duration={500} className="animate-gradient-x bg-gradient-linear from-yellow-400 via-red-500 to-pink-500 p-2 rounded-lg text-white cursor-pointer">
  Services
</Link>
<Link to="caseStudy" smooth duration={500} className="animate-gradient-x bg-gradient-linear from-yellow-400 via-red-500 to-pink-500 p-2 rounded-lg text-white cursor-pointer">
  Case Study
</Link>
<Link to="team" smooth duration={500} className="animate-gradient-x bg-gradient-linear from-yellow-400 via-red-500 to-pink-500 p-2 rounded-lg text-white cursor-pointer">
  Team
</Link>
<Link to="contact" smooth duration={500} className="animate-gradient-x bg-gradient-linear from-yellow-400 via-red-500 to-pink-500 p-2 rounded-lg text-white cursor-pointer">
  Contact
</Link>

      </div>
      

      <Element name="services" className="element snap-start">
  <div className="section h-screen flex flex-col justify-center items-center text-white" style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '60px' }}>
    <h1 className="text-4xl font-bold">Our Services</h1>
    <p className="mt-4 text-lg">
      We provide top-notch consulting services to help you navigate the complexities of setting up operations in Mexico.
    </p>
    <div className="grid grid-cols-2 gap-4 mt-8">
      <div className="bg-white bg-opacity-50 p-4 rounded-lg">
        <h3 className="text-xl font-bold">Regulatory Compliance</h3>
        <p>Navigating Mexico's regulatory landscape to ensure your operations are compliant with all local, state, and federal regulations.</p>
      </div>
      <div className="bg-white bg-opacity-50 p-4 rounded-lg">
        <h3 className="text-xl font-bold">Site Location Services</h3>
        <p> Identifying and securing optimal site locations based on your factory needs, supply chain requirements, and workforce availability.</p>
      </div>
      <div className="bg-white bg-opacity-50 p-4 rounded-lg">
        <h3 className="text-xl font-bold">Supply Chain Integration</h3>
        <p>Streamlining the integration of your factory into existing supply chains, ensuring efficient sourcing of materials and distribution of products.</p>
      </div>
      <div className="bg-white bg-opacity-50 p-4 rounded-lg">
        <h3 className="text-xl font-bold">Workforce Training and Development</h3>
        <p>Implementing training programs to equip local workforce with the necessary skills, and developing strategies for workforce retention and growth.</p>
      </div>
    </div>
  </div>
</Element>


      <Element name="caseStudy" className="element snap-start">
        <div className="section h-screen relative">
          <div className="relative w-full h-full">
            <video
              autoPlay
              loop
              muted
              src="/park.MP4" // Replace with your video file path
              className="absolute z-10 w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-20">
            <h2 className="text-2xl font-bold">Featured Case Study</h2>
            <p className="mt-4 text-lg">
              Here's how we helped a client successfully establish their business in Mexico.
            </p>
            <button className="mt-8 px-8 py-4 bg-white bg-opacity-50 text-blue-700 text-2xl rounded-lg transition duration-500 ease-in-out hover:bg-opacity-100">
              Learn More
            </button>
          </div>
        </div>
      </Element>


      <Element name="team" className="element snap-start">
        <div className="section h-screen flex flex-col justify-center items-center text-white" style={{ backgroundImage: `url(${teamBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <h2 className="text-2xl font-bold">Our Team</h2>
          {/* Add your testimonials here */}
        </div>
      </Element>


      <Element name="contact" className="element snap-start">
        <div className="section h-screen flex flex-col justify-center items-center text-white">
          <h2 className="text-2xl font-bold">Get in Touch</h2>
          <p className="mt-4 text-lg">
            Are you ready to rethink and transform your business? Contact us today.
          </p>
          <button className="mt-8 px-8 py-4 bg-white bg-opacity-50 text-blue-700 text-2xl rounded-lg transition duration-500 ease-in-out hover:bg-opacity-100">
            Contact Us
          </button>
        </div>
      </Element>
    </div>
  );
};

export default ServicesPage;
