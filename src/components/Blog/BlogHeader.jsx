// components/Blog/BlogHeader.jsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion} from 'framer-motion';
import { FaBookOpen, FaBars, FaTimes, FaPenNib } from 'react-icons/fa';

const BlogHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Games', path: '/games' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' }
  ];

  return (
    <motion.header
      className="fixed w-full py-4 px-6 flex justify-between items-center z-50 bg-indigo-900 border-b border-indigo-700 shadow-xl"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link 
        to="/" 
        className="flex items-center gap-3 group"
      >
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          className="p-2 bg-white/10 rounded-lg backdrop-blur-sm"
        >
          <FaBookOpen className="text-3xl text-white" />
        </motion.div>
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-white font-serif">
            Twepple Blog
          </span>
          <span className="text-xs text-indigo-300">Learning Through Play</span>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`relative px-4 py-2 text-gray-200 hover:text-white transition-all ${
              location.pathname === item.path 
              ? 'text-white font-medium after:w-full after:bg-white' 
              : 'after:w-0 hover:after:w-full'
            } after:absolute after:bottom-0 after:left-0 after:h-[2px] after:transition-all after:duration-300`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl text-white hover:text-gray-200 transition-colors"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-indigo-900 py-4 shadow-xl"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block px-6 py-3 text-gray-200 hover:text-white hover:bg-indigo-800 ${
                location.pathname === item.path ? 'text-white bg-indigo-800' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <FaPenNib className="inline-block mr-2 text-sm" />
              {item.name}
            </Link>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
};

export default BlogHeader;