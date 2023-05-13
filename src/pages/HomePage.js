import React from 'react';

const HomePage = () => {
  return (
    <div>
      <div className="relative h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover z-[-1]"
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
            </div>
          </div>
        </div>
      </div>
      <div className="z-10 pt-20 flex-grow">
        <div className="mx-auto py-16 px-6">
          {/* Services */}
          <section className="space-y-12">
            <div className="h-screen flex flex-col justify-center items-center">
              <article>
                <h2 className="text-3xl font-semibold text-white mb-4">Why Invest in Mexico</h2>
                <p className="text-lg text-gray-300">
                  High tariffs, logistical challenges, and the need for factories outside China are driving businesses to explore opportunities in Mexico.
                </p>
              </article>
            </div>
            <div className="h-screen flex flex-col justify-center items-center">
              <article>
                <h2 className="text-3xl font-semibold text-white mb-4">What Investors Concern</h2>
                <p className="text-lg text-gray-300">
                  Investors often worry about risk, cost, supply chain, cultural differences, and the lack of an international business team.
                </p>
              </article>
            </div>
            <div className="h-screen flex flex-col justify-center items-center">
              <article>
                <h2 className="text-3xl font-semibold text-white mb-4">What We Can Do for You</h2>
                <p className="text-lg text-gray-300">
                  We provide feasibility analysis, help you understand cultural differences, offer comprehensive cost analysis, and assist in choosing the most suitable factory site.
                </p>
              </article>
            </div>
          </section>

          {/* Our team */}
          <section className="space-y-12 mt-16">
            <div className="h-screen flex flex-col justify-center items-center">
              <article>
                <h2 className="text-3xl font-semibold text-white mb-4">Our Team</h2>
                <p className="text-lg text-gray-300">
                  Our team consists of experienced professionals dedicated to guiding you through the process of investing in Mexico. We provide options for shelter companies and help train your international management team.
                </p>
              </article>
            </div>
            <div className="h-screen flex flex-col justify-center items-center">
              <article>
                <h2 className="text-3xl font-semibold text-white mb-4">Suggest from Cerrig</h2>
                <p className="text-lg text-gray-300">
                  As an investor, you should be aware of the increasing strictness of anti-dumping policies in the United States. Cerrig can help you navigate these challenges and recommend the best course of action for your business.
                </p>
              </article>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;