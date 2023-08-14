import React from 'react';

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black-100">
      <div className="p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4">联系我们</h1>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            {/* ... existing phone SVG ... */}
            <p className="text-gray-700">+1 980 288 9865 (USA)</p>
          </div>
          <div className="flex items-center space-x-2">
            {/* ... existing phone SVG ... */}
            <p className="text-gray-700">+86 198 8642 0725 (China)</p>
          </div>
          <div className="flex items-center space-x-2">
            {/* ... existing email SVG ... */}
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
    </div>
  )
}

export default ContactPage;
