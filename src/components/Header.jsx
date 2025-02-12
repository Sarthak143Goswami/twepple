// components/Header.jsx
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGamepad } from 'react-icons/fa';

const Header = () => {
  const location = useLocation();
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Games', path: '/games' },
    { name: 'About', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.header
      className="fixed w-full bg-gray-900/80 backdrop-blur-md py-4 px-6 flex justify-between items-center z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" className="flex items-center gap-2">
        <FaGamepad className="text-3xl text-cyan-400" />
        <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Twepple
        </span>
      </Link>
      
      <nav>
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <li key={item.name} className="group relative">
              <Link
                to={item.path}
                className={`text-gray-300 hover:text-cyan-400 transition-colors ${
                  location.pathname === item.path ? 'text-cyan-400' : ''
                }`}
              >
                {item.name}
                <div className={`absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300 ${
                  location.pathname === item.path ? 'w-full' : ''
                }`} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;