// components/Blog/BlogFooter.jsx
import { Link } from 'react-router-dom';
import { FaTwitter, FaYoutube, FaInstagram, FaBookOpen, FaPenNib } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ShieldCheckIcon, BookOpenIcon } from '@heroicons/react/solid';

const BlogFooter = () => {
  return (
    <footer className="bg-indigo-900 pt-24 pb-12 border-t border-indigo-700">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        
        {/* Brand Section */}
        <div className="md:col-span-2 space-y-7">
          <div className="flex items-center gap-4 group">
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              className="p-3 bg-white/10 rounded-2xl backdrop-blur-sm"
            >
              <FaBookOpen className="text-4xl text-white" />
            </motion.div>
            <div>
              <h2 className="text-3xl font-bold text-white font-serif">
                Twepple Blog
              </h2>
              <p className="text-lg text-indigo-200 mt-2">
                Where Play Meets Learning
              </p>
            </div>
          </div>
          <p className="text-indigo-200 text-base leading-relaxed max-w-md">
            Join our community of parents and educators exploring innovative ways to 
            combine technology and tradition in child development.
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
                className="p-3 rounded-xl bg-white/10 text-2xl text-indigo-200 hover:text-white transition-all"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-7 px-4">
          <h4 className="text-xl font-semibold text-white font-serif">Explore</h4>
          <ul className="space-y-4">
            {['Blog','Games', 'Careers', 'About'].map((item) => (
              <motion.li 
                key={item}
                whileHover={{ x: 5 }}
              >
                <Link 
                  to={`/${item.toLowerCase()}`} state={{ from: "footer" }}
                  className="text-indigo-200 hover:text-white text-base flex items-center gap-2"
                >
                  <FaPenNib className="text-sm text-indigo-400" />
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-7">
          <h4 className="text-xl font-semibold text-white font-serif">Stay Updated</h4>
          <form className="space-y-4">
            <input 
              type="email" 
              placeholder="Your email address"
              className="w-full p-3 rounded-lg bg-white/10 border border-indigo-700 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full bg-white text-indigo-900 py-3 rounded-lg font-semibold hover:bg-indigo-100 transition-colors"
            >
              Subscribe
            </motion.button>
          </form>
          
          <div className="p-4 bg-white/5 rounded-xl border border-indigo-700">
            <div className="flex items-center gap-3 text-white">
              <BookOpenIcon className="h-6 w-6 text-indigo-400" />
              <p className="text-sm">100+ Articles on Child Development</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-indigo-700 mt-14 pt-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-indigo-300 text-base">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📚</span>
            <div className="text-center">
              © {new Date().getFullYear()} Twepple Blog
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <Link 
              to="/privacy-policy" 
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              <ShieldCheckIcon className="h-5 w-5" />
              Privacy Policy
            </Link>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <span>Written with</span>
            <FaBookOpen className="text-indigo-400" />
            <span>&</span>
            <span className="text-xl">❤️</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;