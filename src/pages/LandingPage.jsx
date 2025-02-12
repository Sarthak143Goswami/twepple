// pages/LandingPage.jsx
import { motion } from 'framer-motion';
import AnimatedButton from '../components/AnimatedButton';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GameCard from '../components/GameCard';
import { gamesData } from '../data/gamesData';
import FloatingStats from '../components/FloatingStats';
import { FaTrophy, FaPuzzlePiece, FaDownload } from 'react-icons/fa';
import gridPattern from '../assets/images/grid-pattern.svg';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-30 -top-32 -left-32 animate-pulse" />
          <div className="absolute w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-30 -bottom-32 -right-32 animate-pulse delay-1000" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
          >
            Revolutionizing Mobile Gaming
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Join 10 million+ players worldwide in our award-winning puzzle universe
          </motion.p>
          <div className="flex gap-6 justify-center text-slate-300">
            <AnimatedButton 
              text="Download Now"
              icon="download"
              color="cyan"
              href="#downloads"
              outline
            />
          </div>
        </div>

        {/* Enhanced Floating Stats */}
        <div className="absolute bottom-20 left-0 right-0">
          <FloatingStats />
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-20 px-6">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-16"
        >
          Our MasterPieces
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {gamesData.slice(0, 3).map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      {/* Interactive CTA Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 -top-32 -left-32" />
          <div className="absolute w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20 -bottom-32 -right-32" />
        </div>
        
        <motion.div 
          className="max-w-6xl mx-auto bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 text-center backdrop-blur-xl border border-cyan-400/20 relative overflow-hidden"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
        >
          <div style={{ backgroundImage: `url(${gridPattern})`, opacity: 0.1 }} className="absolute inset-0" />
          <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-6">
            Start Your Puzzle Journey!
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Download now and get exclusive access to daily challenges and premium content
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <AnimatedButton 
              text="Google Play"
              icon="android"
              color="green"
              href="play-store-link"
              className="w-full md:w-auto"
            />
            <AnimatedButton 
              text="App Store"
              icon="apple"
              color="purple"
              href="app-store-link"
              className="w-full md:w-auto"
            />
          </div>
          <div className="mt-8 flex items-center justify-center gap-4 text-cyan-400">
            <FaTrophy className="animate-bounce" />
            <span className="text-sm">4.9/5 Rating Across Stores</span>
            <FaPuzzlePiece className="animate-spin-slow" />
          </div>
        </motion.div>
      </section>

      {/* Additional Recommended Section */}
      <section className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-cyan-400 mb-12 text-center">
            Why Players Love Us
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <FaDownload className="text-4xl mb-4 text-purple-400" />,
                title: "Instant Access",
                text: "Download & start playing in seconds"
              },
              { 
                icon: <FaPuzzlePiece className="text-4xl mb-4 text-cyan-400" />,
                title: "Daily Content",
                text: "New puzzles added every 24 hours"
              },
              { 
                icon: <FaTrophy className="text-4xl mb-4 text-pink-400" />,
                title: "Competitive Play",
                text: "Global leaderboards & achievements"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-800/50 rounded-2xl backdrop-blur-sm hover:bg-gray-800/70 transition-all"
                whileHover={{ y: -10 }}
              >
                <div className="text-center">
                  <div className="inline-block mb-4">{feature.icon}</div>
                  <h4 className="text-xl font-bold text-gray-200 mb-2">{feature.title}</h4>
                  <p className="text-gray-400">{feature.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;