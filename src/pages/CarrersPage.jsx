// pages/CareersPage.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CareersPage = () => {
  const openings = [
    {
      title: "Senior Game Developer",
      type: "Full-time",
      location: "Remote",
      description: "Lead development of next-gen puzzle games using Unity"
    },
    {
      title: "UI/UX Designer",
      type: "Contract",
      location: "Indore, India",
      description: "Create immersive gaming interfaces for mobile platforms"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">

      <Header />

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-12">
          Build the Future of Gaming
        </h2>
        
        <div className="grid gap-6">
          {openings.map((job, index) => (
            <div key={index} className="bg-gray-800/50 p-6 rounded-2xl backdrop-blur-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl text-cyan-400 font-bold">{job.title}</h3>
                  <div className="flex gap-4 mt-2 text-gray-400">
                    <span>{job.type}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                  </div>
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-xl transition-colors">
                  Apply Now
                </button>
              </div>
              <p className="mt-4 text-gray-300">{job.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl text-cyan-400 mb-4">Why Join Twepple?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {['Competitive Salary', 'Flexible Hours', 'Game Jams'].map((benefit, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-2xl">
                <div className="text-4xl mb-4">🎮</div>
                <h4 className="text-xl text-purple-400">{benefit}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />  
    </div>
  );
};

export default CareersPage;