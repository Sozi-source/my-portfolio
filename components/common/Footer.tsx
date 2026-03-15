// app/components/common/Footer.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp, FileText } from 'lucide-react';
import { CompactCVButton } from '@/components/cv/CVDownloadButton';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/Sozi-source", label: "GitHub", color: "hover:bg-gray-900" },
    { icon: Linkedin, href: "https://linkedin.com/in/wilfred-osozi", label: "LinkedIn", color: "hover:bg-teal-600" },
    { icon: Mail, href: "mailto:osoziw@gmail.com", label: "Email", color: "hover:bg-teal-500" }
  ];

  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" }
  ];

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-gray-900 text-white pt-16 pb-8 overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #14b8a6 2px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-teal-400">Wilfred Osozi</span>
            </h3>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Clinical Nutritionist and Full Stack Developer passionate about connecting healthcare with technology through innovative digital solutions.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 bg-gray-800 rounded-lg hover:shadow-lg transition-all duration-300 ${social.color} group`}
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4 text-gray-300 group-hover:text-white" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-teal-500 rounded-full group-hover:w-2 transition-all" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-teal-500" />
                <span>osoziw@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-4 h-4 text-teal-500">📍</span>
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-4 h-4 text-teal-500">📱</span>
                <span>+254 711 390 861</span>
              </li>
            </ul>
          </motion.div>

          {/* CV Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">My CV</h4>
            <p className="text-sm text-gray-400 mb-4">
              Download my complete professional experience and qualifications.
            </p>
            <CompactCVButton label="Download CV" />
            
            <div className="mt-4">
              <motion.a
                href="/assets/cv/index.html"
                target="_blank"
                whileHover={{ x: 5 }}
                className="text-sm text-teal-400 hover:text-teal-300 flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                View Online Version
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-teal-700 to-transparent my-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm text-gray-400 flex items-center gap-1"
          >
            © {currentYear} Wilfred Osozi. All rights reserved.
            <span className="flex items-center gap-1 ml-2">
              Made with <Heart className="w-3 h-3 text-teal-500 fill-current" /> in Kenya
            </span>
          </motion.p>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 bg-gray-800 rounded-lg hover:bg-teal-600 transition-colors group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 text-gray-400 group-hover:text-white" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;