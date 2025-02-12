import React from 'react';
import TeamSection from '../components/TeamSection';

import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <Header />
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-12">
          Our Story
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 text-gray-300">
            <p className="text-xl">
              Founded in 2020, Twepple Technology has revolutionized mobile gaming with 
              innovative puzzle experiences loved by millions worldwide.
            </p>
            <p>
              Our mission is to create games that challenge the mind while providing 
              a relaxing escape from daily stress. We combine cutting-edge technology 
              with artistic design to deliver unforgettable experiences.
            </p>
          </div>
          
          <div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Core Values</h3>
            <ul className="space-y-4">
              {['Innovation First', 'Player-Centric Design', 'Ethical Gaming', 'Continuous Learning'].map((value, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  <span className="text-gray-300">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <TeamSection />
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;