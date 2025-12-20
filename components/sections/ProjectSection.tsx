"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, Github } from "lucide-react";

const ProjectsSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Weather App",
      description: "A web application that provides current weather information for any city using API integration.",
      image: "/assets/images/weather.png",
      link: "https://weather-one-lilac-34.vercel.app/",
      tags: ["React", "API", "Tailwind"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "E-commerce",
      description: "A full-stack e-commerce application built with NextJS.",
      image: "/assets/images/shopping.png",
      link: "https://e-duka-three.vercel.app/",
      tags: ["Next.js", "Full-stack", "E-commerce"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Hotel Booking",
      description: "A web app that allows users to search, book, and manage hotel reservations online.",
      image: "/assets/images/travel.png",
      link: "https://airbnb-clone-three-dusky.vercel.app/",
      tags: ["React", "Booking", "UI/UX"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Age Calculator",
      description: "A web app that calculates a person's exact age based on their date of birth.",
      image: "/assets/images/calculator.png",
      link: "https://fe-mentor-tet4.vercel.app/",
      tags: ["JavaScript", "Logic", "Interactive"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Countries Information",
      description: "A web app providing details about countries, including population, capital, and region.",
      image: "/assets/images/country.png",
      link: "https://country-search-hazel-beta.vercel.app/",
      tags: ["React", "REST API", "Search"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Guessing Challenge",
      description: "The app lets users guess a randomly generated number between 0 and 100.",
      image: "/assets/images/gg-512.png",
      link: "https://number-game-nu-eight.vercel.app/",
      tags: ["JavaScript", "Game", "Logic"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-orange-50 px-6 md:px-20 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A collection of my recent work showcasing web development, design, and problem-solving skills.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 w-full flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image & Gradient Overlay */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0, scale: hoveredIndex === index ? 1 : 0 }}
                  className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg"
                >
                  <ExternalLink className="w-5 h-5 text-blue-600" />
                </motion.div>
              </div>

              {/* Project Details */}
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <motion.div whileHover={{ rotate: 45 }} transition={{ duration: 0.3 }}>
                    <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </motion.div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all group/link"
                  whileHover={{ x: 5 }}
                >
                  View Project
                  <ExternalLink className="w-4 h-4 group-hover/link:rotate-45 transition-transform" />
                </motion.a>
              </div>

              {/* Gradient Divider */}
              <motion.div
                className={`h-1 bg-gradient-to-r ${project.color}`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                style={{ transformOrigin: "left" }}
              />
            </motion.div>
          ))}
        </div>

        {/* GitHub Button */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition shadow-lg"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
