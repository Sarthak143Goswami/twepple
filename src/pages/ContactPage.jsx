//// pages/ContactPage.jsx
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_w8h7yr2',
        'template_tf0w1rj',
        formData,
        '2KICg8mWQco8U5-Iy'
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <Header />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold text-center mb-16 md:mb-24"
        >
          <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
            Let's Create
          </span>
          <span className="block mt-4 text-xl md:text-2xl text-gray-300 font-light">
            Something Amazing Together
          </span>
        </motion.h2>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Enhanced Contact Information */}
          <div className="space-y-6 lg:space-y-8">
            {[
              {
                icon: <FaMapMarkerAlt className="text-2xl text-cyan-400" />,
                title: "Head Office",
                content: "353 Krishna Bunglows, Rau, Indore",
                gradient: "from-cyan-400/10 to-purple-400/10"
              },
              {
                icon: <FaPhone className="text-2xl text-purple-400" />,
                title: "Phone",
                content: "+91 70300 23322",
                gradient: "from-purple-400/10 to-pink-400/10"
              },
              {
                icon: <FaEnvelope className="text-2xl text-cyan-400" />,
                title: "Email",
                content: "hr@twepple.com",
                gradient: "from-cyan-400/10 to-blue-400/10"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="group relative p-6 lg:p-8 bg-gray-800/30 rounded-3xl backdrop-blur-lg 
                  border border-cyan-400/20 hover:border-purple-400/40 transition-all
                  hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300 rounded-3xl ${item.gradient}`} />
                
                <div className="flex items-center gap-5 relative">
                  <div className="p-4 bg-gray-900/50 rounded-xl backdrop-blur-sm border 
                    border-cyan-400/20 group-hover:border-purple-400/40 transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 
                      to-purple-400 bg-clip-text text-transparent mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-100 leading-relaxed text-lg">{item.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Contact Form */}
          <motion.div 
            variants={itemVariants}
            className="relative bg-gray-800/40 p-8 lg:p-12 rounded-[2.5rem] backdrop-blur-lg 
              border border-purple-400/30 hover:border-cyan-400/40 transition-all
              shadow-2xl hover:shadow-3xl hover:shadow-cyan-500/10"
          >
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-purple-400/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl" />
            
            <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
              {['name', 'email', 'message'].map((field, index) => (
                <div key={field} className="relative">
                  <label className="absolute -top-5 left-4 px-2 bg-gray-800/40 text-sm 
                    text-cyan-300 rounded-full">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  {field === 'message' ? (
                    <textarea
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full bg-gray-700/20 rounded-xl p-4 pr-6 text-white 
                        placeholder-gray-400/70 focus:ring-2 focus:ring-cyan-400/50 
                        focus:outline-none transition-all min-h-[160px] backdrop-blur-sm
                        border border-cyan-400/20 hover:border-purple-400/40"
                      placeholder={`Your ${field}...`}
                      required
                    />
                  ) : (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full bg-gray-700/20 rounded-xl p-4 pr-6 text-white 
                        placeholder-gray-400/70 focus:ring-2 focus:ring-cyan-400/50 
                        focus:outline-none transition-all backdrop-blur-sm
                        border border-cyan-400/20 hover:border-purple-400/40"
                      placeholder={`Your ${field}...`}
                      required
                    />
                  )}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-400/80">
                    {{
                      name: '👤',
                      email: '✉️',
                      message: '💬'
                    }[field]}
                  </div>
                </div>
              ))}

              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl flex items-center gap-3 backdrop-blur-sm
                    ${submitStatus === 'success' 
                      ? 'bg-green-500/20 text-green-400 border border-green-400/30' 
                      : 'bg-red-500/20 text-red-400 border border-red-400/30'}`}
                >
                  <FaPaperPlane className="flex-shrink-0" />
                  <span className="text-sm md:text-base">
                    {submitStatus === 'success' 
                      ? 'Message launched successfully! 🚀' 
                      : 'Launch sequence failed. Retrying...'}
                  </span>
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-cyan-400 to-purple-400 text-gray-900 
                  px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center 
                  gap-3 hover:shadow-[0_10px_40px_-15px_rgba(34,211,238,0.5)] relative overflow-hidden
                  ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-20 transition-opacity" />
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-800">
                      Launching...
                    </span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-lg animate-pulse" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-800">
                      Launch Message
                    </span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;