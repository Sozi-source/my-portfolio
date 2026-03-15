// app/components/cv/CVDownloadButton.tsx
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, FileText, CheckCircle, AlertCircle, Eye, Printer } from 'lucide-react';

interface CVDownloadButtonProps {
  showPreview?: boolean;
  className?: string;
  onDownloadComplete?: () => void;
  variant?: 'primary' | 'secondary' | 'compact';
  label?: string;
}

export const CVDownloadButton: React.FC<CVDownloadButtonProps> = ({ 
  showPreview = true,
  className = "",
  onDownloadComplete,
  variant = 'primary',
  label = 'Download CV'
}) => {
  const [downloading, setDownloading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // Path to your CV HTML file
  const cvPath = '/assets/cv/index.html';
  const cvPdfPath = '/assets/cv/Wilfred_Osozi_CV.pdf';

  const getButtonStyles = () => {
    switch(variant) {
      case 'primary':
        return 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700';
      case 'secondary':
        return 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200';
      case 'compact':
        return 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 text-sm px-4 py-2';
      default:
        return 'bg-gradient-to-r from-blue-600 to-purple-600 text-white';
    }
  };

  const handleDownload = async () => {
    setDownloading(true);
    setError(false);
    
    try {
      // Try to download PDF first, fallback to HTML
      const response = await fetch(cvPdfPath).catch(() => fetch(cvPath));
      
      if (!response.ok) {
        throw new Error('CV file not found');
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Wilfred_Osozi_CV_${new Date().getFullYear()}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      window.URL.revokeObjectURL(url);
      
      setSuccess(true);
      if (onDownloadComplete) {
        onDownloadComplete();
      }
      
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error('Download failed:', err);
      setError(true);
      setTimeout(() => setError(false), 3000);
      
      // Fallback: open in new tab
      window.open(cvPath, '_blank');
    } finally {
      setDownloading(false);
    }
  };

  const handlePreview = () => {
    window.open(cvPath, '_blank');
  };

  const handlePrint = () => {
    const printWindow = window.open(cvPath, '_blank');
    if (printWindow) {
      printWindow.onload = () => {
        printWindow.print();
      };
    }
  };

  return (
    <div className="relative">
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Download Button */}
        <motion.button
          onClick={handleDownload}
          disabled={downloading}
          whileHover={!downloading ? { scale: 1.05 } : {}}
          whileTap={!downloading ? { scale: 0.95 } : {}}
          className={`
            ${variant === 'compact' ? 'px-4 py-2' : 'px-6 py-3'}
            rounded-xl font-semibold 
            flex items-center justify-center gap-2 
            shadow-lg hover:shadow-xl
            transition-all duration-300
            ${getButtonStyles()}
            ${downloading ? 'opacity-75 cursor-not-allowed' : ''}
            ${className}
          `}
        >
          {downloading ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Preparing...</span>
            </>
          ) : (
            <>
              <Download className={variant === 'compact' ? 'w-4 h-4' : 'w-5 h-5'} />
              <span>{variant === 'compact' ? 'CV' : label}</span>
            </>
          )}
        </motion.button>

        {/* Preview Button */}
        {showPreview && variant !== 'compact' && (
          <motion.button
            onClick={handlePreview}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-200 transition-all duration-300"
          >
            <Eye className="w-5 h-5" />
            <span>Preview</span>
          </motion.button>
        )}

        {/* Print Button - Only for full version */}
        {variant === 'primary' && (
          <motion.button
            onClick={handlePrint}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-200 transition-all duration-300"
          >
            <Printer className="w-5 h-5" />
            <span>Print</span>
          </motion.button>
        )}
      </div>

      {/* Success Message */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute -bottom-8 left-0 right-0 flex items-center justify-center gap-2 text-green-600 text-sm bg-green-50 px-4 py-2 rounded-lg"
          >
            <CheckCircle className="w-4 h-4" />
            <span>CV downloaded successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Message */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute -bottom-8 left-0 right-0 flex items-center justify-center gap-2 text-red-600 text-sm bg-red-50 px-4 py-2 rounded-lg"
          >
            <AlertCircle className="w-4 h-4" />
            <span>Opening in browser...</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Compact version for headers and footers
export const CompactCVButton: React.FC<Omit<CVDownloadButtonProps, 'variant' | 'showPreview'>> = (props) => (
  <CVDownloadButton variant="compact" showPreview={false} {...props} />
);