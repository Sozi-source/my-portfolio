// app/components/projects/ProjectCard.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";
import { ProjectCardProps } from "@/app/interfaces";

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  hoveredIndex,
  setHoveredIndex,
}) => {
  return (
    <motion.div
      className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl w-full max-w-sm mx-auto border border-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      whileHover={{ y: -5 }}
    >
      {/* Image Container */}
      <div className="relative w-full aspect-video overflow-hidden bg-gray-100">
        <motion.img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        
        {/* Subtle Overlay */}
        <motion.div
          className="absolute inset-0 bg-teal-600/0 group-hover:bg-teal-600/10 transition-colors duration-500"
        />

        {/* Hover Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-start p-4"
        >
          <div className="flex gap-2">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-white rounded-full hover:bg-teal-600 hover:text-white transition-colors"
                aria-label="Live Demo"
              >
                <Eye className="w-4 h-4" />
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-white rounded-full hover:bg-gray-900 hover:text-white transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors line-clamp-1">
          {project.title}
        </h3>
        
        <p className="text-sm text-gray-600 line-clamp-2">
          {project.description}
        </p>
  
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full group-hover:bg-teal-100 group-hover:text-teal-700 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-3 flex gap-4">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-teal-600 font-semibold text-sm hover:gap-3 transition-all"
              whileHover={{ x: 5 }}
            >
              Live Demo
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 font-semibold text-sm hover:text-gray-900 hover:gap-3 transition-all"
              whileHover={{ x: 5 }}
            >
              Code
              <Github className="w-4 h-4" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Animated Border */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-teal-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{ originX: 0 }}
      />
    </motion.div>
  );
};

export default ProjectCard;