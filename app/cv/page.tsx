// app/cv/page.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, Printer } from 'lucide-react';
import Link from 'next/link';
import { CVDownloadButton } from '@/components/cv/CVDownloadButton';

export default function CVPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <Link href="/#about">
            <motion.button
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </motion.button>
          </Link>
          
          <div className="flex gap-3">
            <CVDownloadButton variant="secondary" label="Download PDF" />
            <motion.button
              onClick={() => window.print()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold flex items-center gap-2 hover:bg-gray-200"
            >
              <Printer className="w-5 h-5" />
              Print
            </motion.button>
          </div>
        </div>

        {/* CV Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <iframe
            src="/assets/cv/index.html"
            className="w-full h-[800px] border-0"
            title="Wilfred Osozi CV"
          />
        </motion.div>
      </div>
    </div>
  );
}