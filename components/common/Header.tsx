"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, FolderOpen, Briefcase, Mail } from "lucide-react";

const navItems = [
  { name: "Home", id: "home", icon: Home },
  { name: "About", id: "about", icon: User },
  { name: "Projects", id: "projects", icon: FolderOpen },
  { name: "Experience", id: "experience", icon: Briefcase },
  { name: "Contact", id: "contact", icon: Mail },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200; // offset
      navItems.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) {
          if (scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
            setActiveSection(item.id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg shadow-md z-50 h-16 md:h-20">
      <nav className="flex justify-between items-center h-full px-5 md:px-10 max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div
          className="text-xl font-bold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => handleNavClick("home")}
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-2xl font-extrabold hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            Wilfred Osozi
          </button>
        </motion.div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-2 font-medium text-sm transition-colors duration-300 ${
            activeSection === item.id
              ? "text-blue-600"
              : "text-gray-700 hover:text-blue-600"
          }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${
                    activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-lg shadow-lg overflow-hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-5">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all hover:bg-blue-50 ${
                        activeSection === item.id ? "bg-blue-50 text-blue-600 font-semibold" : "text-gray-700"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {item.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
