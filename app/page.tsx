// app/page.tsx
"use client";

import React from "react";
import Header from "@/components/common/Header";
import HomeSection from "@/components/sections/HomeSection";
import ProjectsSection from "@/components/sections/ProjectSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import ExperiencePage from "@/components/sections/ExperienceSection";

const HomePage: React.FC = () => {
  return (
    <div className="scroll-smooth bg-white text-gray-900 font-sans">
      <Header />
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ExperiencePage />
      <ContactSection />
    </div>
  );
};

export default HomePage;