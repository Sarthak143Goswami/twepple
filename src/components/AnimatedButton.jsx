// components/AnimatedButton.jsx
import { motion } from 'framer-motion';
import { FaApple, FaGooglePlay, FaDownload } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const AnimatedButton = ({ 
  text, 
  icon, 
  color = 'purple', 
  size = 'normal', 
  href, 
  className = '',
  type = 'button',
  outline = false
}) => {
  const colors = {
    purple: 'from-purple-500 to-pink-500',
    cyan: 'from-cyan-400 to-blue-500',
    orange: 'from-orange-400 to-red-500',
    green: 'from-green-400 to-emerald-500'
  };

  const sizes = {
    normal: 'py-3 px-8 text-lg',
    small: 'py-2 px-6 text-base',
  };

  const icons = {
    apple: <FaApple className="mr-2" />,
    android: <FaGooglePlay className="mr-2" />,
    arrow: <FiArrowRight className="ml-2" />,
    download: <FaDownload className="mr-2" />
  };

  const ButtonContent = (
    <motion.span
      className="relative z-10 flex items-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon && icons[icon]}
      {text}
      {icon === 'arrow' && icons.arrow}
    </motion.span>
  );

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative overflow-hidden rounded-full ${sizes[size]} ${className}`}
    >
      {outline ? (
        <motion.div
          className={`bg-gradient-to-r ${colors[color]} p-0.5 rounded-full`}
          initial={{ backgroundPosition: '0% 50%' }}
          animate={{ backgroundPosition: '100% 50%' }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <div className="bg-gray-900 rounded-full px-8 py-2">
            {ButtonContent}
          </div>
        </motion.div>
      ) : (
        <motion.div
          className={`bg-gradient-to-r ${colors[color]} rounded-full px-8 py-2`}
          initial={{ backgroundPosition: '0% 50%' }}
          animate={{ backgroundPosition: '100% 50%' }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          {ButtonContent}
        </motion.div>
      )}
    </motion.div>
  );
};

export default AnimatedButton;