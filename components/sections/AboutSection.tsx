// app/components/sections/AboutSection.tsx
"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript,
  SiReact, SiNextdotjs, SiTailwindcss,
  SiPython, SiDjango, SiNodedotjs, SiGraphql,
  SiPostgresql, SiMongodb, SiMysql, SiRedis,
  SiDocker, SiAmazonaws, SiGithub, SiFigma
} from "react-icons/si";
import { 
  Award, Code2, Users, Target, FileText, CheckCircle,
  Clock, MapPin, Briefcase, GraduationCap, Server, Database
} from "lucide-react";
import { CVDownloadButton } from "@/components/cv/CVDownloadButton";

const Images = [
  "/assets/images/profile1.webp",
  "/assets/images/profile3.webp",
  "/assets/images/profile4.jpg",
];

const AboutSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"skills" | "experience" | "education">("skills");
  const [skillCategory, setSkillCategory] = useState<"all" | "frontend" | "backend" | "tools">("all");
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % Images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const skills = [
    { name: "HTML5", icon: SiHtml5, color: "#E34F26", level: 90, category: "frontend" },
    { name: "CSS3", icon: SiCss3, color: "#1572B6", level: 85, category: "frontend" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 88, category: "frontend" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 80, category: "frontend" },
    { name: "React", icon: SiReact, color: "#61DAFB", level: 85, category: "frontend" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000", level: 82, category: "frontend" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4", level: 90, category: "frontend" },
    { name: "Python", icon: SiPython, color: "#3776AB", level: 85, category: "backend" },
    { name: "Django", icon: SiDjango, color: "#092E20", level: 82, category: "backend" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933", level: 80, category: "backend" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", level: 85, category: "backend" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 78, category: "backend" },
    { name: "Docker", icon: SiDocker, color: "#2496ED", level: 75, category: "tools" },
    { name: "AWS", icon: SiAmazonaws, color: "#FF9900", level: 70, category: "tools" },
    { name: "Git", icon: SiGithub, color: "#181717", level: 90, category: "tools" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E", level: 75, category: "tools" }
  ];

  const filteredSkills = skillCategory === "all" 
    ? skills 
    : skills.filter(s => s.category === skillCategory);

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Freelance",
      period: "2024 – Present",
      location: "Remote",
      description: "Building full-stack applications with Django REST framework, React, and PostgreSQL."
    },
    {
      title: "Head of Department",
      company: "Imperial College",
      period: "2023 – Present",
      location: "Thika, Kenya",
      description: "Leading departmental programs and mentoring faculty and students."
    }
  ];

  const education = [
    {
      degree: "Software Engineering",
      school: "ALX Africa",
      period: "2024 – 2025",
      description: "Full-stack development specialization"
    },
    {
      degree: "BSc. Food, Nutrition & Dietetics",
      school: "Egerton University",
      period: "2012 – 2015",
      grade: "Second Class Honors",
      description: "Specialized in clinical nutrition"
    }
  ];

  const stats = [
    { icon: Briefcase, value: "9+", label: "Years" },
    { icon: Code2, value: "55+", label: "Projects" },
    { icon: Server, value: "30+", label: "APIs" },
    { icon: Database, value: "8+", label: "DBs" }
  ];

  return (
    <section id="about" className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-12 h-px bg-teal-300" />
            <span className="text-sm font-medium text-teal-600 uppercase tracking-wider">About Me</span>
            <span className="w-12 h-px bg-teal-300" />
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900">
            Bridging{' '}
            <span className="font-semibold text-teal-600">Healthcare</span>{' '}
            and{' '}
            <span className="font-semibold text-teal-600">Technology</span>
          </h2>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Image */}
            <div className="flex justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72">
                <div className="absolute inset-0 rounded-full border-2 border-teal-200" />
                <div className="absolute inset-3 rounded-full border-2 border-teal-100" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-white shadow-lg"
                  >
                    <Image
                      src={Images[currentImageIndex]}
                      alt="Wilfred Osozi"
                      fill
                      className="object-cover"
                      style={{ objectPosition: '50% 30%' }}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-teal-50 text-teal-700 text-sm rounded-full">Nairobi, Kenya</span>
                <span className="px-3 py-1 bg-teal-50 text-teal-700 text-sm rounded-full">Available Now</span>
                <span className="px-3 py-1 bg-teal-50 text-teal-700 text-sm rounded-full">Full Stack</span>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">
                I'm Wilfred Osozi, a Full Stack Developer and Nutrition Specialist based in Nairobi, Kenya. 
                With over 9 years of experience spanning healthcare, education, and software development, 
                I bring a unique perspective to building robust digital solutions.
              </p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                I specialize in React, Next.js, Django REST Framework, and PostgreSQL, 
                creating applications that are both technically excellent and user-centered.
              </p>

              {/* Stats */}
              <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.1 }}
                      className="text-center"
                    >
                      <Icon className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                      <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-xs text-gray-500 uppercase">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </div>

              <CVDownloadButton 
                onDownloadComplete={() => {
                  setDownloadSuccess(true);
                  setTimeout(() => setDownloadSuccess(false), 3000);
                }}
              />
            </div>
          </div>
        </div>

        {/* Tabs Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["skills", "experience", "education"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "bg-teal-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === "skills" && (
            <div>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {["all", "frontend", "backend", "tools"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSkillCategory(cat as any)}
                    className={`px-4 py-1 rounded-full text-xs font-medium ${
                      skillCategory === cat
                        ? "bg-teal-600 text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {filteredSkills.map((skill, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 text-center border border-gray-100">
                    <skill.icon className="w-8 h-8 mx-auto mb-2" style={{ color: skill.color }} />
                    <h3 className="text-sm font-medium text-gray-800 mb-1">{skill.name}</h3>
                    <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        className="h-full bg-teal-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "experience" && (
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-4 border-teal-500 pl-4 py-2">
                  <h3 className="font-semibold text-gray-900">{exp.title}</h3>
                  <p className="text-teal-600 text-sm">{exp.company}</p>
                  <p className="text-xs text-gray-500">{exp.period} | {exp.location}</p>
                  <p className="text-sm text-gray-600 mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "education" && (
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-sky-500 pl-4 py-2">
                  <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                  <p className="text-sky-600 text-sm">{edu.school}</p>
                  <p className="text-xs text-gray-500">{edu.period}</p>
                  <p className="text-sm text-gray-600 mt-2">{edu.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;