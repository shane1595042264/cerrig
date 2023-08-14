import React from 'react';
import sisilaw from "../images/avatar/sisilaw.jpg";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black-100">
      {/* Main container now has a flex display to arrange children side-by-side */}
      <div className="p-8 bg-white shadow-lg rounded-lg flex">

        {/* Left Side Content */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">联系我们</h1>
          <h2 className="text-xl mb-4">罗宇敏</h2>
          
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              {/* Phone SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-blue-500">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.51 15C4.63 13.26 5.87 11.57 7 10c1.18-1.7 2.35-3.42 4-4.87M15 3.5C16 4.91 17 6.09 17.98 7.03L20.7 3.3a.25.25 0 01.32-.05l2.71 1.98a.25.25 0 01.05.36L17.7 10.5M4.98 21L2.27 18.2a.25.25 0 01-.05-.36l2.7-3.83C6 13.08 7 11.3 7.98 9.89M15 20.4l-2.09-2.13c-1.33 1.2-2.67 2.31-4.08 3.4L4.98 21M10 5l2.09 2.13c-1.33 1.2-2.67 2.31-4.08 3.4L4.98 11" />
              </svg>
              <p className="text-gray-700">+1 980 288 9865 (USA)</p>
            </div>
            <div className="flex items-center space-x-2">
              {/* You can replace this with another phone SVG if needed */}
              <p className="text-gray-700">+86 198 8642 0725 (China)</p>
            </div>
            <div className="flex items-center space-x-2">
              {/* Email SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-blue-500">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v16a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H6a2 2 0 00-2 2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 6l-10 7L2 6M2 6l10.086-.326M2 6l10 7m10-7l-10-.326" />
              </svg>
              <p className="text-gray-700">sisi.law@cerrigcorp.com</p>
            </div>
            <div className="flex items-center space-x-2">
              <a href="https://www.linkedin.com/in/sisi-law-8a41b685/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-blue-500">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v16a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H6a2 2 0 00-2 2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h8m-4-4v12" />
                </svg>
              </a>
              <p className="text-gray-700">LinkedIn</p>
            </div>
          </div>
        </div>

        {/* Right Side Content - Avatar */}
        <div className="ml-8">
          <img src={sisilaw} alt="Your Name" className="rounded-lg shadow-md"/>
        </div>

      </div>
    </div>
  )
}

export default ContactPage
