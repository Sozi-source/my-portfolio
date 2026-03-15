// app/components/common/Footer.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Github, 
  Linkedin, 
  Mail, 
  ArrowUp, 
  FileText,
  MapPin,
  Phone,
  Sparkles,
  Coffee
} from 'lucide-react';
import { CompactCVButton } from '@/components/cv/CVDownloadButton';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/Sozi-source", label: "GitHub", color: "hover:bg-gray-900", bg: "bg-gray-800" },
    { icon: Linkedin, href: "https://linkedin.com/in/wilfred-osozi", label: "LinkedIn", color: "hover:bg-teal-600", bg: "bg-teal-600/20" },
    { icon: Mail, href: "mailto:osoziw@gmail.com", label: "Email", color: "hover:bg-teal-500", bg: "bg-teal-500/20" }
  ];

  const quickLinks = [
    { name: "🏠 Home", id: "home" },
    { name: "👤 About", id: "about" },
    { name: "💻 Projects", id: "projects" },
    { name: "📁 Experience", id: "experience" },
    { name: "📬 Contact", id: "contact" }
  ];

  const contactDetails = [
    { icon: Mail, value: "osoziw@gmail.com", href: "mailto:osoziw@gmail.com" },
    { icon: MapPin, value: "Nairobi, Kenya", href: "#" },
    { icon: Phone, value: "+254 711 390 861", href: "tel:+254711390861" }
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
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-12 pb-6 overflow-hidden">
      {/* Cute decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating hearts */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-10 text-teal-500/10"
        >
          <Heart className="w-24 h-24" />
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, -15, 15, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-10 left-10 text-teal-500/10"
        >
          <Coffee className="w-20 h-20" />
        </motion.div>

        {/* Sparkles */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 left-20"
        >
          <Sparkles className="w-6 h-6 text-teal-400/20" />
        </motion.div>
        
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1.5 }}
          className="absolute bottom-20 right-20"
        >
          <Sparkles className="w-8 h-8 text-teal-400/20" />
        </motion.div>
      </div>

      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #14b8a6 2px, transparent 0)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          
          {/* Brand Section - Full width on mobile, column on larger */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center sm:text-left col-span-1 sm:col-span-2 lg:col-span-1"
          >
            <div className="inline-block sm:block">
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-teal-400 to-teal-300 bg-clip-text text-transparent">
                Wilfred Osozi
              </h3>
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
                <span className="w-8 h-0.5 bg-teal-500/50 rounded-full"></span>
                <span className="text-xs text-teal-400 font-medium tracking-wider">DUAL SPECIALIST</span>
                <span className="w-8 h-0.5 bg-teal-500/50 rounded-full"></span>
              </div>
            </div>
            
            <p className="text-gray-400 mb-4 text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
              🥗 Clinical Nutritionist & 💻 Full Stack Developer, bridging healthcare with technology through innovative digital solutions.
            </p>
            
            {/* Social Links - Horizontal scroll on mobile */}
            <div className="flex justify-center sm:justify-start gap-2 overflow-x-auto pb-2 hide-scrollbar">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2.5 ${social.bg} rounded-xl hover:shadow-lg transition-all duration-300 ${social.color} group relative`}
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4 text-gray-300 group-hover:text-white" />
                    <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-[10px] text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {social.label}
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links - Mobile friendly touch targets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center sm:text-left"
          >
            <h4 className="text-base font-semibold mb-4 text-white flex items-center justify-center sm:justify-start gap-2">
              <span className="w-1 h-4 bg-teal-500 rounded-full"></span>
              Quick Links
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2">
              {quickLinks.map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center justify-center sm:justify-start gap-2 group py-1.5"
                >
                  <span className="w-1.5 h-1.5 bg-teal-500/50 rounded-full group-hover:w-2 group-hover:bg-teal-400 transition-all" />
                  <span>{link.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info - Touch friendly */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center sm:text-left"
          >
            <h4 className="text-base font-semibold mb-4 text-white flex items-center justify-center sm:justify-start gap-2">
              <span className="w-1 h-4 bg-teal-500 rounded-full"></span>
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              {contactDetails.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 4 }}
                    className="flex items-center justify-center sm:justify-start gap-2"
                  >
                    <a
                      href={item.href}
                      className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors group"
                      {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      <Icon className="w-4 h-4 text-teal-500 group-hover:scale-110 transition-transform" />
                      <span className="text-xs sm:text-sm break-all">{item.value}</span>
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

          {/* CV Section - Full width on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center sm:text-left col-span-1 sm:col-span-2 lg:col-span-1"
          >
            <h4 className="text-base font-semibold mb-4 text-white flex items-center justify-center sm:justify-start gap-2">
              <span className="w-1 h-4 bg-teal-500 rounded-full"></span>
              My CV
            </h4>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-5 border border-gray-700/50 hover:border-teal-500/30 transition-colors">
              <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                📄 Download my complete professional experience and qualifications.
              </p>
              <div className="flex flex-col items-center sm:items-start gap-3">
                <CompactCVButton label="Download CV" />
                
                <motion.a
                  href="/assets/cv/index.html"
                  target="_blank"
                  whileHover={{ x: 4 }}
                  className="text-xs text-teal-400 hover:text-teal-300 flex items-center gap-2 group"
                >
                  <FileText className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
                  <span>View Online Version</span>
                  <span className="text-[10px] text-gray-500">↗</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Cute Divider with heart */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-teal-700 to-transparent" />
          </div>
          <div className="relative flex justify-center">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="bg-gray-900 px-4 py-1 rounded-full border border-teal-700/30"
            >
              <Heart className="w-4 h-4 text-teal-500 fill-teal-500/20" />
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar - Stacked on mobile */}
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4 pt-2">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs text-center sm:text-left text-gray-500 flex flex-wrap items-center justify-center gap-1"
          >
            <span>© {currentYear} Wilfred Osozi.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Crafted with <Heart className="w-3 h-3 text-teal-500 fill-current animate-pulse" /> in Kenya
            </span>
          </motion.p>

          <div className="flex items-center gap-4">
            {/* Tech stack indicator - cute addition */}
            <div className="flex items-center gap-1 text-xs text-gray-600">
              <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
              <span>React</span>
              <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
              <span>Next.js</span>
              <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
              <span>Tailwind</span>
            </div>

            {/* Scroll to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 bg-gray-800 rounded-xl hover:bg-teal-600 transition-colors group shadow-lg"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-gray-400 group-hover:text-white" />
            </motion.button>
          </div>
        </div>

        {/* Mobile-only decorative message */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="block sm:hidden text-center mt-4"
        >
          <p className="text-[10px] text-gray-700 flex items-center justify-center gap-1">
            <Sparkles className="w-3 h-3 text-teal-600" />
            Thanks for visiting!
            <Sparkles className="w-3 h-3 text-teal-600" />
          </p>
        </motion.div>
      </div>

      {/* Add hide-scrollbar styles */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </footer>
  );
};

export default Footer;