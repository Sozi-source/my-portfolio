"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// Experience Data
const experienceData = [
  {
    title: 'Head of Department, Human Nutrition & Dietetics',
    company: 'Imperial College of Medical & Health Sciences, Thika',
    period: '2023 – Present',
    points: [
      'Lead departmental programs, staff, and curriculum review aligned with KNDI standards.',
      'Oversee budgets, partnerships, and public health initiatives.',
      'Mentor faculty and students in research and professional growth.',
    ],
  },
  {
    title: 'Nutrition & Dietetics Trainer',
    company: 'Imperial College of Medical & Health Sciences, Thika',
    period: '2023 – Present',
    points: [
      'Develop learning materials and deliver lectures for diploma and certificate students.',
      'Assess student performance and guide career and research planning.',
    ],
  },
  {
    title: 'Nutrition & Dietetics Trainer',
    company: 'Kenya Institute of Professional Studies, Nairobi',
    period: '2018 – 2022',
    points: [
      'Delivered theoretical and practical training, supervised clinical attachments.',
      'Contributed to curriculum development and program improvement.',
    ],
  },
  {
    title: 'Clinical Nutritionist',
    company: 'Gatundu Level 5 Hospital, Kiambu County',
    period: '2016 – 2017',
    points: [
      'Designed therapeutic diets and provided nutrition counseling for patients.',
      'Conducted community nutrition education and follow-up care.',
    ],
  },
  {
    title: 'Software Engineer / Freelance Developer',
    company: 'Freelance & Personal Projects',
    period: '2025 – Present',
    points: [
      'Built responsive websites and web apps using React, Next.js, and Node.js.',
      'Delivered full-stack solutions with API integration and UI/UX design.',
      'Ensured timely delivery and client satisfaction.',
    ],
  },
];

// Experience Card Component
interface ExperienceCardProps {
  item: {
    title: string;
    company: string;
    period: string;
    points: string[];
  };
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ item, index }) => {
  const [showAll, setShowAll] = useState(false);
  const toggleShow = () => setShowAll(!showAll);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
      className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
    >
      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
      <p className="text-blue-600 font-semibold mb-1">{item.company}</p>
      <p className="text-gray-500 text-sm mb-4">{item.period}</p>
      <ul className="list-disc list-inside text-gray-600 space-y-2">
        {item.points.slice(0, showAll ? item.points.length : 0).map((point, idx) => (
          <li key={idx} className="text-sm leading-relaxed">{point}</li>
        ))}
      </ul>
      {item.points.length > 1 && (
        <button
          onClick={toggleShow}
          className="mt-4 text-blue-600 hover:text-blue-700 font-semibold text-sm hover:underline focus:outline-none transition-colors"
        >
          {showAll ? '▲ See Less' : '▼ See More'}
        </button>
      )}
    </motion.div>
  );
};

// Experience Section Component
const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-5 md:px-20 bg-yellow-50">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
          Experience
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          My professional journey spanning nutrition, education, and software development
        </p>
      </motion.div>

      {/* Experience Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {experienceData.map((item, index) => (
          <ExperienceCard key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
