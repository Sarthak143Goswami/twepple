import React from 'react';
import { motion } from 'framer-motion';
import { FaApple, FaGooglePlay, FaStar } from 'react-icons/fa';

const GameCard = ({ game }) => {
  return (
    <motion.div 
      className="relative group bg-gray-900 rounded-2xl overflow-hidden shadow-2xl h-full"
      whileHover="hover"
    >
      {/* Preview Section */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={game.preview} 
          alt={game.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 bg-cyan-400/20 text-cyan-300 rounded-full text-sm flex items-center gap-2">
            <span className="text-purple-400">★</span>
            {game.ageRange}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0 p-2 bg-gray-800 rounded-xl">
            <img src={game.icon} alt={game.title} className="w-14 h-14 object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-1">{game.title}</h3>
            
            {/* Rating & Reviews */}
            <div className="flex items-center gap-4">
              {/* Rating Section */}
              <div className="flex items-center gap-1 text-amber-400">
                <FaStar className="text-sm" />
                <span className="text-sm font-semibold">{game.rating}</span>
                <span className="text-gray-400 text-sm">/5</span>
              </div>

              {/* Reviews Section */}
              <div className="flex items-center gap-1 text-gray-400">
                <span className="text-sm font-semibold">{game.reviews}</span>
              </div>
            </div>

          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-1 bg-gray-800 rounded-full mb-4 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-purple-400 to-cyan-400" 
            style={{ width: `${(game.rating/5)*100}%` }}
          />
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-6">{game.description}</p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-6">
          {game.features.map((feature, index) => (
            <span 
              key={index}
              className="px-3 py-1.5 rounded-full text-xs bg-gradient-to-r from-cyan-600/30 to-purple-600/30 text-cyan-300 flex items-center gap-2"
            >
              <span className="text-purple-400 text-lg">•</span>
              {feature}
            </span>
          ))}
        </div>

        {/* Download Buttons */}
        <div className="grid grid-cols-2 gap-3">
          {game.appStore && (
            <motion.a
              href={game.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-xl transition-all"
              whileHover={{ y: -3 }}
            >
              <FaApple className="text-lg" />
              <span className="text-sm font-semibold">App Store</span>
            </motion.a>
          )}
          
          {game.playStore && (
            <motion.a
              href={game.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-xl transition-all"
              whileHover={{ y: -3 }}
            >
              <FaGooglePlay className="text-lg" />
              <span className="text-sm font-semibold">Play Store</span>
            </motion.a>
          )}
        </div>
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-0 border-2 border-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl" />
    </motion.div>
  );
};

export default GameCard;