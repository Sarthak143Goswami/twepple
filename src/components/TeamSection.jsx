// components/TeamSection.jsx
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Nirmal Patidar",
      role: "CEO & Lead Developer",
      image: "ceo.jpg",
      social: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      name: "Sarthak Goswami",
      role: "Game Designer",
      image: "creative.jpg",
      social: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      name: "Prakhar Singhour",
      role: "Game Designer",
      image: "designer.jpg",
      social: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      name: "Ayush",
      role: "Game Designer",
      image: "designer.jpg",
      social: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      name: "Kunal",
      role: "Game Designer",
      image: "designer.jpg",
      social: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      name: "Koushlesh",
      role: "Game Designer",
      image: "designer.jpg",
      social: { twitter: "#", linkedin: "#", github: "#" }
    }
  ];

  return (
    <section className="py-16">
      <h3 className="text-3xl font-bold text-cyan-400 mb-12 text-center">
        Meet the Team
      </h3>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Tilt
              tiltEnable={true}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              scale={1.05}
            >
              <div className="bg-gray-800/50 p-6 rounded-2xl backdrop-blur-sm hover:bg-gray-800/70 transition-all">
                <div className="relative group">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover rounded-xl mb-6"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-2xl font-bold text-white">{member.name}</h4>
                    <p className="text-cyan-400">{member.role}</p>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href={member.social.twitter} className="p-2 bg-gray-900/50 rounded-full hover:bg-cyan-400">
                      <FaTwitter className="text-xl" />
                    </a>
                    <a href={member.social.linkedin} className="p-2 bg-gray-900/50 rounded-full hover:bg-cyan-400">
                      <FaLinkedin className="text-xl" />
                    </a>
                    <a href={member.social.github} className="p-2 bg-gray-900/50 rounded-full hover:bg-cyan-400">
                      <FaGithub className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;