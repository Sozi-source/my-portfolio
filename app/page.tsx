// app/page.tsx
"use client";

import React from "react";
import Header from "@/components/common/Header";
import HomeSection from "@/components/sections/HomeSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectSection"
import ContactSection from "@/components/sections/ContactSection";

const HomePage: React.FC = () => {
  return (
    <div className="scroll-smooth bg-white text-gray-900 font-sans">
      <Header />
      <HomeSection />
      <AboutSection />
      <ExperienceSection /> 
      <ProjectsSection />  
      <ContactSection />
    </div>
  );
};

export default HomePage;