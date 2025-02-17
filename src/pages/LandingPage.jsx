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
import poster from '../assets/images/toddlers-game.jpg';
import trailer from '../assets/videos/toddlersvideo.mp4';  
import { useRef, useEffect, useState } from 'react';
import { VolumeX, Volume2 } from "lucide-react";


const LandingPage = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 font-['Comic_Neue']">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 pb-20 md:pt-24 md:pb-22 overflow-hidden">
        {/* Content Container */}
        <div className="relative z-10 text-center px-4 flex-1 flex flex-col items-center justify-center w-full max-w-7xl">

          <div className="absolute inset-0 z-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 3 + Math.random() * 5,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>
          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent px-2">
              Toddler
            </span> 
            <span className="text-white px-2">Learning</span>
            <span className="bg-gradient-to-r from-pink-400 to-yellow-300 bg-clip-text text-transparent px-2">
              Games
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            className="text-2xl md:text-3xl lg:text-4xl text-white mb-8 max-w-4xl mx-auto font-light tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Spark Curiosity Through Playful Learning Adventures!
          </motion.p>

          {/* Video Container */}
          <motion.div 
            className="relative w-full max-w-xl mb-10 md:mb-14"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative device-frame bg-gray-800 rounded-[40px] p-4 shadow-2xl transform perspective-1000">
              {/* Screen Effects */}
              <div className="absolute inset-0 rounded-[32px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/15 to-cyan-400/15" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/10 to-transparent mix-blend-overlay" />
              </div>
              
              {/* Video */}
              <div className="relative rounded-[32px] overflow-hidden aspect-video border-4 border-gray-900/50">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={poster}
                >
                  <source src={trailer} type="video/mp4" />
                </video>
                {/* Mute/Unmute Button */}
          <button 
            onClick={toggleMute} 
            className="absolute bottom-4 right-4 bg-gray-900/75 p-2 rounded-full text-white hover:bg-gray-700"
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>
              </div>
              
              {/* Device Details */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 h-24 w-2 bg-gray-900 rounded-r-lg" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-24 w-2 bg-gray-900 rounded-l-lg" />
            </div>

            {/* Animated Decorations */}
            <motion.div
              className="absolute -top-4 -left-6 text-5xl"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              🧩
            </motion.div>
            <motion.div
              className="absolute -bottom-6 -right-6 text-5xl"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            >
              🎨
            </motion.div>
          </motion.div>

          <div className="flex flex-col md:flex-row  gap-6 justify-center w-full max-w-2xl">
          <a href="https://play.google.com/store/apps/details?id=com.twepple.baby.toddler.kids.preschool.learning.activity.games&hl=en_US" target="_blank" rel="noopener noreferrer">
              <AnimatedButton 
                text="Google Play"
                icon="android"
                color="green"
                className="text-xl py-4 shadow-lg shadow-green-500/30 hover:shadow-green-500/50"
              />
            </a>
            <a href="https://apps.apple.com/us/app/kids-games-for-toddlers-2-to-6/id6736658511" target="_blank" rel="noopener noreferrer">
              <AnimatedButton 
                text="App Store"
                icon="apple"
                className="text-xl py-4 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
              />
            </a>
          </div>
        </div>

        {/* Floating Stats Section - Repositioned */}
        <div className="w-full px-4 mt-20 md:mt-20">
          <FloatingStats />
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="py-10 px-6 bg-gradient-to-b from-cyan-900/20 to-purple-900/20">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-bold text-center text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-16"
        >
          Our Magical World
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {gamesData.slice(0, 3).map((game) => (
            <motion.div 
              key={game.id}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <GameCard game={game} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 -top-32 -left-32" animate-pulse/>
          <div className="absolute w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20 -bottom-32 -right-32 animate-pulse delay-1000" />
        </div>
        
        <motion.div 
          className="max-w-6xl mx-auto bg-gradient-to-br from-cyan-900/40 to-purple-900/40 rounded-3xl p-8 text-center backdrop-blur-xl border-2 border-cyan-400/30 relative overflow-hidden shadow-2xl"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
        >
          <div style={{ backgroundImage: `url(${gridPattern})`, opacity: 0.1 }} className="absolute inset-0" />
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text mb-6">
            Start Your Learning Adventure!
          </h2>
          <p className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Join millions of parents and their little learners in our award-winning educational universe
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
            <FaTrophy className="animate-bounce text-3xl" />
            <span className="text-xl">4.9/5 Rating Across Stores</span>
            <FaPuzzlePiece className="animate-spin-slow text-3xl" />
          </div>
        </motion.div>
      </section>


     {/* Enhanced Features Section */}
     <section className="py-20 px-6 bg-gradient-to-b from-purple-900/20 to-cyan-900/20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-16">
            Why Families Choose Us
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <FaDownload className="text-5xl mb-4 text-purple-300" />,
                title: "Instant Fun",
                text: "Download & start learning in seconds",
                color: "from-purple-500/30 to-cyan-500/30"
              },
              { 
                icon: <FaPuzzlePiece className="text-5xl mb-4 text-cyan-300" />,
                title: "Daily Discoveries",
                text: "New educational content every day",
                color: "from-cyan-500/30 to-purple-500/30"
              },
              { 
                icon: <FaTrophy className="text-5xl mb-4 text-yellow-300" />,
                title: "Progress Tracking",
                text: "Watch your child's skills grow",
                color: "from-yellow-500/30 to-pink-500/30"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-8 bg-gradient-to-br from-cyan-900/30 to-purple-900/30 rounded-3xl backdrop-blur-sm hover:backdrop-blur-md transition-all relative overflow-hidden group"
                whileHover={{ y: -10 }}
              >
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-br from-purple-400  opacity-40 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-cyan-800 animate-spin-slow opacity-0 group-hover:opacity-20" />
                </div>
                
                <div className="relative">
                  <motion.div 
                    className="inline-block mb-6"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ type: "spring" }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h4 className="text-2xl font-bold text-cyan-100 mb-4">{feature.title}</h4>
                  <p className="text-lg text-cyan-50">{feature.text}</p>
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