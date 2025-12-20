"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { ProjectCardProps } from "@/app/interfaces";

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  hoveredIndex,
  setHoveredIndex,
}) => {
  return (
    <motion.div
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-shadow duration-500 hover:shadow-2xl w-full max-w-sm mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {/* Image */}
      <div className="relative w-full aspect-video overflow-hidden rounded-t-2xl">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {project.color && (
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
          />
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
  
        <div className="flex flex-wrap gap-2 mt-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-3 flex gap-4">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
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
              className="flex items-center gap-2 text-gray-600 font-semibold hover:text-gray-900 hover:gap-3 transition-all"
              whileHover={{ x: 5 }}
            >
              GitHub
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          )}
        </div>
      </div>

      {project.color && (
        <motion.div
          className={`h-1 bg-gradient-to-r ${project.color}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          style={{ transformOrigin: "left" }}
        />
      )}
    </motion.div>
  );
};

export default ProjectCard;
