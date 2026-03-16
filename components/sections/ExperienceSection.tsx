"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, 
  Calendar,
  Sparkles,
  ChevronDown,
  Briefcase,
  GraduationCap,
  Award,
  Users,
  Code2,
  Building2,
  Clock,
  Star,
  TrendingUp,
  Target,
  Lightbulb,
  Zap,
  Download,
  BookOpen,
  Heart,
  CheckCircle,
  Eye,
  ExternalLink,
  X,
  Layers,
  Info
} from "lucide-react";

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  emoji: string;
  highlights: Array<{ emoji: string; text: string }>;
  details: {
    achievements: string[];
    skills: string[];
    metrics: Array<{ label: string; value: string; icon: any; change?: string }>;
  };
  color: string;
}

interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  emoji: string;
  description?: string;
  skills: string[];
  color: string;
  category: string;
  featured?: boolean;
  imagePath: string;
  credentialId?: string;
}

interface ProfessionalDev {
  id: number;
  title: string;
  organizer: string;
  date: string;
  emoji: string;
  description: string;
  skills: string[];
  color: string;
  imagePath: string;
  credentialId?: string;
  type: "conference" | "cpd" | "workshop";
}

const ExperienceSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"work" | "education" | "certifications" | "professional">("work");
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [selectedProfessional, setSelectedProfessional] = useState<ProfessionalDev | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"cert" | "professional">("cert");
  const [expandedProfId, setExpandedProfId] = useState<number | null>(null);

  // Professionally ordered work experience
  const workExperience: ExperienceItem[] = [
    {
      id: 1,
      title: "Head of Department",
      company: "Imperial College of Medical & Health Sciences",
      location: "Thika, Kenya",
      period: "2023 – Present",
      type: "Full-time",
      emoji: "👨‍💼",
      highlights: [
        { emoji: "📈", text: "300% department growth (50 → 200+ students)" },
        { emoji: "📋", text: "Led CBA implementation & accreditation" },
        { emoji: "💻", text: "Integrated LMS for digital learning" }
      ],
      details: {
        achievements: [
          "Provide leadership and strategic direction for departmental programs and staff",
          "Lead curriculum review and accreditation processes aligned with KNDI and CDACC standards",
          "Implement Competency-Based Assessment (CBA) methodologies across all nutrition programs",
          "Develop digital learning content and integrate LMS for enhanced student engagement",
          "Enhance faculty growth, research, and mentorship for 15+ staff members",
          "Grew department from 50 to over 200 students"
        ],
        skills: ["Leadership", "Curriculum Development", "CBA", "Digital Content", "Accreditation", "LMS"],
        metrics: [
          { label: "Team Size", value: "15+", icon: Users, change: "+5 this year" },
          { label: "Students", value: "200+", icon: TrendingUp, change: "300% growth" },
          { label: "Programs", value: "4", icon: BookOpen, change: "2 new" }
        ]
      },
      color: "teal"
    },
    {
      id: 5,
      title: "Software Developer",
      company: "Freelance & Personal Projects",
      location: "Remote",
      period: "2024 – Present",
      type: "Freelance",
      emoji: "👨‍💻",
      highlights: [
        { emoji: "⚛️", text: "React/Next.js apps with TypeScript" },
        { emoji: "🏥", text: "AfyaConnect healthcare platform" },
        { emoji: "🤖", text: "AI integration for healthcare" }
      ],
      details: {
        achievements: [
          "Built responsive web applications using React, Next.js, and TypeScript",
          "Developed RESTful APIs with Django REST Framework",
          "Created AfyaConnect - a healthcare platform connecting patients with providers",
          "Applied AI tools and prompt engineering for healthcare solutions",
          "Automated PDF generation using low-code tools",
          "Integrated AI solutions for healthcare applications"
        ],
        skills: ["React", "Next.js", "TypeScript", "Django", "APIs", "AI"],
        metrics: [
          { label: "Projects", value: "15+", icon: Code2, change: "production" },
          { label: "Tech Stack", value: "10+", icon: Zap, change: "modern" },
          { label: "Users", value: "100+", icon: Users, change: "growing" }
        ]
      },
      color: "purple"
    },
    {
      id: 2,
      title: "Nutrition & Dietetics Trainer",
      company: "Imperial College of Medical & Health Sciences",
      location: "Thika, Kenya",
      period: "2023 – Present",
      type: "Full-time",
      emoji: "👨‍🏫",
      highlights: [
        { emoji: "🎓", text: "200+ students taught, 90% satisfaction" },
        { emoji: "💻", text: "LMS integration for blended learning" },
        { emoji: "🤝", text: "Mentored students in research & career" }
      ],
      details: {
        achievements: [
          "Develop engaging learning materials and deliver lectures for 200+ students",
          "Apply Competency-Based Assessment techniques to evaluate student progress",
          "Create and package digital content for blended learning delivery",
          "Assess learning outcomes through written and practical evaluations",
          "Mentor students on academic progress, career planning, and research",
          "Integrated Learning Management System (LMS) to enhance digital learning",
          "Achieved 90%+ student satisfaction rate"
        ],
        skills: ["Teaching", "Curriculum Design", "CBA", "Digital Content", "Mentoring", "LMS"],
        metrics: [
          { label: "Students", value: "200+", icon: Users, change: "3 cohorts" },
          { label: "Satisfaction", value: "90%", icon: Star, change: "top rating" },
          { label: "Courses", value: "5", icon: BookOpen, change: "designed 2" }
        ]
      },
      color: "blue"
    },
    {
      id: 3,
      title: "Nutrition & Dietetics Trainer",
      company: "Kenya Institute of Professional Studies",
      location: "Nairobi, Kenya",
      period: "2018 – 2022",
      type: "Full-time",
      emoji: "👨‍⚕️",
      highlights: [
        { emoji: "📊", text: "500+ students trained, 85% pass rate" },
        { emoji: "🏥", text: "Coordinated clinical rotations" },
        { emoji: "📝", text: "Pioneered CBA implementation" }
      ],
      details: {
        achievements: [
          "Delivered theoretical and practical training to 500+ students",
          "Pioneered CBA implementation in nutrition programs",
          "Supervised students during clinical and industrial attachments",
          "Participated in curriculum review and development",
          "Coordinated clinical rotations in Level 4 and 5 hospitals",
          "Maintained 85%+ student pass rate"
        ],
        skills: ["Clinical Training", "Curriculum Development", "CBA", "Student Assessment", "Healthcare"],
        metrics: [
          { label: "Students", value: "500+", icon: Users, change: "4 years" },
          { label: "Pass Rate", value: "85%", icon: Target, change: "above avg" },
          { label: "Hospitals", value: "5+", icon: Building2, change: "Level 4 & 5" }
        ]
      },
      color: "amber"
    },
    {
      id: 4,
      title: "Clinical Nutritionist",
      company: "Gatundu Level 5 Hospital",
      location: "Kiambu County, Kenya",
      period: "2016 – 2017",
      type: "Full-time",
      emoji: "🥗",
      highlights: [
        { emoji: "❤️", text: "200+ patients on therapeutic diets" },
        { emoji: "👶", text: "Pediatric nutrition specialist" },
        { emoji: "🌱", text: "Kitchen Garden Program implementation" }
      ],
      details: {
        achievements: [
          "Developed and implemented therapeutic diets for 200+ patients",
          "Provided nutrition counseling, assessments, and follow-up care",
          "Specialized in pediatric nutrition assessments",
          "Participated in community nutrition education programs",
          "Implemented Kitchen Garden Program as teaching aid",
          "Collaborated with multidisciplinary medical teams"
        ],
        skills: ["Clinical Nutrition", "Pediatric Nutrition", "Patient Counseling", "Community Health", "Therapeutic Diets"],
        metrics: [
          { label: "Patients", value: "200+", icon: Users, change: "1:1 care" },
          { label: "Programs", value: "5+", icon: Lightbulb, change: "community" },
          { label: "Clinics", value: "3", icon: Building2, change: "multidisciplinary" }
        ]
      },
      color: "rose"
    }
  ];

  const education = [
    {
      id: 1,
      degree: "BSc. Food, Nutrition and Dietetics",
      institution: "Egerton University",
      location: "Kenya",
      period: "2021 – 2025",
      grade: "Second Class Honors",
      emoji: "🎓",
      highlights: [
        { emoji: "🔬", text: "Clinical nutrition specialization" },
        { emoji: "📊", text: "Research thesis on nutritional status" }
      ],
      details: {
        achievements: [
          "Specialized in clinical nutrition and community health",
          "Completed research thesis on nutritional status",
          "Active member of Nutrition Students Association"
        ],
        skills: ["Clinical Nutrition", "Community Health", "Food Science", "Research"]
      },
      color: "teal"
    }
  ];

  // Certifications with local image paths - including KNDI Registration
  const certifications: Certification[] = [
    { 
      id: 1, 
      name: "BSc. Foods, Nutrition and Dietetics", 
      issuer: "Egerton University", 
      date: "2025", 
      emoji: "🎓", 
      description: "Bachelor's degree in Nutrition and Dietetics with specialization in clinical nutrition and community health.",
      skills: ["Clinical Nutrition", "Community Health", "Food Science"], 
      color: "teal", 
      category: "academic", 
      featured: true,
      imagePath: "/assets/images/certificates/degree-cert.webp",
      credentialId: "B44092"
    },
    { 
      id: 2, 
      name: "Clinical Nutritionist License", 
      issuer: "Kenya Nutrition and Dietetics Institute (KNDI)", 
      date: "2017", 
      emoji: "⚕️", 
      description: "Professional licensure authorizing practice as a clinical nutritionist in Kenya. Includes annual CPD compliance.",
      skills: ["Medical Nutrition Therapy", "Patient Care", "Diet Planning"], 
      color: "blue", 
      category: "professional", 
      featured: true,
      imagePath: "/assets/images/certificates/licence.webp",
      credentialId: "KNDI/LIC/RG6975"
    },
    { 
      id: 11, 
      name: "KNDI Certificate of Registration", 
      issuer: "Kenya Nutrition and Dietetics Institute", 
      date: "February 2017", 
      emoji: "📋", 
      description: "Official registration as a Nutrition and Dietetics professional with the Kenya Nutrition and Dietetics Institute.",
      skills: ["Professional Registration", "Nutrition Practice", "Dietetics"], 
      color: "blue", 
      category: "professional",
      imagePath: "/assets/images/certificates/kndi-reg.webp",
      credentialId: "G/1919/17"
    },
    { 
      id: 3, 
      name: "Trainer of Trainers - Competency Based Assessment", 
      issuer: "TVET/CDACC", 
      date: "2020", 
      emoji: "📋", 
      description: "Comprehensive training in Competency-Based Assessment methodologies for technical education.",
      skills: ["CBA", "Curriculum Development", "Assessment Design"], 
      color: "amber", 
      category: "professional",
      imagePath: "/assets/images/certificates/cbet-training.webp",
      credentialId: "TVET/CBA/2020/67890"
    },
    { 
      id: 4, 
      name: "Digital Content Development", 
      issuer: "TVET/CDACC", 
      date: "March 2021", 
      emoji: "💻", 
      description: "Training in creating and delivering digital learning content, instructional design, and multimedia integration.",
      skills: ["Instructional Design", "Digital Content", "E-Learning"], 
      color: "teal", 
      category: "professional",
      imagePath: "/assets/images/certificates/tvet-digital.webp",
      credentialId: "TVET/DIG/2021/09876"
    },
    { 
      id: 5, 
      name: "Pediatric Nutrition Specialist", 
      issuer: "KNDI", 
      date: "May 2024", 
      emoji: "👶", 
      description: "Specialized training in pediatric nutrition including early nutrition, complementary feeding, and gut health.",
      skills: ["Pediatric Assessment", "Complementary Feeding", "Gut Health"], 
      color: "rose", 
      category: "specialization",
      imagePath: "/assets/images/certificates/kndi-pediatric.webp",
      credentialId: "KNDI/PED/2024/13579"
    },
    { 
      id: 6, 
      name: "Professional Development Skills for Digital Age", 
      issuer: "ALX Africa", 
      date: "September 2024", 
      emoji: "📱", 
      description: "Professional skills enhancement for the digital workplace including communication and remote collaboration.",
      skills: ["Digital Literacy", "Communication", "Remote Work"], 
      color: "amber", 
      category: "tech",
      imagePath: "/assets/images/certificates/alx-professional.jpg",
      credentialId: "ALX/PD/2024/24680"
    },
    { 
      id: 7, 
      name: "AI Starter Kit", 
      issuer: "ALX Africa", 
      date: "April 2025", 
      emoji: "🤖", 
      description: "Foundational training in Artificial Intelligence including prompt engineering and AI tools.",
      skills: ["AI Fundamentals", "Prompt Engineering", "AI Tools"], 
      color: "purple", 
      category: "tech",
      imagePath: "/assets/images/certificates/alx-ai.jpg",
      credentialId: "ALX/AI/2025/11223"
    },
    { 
      id: 8, 
      name: "Front-End Web Development", 
      issuer: "ALX Africa", 
      date: "April 2025", 
      emoji: "⚛️", 
      description: "Comprehensive front-end development training covering modern web technologies.",
      skills: ["HTML/CSS", "JavaScript", "Responsive Design"], 
      color: "blue", 
      category: "tech",
      imagePath: "/assets/images/certificates/alx-frontend.jpg",
      credentialId: "ALX/FE/2025/44556"
    },
    { 
      id: 9, 
      name: "ProDev Frontend Engineering", 
      issuer: "ALX Africa", 
      date: "October 2025", 
      emoji: "🚀", 
      description: "Advanced front-end development with React, Next.js, and TypeScript.",
      skills: ["React", "Next.js", "TypeScript"], 
      color: "purple", 
      category: "tech", 
      featured: true,
      imagePath: "/assets/images/certificates/alx-prodev.jpg",
      credentialId: "ALX/PRO/2025/77889"
    },
    { 
      id: 10, 
      name: "Back-End Development", 
      issuer: "ALX Africa", 
      date: "March 2026", 
      emoji: "⚙️", 
      description: "Full-stack backend development with Python, Django, and PostgreSQL.",
      skills: ["Python", "Django", "PostgreSQL"], 
      color: "blue", 
      category: "tech", 
      featured: false,
      imagePath: "/assets/images/certificates/alx-backend.jpg",
      credentialId: "ALX/BE/2026/99001"
    }
  ];

  // Professional Development - Clean, minimal cards
  const professionalDev: ProfessionalDev[] = [
    {
      id: 1,
      title: "Africa Health Agenda International Conference (AHAIC 2021)",
      organizer: "AHAIC",
      date: "8th - 10th March 2021",
      emoji: "🌍",
      description: "First Virtual Africa Health Agenda International Conference focusing on health agendas, policies, and innovations across Africa. Participated in discussions on healthcare transformation and nutrition policy.",
      skills: ["Global Health", "Health Policy", "Healthcare Innovation"],
      color: "teal",
      imagePath: "/assets/images/professional/ahaic-2021.webp",
      type: "conference"
    },
    {
      id: 2,
      title: "Legal Aspects of Nutrition & Dietetics Law in Kenya",
      organizer: "Kenya Nutrition and Dietetics Institute",
      date: "5th December 2016",
      emoji: "⚖️",
      description: "Comprehensive workshop covering legal frameworks in nutrition practice, core competencies, professional ethics, and integrity for nutrition and dietetics practitioners.",
      skills: ["Legal Aspects", "Professional Ethics", "Nutrition Competence"],
      color: "amber",
      imagePath: "/assets/images/professional/kndi-workshop.webp",
      credentialId: "SN:0223",
      type: "workshop"
    },
    {
      id: 3,
      title: "Bringing Science to Early Life: Nutricia Scientific Congress",
      organizer: "Danone - One Planet, One Health",
      date: "July 2021",
      emoji: "👶",
      description: "CPD webinar on early life nutrition, scientific advances in pediatric nutrition, and the connection between nutrition and health outcomes.",
      skills: ["Early Life Nutrition", "Pediatric Science", "Research"],
      color: "purple",
      imagePath: "/assets/images/professional/nutricia-congress.webp",
      type: "cpd"
    },
    {
      id: 4,
      title: "Peri-operative Nutrition Support",
      organizer: "The Speak Nutrition Society",
      date: "2021",
      emoji: "🏥",
      description: "CPD webinar on nutritional support before and after surgery, including assessment, intervention strategies, and patient management.",
      skills: ["Peri-operative Care", "Clinical Nutrition", "Patient Support"],
      color: "rose",
      imagePath: "/assets/images/professional/perioperative-cpd.webp",
      type: "cpd"
    }
  ];

  const stats = [
    { emoji: "⏳", value: "9+", label: "Years Experience", color: "teal" },
    { emoji: "🏆", value: "16+", label: "Certifications", color: "blue" },
    { emoji: "👥", value: "1000+", label: "Students", color: "amber" },
    { emoji: "📚", value: "4+", label: "Professional Dev", color: "purple" }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { text: string; border: string; light: string; bg: string }> = {
      teal: { text: "text-teal-600", border: "border-teal-200", light: "bg-teal-50", bg: "bg-teal-600" },
      blue: { text: "text-blue-600", border: "border-blue-200", light: "bg-blue-50", bg: "bg-blue-600" },
      amber: { text: "text-amber-600", border: "border-amber-200", light: "bg-amber-50", bg: "bg-amber-600" },
      rose: { text: "text-rose-600", border: "border-rose-200", light: "bg-rose-50", bg: "bg-rose-600" },
      purple: { text: "text-purple-600", border: "border-purple-200", light: "bg-purple-50", bg: "bg-purple-600" },
    };
    return colors[color] || colors.teal;
  };

  const getTypeIcon = (type: string) => {
    switch(type) {
      case "conference": return "🌍";
      case "cpd": return "📚";
      case "workshop": return "🔧";
      default: return "📋";
    }
  };

  const getTypeLabel = (type: string) => {
    switch(type) {
      case "conference": return "Conference";
      case "cpd": return "CPD";
      case "workshop": return "Workshop";
      default: return type;
    }
  };

  const handleViewProfessional = (item: ProfessionalDev) => {
    setSelectedProfessional(item);
    setModalType("professional");
    setShowModal(true);
  };

  const handleViewCert = (cert: Certification) => {
    setSelectedCert(cert);
    setModalType("cert");
    setShowModal(true);
  };

  const toggleProfExpand = (id: number) => {
    setExpandedProfId(expandedProfId === id ? null : id);
  };

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-teal-50 rounded-full mb-4 sm:mb-5">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
            <span className="text-sm sm:text-base font-medium text-teal-700">Professional Journey</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 mb-3">
            Experience & <span className="font-bold text-teal-600">Credentials</span>
          </h2>
          
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            9+ years in nutrition education, clinical practice, and software development
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 mb-8 sm:mb-10 lg:mb-12">
          {stats.map((stat, index) => {
            const colors = getColorClasses(stat.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 ${colors.light} rounded-xl flex items-center justify-center text-xl sm:text-2xl`}>
                    {stat.emoji}
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-500">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 flex-wrap">
          {[
            { id: "work", label: "Work Experience", icon: Briefcase, count: workExperience.length },
            { id: "education", label: "Education", icon: GraduationCap, count: education.length },
            { id: "certifications", label: "Certifications", icon: Award, count: certifications.length },
            { id: "professional", label: "Professional Dev", icon: Layers, count: professionalDev.length }
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;
            
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`relative px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-all flex items-center gap-2 ${
                  isActive
                    ? "text-teal-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  isActive ? "bg-teal-100 text-teal-700" : "bg-gray-200 text-gray-600"
                }`}>
                  {tab.count}
                </span>
                
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
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
            transition={{ duration: 0.3 }}
            className="min-h-[400px]"
          >
            {/* Work Experience */}
            {activeTab === "work" && (
              <div className="space-y-4 sm:space-y-5">
                {workExperience.map((exp) => {
                  const colors = getColorClasses(exp.color);
                  const isExpanded = expandedId === exp.id;
                  
                  return (
                    <motion.div
                      key={exp.id}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all overflow-hidden cursor-pointer"
                      onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                    >
                      <div className="p-5 sm:p-6 lg:p-7">
                        <div className="flex items-start gap-4 sm:gap-5">
                          <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl ${colors.light} flex items-center justify-center text-2xl sm:text-3xl flex-shrink-0`}>
                            {exp.emoji}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <h3 className="font-heading font-bold text-gray-800 text-lg sm:text-xl lg:text-2xl">{exp.title}</h3>
                                <p className={`text-sm sm:text-base lg:text-lg font-medium ${colors.text} mt-1`}>{exp.company}</p>
                              </div>
                              <div className="flex items-center gap-2 sm:gap-3">
                                <span className={`px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium rounded-full ${colors.light} ${colors.text}`}>
                                  {exp.type}
                                </span>
                                <motion.div
                                  animate={{ rotate: isExpanded ? 180 : 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-full flex items-center justify-center"
                                >
                                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                                </motion.div>
                              </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-2 text-xs sm:text-sm text-gray-500">
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" /> {exp.location}
                              </span>
                              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" /> {exp.period}
                              </span>
                            </div>

                            <div className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2">
                              {exp.highlights.map((h, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm sm:text-base">
                                  <span className="text-lg sm:text-xl">{h.emoji}</span>
                                  <span className="text-gray-600">{h.text}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="border-t border-gray-100"
                          >
                            <div className="p-5 sm:p-6 lg:p-7 bg-gray-50">
                              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-5 sm:mb-6">
                                {exp.details.metrics.map((metric, i) => {
                                  const MetricIcon = metric.icon;
                                  return (
                                    <div key={i} className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 text-center shadow-sm">
                                      <MetricIcon className={`w-5 h-5 sm:w-6 sm:h-6 ${colors.text} mx-auto mb-1 sm:mb-2`} />
                                      <div className="text-base sm:text-lg lg:text-xl font-bold text-gray-800">{metric.value}</div>
                                      <div className="text-xs sm:text-sm text-gray-500">{metric.label}</div>
                                      {metric.change && (
                                        <div className={`text-xs sm:text-sm mt-1 ${colors.text}`}>{metric.change}</div>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>

                              <div className="mb-5 sm:mb-6">
                                <h4 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 sm:mb-4">
                                  Key Achievements
                                </h4>
                                <ul className="space-y-2 sm:space-y-3">
                                  {exp.details.achievements.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-600">
                                      <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full ${colors.light} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                        <CheckCircle className={`w-3 h-3 sm:w-4 sm:h-4 ${colors.text}`} />
                                      </div>
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h4 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 sm:mb-4">
                                  Skills
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {exp.details.skills.map((skill, i) => (
                                    <span
                                      key={i}
                                      className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full ${colors.light} ${colors.text} border ${colors.border}`}
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {/* Education */}
            {activeTab === "education" && (
              <div className="space-y-4 sm:space-y-5">
                {education.map((edu) => {
                  const colors = getColorClasses(edu.color);
                  const isExpanded = expandedId === edu.id;
                  
                  return (
                    <motion.div
                      key={edu.id}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all overflow-hidden cursor-pointer"
                      onClick={() => setExpandedId(isExpanded ? null : edu.id)}
                    >
                      <div className="p-5 sm:p-6 lg:p-7">
                        <div className="flex items-start gap-4 sm:gap-5">
                          <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl ${colors.light} flex items-center justify-center text-2xl sm:text-3xl`}>
                            {edu.emoji}
                          </div>

                          <div className="flex-1">
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <h3 className="font-heading font-bold text-gray-800 text-lg sm:text-xl lg:text-2xl">{edu.degree}</h3>
                                <p className={`text-sm sm:text-base lg:text-lg font-medium ${colors.text} mt-1`}>{edu.institution}</p>
                              </div>
                              <motion.div
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-full flex items-center justify-center"
                              >
                                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                              </motion.div>
                            </div>

                            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-2 text-xs sm:text-sm text-gray-500">
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" /> {edu.location}
                              </span>
                              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" /> {edu.period}
                              </span>
                              {edu.grade && (
                                <>
                                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                  <span className="flex items-center gap-1 text-amber-600">
                                    <Star className="w-3 h-3 sm:w-4 sm:h-4" /> {edu.grade}
                                  </span>
                                </>
                              )}
                            </div>

                            <div className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2">
                              {edu.highlights.map((h, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm sm:text-base">
                                  <span className="text-lg sm:text-xl">{h.emoji}</span>
                                  <span className="text-gray-600">{h.text}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="border-t border-gray-100"
                          >
                            <div className="p-5 sm:p-6 lg:p-7 bg-gray-50">
                              <h4 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 sm:mb-4">
                                Achievements
                              </h4>
                              <ul className="space-y-2 sm:space-y-3">
                                {edu.details.achievements.map((item, i) => (
                                  <li key={i} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-600">
                                    <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full ${colors.light} flex items-center justify-center flex-shrink-0`}>
                                      <CheckCircle className={`w-3 h-3 sm:w-4 sm:h-4 ${colors.text}`} />
                                    </div>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {/* Certifications */}
            {activeTab === "certifications" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {certifications.map((cert, index) => {
                  const colors = getColorClasses(cert.color);
                  
                  return (
                    <motion.div
                      key={cert.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ y: -4 }}
                      className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all p-5 sm:p-6 flex flex-col"
                    >
                      <div className="flex items-start justify-between mb-3 sm:mb-4">
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${colors.light} flex items-center justify-center text-2xl sm:text-3xl`}>
                          {cert.emoji}
                        </div>
                        {cert.featured && (
                          <span className="text-xs sm:text-sm bg-amber-50 text-amber-600 px-2 sm:px-3 py-1 rounded-full border border-amber-200">
                            ★ Featured
                          </span>
                        )}
                      </div>

                      <h3 className="font-heading font-semibold text-gray-800 text-base sm:text-lg mb-1">{cert.name}</h3>
                      <p className="text-sm sm:text-base text-gray-500 mb-1">{cert.issuer}</p>
                      <p className="text-xs sm:text-sm text-gray-400 mb-2">{cert.date}</p>
                      
                      {cert.credentialId && (
                        <p className="text-xs text-gray-400 mb-3 font-mono">ID: {cert.credentialId}</p>
                      )}

                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                        {cert.skills.slice(0, 3).map((skill, i) => (
                          <span
                            key={i}
                            className={`px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full ${colors.light} ${colors.text} border ${colors.border}`}
                          >
                            {skill}
                          </span>
                        ))}
                        {cert.skills.length > 3 && (
                          <span className={`px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full ${colors.light} ${colors.text} border ${colors.border}`}>
                            +{cert.skills.length - 3}
                          </span>
                        )}
                      </div>

                      {/* View Certificate Button - Preview Only */}
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleViewCert(cert);
                        }}
                        className={`mt-auto w-full py-2.5 sm:py-3 rounded-lg ${colors.bg} text-white text-sm sm:text-base font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                        Preview
                      </motion.button>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {/* Professional Development - Clean, minimal cards with expandable details */}
            {activeTab === "professional" && (
              <div className="space-y-4 sm:space-y-5">
                {professionalDev.map((item) => {
                  const colors = getColorClasses(item.color);
                  const typeIcon = getTypeIcon(item.type);
                  const typeLabel = getTypeLabel(item.type);
                  const isExpanded = expandedProfId === item.id;
                  
                  return (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all overflow-hidden"
                    >
                      <div 
                        className="p-5 sm:p-6 cursor-pointer"
                        onClick={() => toggleProfExpand(item.id)}
                      >
                        <div className="flex items-start gap-4 sm:gap-5">
                          <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${colors.light} flex items-center justify-center text-2xl sm:text-3xl flex-shrink-0`}>
                            {item.emoji}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <h3 className="font-heading font-semibold text-gray-800 text-base sm:text-lg">{item.title}</h3>
                                <p className="text-sm text-gray-500 mt-0.5">{item.organizer} • {item.date}</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full flex items-center gap-1">
                                  <span>{typeIcon}</span>
                                  <span>{typeLabel}</span>
                                </span>
                                <motion.div
                                  animate={{ rotate: isExpanded ? 180 : 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0"
                                >
                                  <ChevronDown className="w-4 h-4 text-gray-500" />
                                </motion.div>
                              </div>
                            </div>

                            {/* Skills preview - minimal */}
                            <div className="flex flex-wrap gap-1.5 mt-3">
                              {item.skills.map((skill, i) => (
                                <span
                                  key={i}
                                  className={`px-2 py-0.5 text-xs rounded-full ${colors.light} ${colors.text} border ${colors.border}`}
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="border-t border-gray-100"
                          >
                            <div className="p-5 sm:p-6 bg-gray-50">
                              {/* Description */}
                              <div className="mb-4">
                                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Description</h4>
                                <p className="text-sm text-gray-600">{item.description}</p>
                              </div>

                              {/* Credential ID if exists */}
                              {item.credentialId && (
                                <div className="mb-4">
                                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Credential ID</h4>
                                  <p className="text-sm text-gray-600 font-mono bg-white p-2 rounded-lg border border-gray-200">
                                    {item.credentialId}
                                  </p>
                                </div>
                              )}

                              {/* Preview Button */}
                              <motion.button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleViewProfessional(item);
                                }}
                                className={`w-full py-2.5 rounded-lg ${colors.bg} text-white text-sm font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <Eye className="w-4 h-4" />
                                Preview Certificate
                              </motion.button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Download CV Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10 sm:mt-12 lg:mt-16"
        >
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-teal-600 text-white rounded-xl sm:rounded-2xl hover:bg-teal-700 transition-all shadow-md inline-flex items-center gap-2 sm:gap-3 text-base sm:text-lg font-medium">
            <Download className="w-5 h-5 sm:w-6 sm:h-6" />
            Download Complete CV
          </button>
        </motion.div>
      </div>

      {/* Preview Modal - No Download Option */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl sm:rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-xl"
            >
              {modalType === "cert" && selectedCert && (
                <div className="p-6 sm:p-8">
                  {/* Certificate Modal Content - Preview Only */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl ${getColorClasses(selectedCert.color).light} flex items-center justify-center text-3xl sm:text-4xl`}>
                        {selectedCert.emoji}
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-gray-800 text-xl sm:text-2xl">{selectedCert.name}</h3>
                        <p className={`text-base sm:text-lg font-medium ${getColorClasses(selectedCert.color).text} mt-1`}>{selectedCert.issuer}</p>
                        <p className="text-sm text-gray-500 mt-1">Issued {selectedCert.date}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setShowModal(false)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>

                  {/* Certificate Image - Preview Only */}
                  {selectedCert.imagePath && (
                    <div className="mb-6 border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                      <img 
                        src={selectedCert.imagePath}
                        alt={selectedCert.name}
                        className="w-full h-auto object-contain"
                        onError={(e) => {
                          console.error('Failed to load image:', selectedCert.imagePath);
                          (e.target as HTMLImageElement).src = '/assets/images/placeholder.jpg';
                        }}
                      />
                    </div>
                  )}

                  {/* Description */}
                  {selectedCert.description && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Description</h4>
                      <p className="text-gray-600 text-base">{selectedCert.description}</p>
                    </div>
                  )}

                  {/* Credential ID */}
                  {selectedCert.credentialId && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Credential ID</h4>
                      <p className="text-gray-600 text-base font-mono bg-gray-50 p-3 rounded-lg">{selectedCert.credentialId}</p>
                    </div>
                  )}

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCert.skills.map((skill, i) => {
                        const colors = getColorClasses(selectedCert.color);
                        return (
                          <span
                            key={i}
                            className={`px-3 py-1.5 text-sm rounded-full ${colors.light} ${colors.text} border ${colors.border}`}
                          >
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Close Button - No Download Option */}
                  <motion.button
                    onClick={() => setShowModal(false)}
                    className="w-full py-3 sm:py-4 rounded-xl bg-gray-200 text-gray-700 text-base sm:text-lg font-medium hover:bg-gray-300 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Close Preview
                  </motion.button>
                </div>
              )}

              {modalType === "professional" && selectedProfessional && (
                <div className="p-6 sm:p-8">
                  {/* Professional Development Modal Content - Preview Only */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl ${getColorClasses(selectedProfessional.color).light} flex items-center justify-center text-3xl sm:text-4xl`}>
                        {selectedProfessional.emoji}
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-gray-800 text-xl sm:text-2xl">{selectedProfessional.title}</h3>
                        <p className={`text-base sm:text-lg font-medium ${getColorClasses(selectedProfessional.color).text} mt-1`}>{selectedProfessional.organizer}</p>
                        <p className="text-sm text-gray-500 mt-1">{selectedProfessional.date}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setShowModal(false)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>

                  {/* Type Badge */}
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      <span>{getTypeIcon(selectedProfessional.type)}</span>
                      <span>{getTypeLabel(selectedProfessional.type)}</span>
                    </span>
                  </div>

                  {/* Certificate Image - Preview Only */}
                  {selectedProfessional.imagePath && (
                    <div className="mb-6 border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                      <img 
                        src={selectedProfessional.imagePath}
                        alt={selectedProfessional.title}
                        className="w-full h-auto object-contain"
                        onError={(e) => {
                          console.error('Failed to load image:', selectedProfessional.imagePath);
                          (e.target as HTMLImageElement).src = '/assets/images/placeholder.jpg';
                        }}
                      />
                    </div>
                  )}

                  {/* Description */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Description</h4>
                    <p className="text-gray-600 text-base">{selectedProfessional.description}</p>
                  </div>

                  {/* Credential ID */}
                  {selectedProfessional.credentialId && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Credential ID</h4>
                      <p className="text-gray-600 text-base font-mono bg-gray-50 p-3 rounded-lg">{selectedProfessional.credentialId}</p>
                    </div>
                  )}

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProfessional.skills.map((skill, i) => {
                        const colors = getColorClasses(selectedProfessional.color);
                        return (
                          <span
                            key={i}
                            className={`px-3 py-1.5 text-sm rounded-full ${colors.light} ${colors.text} border ${colors.border}`}
                          >
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Close Button - No Download Option */}
                  <motion.button
                    onClick={() => setShowModal(false)}
                    className="w-full py-3 sm:py-4 rounded-xl bg-gray-200 text-gray-700 text-base sm:text-lg font-medium hover:bg-gray-300 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Close Preview
                  </motion.button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ExperienceSection;