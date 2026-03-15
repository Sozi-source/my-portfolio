// app/components/sections/HomeSection.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  FileText,
  Code2,
  Briefcase,
  ChevronDown,
  MapPin,
  Calendar
} from "lucide-react";

const HomeSection: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    "Clinical Nutritionist & Full Stack Developer",
    "Building healthcare solutions",
    "Bridging medicine and technology",
    "Creating impact through code"
  ];

  useEffect(() => {
    const currentPhrase = phrases[currentIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, 50);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 30);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, phrases]);

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50 px-4 py-12 sm:py-16 md:py-20">
      <div className="relative max-w-7xl mx-auto min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Welcome badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full mb-6 border border-teal-200">
              <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-teal-700">Available for opportunities</span>
            </div>

            {/* Location chips */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-4">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-teal-50 rounded-full text-sm text-teal-700">
                <MapPin className="w-3 h-3" /> Nairobi, Kenya
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 rounded-full text-sm text-blue-700">
                <Calendar className="w-3 h-3" /> Available Now
              </span>
            </div>

            {/* Name with Playfair Display */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-800">
              Hi, I'm <span className="text-teal-600">Wilfred Osozi</span>
            </h1>

            {/* Typing animation with Inter */}
            <div className="h-16 mb-6">
              <p className="font-body text-lg sm:text-xl text-gray-600">
                {displayText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-0.5 h-6 ml-1 bg-teal-500"
                />
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
              <a
                href="#projects"
                className="px-6 py-3 bg-teal-600 text-white rounded-xl font-medium shadow-md hover:bg-teal-700 transition-all flex items-center justify-center gap-2"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3 bg-white text-gray-700 rounded-xl font-medium shadow-md hover:shadow-lg transition-all border border-teal-200 flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-teal-600" />
                Contact Me
              </a>

              <a
                href="/assets/cv/wilfred-osozi-cv.pdf"
                download
                className="px-6 py-3 bg-blue-50 text-blue-700 rounded-xl font-medium shadow-md hover:shadow-lg transition-all border border-blue-200 flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Resume
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/Sozi-source"
                target="_blank"
                className="w-10 h-10 bg-white rounded-xl shadow-md flex items-center justify-center text-gray-600 hover:text-teal-600 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/wilfred-osozi"
                target="_blank"
                className="w-10 h-10 bg-white rounded-xl shadow-md flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:osoziw@gmail.com"
                className="w-10 h-10 bg-white rounded-xl shadow-md flex items-center justify-center text-gray-600 hover:text-teal-600 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="/assets/images/profile4.jpg"
                  alt="Wilfred Osozi"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 30%' }}
                />
              </div>

              {/* Minimal floating icons */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-teal-500 rounded-xl shadow-lg flex items-center justify-center text-white">
                <Code2 className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500 rounded-xl shadow-lg flex items-center justify-center text-white">
                <Briefcase className="w-6 h-6" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs text-gray-400">scroll</span>
          <ChevronDown className="w-4 h-4 text-teal-500" />
        </div>
      </motion.a>
    </section>
  );
};

export default HomeSection;