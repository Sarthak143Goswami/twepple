import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import emailjs from '@emailjs/browser';
import { FiX, FiUser, FiMail, FiFileText, FiBriefcase } from 'react-icons/fi';

const ApplicationForm = ({ isOpen, closeModal, jobTitle }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: '',
    position: jobTitle
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare email data
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        position: formData.position,
        coverLetter: formData.coverLetter
      };

      // Send email
      await emailjs.send(
        'service_w8h7yr2',
        'template_opnyah7',
        templateParams,
        '2KICg8mWQco8U5-Iy'
      );

      setSubmitStatus('success');
      setTimeout(() => {
        closeModal();
        setFormData({
          name: '',
          email: '',
          phone: '',
          coverLetter: '',
          position: jobTitle
        });
      }, 2000);
    } catch (error) {
      console.error('Submission failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          overflow: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          zIndex: 1000
        },
        content: {
          position: 'relative',
          inset: 'auto',
          maxHeight: '90vh',
          overflowY: 'auto',
          width: '100%',
          padding: '0',
          border: 'none',
          borderRadius: '1rem',
          background: 'none'
        }
      }}
    >
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 sm:p-8 relative min-w-[90vw] sm:min-w-0 sm:max-w-2xl"
        style={{ margin: 'auto' }}
      >
        <button
          onClick={closeModal}
          className="sticky top-2 right-2 ml-auto block text-gray-400 hover:text-cyan-400 transition-colors z-10 bg-gray-800 rounded-full p-1"
        >
          <FiX className="w-6 h-6" />
        </button>

        <div className="space-y-6" style={{ paddingBottom: '60px' }}>
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Apply for {jobTitle}
          </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div className="relative">
              <label className="text-cyan-300 mb-2 flex items-center gap-2">
                <FiUser className="w-5 h-5" />
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-gray-800/50 rounded-xl p-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            {/* Email Field */}
            <div className="relative">
              <label className="text-cyan-300 mb-2 flex items-center gap-2">
                <FiMail className="w-5 h-5" />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-gray-800/50 rounded-xl p-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-400 focus:outline-none"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            {/* Phone Field */}
            <div className="relative">
              <label className="text-cyan-300 mb-2 flex items-center gap-2">
                <FiBriefcase className="w-5 h-5" />
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full bg-gray-800/50 rounded-xl p-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>

          {/* Cover Letter */}
          <div className="relative">
            <label className="text-cyan-300 mb-2 flex items-center gap-2">
              <FiFileText className="w-5 h-5" />
              Cover Letter
            </label>
            <textarea
              name="coverLetter"
              rows="4"
              className="w-full bg-gray-800/50 rounded-xl p-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-400 focus:outline-none"
              value={formData.coverLetter}
              onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
            />
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 bg-green-500/20 text-green-400 rounded-xl flex items-center gap-2"
            >
              Application submitted successfully!
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 bg-red-500/20 text-red-400 rounded-xl flex items-center gap-2"
            >
              Error submitting application. Please try again.
            </motion.div>
          )}

          {/* Submit Button */}
          <div className="sticky bottom-0 bg-gradient-to-t from-gray-800 pt-4 pb-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
           className="w-full bg-gradient-to-r from-cyan-400 to-purple-400 text-gray-900 px-6 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
           >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900"></div>
                Submitting...
              </>
            ) : (
              'Submit Application'
            )}
          </motion.button>
          </div>
        </form>
        </div>
      </motion.div>
    </Modal>
  );
};

export default ApplicationForm;