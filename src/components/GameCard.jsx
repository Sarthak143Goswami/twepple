// components/GameCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const GameCard = ({ game }) => {
  return (
    <motion.div 
      className={`bg-gradient-to-br ${game.color} rounded-3xl p-1 shadow-2xl hover:shadow-xl transition-shadow duration-300`}
      whileHover={{ y: -10 }}
    >
      <div className="bg-gray-900 rounded-3xl p-6 h-full">
        <div className="flex items-center gap-4 mb-6">
        <img src={game.icon} alt={game.title} className="w-12 h-12 object-contain rounded-lg" />
          <h3 className="text-2xl font-bold text-white">{game.title}</h3>
        </div>
        
        <p className="text-gray-400 mb-6">{game.description}</p>
        
        <div className="flex flex-wrap gap-3 mb-6">
          {game.features.map((feature, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-800 rounded-full text-sm text-cyan-400 "
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {game.appStore && (
            <a
              href={game.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-gray-800 hover:bg-gray-700 text-white px-5 py-3 rounded-xl transition-colors flex-1 justify-center"
            >
              <FaApple className="mr-2" />
              App Store
            </a>
          )}
          
          {game.playStore && (
            <a
              href={game.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-gray-800 hover:bg-gray-700 text-white px-5 py-3 rounded-xl transition-colors flex-1 justify-center"
            >
              <FaGooglePlay className="mr-2" />
              Play Store
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default GameCard;