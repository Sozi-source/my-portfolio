// app/components/sections/HomeSection.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Code2,
  Briefcase,
  ChevronDown,
  MapPin,
  Calendar
} from "lucide-react";
import { CompactCVButton } from "@/components/cv/CVDownloadButton";

const HomeSection: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    "Clinical Nutritionist & Full Stack Developer",
    "Building healthcare solutions through code",
    "Bridging medicine and technology",
    "Creating impact through software development"
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

  const socialLinks = [
    { icon: Github, href: "https://github.com/Sozi-source", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/wilfred-osozi", label: "LinkedIn" },
    { icon: Mail, href: "mailto:osoziw@gmail.com", label: "Email" }
  ];

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-white px-4 sm:px-6 lg:px-8 pt-24 lg:pt-0 overflow-hidden"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f9ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f9ff_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      {/* Decorative elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 right-0 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-30"
      />
      
      <div className="relative max-w-7xl mx-auto min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Location badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full mb-8 border border-teal-100">
              <MapPin className="w-4 h-4 text-teal-600" />
              <span className="text-sm text-teal-700">Nairobi, Kenya</span>
              <span className="w-1 h-1 bg-teal-300 rounded-full" />
              <Calendar className="w-4 h-4 text-teal-600" />
              <span className="text-sm text-teal-700">Available Now</span>
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
              Wilfred{' '}
              <span className="text-teal-600">Osozi</span>
            </h1>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl text-gray-600 mb-4 font-light">
              Clinical Nutritionist & Full Stack Developer
            </h2>

            {/* Typing Animation */}
            <div className="h-16 mb-8">
              <p className="text-lg text-gray-500 border-l-4 border-teal-500 pl-4">
                {displayText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-0.5 h-5 ml-1 bg-teal-500"
                />
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="#projects"
                className="px-8 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors inline-flex items-center justify-center gap-2"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-teal-600 hover:text-teal-600 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </a>

              <CompactCVButton label="Resume" />
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start mb-8">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-teal-600 transition-colors flex items-center gap-1"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-xs">{social.label}</span>
                  </a>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0 pt-8 border-t border-gray-100">
              <div>
                <div className="text-2xl font-bold text-gray-900">9+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Years</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Students</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              {/* Image frame */}
              <div className="absolute inset-0 rounded-full border-2 border-teal-200 animate-pulse" />
              <div className="absolute inset-4 rounded-full border-2 border-teal-100" />
              
              {/* Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-white shadow-xl">
                <img
                  src="/assets/images/profile4.jpg"
                  alt="Wilfred Osozi"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 30%' }}
                />
              </div>

              {/* Decorative icons */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-teal-500 rounded-lg shadow-lg flex items-center justify-center text-white">
                <Code2 className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-sky-500 rounded-lg shadow-lg flex items-center justify-center text-white">
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
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs text-gray-400 uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-4 h-4 text-teal-500" />
        </div>
      </motion.a>
    </section>
  );
};

export default HomeSection;