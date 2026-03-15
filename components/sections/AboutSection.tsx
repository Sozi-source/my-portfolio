// app/components/sections/AboutSection.tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Heart, 
  Code2, 
  Briefcase, 
  GraduationCap,
  MapPin,
  Calendar,
  Users,
  Award,
  Sparkles
} from "lucide-react";

const Images = [
  "/assets/images/profile1.png",
  "/assets/images/profile3.png",
  "/assets/images/profile4.png",
];

const AboutSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const stats = [
    { icon: Briefcase, value: "9+", label: "Years", color: "teal" },
    { icon: Code2, value: "50+", label: "Projects", color: "blue" },
    { icon: Users, value: "1000+", label: "Students", color: "amber" },
    { icon: Award, value: "12+", label: "Certifications", color: "purple" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % Images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getColorClass = (color: string) => {
    const colors: Record<string, string> = {
      teal: "text-teal-600",
      blue: "text-blue-600",
      amber: "text-amber-600",
      purple: "text-purple-600",
    };
    return colors[color] || "text-teal-600";
  };

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span className="text-sm font-medium text-teal-700">About Me</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 mb-3">
            Who is <span className="font-bold text-teal-600">Wilfred?</span>
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Natural Images (No Frame) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Animated image container - no circular frame */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                  className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl"
                >
                  <img
                    src={Images[currentImageIndex]}
                    alt="Wilfred Osozi"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-teal-600 text-white px-4 py-2 rounded-full shadow-lg z-10">
                <span className="text-sm font-bold">9+ Years</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white px-4 py-2 rounded-full shadow-lg border border-blue-200 z-10">
                <span className="text-sm font-medium text-blue-600">🥗 Nutrition</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-4">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-teal-50 rounded-full text-sm text-teal-700">
                <MapPin className="w-3 h-3" /> Nairobi, Kenya
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 rounded-full text-sm text-blue-700">
                <Calendar className="w-3 h-3" /> Available Now
              </span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Clinical Nutritionist & <span className="text-teal-600">Full Stack Developer</span>
            </h3>

            <p className="font-body text-gray-600 mb-6 leading-relaxed text-lg">
              I'm passionate about bridging the gap between healthcare and technology. 
              With over 9 years of experience, I create solutions that make a real difference 
              in people's lives. When I'm not coding, you'll find me playing football or 
              exploring new technologies.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                const colorClass = getColorClass(stat.color);
                return (
                  <div key={i} className="bg-gray-50 p-3 rounded-xl text-center">
                    <Icon className={`w-5 h-5 mx-auto mb-1 ${colorClass}`} />
                    <div className="text-lg font-bold text-gray-800">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-xl font-medium shadow-md hover:bg-teal-700 transition-all"
            >
              Let's work together
              <Heart className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;