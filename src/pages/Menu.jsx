import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiDownload, FiEye, FiMaximize2, FiZoomIn, FiZoomOut, FiRotateCcw } from 'react-icons/fi';
import { PRODUCTS } from '../data/products';
import { PageTransition } from '../components/common/PageTransition';

export const Menu = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomScale, setZoomScale] = useState(1);

  const handleZoomIn = () => setZoomScale((prev) => Math.min(prev + 0.3, 3));
  const handleZoomOut = () => setZoomScale((prev) => Math.max(prev - 0.3, 0.8));
  const handleResetZoom = () => setZoomScale(1);
  const toggleZoom = () => setZoomScale((prev) => (prev > 1.2 ? 1 : 1.8));

  const handleClose = () => {
    setSelectedImage(null);
    setZoomScale(1);
  };

  return (
    <PageTransition>
      <div className="relative pt-28 pb-20 bg-brand-cream min-h-screen overflow-hidden">
        
        {/* Background ambient glow shapes */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-olive/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">

          {/* Official PDF Menu Pages Preview */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-brand-olive/15 pb-4">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-brand-dark">
                Official Menu Sheet
              </h2>
              <span className="text-xs font-semibold text-brand-olive uppercase tracking-wider bg-brand-olive/10 px-3 py-1 rounded-full">
                Updated June 2026
              </span>
            </div>

            {/* Main Menu Sheet Image Card */}
            <div className="relative group rounded-3xl overflow-hidden shadow-xl border border-brand-olive/20 bg-white">
              <div 
                className="relative cursor-pointer overflow-hidden max-h-[600px] sm:max-h-[750px] flex items-center justify-center bg-gray-50"
                onClick={() => setSelectedImage('/images/menu-pages/menu-full.jpg')}
              >
                <img
                  src="/images/menu-pages/menu-full.jpg"
                  alt="Martin's Roll Official Menu Pages"
                  className="w-full h-auto object-contain max-h-[750px] group-hover:scale-[1.01] transition-transform duration-500"
                />
                
                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white/95 text-brand-dark px-5 py-2.5 rounded-2xl font-bold text-sm shadow-xl flex items-center space-x-2">
                    <FiEye className="w-5 h-5 text-brand-olive" />
                    <span>Click to Zoom & View Fullscreen</span>
                  </span>
                </div>
              </div>

              {/* Bottom Card Controls Bar */}
              <div className="p-4 sm:p-5 bg-white border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 font-medium">
                  <FiEye className="w-4 h-4 text-brand-olive" />
                  <span>Click image to expand in full resolution</span>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setSelectedImage('/images/menu-pages/menu-full.jpg')}
                    className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-semibold text-brand-olive hover:text-brand-olive-dark transition-colors cursor-pointer"
                  >
                    <FiMaximize2 className="w-4 h-4" />
                    <span>Expand</span>
                  </button>
                  <span className="text-gray-300">|</span>
                  <a
                    href="/Martins-Menu.pdf"
                    download="Martins-Roll-Menu.pdf"
                    className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-semibold text-brand-olive hover:text-brand-olive-dark transition-colors cursor-pointer"
                  >
                    <FiDownload className="w-4 h-4" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Product Items Photo Gallery */}
          <div className="pt-8 space-y-6">
            <div className="flex items-center justify-between border-b border-brand-olive/15 pb-4">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-brand-dark">
                Product Photo Gallery
              </h2>
              <span className="text-xs font-medium text-gray-500">
                {PRODUCTS.length} Featured Delights
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {PRODUCTS.map((product, index) => (
                <motion.div
                  key={product.id || index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: (index % 12) * 0.03 }}
                  onClick={() => setSelectedImage(product.image)}
                  className="group relative cursor-pointer overflow-hidden rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 bg-white border border-brand-olive/15"
                >
                  <div className="aspect-[4/5] w-full overflow-hidden">
                    <img
                      src={product.image}
                      alt={`Product ${index + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Interactive High-Resolution Fullscreen Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex flex-col bg-black/92 backdrop-blur-xl select-none"
            onClick={handleClose}
          >
            {/* Top Toolbar */}
            <div 
              className="w-full bg-black/80 border-b border-white/10 px-4 sm:px-6 py-3 flex items-center justify-between z-30 text-white shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center space-x-3">
                <span className="font-bold text-sm sm:text-base text-gray-200">
                  {selectedImage.includes('menu-full') ? "Martin's Roll Official Menu Sheet" : "Product Preview"}
                </span>
                <a
                  href="/Martins-Menu.pdf"
                  download="Martins-Roll-Menu.pdf"
                  className="hidden sm:inline-flex items-center space-x-1.5 bg-[#1B3A2D] hover:bg-[#122A20] text-white px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors"
                >
                  <FiDownload className="w-4 h-4" />
                  <span>Download PDF</span>
                </a>
              </div>

              {/* Center Zoom Controls */}
              <div className="flex items-center space-x-2 bg-white/10 px-3 py-1.5 rounded-2xl backdrop-blur-md">
                <button
                  onClick={handleZoomOut}
                  disabled={zoomScale <= 0.8}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-40 flex items-center justify-center text-white transition-colors cursor-pointer"
                  title="Zoom Out"
                >
                  <FiZoomOut className="w-4 h-4" />
                </button>
                
                <span 
                  onClick={handleResetZoom}
                  className="text-xs font-mono font-bold w-12 text-center cursor-pointer hover:text-amber-400 transition-colors"
                  title="Click to reset zoom to 100%"
                >
                  {Math.round(zoomScale * 100)}%
                </span>

                <button
                  onClick={handleZoomIn}
                  disabled={zoomScale >= 3}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-40 flex items-center justify-center text-white transition-colors cursor-pointer"
                  title="Zoom In"
                >
                  <FiZoomIn className="w-4 h-4" />
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            {/* Viewport Canvas */}
            <div 
              className="flex-1 w-full h-full overflow-auto p-2 sm:p-6 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="relative max-w-none transition-transform duration-200 ease-out flex items-center justify-center my-auto"
                style={{ transform: `scale(${zoomScale})`, transformOrigin: 'center center' }}
              >
                <img
                  src={selectedImage}
                  alt="Full Resolution View"
                  onClick={toggleZoom}
                  className="max-w-[95vw] max-h-[88vh] w-auto h-auto object-contain rounded-lg shadow-2xl cursor-zoom-in"
                  title="Click to toggle zoom"
                />
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};

export default Menu;
