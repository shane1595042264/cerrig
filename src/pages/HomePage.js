import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600">
      <div className="container mx-auto py-16 px-6">
        {/* Main heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white">Invest in Mexico with Confidence</h1>
          <p className="mt-4 text-lg text-gray-300">
            Our mission is to help Chinese investors navigate the complexities of setting up operations in Mexico.
          </p>
        </div>

        {/* Services */}
        <section className="space-y-12">
          <article>
            <h2 className="text-3xl font-semibold text-white mb-4">Why Invest in Mexico</h2>
            <p className="text-lg text-gray-300">
              High tariffs, logistical challenges, and the need for factories outside China are driving businesses to explore opportunities in Mexico.
            </p>
          </article>
          <article>
            <h2 className="text-3xl font-semibold text-white mb-4">What Investors Concern</h2>
            <p className="text-lg text-gray-300">
              Investors often worry about risk, cost, supply chain, cultural differences, and the lack of an international business team.
            </p>
          </article>
          <article>
            <h2 className="text-3xl font-semibold text-white mb-4">What We Can Do for You</h2>
            <p className="text-lg text-gray-300">
              We provide feasibility analysis, help you understand cultural differences, offer comprehensive cost analysis, and assist in choosing the most suitable factory site.
            </p>
          </article>
        </section>

        {/* Our team */}
        <section className="space-y-12 mt-16">
          <article>
            <h2 className="text-3xl font-semibold text-white mb-4">Our Team</h2>
            <p className="text-lg text-gray-300">
              Our team consists of experienced professionals dedicated to guiding you through the process of investing in Mexico. We provide options for shelter companies and help train your international management team.
            </p>
          </article>
          <article>
            <h2 className="text-3xl font-semibold text-white mb-4">Suggest from Cerrig</h2>
            <p className="text-lg text-gray-300">
              As an investor, you should be aware of the increasing strictness of anti-dumping policies in the United States. Cerrig can help you navigate these challenges and recommend the best course of action for your business.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
