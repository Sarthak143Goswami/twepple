// components/Header.jsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { FaGamepad, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Games', path: '/games' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.header
      className={`fixed w-full py-4 px-6 flex justify-between items-center z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" className="flex items-center gap-2 group">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8 }}
        >
          <FaGamepad className="text-3xl text-cyan-400" />
        </motion.div>
        <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Twepple
        </span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`relative px-4 py-2 text-gray-100 hover:text-cyan-400 transition-colors ${
              location.pathname === item.path ? 'text-cyan-400' : ''
            }`}
          >
            {item.name}
            {location.pathname === item.path && (
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"
                layoutId="header-underline"
              />
            )}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl text-gray-300 hover:text-cyan-400 transition-colors"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-lg py-4"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block px-6 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 ${
                location.pathname === item.path ? 'text-cyan-400 bg-gray-800/50' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;