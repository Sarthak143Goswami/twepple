import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <Header />
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-12">
          Get in Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
              <div>
                <h3 className="text-xl text-purple-400 font-bold">Head Office</h3>
                <p className="text-gray-300">353 Krishna Bunglows, Rau, Indore</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <FaPhone className="text-cyan-400 text-2xl" />
              <div>
                <h3 className="text-xl text-purple-400 font-bold">Phone</h3>
                <p className="text-gray-300">+91 70300 23322</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-cyan-400 text-2xl" />
              <div>
                <h3 className="text-xl text-purple-400 font-bold">Email</h3>
                <p className="text-gray-300">hr@twepple.com</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm">
            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full bg-gray-700/50 rounded-lg p-3 text-white placeholder-gray-400"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-gray-700/50 rounded-lg p-3 text-white placeholder-gray-400"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full bg-gray-700/50 rounded-lg p-3 text-white placeholder-gray-400"
                />
              </div>
              <button className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 px-8 py-3 rounded-xl font-bold transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;