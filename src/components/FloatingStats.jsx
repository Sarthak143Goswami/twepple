// components/FloatingStats.jsx
import { motion, useAnimation } from 'framer-motion';
import { FaDownload, FaStar, FaPuzzlePiece, FaTrophy } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import CountUp from 'react-countup';

const FloatingStats = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const stats = [
    { number: 10, suffix: 'M+', label: 'Downloads', icon: <FaDownload /> },
    { number: 4.9, suffix: '', label: 'Rating', decimal: 1, icon: <FaStar /> },
    { number: 500, suffix: '+', label: 'Puzzles', icon: <FaPuzzlePiece /> },
    { number: 100, suffix: '+', label: 'Awards', icon: <FaTrophy /> }
  ];

  return (
    <motion.div 
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 max-w-6xl mx-auto px-2"
      initial="hidden"
      animate={controls}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="p-2 md:p-4 bg-gray-800/50 rounded-xl md:rounded-2xl backdrop-blur-sm border border-cyan-400/20 hover:border-cyan-400/40 transition-all"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <div className="flex items-center gap-2 md:gap-4">
            <div className="text-xl md:text-3xl text-cyan-400">
              {stat.icon}
            </div>
            <div>
              <div className="text-xl md:text-3xl font-bold text-cyan-400">
                <CountUp
                  end={stat.number}
                  suffix={stat.suffix}
                  decimals={stat.decimal || 0}
                  duration={2}
                />
              </div>
              <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FloatingStats;