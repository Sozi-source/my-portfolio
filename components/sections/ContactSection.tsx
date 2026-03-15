// app/components/sections/Contact.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, Phone, MapPin, Linkedin, Github, 
  Send, CheckCircle, AlertCircle, Clock
} from "lucide-react";
import { CompactCVButton } from "@/components/cv/CVDownloadButton";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  const contactInfo = [
    { icon: MapPin, label: "Location", value: "Nairobi, Kenya" },
    { icon: Mail, label: "Email", value: "osoziw@gmail.com" },
    { icon: Phone, label: "Phone", value: "+254 711 390 861" },
    { icon: Clock, label: "Response", value: "< 24 hours" }
  ];

  return (
    <section id="contact" className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-12 h-px bg-teal-300" />
            <span className="text-sm font-medium text-teal-600 uppercase tracking-wider">Contact</span>
            <span className="w-12 h-px bg-teal-300" />
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900">
            Let's <span className="font-semibold text-teal-600">Connect</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Get in Touch</h3>
              
              <div className="space-y-4 mb-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="p-2 bg-teal-50 rounded-lg">
                        <Icon className="w-4 h-4 text-teal-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">{item.label}</p>
                        <p className="text-sm text-gray-900">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex gap-3 mb-6">
                <a
                  href="https://linkedin.com/in/wilfred-osozi"
                  target="_blank"
                  className="p-2 bg-gray-100 rounded-lg hover:bg-teal-600 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/Sozi-source"
                  target="_blank"
                  className="p-2 bg-gray-100 rounded-lg hover:bg-teal-600 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="mailto:osoziw@gmail.com"
                  className="p-2 bg-gray-100 rounded-lg hover:bg-teal-600 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <p className="text-sm text-gray-600 mb-3">Download my CV for more details</p>
                <CompactCVButton label="Download CV" />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Send a Message</h3>

              {status === "success" && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-green-700 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  Message sent successfully!
                </div>
              )}

              {status === "error" && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  Something went wrong. Please try again.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`w-full px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors flex items-center justify-center gap-2 ${
                    status === "loading" ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {status === "loading" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;