import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiMapPin, FiCode, FiHeart, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ApplicationForm from '../components/ApplicationForm';
import Modal from 'react-modal';

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredJob, setHoveredJob] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      Modal.setAppElement('#root');
      Modal.defaultStyles.overlay.zIndex = 1000;
      Modal.defaultStyles.content.zIndex = 1001;
    }
  }, []);

  const handleApplyClick = (jobTitle) => {
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
  };

  const openings = [
    {
      title: "Senior Game Developer",
      type: "Full-time",
      location: "Remote",
      description: "Lead development of next-gen puzzle games using Unity",
      icon: <FiCode className="w-6 h-6" />,
      tags: ["React-Native", "Unity", "Game Design"]
    },
    {
      title: "UI/UX Designer",
      type: "Full-time",
      location: "Indore, India",
      description: "Create immersive gaming interfaces for mobile platforms",
      icon: <FiBriefcase className="w-6 h-6" />,
      tags: ["React-Native", "React", "Figma"]
    }
  ];

  const perks = [
    {
      title: "Product DNA", 
      icon: "🧬",
      description: "Direct ownership of features from concept to launch"
    },
    {
      title: "Growth Multiplier", 
      icon: "📈",
      description: "See real metrics move from your contributions"
    },
    {
      title: "Legacy Lab", 
      icon: "🏗️",
      description: "Build foundational systems used for years"
    }

  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Header />

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
  {/* Enhanced Animated Header */}
  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: 'spring', stiffness: 120 }}
    className="text-center mb-24 relative"
  >
    <div className="relative inline-block">
      <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text mb-4 animate-gradient-x">
        Join the Quest
      </h1>
      <div className="absolute -bottom-4 inset-x-0 h-2 bg-gradient-to-r from-cyan-400/40 to-purple-400/40 blur-lg" />
    </div>
    
    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-xl md:text-2xl text-cyan-200/90 font-light max-w-3xl mx-auto leading-relaxed"
    >
      Forge legendary gaming experiences in a realm where creativity meets cutting-edge technology
    </motion.p>
    
    {/* Animated background elements */}
    <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" />
    <div className="absolute -top-20 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float-delayed" />
  </motion.div>

  {/* Enhanced Interactive Job Cards */}
  <div className="grid gap-6 lg:gap-8 relative z-10">
    {openings.map((job, index) => (
      <motion.div 
        key={index}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.15, type: 'spring' }}
        className={`group relative bg-gray-800/30 p-8 rounded-[2rem] backdrop-blur-xl
          border ${hoveredJob === index ? 'border-purple-400/50' : 'border-cyan-400/30'}
          hover:border-purple-400/50 transition-all
          hover:-translate-y-2 shadow-2xl hover:shadow-3xl hover:shadow-cyan-500/10`}
        onMouseEnter={() => setHoveredJob(index)}
        onMouseLeave={() => setHoveredJob(null)}
      >
        {/* Animated background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 
          opacity-0 group-hover:opacity-30 transition-opacity rounded-[2rem]" />
        
        {/* Spotlight effect */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 
          transition-opacity bg-gradient-radial from-cyan-400/30 to-transparent" />

        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          <div className="flex items-start gap-6 flex-1">
            {/* Enhanced Icon Container */}
            <motion.div 
              whileHover={{ rotate: 15 }}
              className="p-4 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 
                rounded-2xl border border-cyan-400/30 group-hover:border-purple-400/50 
                transition-all relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-10 transition-opacity" />
              {React.cloneElement(job.icon, { className: "text-3xl text-cyan-400" })}
            </motion.div>

            <div className="flex-1 space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-300 
                to-purple-300 bg-clip-text text-transparent mb-2">
                {job.title}
              </h3>
              
              <div className="flex flex-wrap gap-3 mb-4">
                {/* Enhanced Job Type Badges */}
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 
                    px-4 py-2 rounded-full text-cyan-300 border border-cyan-400/30 
                    group-hover:border-purple-400/50 transition-all"
                >
                  <FiBriefcase className="flex-shrink-0" />
                  {job.type}
                </motion.span>
                
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-gradient-to-br from-purple-400/20 to-pink-400/20 
                    px-4 py-2 rounded-full text-purple-300 border border-purple-400/30 
                    group-hover:border-cyan-400/50 transition-all"
                >
                  <FiMapPin className="flex-shrink-0" />
                  {job.location}
                </motion.span>
              </div>

              <p className="text-gray-200/90 leading-relaxed text-lg mb-4">
                {job.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {job.tags.map((tag, i) => (
                  <motion.span 
                    key={i}
                    whileHover={{ y: -2 }}
                    className="px-3 py-1.5 bg-gradient-to-br from-gray-700/40 to-gray-800/40 
                      rounded-full text-sm text-cyan-300/90 backdrop-blur-sm border 
                      border-cyan-400/20 hover:border-purple-400/50 transition-all"
                  >
                    #{tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Apply Button */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleApplyClick(job.title)}
            className="w-full lg:w-auto bg-gradient-to-r from-cyan-400 to-purple-400 
              text-gray-900 px-8 py-4 rounded-xl font-bold transition-all 
              hover:shadow-[0_10px_40px_-15px_rgba(34,211,238,0.5)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity" />
            <span className="relative z-10 flex items-center gap-2">
              <FiHeart className="w-6 h-6 animate-pulse" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-800">
                Apply Now
              </span>
            </span>
            {/* Shine effect */}
            <div className="absolute inset-0 -left-full group-hover:animate-shine bg-gradient-to-r 
              from-white/5 via-white/20 to-white/5" />
          </motion.button>
        </div>
      </motion.div>
    ))}
  </div>

        {/* Neon Perks Grid */}
        <div className="mt-20 relative">
          <h3 className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text mb-12 text-center">
            Your Fingerprint
          </h3>
        <div className="grid md:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8 py-12">
          {perks.map((perk, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, type: 'spring' }}
              className="p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 
                border border-cyan-400/20 hover:border-purple-400/40 relative 
                overflow-hidden group transition-all hover:-translate-y-2
                shadow-xl hover:shadow-2xl hover:shadow-purple-500/20"
            >
          {/* Animated background overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Icon container with hover effect */}
          <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-2xl 
            bg-gradient-to-tr from-purple-600 to-cyan-500 group-hover:scale-105 transition-transform">
            <span className="text-4xl text-white">{perk.icon}</span>
          </div>

          {/* Content */}
          <div className="relative space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 
              bg-clip-text text-transparent">
              {perk.title}
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              {perk.description}
            </p>
          </div>

          {/* Animated border effect */}
          <div className="absolute inset-0 rounded-3xl border-2 border-transparent 
            group-hover:border-purple-400/20 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>

          {/* Animated CTA */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-20 text-center"
          >
          <div className="inline-block bg-gradient-to-r from-cyan-400/20 to-purple-400/20 p-px rounded-full hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.3)] transition-shadow">
            <Link 
              to="/contact" 
              className="bg-gray-900 px-8 py-4 rounded-full flex items-center gap-2 justify-center group"
            >
              <span className="text-gray-300 group-hover:text-cyan-400 transition-colors">
                Want to join but don't see your role?
              </span>
              <span className="text-cyan-400 flex items-center gap-1">
                Let's chat
                <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
          </motion.div>

          <ApplicationForm 
            isOpen={isModalOpen}
            closeModal={() => setIsModalOpen(false)}
            jobTitle={selectedJob}
          />
      </section>

      <Footer />  
    </div>
  );
};

export default CareersPage;