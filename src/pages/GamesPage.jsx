// pages/GamesPage.jsx
import React from 'react';
import GameCard from '../components/GameCard';
import { gamesData } from '../data/gamesData';

import Header from '../components/Header';
import Footer from '../components/Footer';

const GamesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <Header />
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-12">
          All Games
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gamesData.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default GamesPage;