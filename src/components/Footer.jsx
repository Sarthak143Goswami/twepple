// components/Footer.jsx
import { Link } from 'react-router-dom';
import { FaTwitter, FaDiscord, FaYoutube, FaGamepad } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-md pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <FaGamepad className="text-2xl text-cyan-400" />
            <span className="text-xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">
              Twepple
            </span>
          </div>
          <p className="text-gray-400">
            Crafting next-gen gaming experiences since 2020
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-bold text-cyan-400 mb-4">Explore</h4>
          <ul className="space-y-3">
            {['Careers', 'Press Kit', 'Legal', 'Support'].map((item) => (
              <li key={item}>
                <Link 
                  to={`/${item.toLowerCase().replace(' ', '-')}`} 
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold text-cyan-400 mb-4">Connect</h4>
          <div className="flex gap-4">
            {[
              { icon: <FaTwitter />, label: 'Twitter' },
              { icon: <FaDiscord />, label: 'Discord' },
              { icon: <FaYoutube />, label: 'YouTube' },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                className="text-2xl text-gray-400 hover:text-cyan-400 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold text-cyan-400 mb-4">Newsletter</h4>
          <input 
            type="email" 
            placeholder="Enter your email"
            className="w-full mb-4 p-2 rounded-lg bg-gray-700/50 text-white placeholder-gray-400"
          />
          <button className="bg-cyan-500 text-gray-900 px-6 py-2 rounded-full font-bold hover:bg-cyan-400 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
        © {new Date().getFullYear()} Twepple Technologies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;