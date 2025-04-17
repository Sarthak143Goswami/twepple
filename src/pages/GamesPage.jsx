// pages/GamesPage.jsx
import React from 'react';
import GameCard from '../components/GameCard';
import { gamesData } from '../data/gamesData';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScroll, useTransform } from 'framer-motion';
import gridPattern from '../assets/images/grid-pattern.svg';

const GamesPage = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
      <Header />
      <motion.section 
        style={{ scale }}
        className="py-20 px-6 max-w-6xl mx-auto relative"
      >
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-12 text-center"
        >
          Interactive Universe
          <span className="block mt-4 text-xl text-gray-300 font-normal">Explore Our Gaming Cosmos</span>
        </motion.h2>

        <div className="relative group">
        <div
          style={{ 
            backgroundImage: `url(${gridPattern})`, 
            opacity: 0.2, 
            transition: "opacity 0.3s ease-in-out" 
          }}
          className="absolute inset-0 group-hover:opacity-30"
        />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {gamesData.map((game, index) => (
              <motion.div 
                key={game.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <GameCard 
                  game={game} 
                  className="hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-cyan-400/20 to-purple-400/20 p-px rounded-full"
          >
            <div className="bg-gray-900 px-8 py-3 rounded-full flex items-center gap-3">
              <span className="bg-gradient-to-r from-cyan-200 to-purple-200 bg-clip-text text-transparent">
                More Games Coming Soon
              </span>
              <div className="flex space-x-2">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-purple-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default GamesPage;