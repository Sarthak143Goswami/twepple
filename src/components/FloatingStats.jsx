import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import CountUp from 'react-countup';
import { FaStar, FaPuzzlePiece, FaTrophy } from 'react-icons/fa';

const FloatingStats = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const stats = [
    { 
      number: 4.9, 
      suffix: '', 
      label: 'Average Rating', 
      decimal: 1, 
      icon: <FaStar className='text-yellow-400'/>,
      color: 'from-yellow-400/20 to-amber-500/20'
    },
    { 
      number: 500, 
      suffix: '+', 
      label: 'Creative Puzzles', 
      icon: <FaPuzzlePiece className='text-yellow-400'/>,
      color: 'from-purple-400/20 to-fuchsia-500/20'
    },
    { 
      number: 100, 
      suffix: '+', 
      label: 'Educator Awards', 
      icon: <FaTrophy className='text-yellow-400'/>,
      color: 'from-cyan-400/20 to-blue-500/20'
    }
  ];

  return (
    <motion.div 
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto"
      initial="hidden"
      animate={controls}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="relative p-6 md:p-8 rounded-3xl overflow-hidden"
          variants={{
            hidden: { opacity: 0, y: 50, scale: 0.9 },
            visible: { 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: { 
                delay: index * 0.2,
                type: "spring", 
                stiffness: 80 
              }
            }
          }}
          whileHover="hover"
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br opacity-50"
            variants={{
              hover: { opacity: 0.8 }
            }}
            initial={{ opacity: 0.3 }}
            animate={controls}
          />
          
          {/* Particle background */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
                animate={{
                  y: [0, -40, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>

          {/* Card content */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <motion.div 
              className="text-4xl md:text-5xl mb-4"
              animate={{
                y: [-5, 5, -5],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              {stat.icon}
            </motion.div>
            
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-cyan-100">
                <CountUp
                  end={stat.number}
                  suffix={stat.suffix}
                  decimals={stat.decimal || 0}
                  duration={2.5}
                  separator=","
                />
              </div>
              <div className="text-sm md:text-base font-semibold text-cyan-300 tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          </div>

          {/* Animated border */}
          <motion.div
            className="absolute inset-0 rounded-3xl border-2 pointer-events-none"
            variants={{
              hover: {
                borderColor: ['#22d3ee', '#a855f7', '#22d3ee'],
                transition: {
                  duration: 2,
                  repeat: Infinity
                }
              }
            }}
            initial={{ borderColor: 'rgba(34,211,238,0.2)' }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FloatingStats;