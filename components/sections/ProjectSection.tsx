
// app/components/sections/ProjectsSection.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, 
  Github, 
  Heart, 
  ShoppingBag, 
  Cloud, 
  Sun,
  Sparkles,
  X
} from "lucide-react";

interface Project {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const ProjectsSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "AfyaConnect",
      description: "A healthcare platform connecting patients with medical providers. Features real-time consultations and smart scheduling.",
      icon: <Heart className="w-8 h-8" />,
      color: "teal",
      tags: ["Django", "React", "PostgreSQL", "WebSockets"],
      liveUrl: "https://afyaconnect-bm8i.vercel.app/",
      githubUrl: "https://github.com/Sozi-source/afyaconnect"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce with product catalog, shopping cart, and secure payments.",
      icon: <ShoppingBag className="w-8 h-8" />,
      color: "blue",
      tags: ["Django", "React", "PostgreSQL", "Redux"],
      liveUrl: "https://e-duka-three.vercel.app/",
      githubUrl: "https://github.com/Sozi-source/e-shop"
    },
    {
      title: "Weather App",
      description: "Real-time weather with current conditions, 5-day forecast, and location search.",
      icon: <Sun className="w-8 h-8" />,
      color: "amber",
      tags: ["React", "API", "Tailwind"],
      liveUrl: "https://weather-one-lilac-34.vercel.app/",
      githubUrl: "https://github.com/Sozi-source/weather"
    },
    {
      title: "Hotel Booking",
      description: "Hotel reservation platform with search filters, calendar, and reviews.",
      icon: <Cloud className="w-8 h-8" />,
      color: "purple",
      tags: ["React", "Context API", "Tailwind"],
      liveUrl: "https://airbnb-clone-three-dusky.vercel.app/",
      githubUrl: "https://github.com/Sozi-source/airbnb-clone"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { 
      text: string, 
      border: string, 
      button: string, 
      hover: string,
      light: string 
    }> = {
      teal: { 
        text: "text-teal-600", 
        border: "border-teal-200", 
        button: "bg-teal-600", 
        hover: "hover:bg-teal-700",
        light: "bg-teal-100"
      },
      blue: { 
        text: "text-blue-600", 
        border: "border-blue-200", 
        button: "bg-blue-600", 
        hover: "hover:bg-blue-700",
        light: "bg-blue-100"
      },
      amber: { 
        text: "text-amber-600", 
        border: "border-amber-200", 
        button: "bg-amber-600", 
        hover: "hover:bg-amber-700",
        light: "bg-amber-100"
      },
      purple: { 
        text: "text-purple-600", 
        border: "border-purple-200", 
        button: "bg-purple-600", 
        hover: "hover:bg-purple-700",
        light: "bg-purple-100"
      },
    };
    return colors[color] || colors.teal;
  };

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
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
            <span className="text-sm font-medium text-teal-700">My Work</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 mb-3">
            Featured <span className="font-bold text-teal-600">Projects</span>
          </h2>
          
          <p className="font-body text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Each project is crafted with attention to detail and user experience
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setSelectedProject(project)}
                className={`group relative rounded-xl overflow-hidden cursor-pointer bg-white border-2 ${colors.border} shadow-md hover:shadow-xl transition-all`}
              >
                <div className="p-6">
                  {/* Header with icon */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`w-14 h-14 rounded-xl ${colors.light} flex items-center justify-center ${colors.text}`}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-gray-800">{project.title}</h3>
                      <span className={`inline-block mt-1 px-3 py-1 text-xs font-medium rounded-full ${colors.light} ${colors.text}`}>
                        {project.color === 'teal' ? 'Healthcare' : 
                         project.color === 'blue' ? 'E-commerce' : 
                         project.color === 'amber' ? 'Weather' : 'Booking'}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-body text-sm text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-gray-100 rounded-full text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2 pt-3 border-t border-gray-100">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 px-3 py-2 ${colors.button} text-white text-sm rounded-lg ${colors.hover} transition-all flex items-center justify-center gap-1`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-3 h-3" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg hover:bg-gray-900 transition-all flex items-center justify-center gap-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-3 h-3" />
                      Code
                    </a>
                  </div>
                </div>

                {/* Animated border on hover */}
                {hoveredIndex === index && (
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 ${colors.button}`}
                    layoutId="projectBorder"
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* View more link */}
        <div className="text-center mt-10">
          <a
            href="https://github.com/Sozi-source"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-900 transition-all shadow-md"
          >
            <Github className="w-4 h-4" />
            <span>More on GitHub</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-xl"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl ${getColorClasses(selectedProject.color).light} flex items-center justify-center`}>
                      {selectedProject.icon}
                    </div>
                    <h3 className="font-heading text-xl font-bold text-gray-800">{selectedProject.title}</h3>
                  </div>
                  <button onClick={() => setSelectedProject(null)} className="p-1 hover:bg-gray-100 rounded-full">
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                <p className="font-body text-gray-600 mb-4">{selectedProject.description}</p>

                <div className="mb-4">
                  <h4 className="font-heading text-sm font-semibold text-gray-700 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    className="flex-1 px-4 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 text-center"
                  >
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    className="flex-1 px-4 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-900 text-center"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
