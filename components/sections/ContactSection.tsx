import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add actual form submission logic here (e.g., email API, Formspree, etc.)
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-white min-h-screen px-5 md:px-[10%] py-20">
      {/* Page Title */}
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      {/* Contact Container */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-20">
        {/* Contact Info */}
        <motion.div
          className="md:w-1/2 flex flex-col gap-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-700 text-lg">
            I’m always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out using the form or my social media channels below.
          </p>

          <div className="flex flex-col gap-4 text-gray-700">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span>Nairobi, Kenya</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-600" />
              <span>wilfred.osozi@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-600" />
              <span>+254 711390861</span>
            </div>
          </div>

          <div className="flex gap-6 mt-6">
            <a href="https://www.linkedin.com/in/wilfred-osozi" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 text-blue-600 hover:text-blue-800 transition-all" />
            </a>
            <a href="https://github.com/wilfredosozi" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 text-gray-800 hover:text-black transition-all" />
            </a>
            <a href="https://instagram.com/wilfredosozi" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6 text-pink-600 hover:text-pink-800 transition-all" />
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="md:w-1/2 bg-gray-50 p-8 rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {submitted && (
            <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
              Your message has been sent successfully!
            </div>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
