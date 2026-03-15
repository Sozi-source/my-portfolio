// app/components/projects/ProjectCard.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Eye, Sparkles, Code2, Palette, Server, Cpu } from "lucide-react";

// Define proper types
interface Project {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies: string[];
  category?: 'fullstack' | 'frontend' | 'backend' | 'mobile';
  featured?: boolean;
  stats?: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}

// Category color mapping
const categoryColors = {
  fullstack: {
    bg: "bg-gradient-to-br from-purple-50 to-indigo-50",
    border: "border-purple-200",
    tag: "bg-purple-100 text-purple-700",
    icon: Server,
    accent: "purple-500",
    light: "purple-50",
    hover: "hover:border-purple-500"
  },
  frontend: {
    bg: "bg-gradient-to-br from-blue-50 to-cyan-50",
    border: "border-blue-200",
    tag: "bg-blue-100 text-blue-700",
    icon: Palette,
    accent: "blue-500",
    light: "blue-50",
    hover: "hover:border-blue-500"
  },
  backend: {
    bg: "bg-gradient-to-br from-green-50 to-emerald-50",
    border: "border-green-200",
    tag: "bg-green-100 text-green-700",
    icon: Cpu,
    accent: "green-500",
    light: "green-50",
    hover: "hover:border-green-500"
  },
  mobile: {
    bg: "bg-gradient-to-br from-orange-50 to-amber-50",
    border: "border-orange-200",
    tag: "bg-orange-100 text-orange-700",
    icon: Code2,
    accent: "orange-500",
    light: "orange-50",
    hover: "hover:border-orange-500"
  }
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  hoveredIndex,
  setHoveredIndex,
}) => {
  // Get colors based on category with fallback
  const category = project.category || 'frontend';
  const colors = categoryColors[category] || categoryColors.frontend;
  const CategoryIcon = colors.icon;

  // Generate unique pattern ID
  const patternId = `pattern-${project.title.replace(/\s+/g, '-').toLowerCase()}-${index}`;

  // Determine border color class dynamically
  const borderColorClass = colors.border;
  const hoverBorderClass = colors.hover;

  return (
    <motion.div
      className={`group relative rounded-2xl overflow-hidden transition-all duration-500 w-full max-w-sm mx-auto ${colors.bg} border-2 ${borderColorClass} ${hoverBorderClass} shadow-lg hover:shadow-2xl`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      whileHover={{ y: -8 }}
    >
      {/* Decorative pattern overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none">
        <pattern
          id={patternId}
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="1" fill="currentColor" className="text-gray-400" />
        </pattern>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>

      {/* Category Badge - Top Left */}
      <div className="absolute top-3 left-3 z-20">
        <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm shadow-sm border ${colors.border}`}>
          <CategoryIcon className={`w-3.5 h-3.5 text-${colors.accent}`} />
          <span className={`text-xs font-medium text-${colors.accent}`}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
        </div>
      </div>

      {/* Featured Badge - Top Right */}
      {project.featured && (
        <div className="absolute top-3 right-3 z-20">
          <div className="flex items-center gap-1 px-3 py-1.5 bg-yellow-400/90 backdrop-blur-sm rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-yellow-800" />
            <span className="text-xs font-medium text-yellow-800">Featured</span>
          </div>
        </div>
      )}

      {/* Image Container */}
      <div className="relative w-full aspect-video overflow-hidden bg-white">
        <motion.img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        {/* Hover Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-between p-4"
        >
          <div className="flex gap-2">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 bg-white rounded-xl hover:bg-teal-600 hover:text-white transition-all shadow-lg"
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
                className="p-2.5 bg-white rounded-xl hover:bg-gray-900 hover:text-white transition-all shadow-lg"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </motion.a>
            )}
          </div>
          
          <span className="text-xs text-white/70 flex items-center gap-1">
            View Details
            <ExternalLink className="w-3 h-3" />
          </span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 bg-white/80 backdrop-blur-sm">
        {/* Title */}
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors line-clamp-1">
            {project.title}
          </h3>
          <div className={`w-1.5 h-1.5 rounded-full bg-${colors.accent} animate-pulse`} />
        </div>
        
        <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-1">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${colors.tag} shadow-sm hover:shadow-md`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Stats */}
        {project.stats && project.stats.length > 0 && (
          <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
            {project.stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span>{stat}</span>
              </div>
            ))}
          </div>
        )}

        {/* Action Links */}
        <div className="mt-3 flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex gap-4">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-teal-600 hover:text-teal-700 hover:gap-2 transition-all"
                whileHover={{ x: 3 }}
              >
                Live Demo
                <ExternalLink className="w-3.5 h-3.5" />
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:gap-2 transition-all"
                whileHover={{ x: 3 }}
              >
                Code
                <Github className="w-3.5 h-3.5" />
              </motion.a>
            )}
          </div>
          
          <CategoryIcon className={`w-4 h-4 text-${colors.accent}/30`} />
        </div>
      </div>

      {/* Animated Border */}
      <motion.div
        className={`absolute bottom-0 left-0 right-0 h-1 bg-${colors.accent}`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ originX: 0 }}
      />

      {/* Corner Accent */}
      <div className={`absolute top-0 right-0 w-16 h-16 overflow-hidden`}>
        <div className={`absolute transform rotate-45 bg-${colors.accent}/10 w-20 h-20 -top-10 -right-10`} />
      </div>
    </motion.div>
  );
};

export default ProjectCard;