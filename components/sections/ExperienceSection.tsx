// app/components/sections/ExperiencePage.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Award, 
  ChevronRight,
  BookOpen,
  Users,
  Code2,
  GraduationCap,
  Building2,
  Clock,
  Star,
  ExternalLink
} from "lucide-react";
import { CVDownloadButton } from "@/components/cv/CVDownloadButton";

const ExperiencePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"work" | "education" | "certifications">("work");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const workExperience = [
    {
      id: 1,
      title: "Head of Department, Human Nutrition & Dietetics",
      company: "Imperial College of Medical & Health Sciences",
      location: "Thika, Kenya",
      period: "2023 – Present",
      type: "Full-time",
      achievements: [
        "Provide leadership and strategic direction for departmental programs and staff",
        "Lead curriculum review and accreditation processes aligned with KNDI standards",
        "Enhance faculty growth, research, and mentorship for 15+ staff members",
        "Coordinate departmental budgets, partnerships, and public health initiatives",
        "Grew department from 50 to over 200 students through effective program development"
      ],
      skills: ["Leadership", "Curriculum Development", "Accreditation", "Budget Management", "Mentoring"],
      icon: Building2,
      color: "border-teal-500",
      bgColor: "bg-teal-50"
    },
    {
      id: 2,
      title: "Nutrition & Dietetics Trainer",
      company: "Imperial College of Medical & Health Sciences",
      location: "Thika, Kenya",
      period: "2023 – Present",
      type: "Full-time",
      achievements: [
        "Develop engaging learning materials and deliver lectures for 200+ students",
        "Assess learning outcomes through written and practical evaluations",
        "Mentor students on academic progress, career planning, and research",
        "Integrated Learning Management System (LMS) to enhance digital learning",
        "Achieved 90%+ student satisfaction rate"
      ],
      skills: ["Teaching", "Curriculum Design", "Student Mentoring", "LMS Integration", "Assessment"],
      icon: GraduationCap,
      color: "border-teal-500",
      bgColor: "bg-teal-50"
    },
    {
      id: 3,
      title: "Nutrition & Dietetics Trainer",
      company: "Kenya Institute of Professional Studies",
      location: "Nairobi, Kenya",
      period: "2018 – 2022",
      type: "Full-time",
      achievements: [
        "Delivered theoretical and practical training to 500+ students",
        "Supervised students during clinical and industrial attachments",
        "Participated in curriculum review and development of training programs",
        "Coordinated clinical rotations in Level 4 and 5 hospitals",
        "Maintained 85%+ student pass rate"
      ],
      skills: ["Clinical Training", "Curriculum Development", "Student Assessment", "Healthcare", "Mentoring"],
      icon: BookOpen,
      color: "border-teal-500",
      bgColor: "bg-teal-50"
    },
    {
      id: 4,
      title: "Clinical Nutritionist",
      company: "Gatundu Level 5 Hospital",
      location: "Kiambu County, Kenya",
      period: "2016 – 2017",
      type: "Full-time",
      achievements: [
        "Developed and implemented therapeutic diets for 200+ patients",
        "Provided nutrition counseling, assessments, and follow-up care",
        "Participated in community nutrition education programs",
        "Implemented Kitchen Garden Program as teaching aid",
        "Collaborated with multidisciplinary medical teams"
      ],
      skills: ["Clinical Nutrition", "Patient Counseling", "Community Health", "Therapeutic Diets", "Healthcare"],
      icon: Users,
      color: "border-teal-500",
      bgColor: "bg-teal-50"
    },
    {
      id: 5,
      title: "Software Developer",
      company: "Freelance & Personal Projects",
      location: "Remote",
      period: "2024 – Present",
      type: "Freelance",
      achievements: [
        "Built responsive web applications using React, Next.js, and TypeScript",
        "Developed RESTful APIs with Django REST Framework",
        "Created AfyaConnect - a healthcare platform connecting patients with providers",
        "Automated PDF generation using low-code tools",
        "Integrated AI solutions for healthcare applications"
      ],
      skills: ["React", "Next.js", "TypeScript", "Django", "API Development", "AI Integration"],
      icon: Code2,
      color: "border-teal-500",
      bgColor: "bg-teal-50"
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Software Engineering",
      institution: "ALX Africa",
      location: "Remote",
      period: "2024 – 2025",
      achievements: [
        "Full-stack development specialization",
        "Built multiple production-ready applications",
        "Collaborated on team projects using Agile methodology"
      ],
      icon: Code2,
      color: "border-sky-500",
      bgColor: "bg-sky-50"
    },
    {
      id: 2,
      degree: "BSc. Food, Nutrition & Dietetics",
      institution: "Egerton University",
      location: "Kenya",
      period: "2012 – 2015",
      grade: "Second Class Honors",
      achievements: [
        "Specialized in clinical nutrition and community health",
        "Completed research thesis on nutritional status",
        "Active member of Nutrition Students Association"
      ],
      icon: GraduationCap,
      color: "border-sky-500",
      bgColor: "bg-sky-50"
    },
    {
      id: 3,
      degree: "KCSE",
      institution: "Kivaywa Secondary School",
      location: "Kenya",
      period: "2006 – 2010",
      grade: "Mean Grade B+",
      achievements: [
        "Biology club chairman",
        "Science congress participant"
      ],
      icon: BookOpen,
      color: "border-sky-500",
      bgColor: "bg-sky-50"
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "Full Stack Web Development",
      issuer: "ALX Africa",
      date: "2025",
      skills: ["React", "Next.js", "Node.js", "TypeScript"]
    },
    {
      id: 2,
      name: "Clinical Nutrition Specialist",
      issuer: "KNDI",
      date: "2023",
      skills: ["Medical Nutrition Therapy", "Patient Care", "Diet Planning"]
    },
    {
      id: 3,
      name: "Django REST Framework",
      issuer: "Coding Bootcamp",
      date: "2024",
      skills: ["API Development", "Django", "PostgreSQL"]
    },
    {
      id: 4,
      name: "AI Integration Specialist",
      issuer: "Tech Academy",
      date: "2024",
      skills: ["AI Tools", "Prompt Engineering", "Automation"]
    }
  ];

  const achievements = [
    "Implemented Kitchen Garden Program as teaching aid for practical nutrition education",
    "Coordinated clinical rotations for students in Level 4 and 5 hospitals across Murang'a and Kiambu Counties",
    "Led departmental growth from 50 to over 200 students within two years",
    "Automated PDF letters generation using low-code tools, improving efficiency",
    "Integrated Learning Management System (LMS) to enhance digital learning",
    "Developed digital tools to streamline academic operations",
    "Oversaw curriculum review and KNDI accreditation"
  ];

  const stats = [
    { icon: Briefcase, value: "9+", label: "Years Experience" },
    { icon: Award, value: "12+", label: "Certifications" },
    { icon: Users, value: "1000+", label: "Students Mentored" },
    { icon: Code2, value: "15+", label: "Projects Built" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Clean teal background */}
      <section className="relative bg-teal-600 text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 2px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm mb-6 border border-white/20">
              <Briefcase className="w-10 h-10" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light mb-4">
              Professional <span className="font-semibold">Journey</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-teal-100 max-w-3xl mx-auto mb-8">
              Over 9 years of experience in nutrition education, clinical practice, 
              and software development across Kenya
            </p>

            {/* CV Button in Hero */}
            <div className="flex justify-center">
              <CVDownloadButton label="Download Full CV" />
            </div>
          </motion.div>
        </div>

        {/* Simple wave divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-sm mb-3 border border-gray-100">
                    <Icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: "work", label: "Work Experience", icon: Briefcase, count: workExperience.length },
              { id: "education", label: "Education", icon: GraduationCap, count: education.length },
              { id: "certifications", label: "Certifications", icon: Award, count: certifications.length }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  whileHover={{ y: -2 }}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-teal-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                  <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                    activeTab === tab.id
                      ? "bg-white/20 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}>
                    {tab.count}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Work Experience - Timeline Layout */}
              {activeTab === "work" && (
                <div className="space-y-8">
                  {/* Timeline Container */}
                  <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-teal-200 hidden sm:block" />
                    
                    {workExperience.map((exp, index) => {
                      const Icon = exp.icon;
                      const isEven = index % 2 === 0;
                      
                      return (
                        <motion.div
                          key={exp.id}
                          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className={`relative flex flex-col sm:flex-row gap-8 mb-8 ${
                            isEven ? "sm:flex-row-reverse" : ""
                          }`}
                        >
                          {/* Timeline Dot */}
                          <div className="absolute left-4 sm:left-1/2 top-6 w-4 h-4 bg-white border-4 border-teal-500 rounded-full transform -translate-x-1/2 z-10 hidden sm:block" />
                          
                          {/* Content */}
                          <div className={`sm:w-1/2 ${isEven ? "sm:pl-12" : "sm:pr-12"}`}>
                            <motion.div
                              whileHover={{ y: -5 }}
                              className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-teal-500 transition-shadow hover:shadow-xl"
                            >
                              {/* Header */}
                              <div className="p-6 bg-gray-50 border-b border-gray-100">
                                <div className="flex items-center gap-3 mb-2">
                                  <div className="p-2 bg-teal-100 rounded-lg">
                                    <Icon className="w-5 h-5 text-teal-600" />
                                  </div>
                                  <span className="text-sm font-medium text-teal-600">{exp.type}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                                <p className="text-teal-600 font-medium">{exp.company}</p>
                              </div>
                              
                              {/* Details */}
                              <div className="p-6">
                                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
                                  <div className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4" />
                                    {exp.location}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    {exp.period}
                                  </div>
                                </div>
                                
                                {/* Achievements */}
                                <div className="space-y-2 mb-4">
                                  {exp.achievements.slice(0, expandedIndex === exp.id ? undefined : 3).map((achievement, i) => (
                                    <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                      <ChevronRight className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                                      <span>{achievement}</span>
                                    </div>
                                  ))}
                                </div>
                                
                                {/* Show More/Less */}
                                {exp.achievements.length > 3 && (
                                  <button
                                    onClick={() => setExpandedIndex(expandedIndex === exp.id ? null : exp.id)}
                                    className="text-sm text-teal-600 font-medium hover:text-teal-700 mb-4"
                                  >
                                    {expandedIndex === exp.id ? "Show Less" : `Show ${exp.achievements.length - 3} More`}
                                  </button>
                                )}
                                
                                {/* Skills */}
                                <div className="flex flex-wrap gap-2">
                                  {exp.skills.map((skill, i) => (
                                    <span
                                      key={i}
                                      className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          </div>
                          
                          {/* Empty div for spacing */}
                          <div className="sm:w-1/2" />
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Education */}
              {activeTab === "education" && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {education.map((edu, index) => {
                    const Icon = edu.icon;
                    return (
                      <motion.div
                        key={edu.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-sky-500"
                      >
                        <div className="p-6 bg-gray-50 border-b border-gray-100">
                          <div className="p-2 bg-sky-100 rounded-lg inline-block mb-3">
                            <Icon className="w-5 h-5 text-sky-600" />
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-1">{edu.degree}</h3>
                          <p className="text-sky-600 font-medium">{edu.institution}</p>
                        </div>
                        
                        <div className="p-6">
                          <div className="flex flex-wrap gap-3 mb-3 text-xs text-gray-500">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {edu.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {edu.period}
                            </div>
                            {edu.grade && (
                              <div className="flex items-center gap-1">
                                <Star className="w-3 h-3 text-amber-500" />
                                {edu.grade}
                              </div>
                            )}
                          </div>
                          
                          <ul className="space-y-2">
                            {edu.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                <ChevronRight className="w-4 h-4 text-sky-500 flex-shrink-0 mt-0.5" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}

              {/* Certifications & Achievements */}
              {activeTab === "certifications" && (
                <div className="space-y-12">
                  {/* Certifications Grid */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Certifications</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {certifications.map((cert, index) => (
                        <motion.div
                          key={cert.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white rounded-lg shadow-sm p-5 border border-gray-100"
                        >
                          <Award className="w-8 h-8 text-teal-500 mb-3" />
                          <h3 className="text-base font-semibold text-gray-900 mb-1">{cert.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">{cert.issuer}</p>
                          <p className="text-xs text-gray-400 mb-3">Issued {cert.date}</p>
                          <div className="flex flex-wrap gap-1">
                            {cert.skills.map((skill, i) => (
                              <span key={i} className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Achievements</h3>
                    <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                      <div className="grid md:grid-cols-2 gap-4">
                        {achievements.map((achievement, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="flex items-start gap-3"
                          >
                            <div className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-teal-600 text-xs">✓</span>
                            </div>
                            <p className="text-sm text-gray-700">{achievement}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Want the Full Story?</h3>
              <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
                Download my complete CV with detailed experience, achievements, and qualifications.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <CVDownloadButton label="Download CV" />
                <a
                  href="/assets/cv/index.html"
                  target="_blank"
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-teal-600 hover:text-teal-600 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Online
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;