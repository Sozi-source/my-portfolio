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
  ExternalLink,
  Sparkles
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
      color: "teal"
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
      color: "blue"
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
      color: "amber"
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
      color: "purple"
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
      color: "teal"
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
      color: "blue"
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
      color: "teal"
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
      color: "amber"
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "Full Stack Web Development",
      issuer: "ALX Africa",
      date: "2025",
      skills: ["React", "Next.js", "Node.js", "TypeScript"],
      color: "blue"
    },
    {
      id: 2,
      name: "Clinical Nutrition Specialist",
      issuer: "KNDI",
      date: "2023",
      skills: ["Medical Nutrition Therapy", "Patient Care", "Diet Planning"],
      color: "teal"
    },
    {
      id: 3,
      name: "Django REST Framework",
      issuer: "Coding Bootcamp",
      date: "2024",
      skills: ["API Development", "Django", "PostgreSQL"],
      color: "purple"
    },
    {
      id: 4,
      name: "AI Integration Specialist",
      issuer: "Tech Academy",
      date: "2024",
      skills: ["AI Tools", "Prompt Engineering", "Automation"],
      color: "amber"
    }
  ];

  const achievements = [
    "Implemented a Kitchen Garden Program as a teaching aid, promoting practical and sustainable nutrition education",
    "Coordinated clinical rotations for students in Level 4 and 5 hospitals across Murang'a and Kiambu Counties",
    "Led departmental growth from 50 to over 200 students within two years through effective mentorship",
    "Automated PDF letters generation using low-code tools, improving efficiency in student documentation",
    "Integrated a Learning Management System (LMS) to enhance digital learning and student engagement",
    "Developed digital tools to streamline academic operations and improve departmental productivity",
    "Oversaw curriculum review and KNDI accreditation, ensuring compliance with national training standards"
  ];

  const stats = [
    { icon: Briefcase, value: "9+", label: "Years Experience", color: "teal" },
    { icon: Award, value: "12+", label: "Certifications", color: "blue" },
    { icon: Users, value: "1000+", label: "Students Mentored", color: "amber" },
    { icon: Code2, value: "15+", label: "Projects Built", color: "purple" }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string, light: string, text: string, border: string }> = {
      teal: { bg: "bg-teal-600", light: "bg-teal-100", text: "text-teal-600", border: "border-teal-200" },
      blue: { bg: "bg-blue-600", light: "bg-blue-100", text: "text-blue-600", border: "border-blue-200" },
      amber: { bg: "bg-amber-600", light: "bg-amber-100", text: "text-amber-600", border: "border-amber-200" },
      purple: { bg: "bg-purple-600", light: "bg-purple-100", text: "text-purple-600", border: "border-purple-200" },
    };
    return colors[color] || colors.teal;
  };

  return (
    <div id="experience" className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-teal-600 text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 border-2 border-white/50">
            <Briefcase className="w-10 h-10" />
          </div>
          
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-light mb-4">
            My <span className="font-bold">Journey</span>
          </h1>
          
          <p className="font-body text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Over 9 years of experience in nutrition education, clinical practice, 
            and software development across Kenya
          </p>

          <div className="flex justify-center">
            <CVDownloadButton label="Download CV" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const colors = getColorClasses(stat.color);
              return (
                <div key={index} className="text-center bg-white rounded-xl shadow-md p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${colors.light} rounded-xl mb-3`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: "work", label: "Work Experience", icon: Briefcase, count: workExperience.length },
              { id: "education", label: "Education", icon: GraduationCap, count: education.length },
              { id: "certifications", label: "Certifications", icon: Award, count: certifications.length }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-teal-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                  <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                    activeTab === tab.id ? "bg-white/20 text-white" : "bg-gray-200 text-gray-600"
                  }`}>
                    {tab.count}
                  </span>
                </button>
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
              transition={{ duration: 0.3 }}
            >
              {/* Work Experience */}
              {activeTab === "work" && (
                <div className="space-y-6">
                  {workExperience.map((exp, index) => {
                    const Icon = exp.icon;
                    const colors = getColorClasses(exp.color);
                    
                    return (
                      <div key={exp.id} className="bg-white rounded-xl shadow-md overflow-hidden border-l-4" style={{ borderLeftColor: colors.bg.replace('bg-', '') }}>
                        <div className="p-6">
                          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                            <div className="flex items-center gap-3">
                              <div className={`w-12 h-12 ${colors.light} rounded-xl flex items-center justify-center`}>
                                <Icon className={`w-6 h-6 ${colors.text}`} />
                              </div>
                              <div>
                                <h3 className="font-heading text-lg font-bold text-gray-800">{exp.title}</h3>
                                <p className={`text-sm font-medium ${colors.text}`}>{exp.company}</p>
                              </div>
                            </div>
                            <span className={`px-3 py-1 ${colors.light} ${colors.text} text-sm rounded-full`}>
                              {exp.type}
                            </span>
                          </div>

                          <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" /> {exp.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" /> {exp.period}
                            </span>
                          </div>

                          <div className="space-y-2 mb-4">
                            {(expandedIndex === exp.id ? exp.achievements : exp.achievements.slice(0, 3)).map((achievement, i) => (
                              <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                <ChevronRight className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`} />
                                <span>{achievement}</span>
                              </div>
                            ))}
                          </div>

                          {exp.achievements.length > 3 && (
                            <button
                              onClick={() => setExpandedIndex(expandedIndex === exp.id ? null : exp.id)}
                              className={`text-sm font-medium ${colors.text} hover:underline mb-4`}
                            >
                              {expandedIndex === exp.id ? "Show less" : `Show ${exp.achievements.length - 3} more`}
                            </button>
                          )}

                          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                            {exp.skills.map((skill, i) => (
                              <span key={i} className={`px-3 py-1 text-xs font-medium ${colors.light} ${colors.text} rounded-full`}>
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Education */}
              {activeTab === "education" && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {education.map((edu, index) => {
                    const Icon = edu.icon;
                    const colors = getColorClasses(edu.color);
                    
                    return (
                      <div key={edu.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                        <div className={`p-6 ${colors.light}`}>
                          <div className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-3 shadow-sm`}>
                            <Icon className={`w-6 h-6 ${colors.text}`} />
                          </div>
                          <h3 className="font-heading text-lg font-bold text-gray-800 mb-1">{edu.degree}</h3>
                          <p className={`text-sm font-medium ${colors.text}`}>{edu.institution}</p>
                        </div>
                        
                        <div className="p-6">
                          <div className="flex flex-wrap gap-3 mb-3 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" /> {edu.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" /> {edu.period}
                            </span>
                            {edu.grade && (
                              <span className="flex items-center gap-1">
                                <Star className="w-3 h-3 text-amber-500" /> {edu.grade}
                              </span>
                            )}
                          </div>
                          
                          <ul className="space-y-2">
                            {edu.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                <ChevronRight className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`} />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Certifications */}
              {activeTab === "certifications" && (
                <div className="space-y-12">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {certifications.map((cert, index) => {
                      const colors = getColorClasses(cert.color);
                      
                      return (
                        <div key={cert.id} className="bg-white rounded-xl shadow-md p-6">
                          <div className={`w-12 h-12 ${colors.light} rounded-xl flex items-center justify-center mb-4`}>
                            <Award className={`w-6 h-6 ${colors.text}`} />
                          </div>
                          <h3 className="font-heading text-base font-bold text-gray-800 mb-1">{cert.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">{cert.issuer}</p>
                          <p className="text-xs text-gray-400 mb-4">Issued {cert.date}</p>
                          <div className="flex flex-wrap gap-1">
                            {cert.skills.map((skill, i) => (
                              <span key={i} className={`px-2 py-1 text-xs ${colors.light} ${colors.text} rounded-full`}>
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="bg-gray-50 rounded-xl p-8">
                    <h3 className="font-heading text-xl font-bold text-gray-800 mb-6">Key Achievements</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-xl shadow-sm">
                          <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white text-xs">✓</span>
                          </div>
                          <p className="text-sm text-gray-700">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-teal-50 rounded-xl p-8 border border-teal-200">
              <h3 className="font-heading text-xl font-semibold text-gray-800 mb-2">Want the Full Story?</h3>
              <p className="font-body text-gray-600 mb-4 max-w-2xl mx-auto">
                Download my complete CV with detailed experience, achievements, and qualifications.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <CVDownloadButton label="Download CV" />
                <a
                  href="/assets/cv/index.html"
                  target="_blank"
                  className="px-6 py-3 bg-white text-gray-700 rounded-xl hover:shadow-md transition-all border border-gray-200 inline-flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Online
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center py-8 text-gray-400 text-sm border-t border-gray-200">
        <p>Based in Nairobi, Kenya • Available for remote work worldwide</p>
      </div>
    </div>
  );
};

export default ExperiencePage;