"use client";


import React from "react";
import Header from "@/components/common/Header";
import HomeSection from "@/components/sections/home";
import ProjectsSection from "@/components/sections/ProjectSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import AboutSection from "@/components/sections/about";



const HomePage: React.FC = () => {


  return (
    <div className="scroll-smooth bg-gray-50 text-gray-900 font-sans">
      <Header />

      <main className="pt-20">
        <section id="home" className="bg-blue-400 min-h-screen flex items-center justify-center">
          <HomeSection />
        </section>
        <section id="about" className="bg-yellow-400 min-h-screen flex items-center justify-center">
          <AboutSection />
        </section>
        <section id="projects" className="bg-green-400 min-h-screen flex items-center justify-center">
          <ProjectsSection />
        </section>
        <section id="experience" className="bg-purple-400 min-h-screen flex items-center justify-center">
          <ExperienceSection />
        </section>
        <section id="contact" className="bg-red-400 min-h-screen flex items-center justify-center">
          <ContactSection />
        </section>
      </main>
    </div>
  );
};

export default HomePage;
