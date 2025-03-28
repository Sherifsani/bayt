"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BiLogoLinkedin, BiLogoGithub, BiLogoTwitter, BiEnvelope } from "react-icons/bi";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
  };

  const inputVariants = {
    focus: { 
      scale: 1.02,
      borderColor: "#8B5CF6",
      boxShadow: "0 0 0 2px rgba(139, 92, 246, 0.2)",
    }
  };

  const socialLinks = [
    { 
      icon: BiLogoGithub, 
      href: "https://github.com/sherifsani", 
      label: "GitHub",
      color: "hover:bg-gray-800" 
    },
    { 
      icon: BiLogoLinkedin, 
      href: "https://linkedin.com/in/sherif-sani", 
      label: "LinkedIn",
      color: "hover:bg-blue-600" 
    },
    { 
      icon: BiLogoTwitter, 
      href: "https://twitter.com/sherifsani", 
      label: "Twitter",
      color: "hover:bg-sky-500" 
    },
    { 
      icon: BiEnvelope, 
      href: "mailto:sanisherif@example.com", 
      label: "Email",
      color: "hover:bg-purple-600" 
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-block p-4 rounded-full bg-purple-100 mb-6"
          >
            <div className="text-4xl">📧</div>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-600 to-gray-900 bg-clip-text text-transparent"
            style={{ backgroundSize: "200%" }}
          >
            Let's Connect
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Have a question, collaboration idea, or just want to say hi? 
            I'd love to hear from you! Drop me a message below.
          </motion.p>
        </motion.div>

        <motion.form
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <motion.input
                whileFocus="focus"
                variants={inputVariants}
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none transition-shadow duration-200"
                placeholder="Your name"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <motion.input
                whileFocus="focus"
                variants={inputVariants}
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none transition-shadow duration-200"
                placeholder="your@email.com"
              />
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <motion.textarea
              whileFocus="focus"
              variants={inputVariants}
              id="message"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none transition-shadow duration-200 resize-none"
              placeholder="What would you like to discuss?"
            />
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Send Message
            </motion.button>
          </motion.div>
        </motion.form>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-xl font-semibold mb-6"
          >
            Or connect with me on social media
          </motion.h3>
          <motion.div 
            variants={itemVariants}
            className="flex justify-center gap-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full text-gray-600 hover:text-white transition-all duration-200 ${link.color}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title={link.label}
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
