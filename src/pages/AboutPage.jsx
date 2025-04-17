import React from 'react';
import { motion } from 'framer-motion';
import { FiSmile, FiStar, FiUsers, FiAward, FiMonitor, FiClock, FiHeart } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  const features = [
    { icon: <FiStar className="w-8 h-8" />, title: "Ad-Free & Kid-Safe", text: "A safe learning environment with no ads or distractions." },
    { icon: <FiUsers className="w-8 h-8" />, title: "Early Learning Boost", text: "Encourages cognitive growth with age-appropriate activities." },
    { icon: <FiHeart className="w-8 h-8" />, title: "Skill-Based Learning", text: "Helps toddlers develop essential skills in math, language, and creativity." },
    { icon: <FiAward className="w-8 h-8" />, title: "Bilingual Learning", text: "Supports multiple languages for an inclusive learning experience." }
  ];

  const milestones = [
    { year: "2022", title: "Company Founded", text: "Launched with first puzzle game prototype" },
    { year: "2023 Q1", title: "Educational Pivot", text: "Shifted focus to childhood development" },
    { year: "2023 Q3", title: "1M+ Users", text: "Reached major adoption milestone" },
    { year: "2024", title: "AI Integration", text: "Launched adaptive learning algorithms" }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 font-inter">
      <Header />

      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-20 px-6 max-w-6xl mx-auto"
      >
        {/* Hero Section */}
        <div className="relative group mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-50" />
          <div className="relative bg-gray-900/80 p-8 md:p-12 rounded-3xl backdrop-blur-sm border border-gray-700/50">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-8"
            >
              Redefining Digital Play
            </motion.h1>
            
            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
              }}
            >
              <motion.div 
                className="space-y-6 text-gray-300 text-lg"
                variants={itemVariants}
              >
                <p>
                  At <span className="text-cyan-300">Twepple</span>, we believe screen time should spark <span className="text-purple-300">curiosity</span>, not just consumption. 
                  Founded in 2022 by veteran game designers and educators, we're transforming digital play into 
                  meaningful learning experiences.
                </p>
                <div className="p-6 bg-gray-800/40 rounded-xl border-l-4 border-cyan-400">
                  <blockquote className="text-xl italic">
                    "Our games don't just entertain - they help children <span className="not-italic font-bold text-purple-300">build foundational skills </span> 
                    for real-world success"
                  </blockquote>
                </div>
              </motion.div>

              <motion.div 
                className="space-y-6" 
                variants={itemVariants}
              >
                <div className="aspect-video bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-2xl border border-cyan-400/20 p-6">
                  <FiMonitor className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-2xl text-center text-purple-300 mb-2">Digital Meets Physical</h3>
                  <p className="text-gray-300 text-center">
                    Our unique approach bridges screen activities with real-world learning
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Core Features */}
        <motion.div 
          className="grid md:grid-cols-4 gap-6 mb-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="p-6 bg-gray-900/50 rounded-2xl border border-cyan-400/20 hover:border-purple-400/40 transition-all group"
            >
              <div className="text-cyan-400 mb-4 group-hover:text-purple-400 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-200 mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline Section */}
        <div className="py-16 border-y border-gray-700">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-12 text-center">
            Our Journey
          </h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-400 transform -translate-x-1/2" />
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative flex items-center gap-8"
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'order-1' : 'order-3'}`}>
                    <div className="p-6 bg-gray-900/50 rounded-2xl backdrop-blur-sm border border-cyan-400/20">
                      <h3 className="text-xl text-cyan-300 mb-2">{milestone.title}</h3>
                      <p className="text-gray-300">{milestone.text}</p>
                    </div>
                  </div>
                  <div className="order-2 w-16 h-16 flex items-center justify-center bg-cyan-400/10 rounded-full text-2xl text-purple-400">
                    {milestone.year}
                  </div>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'order-3' : 'order-1'}`} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-gray-900/50 rounded-2xl border border-purple-400/20"
            >
              <FiClock className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <div className="text-4xl font-bold text-purple-400 mb-2">50min</div>
              <p className="text-gray-300">Daily Engaged Learning</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-gray-900/50 rounded-2xl border border-cyan-400/20"
            >
              <FiHeart className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <div className="text-4xl font-bold text-cyan-400 mb-2">100%</div>
              <p className="text-gray-300">Parent Satisfaction</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-gray-900/50 rounded-2xl border border-purple-400/20"
            >
              <FiSmile className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <div className="text-4xl font-bold text-purple-400 mb-2">1M+</div>
              <p className="text-gray-300">Happy Learners</p>
            </motion.div>
          </div>
        </div>

        <div className="py-16 px-4 sm:px-6 lg:px-8">
  <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    className="max-w-7xl mx-auto"
  >
    {/* Parent Reviews Section */}
    <div className="py-16">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-3xl p-8 md:p-12 border border-cyan-400/20"
      >
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-6xl text-purple-400 opacity-20">
          👪
        </div>
        
        <h2 className="text-3xl font-bold text-cyan-300 mb-8 text-center">
          Parents Share Their Journeys
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              parent: "Neha Kapoor",
              child: "Reyansh (3.5 years)",
              game: "Color Explorers",
              benefit: "Color Recognition",
              quote: "From mixing up all colors to correctly naming 12 shades - we've seen incredible progress in just 2 months!",
              avatar: "👩👦"
            },
            {
              parent: "Arjun Mehta",
              child: "Anika (4 years)",
              game: "Number Safari",
              benefit: "Counting Skills",
              quote: "Anika surprised us by counting to 20 during her birthday party. Her preschool teacher noticed the improvement immediately!",
              avatar: "👨👧"
            },
            {
              parent: "Priya Desai",
              child: "Vihaan (2.8 years)",
              game: "Shape Builders",
              benefit: "Fine Motor Skills",
              quote: "The puzzle games helped Vihaan develop patience and hand-eye coordination better than any physical toys we tried.",
              avatar: "👩👦"
            }
          ].map((story, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-gray-800/40 rounded-xl border-l-4 border-purple-400 relative group"
            >
              <div className="absolute -top-4 -left-4 text-purple-400 text-2xl">
                {story.avatar}
              </div>
              <div className="space-y-4">
                <h3 className="text-cyan-100 font-medium text-lg">
                  {story.parent}'s Story
                </h3>
                <p className="text-gray-300 text-sm">
                  {story.child} • {story.game}
                </p>
                <blockquote className="text-gray-200 italic border-l-2 border-cyan-400/30 pl-4">
                  "{story.quote}"
                </blockquote>
                <div className="mt-4 flex items-center gap-3 p-3 bg-gray-900/30 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400 flex items-center justify-center">
                    {index === 0 ? '🎨' : index === 1 ? '🔢' : '🧩'}
                  </div>
                  <div>
                    <p className="text-cyan-300 text-sm font-medium">
                      Developed {story.benefit}
                    </p>
                    <p className="text-gray-400 text-xs">
                      Through {story.game}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-center mt-12"
    >
      <div className="inline-block bg-gradient-to-r from-cyan-400/20 to-purple-400/20 p-1 rounded-full">
        <p className="text-gray-300 px-6 py-2 rounded-full bg-gray-900/80">
          Join 5,000+ families in their early learning journey
        </p>
      </div>
    </motion.div>
  </motion.div>
</div>
  </motion.div>
</div>

        {/* Team Section */}
      </motion.section>

      <Footer />
    </div>
  );
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      type: "spring",
      stiffness: 120
    }
  }
};

export default AboutPage;