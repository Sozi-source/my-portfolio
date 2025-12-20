"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin
} from "lucide-react";

// Home Section
const HomeSection: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    "I'm a web developer, specialised in front-end development.",
    "I'm a problem solver.",
    "I build applications that solve real-world problems.",
    "I love coding and learning new technologies.",
    "I'm passionate about creating beautiful and functional user experiences."
  ];

  useEffect(() => {
    const currentPhrase = phrases[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 30 : 50);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#contact", label: "Email" }
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 px-5 md:px-[10%] pt-20 relative overflow-hidden"
    >
      {/* Background animated blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20"
      />

      {/* Text Section */}
      <motion.div
        className="flex-1 text-center md:text-left space-y-6 mt-10 md:mt-0 z-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="inline-block"
        >
          <span className="px-4 py-2 bg-blue-100 text-blue-500 rounded-full text-lg">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Wilfred Osozi
          </span>
        </motion.h1>

        <motion.div
          className="text-lg sm:text-xl md:text-2xl text-gray-700 h-20 flex items-center justify-center md:justify-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <span className="font-medium">
            {displayText}
            <span className="animate-pulse text-blue-600">|</span>
          </span>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(37, 99, 235, 0.3)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition shadow-lg font-semibold"
          >
            View My Work
            <ArrowRight className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition font-semibold"
          >
            Contact Me
            <Mail className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center md:justify-start gap-4 pt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition border border-gray-200"
                aria-label={social.label}
              >
                <Icon className="w-6 h-6 text-gray-700" />
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Profile Section */}
      <motion.div
        className="flex-1 mt-10 md:mt-0 flex justify-center md:justify-end z-10 relative"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {/* Rotating borders */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-4 border-dashed border-blue-300 opacity-30"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute inset-4 rounded-full border-4 border-dashed border-purple-300 opacity-30"
        />

        {/* Profile Image */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 3 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-blue-600 shadow-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
            <img
              src="/assets/images/profile.jpg"
              alt="Wilfred Osozi"
              className="w-full h-full object-cover"
            />
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -left-4 bg-white rounded-full p-3 shadow-lg"
          >
            <span className="text-2xl">💻</span>
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg"
          >
            <span className="text-2xl">🚀</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeSection;
