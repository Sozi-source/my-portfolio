// app/components/sections/ProjectsSection.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Filter, X, Server, Database } from "lucide-react";

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      title: "AfyaConnect",
      description: "Healthcare platform connecting patients with providers. Features appointment booking, medical records, and telemedicine.",
      image: "/assets/images/afya.webp",
      link: "https://afyaconnect-bm8i.vercel.app/",
      github: "https://github.com/Sozi-source/afyaconnect",
      tags: ["Django", "React", "PostgreSQL"],
      category: "fullstack",
      features: [
        "Patient-provider matching",
        "Real-time chat consultations",
        "Electronic medical records",
        "Appointment scheduling"
      ],
      tech: ["Django REST", "React", "PostgreSQL", "WebSockets"]
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce with Django backend and React frontend.",
      image: "/assets/images/shopping.png",
      link: "https://e-duka-three.vercel.app/",
      github: "https://github.com/Sozi-source/e-shop",
      tags: ["Django", "React", "PostgreSQL"],
      category: "fullstack",
      features: [
        "Product catalog",
        "Shopping cart",
        "User authentication",
        "Payment processing"
      ],
      tech: ["Django REST", "React", "PostgreSQL", "JWT"]
    },
    {
      title: "Weather App",
      description: "Real-time weather application with 5-day forecast.",
      image: "/assets/images/weather.png",
      link: "https://weather-one-lilac-34.vercel.app/",
      github: "https://github.com/Sozi-source/weather",
      tags: ["React", "API", "Tailwind"],
      category: "frontend",
      features: [
        "Real-time weather",
        "5-day forecast",
        "Location search"
      ],
      tech: ["React", "OpenWeather API", "Tailwind"]
    },
    {
      title: "Hotel Booking",
      description: "Hotel reservation system with search and booking features.",
      image: "/assets/images/travel.png",
      link: "https://airbnb-clone-three-dusky.vercel.app/",
      github: "https://github.com/Sozi-source/airbnb-clone",
      tags: ["React", "Booking", "UI/UX"],
      category: "frontend",
      features: [
        "Search filters",
        "Booking calendar",
        "User reviews"
      ],
      tech: ["React", "Context API", "Tailwind"]
    }
  ];

  const categories = [
    { id: "all", label: "All", icon: Filter },
    { id: "fullstack", label: "Full Stack", icon: Server },
    { id: "frontend", label: "Frontend", icon: ExternalLink }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="bg-white px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-12 h-px bg-teal-300" />
            <span className="text-sm font-medium text-teal-600 uppercase tracking-wider">Portfolio</span>
            <span className="w-12 h-px bg-teal-300" />
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900">
            Featured <span className="font-semibold text-teal-600">Projects</span>
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat.id
                    ? "bg-teal-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border border-gray-100"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-48 bg-white p-4 flex items-center justify-center border-b border-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/sozi-source"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </a>
        </div>
      </div>

      {/* Project Modal */}
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
              className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{selectedProject.title}</h3>
                  <button onClick={() => setSelectedProject(null)} className="text-gray-500 hover:text-gray-700">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-h-48 object-contain bg-gray-50 rounded-lg mb-4"
                />

                <p className="text-gray-600 mb-4">{selectedProject.description}</p>

                <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                <ul className="list-disc list-inside mb-4 text-sm text-gray-600">
                  {selectedProject.features?.map((f: string, i: number) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>

                <h4 className="font-semibold text-gray-900 mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech?.map((t: string, i: number) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 text-center"
                  >
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 text-center"
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