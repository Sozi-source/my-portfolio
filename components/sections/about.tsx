import React from "react";
import { motion } from "fram
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFigma, SiGithub, SiNodedotjs } from "react-icons/si";
import Image from "next/image";

const AboutSection: React.FC = () => {
 
const skills = [
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React.js", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Figma", icon: SiFigma },
  { name: "Git/GitHub", icon: SiGithub },
  { name: "Node.js", icon: SiNodedotjs },
];

  return (
    <div className="bg-white">
      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center px-5 md:px-[10%] py-20 gap-10"
      >
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/assets/images/profile.jpg"
            alt="Profile"
            width={20}
            height={20}
            className="w-64 h-64 md:w-72 md:h-72 rounded-full shadow-lg object-cover"
          />
        </motion.div>

        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            About Me
          </h2>
          <p className="text-gray-700 text-lg mb-5">
            Hi! I’m Wilfred Osozi, a passionate web developer and technology enthusiast from Kenya. I specialize in building responsive, dynamic websites and applications using modern web technologies. I enjoy solving real-world problems, continuously learning new skills, and turning innovative ideas into interactive solutions.
          </p>
          <p className="text-gray-700 text-lg">
            When I’m not coding, I enjoy playing football, watching intelligence-themed movies, and exploring emerging technologies. My goal is to create impactful digital experiences that make life easier and more enjoyable for people.
          </p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen flex flex-col items-center justify-center px-5 md:px-[10%] py-20"
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center bg-gray-50 border border-gray-200 shadow-md rounded-lg p-5 hover:scale-105 transition-all"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Icon className="w-10 h-10 text-blue-600 mb-2" />
                <span className="text-gray-800 font-semibold text-center">{skill.name}</span>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.p
          className="mt-10 text-gray-700 text-lg text-center max-w-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          These are the technologies and tools I’m most comfortable with. I focus on writing clean, maintainable code and creating efficient, user-friendly interfaces. I’m constantly exploring new tools and frameworks to enhance my skill set and deliver the best results.
        </motion.p>
      </section>
    </div>
  );
};

export default AboutSection;
