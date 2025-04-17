import { Link } from 'react-router-dom';
import { FaTwitter, FaYoutube, FaInstagram, FaGamepad, FaChevronRight, FaRegHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ShieldCheckIcon, HeartIcon } from '@heroicons/react/solid';

const Footer = () => {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-2xl pt-24 pb-12 border-t border-cyan-900/20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
        
        {/* Brand Section */}
        <div className="md:col-span-2 space-y-7">
          <div className="flex items-center gap-4 group">
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              className="p-3 bg-cyan-400/10 rounded-2xl backdrop-blur-sm"
            >
              <FaGamepad className="text-4xl text-cyan-400" />
            </motion.div>
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Twepple Kids
              </h2>
              <p className="text-lg text-gray-300 mt-2">
                Safe & Fun Gaming Adventures
              </p>
            </div>
          </div>
          <p className="text-gray-300 text-base leading-relaxed max-w-md">
            Creating magical, child-friendly gaming experiences that inspire creativity 
            and learning through playful interaction.
          </p>
          <div className="flex gap-5">
            {[
              { icon: <FaInstagram />, label: 'Instagram' },
              { icon: <FaYoutube />, label: 'YouTube' },
              { icon: <FaTwitter />, label: 'Twitter' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href="#"
                whileHover={{ y: -5 }}
                className="p-3 rounded-xl bg-gray-800/40 text-2xl text-gray-300 hover:text-cyan-400 transition-all hover:bg-gray-800/60"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Explore Section */}
        <div className="space-y-7 px-4">
          <h4 className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Explore
          </h4>
          <ul className="space-y-4">
            {['Blog','Games', 'Careers', 'About'].map((item) => (
              <motion.li 
                key={item}
                whileHover={{ x: 5 }}
              >
                <Link
                  to={`/${item.toLowerCase()}`}
                  className=" gap-3 text-gray-300 hover:text-cyan-300 text-base"
                >
                  <FaChevronRight className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="transition-transform">
                    {item}
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Support & Legal Section */}
        <div className="md:col-span-2 space-y-7">
          <div className="grid grid-cols-2 gap-8 h-full">
            {/* Support Column */}
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  Support
                </h4>
                <ul className="space-y-4">
                  <motion.li whileHover={{ x: 5 }}>
                    <Link
                      to="/contact"
                      className="gap-3 text-gray-300 hover:text-cyan-300 text-base"
                    >
                      <FaChevronRight className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="transition-transform">
                        Contact Us
                      </span>
                    </Link>
                  </motion.li>
                </ul>
              </div>

              {/* Empty Space Filler */}
              <motion.div 
                className="mt-8 p-4 bg-cyan-900/20 rounded-xl backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex flex-col items-start gap-2 text-cyan-300">
                  <span className="text-2xl">🧒👧</span>
                  <div>
                    <p className="text-sm font-medium">Parent's Approved</p>
                    
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Legal Column */}
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  Legal
                </h4>
                <ul className="space-y-4">
                  <motion.li whileHover={{ x: 5 }}>
                    <Link
                      to="/privacy-policy"
                      className="gap-3 text-gray-300 hover:text-cyan-300 text-base"
                    >
                      <FaChevronRight className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="transition-transform">
                        Privacy Policy
                      </span>
                    </Link>
                  </motion.li>
                </ul>
              </div>

              {/* Empty Space Filler */}
               {/* Safety Badge */}
                <motion.div 
                  className="p-4 mt-20 bg-emerald-900/20 rounded-2xl backdrop-blur-sm border border-emerald-800/30"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3 text-emerald-300">
                    <ShieldCheckIcon className="h-6 w-6 text-emerald-400" />
                    <span className="text-2xl font-semibold">100% Safe</span>
                  </div>
                  <p className="text-sm text-emerald-100 mt-2 flex items-center gap-2">
                    <span>Child-Friendly</span>
                    <HeartIcon className="h-4 w-4 text-rose-400" />
                  </p>
                </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Bar */}
      <div className="border-t border-cyan-900/20 mt-14 pt-8 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-400 to-purple-400 w-24 h-1 rounded-full" />
        
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-base">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🎮</span>
            <div className="mb-4 md:mb-0 text-center">
              © {new Date().getFullYear()} Twepple Kids
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <Link 
              to="/privacy-policy" 
              className="hover:text-cyan-300 transition-colors font-medium flex items-center gap-2 group"
            >
              <span>Your Privacy Matters</span>
              <span className="group-hover:translate-x-1 transition-transform">🔒</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <span>Made with</span>
            <FaRegHeart className="text-red-500" />
            <span>for Kids</span>
            <span className="text-xl">👧👦</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;