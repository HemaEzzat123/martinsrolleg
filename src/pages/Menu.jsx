import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiX, 
  FiDownload, 
  FiEye, 
  FiMaximize2, 
  FiZoomIn, 
  FiZoomOut, 
  FiRotateCcw,
  FiMove
} from 'react-icons/fi';
import { PRODUCTS } from '../data/products';
import { PageTransition } from '../components/common/PageTransition';

export const Menu = () => {
  const [activeMenuSheet, setActiveMenuSheet] = useState('ar'); // 'ar' or 'en'
  const [activeTab, setActiveTab] = useState('full'); // 'full', 'p1', 'p2'
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageTitle, setSelectedImageTitle] = useState('');
  const [zoomScale, setZoomScale] = useState(1);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const dragStartRef = useRef({ x: 0, y: 0 });
  const viewportRef = useRef(null);

  const menuImages = {
    ar: {
      full: {
        src: '/images/menu-pages/menu-ar-full.jpg',
        title: "Martin's Roll Official Arabic Menu (Full)"
      },
      p1: {
        src: '/images/menu-pages/menu-ar-p1.jpg',
        title: "Page 1: Beverages, Coffee & Mojitos (Arabic)"
      },
      p2: {
        src: '/images/menu-pages/menu-ar-p2.jpg',
        title: "Page 2: Cinnamon Rolls, Croissants, Desserts & Breakfast (Arabic)"
      },
      pdfUrl: '/المنيو.pdf',
      pdfName: 'Martins-Roll-Menu-Arabic.pdf'
    },
    en: {
      full: {
        src: '/images/menu-pages/menu-full.jpg',
        title: "Martin's Roll Official English Menu Sheet"
      },
      pdfUrl: '/Martins-Menu.pdf',
      pdfName: 'Martins-Roll-Menu-English.pdf'
    }
  };

  const openImage = (imageSrc, title) => {
    setSelectedImage(imageSrc);
    setSelectedImageTitle(title || '');
    setZoomScale(1);
    setPanPosition({ x: 0, y: 0 });
  };

  const handleClose = () => {
    setSelectedImage(null);
    setZoomScale(1);
    setPanPosition({ x: 0, y: 0 });
  };

  const handleZoomIn = () => {
    setZoomScale((prev) => Math.min(prev + 0.35, 4.5));
  };

  const handleZoomOut = () => {
    setZoomScale((prev) => {
      const nextScale = Math.max(prev - 0.35, 0.8);
      if (nextScale <= 1) {
        setPanPosition({ x: 0, y: 0 });
      }
      return nextScale;
    });
  };

  const handleResetZoom = () => {
    setZoomScale(1);
    setPanPosition({ x: 0, y: 0 });
  };

  const handleSetPresetZoom = (preset) => {
    setZoomScale(preset);
    if (preset === 1) {
      setPanPosition({ x: 0, y: 0 });
    }
  };

  const toggleZoom = () => {
    if (zoomScale > 1.2) {
      handleResetZoom();
    } else {
      setZoomScale(2.2);
    }
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.25 : -0.25;
    setZoomScale((prev) => {
      const nextScale = Math.min(Math.max(0.8, prev + delta), 4.5);
      if (nextScale <= 1) {
        setPanPosition({ x: 0, y: 0 });
      }
      return nextScale;
    });
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX - panPosition.x,
      y: e.clientY - panPosition.y,
    };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPanPosition({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      dragStartRef.current = {
        x: e.touches[0].clientX - panPosition.x,
        y: e.touches[0].clientY - panPosition.y,
      };
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging && e.touches.length === 1) {
      setPanPosition({
        x: e.touches[0].clientX - dragStartRef.current.x,
        y: e.touches[0].clientY - dragStartRef.current.y,
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === '+' || e.key === '=') {
        handleZoomIn();
      } else if (e.key === '-') {
        handleZoomOut();
      } else if (e.key === '0' || e.key.toLowerCase() === 'r') {
        handleResetZoom();
      } else if (e.key === 'ArrowLeft') {
        setPanPosition((prev) => ({ ...prev, x: prev.x + 80 }));
      } else if (e.key === 'ArrowRight') {
        setPanPosition((prev) => ({ ...prev, x: prev.x - 80 }));
      } else if (e.key === 'ArrowUp') {
        setPanPosition((prev) => ({ ...prev, y: prev.y + 80 }));
      } else if (e.key === 'ArrowDown') {
        setPanPosition((prev) => ({ ...prev, y: prev.y - 80 }));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el || !selectedImage) return;

    const onWheel = (e) => handleWheel(e);
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [selectedImage]);

  const currentSheetData = menuImages[activeMenuSheet];

  return (
    <PageTransition>
      <div className="relative pt-28 pb-20 bg-brand-cream min-h-screen font-body text-brand-dark" dir="ltr">
        
        {/* Ambient glow backgrounds */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-olive/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">

          {/* Header & Menu Sheet Controls */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-brand-olive/15 pb-6">
            
            <div>
              <span className="inline-block px-4 py-1 mb-2 text-xs font-bold uppercase tracking-widest text-brand-olive bg-brand-olive/10 rounded-full">
                Official Menu Sheet Preview
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-brand-dark">
                Menu & Drinks Catalog
              </h1>
              <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-xl">
                View Martin's Roll official menu sheet images in Arabic & English with high-resolution zoom and PDF download.
              </p>
            </div>

            {/* Menu Sheet Toggle Buttons & PDF Downloads */}
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              
              {/* Sheet Language Switcher */}
              <div className="flex items-center bg-white border border-brand-olive/20 rounded-full p-1 shadow-sm">
                <button
                  onClick={() => {
                    setActiveMenuSheet('ar');
                    setActiveTab('full');
                  }}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeMenuSheet === 'ar' ? 'bg-brand-olive text-white shadow-md' : 'text-gray-600 hover:text-brand-dark'
                  }`}
                >
                  المنيو العربي 🇪🇬
                </button>
                <button
                  onClick={() => {
                    setActiveMenuSheet('en');
                    setActiveTab('full');
                  }}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeMenuSheet === 'en' ? 'bg-brand-olive text-white shadow-md' : 'text-gray-600 hover:text-brand-dark'
                  }`}
                >
                  English Menu 🇬🇧
                </button>
              </div>

              {/* PDF Download Buttons */}
              <div className="flex items-center space-x-2">
                <a
                  href="/المنيو.pdf"
                  download="Martins-Roll-Menu-Arabic.pdf"
                  className="inline-flex items-center space-x-1.5 bg-brand-olive hover:bg-brand-olive-dark text-white px-4 py-2.5 rounded-full text-xs font-bold transition-all shadow-md cursor-pointer"
                  title="Download Arabic Menu PDF"
                >
                  <FiDownload className="w-4 h-4" />
                  <span>Arabic PDF</span>
                </a>

                <a
                  href="/Martins-Menu.pdf"
                  download="Martins-Roll-Menu-English.pdf"
                  className="inline-flex items-center space-x-1.5 bg-brand-dark hover:bg-black text-white px-4 py-2.5 rounded-full text-xs font-bold transition-all shadow-md cursor-pointer"
                  title="Download English Menu PDF"
                >
                  <FiDownload className="w-4 h-4 text-brand-gold" />
                  <span>English PDF</span>
                </a>
              </div>

            </div>

          </div>

          {/* Menu Sheet Image Display */}
          <div className="space-y-6">
            
            {/* Page Tabs Selector for Arabic Sheet */}
            {activeMenuSheet === 'ar' && (
              <div className="flex items-center justify-center sm:justify-start space-x-2 overflow-x-auto pb-2 no-scrollbar">
                <button
                  onClick={() => setActiveTab('full')}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeTab === 'full' 
                      ? 'bg-brand-olive text-white shadow-md' 
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  Full Arabic Menu (Stacked View)
                </button>
                <button
                  onClick={() => setActiveTab('p1')}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeTab === 'p1' 
                      ? 'bg-brand-olive text-white shadow-md' 
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  Page 1: Beverages & Coffee
                </button>
                <button
                  onClick={() => setActiveTab('p2')}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeTab === 'p2' 
                      ? 'bg-brand-olive text-white shadow-md' 
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  Page 2: Pastries, Cinnamon & Breakfast
                </button>
              </div>
            )}

            {/* Menu Sheet Image Viewer Cards */}
            {activeMenuSheet === 'ar' ? (
              activeTab === 'full' ? (
                /* Full Stacked View for Arabic Sheet */
                <div className="space-y-8">
                  {/* Page 1 */}
                  <div className="relative group rounded-3xl overflow-hidden shadow-xl border border-brand-olive/20 bg-white">
                    <div 
                      className="relative cursor-pointer overflow-hidden flex items-center justify-center bg-gray-50"
                      onClick={() => openImage(currentSheetData.p1.src, currentSheetData.p1.title)}
                    >
                      <img
                        src={currentSheetData.p1.src}
                        alt={currentSheetData.p1.title}
                        className="w-full h-auto object-contain group-hover:scale-[1.01] transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="bg-white/95 text-brand-dark px-5 py-2.5 rounded-2xl font-bold text-sm shadow-xl flex items-center space-x-2">
                          <FiEye className="w-5 h-5 text-brand-olive" />
                          <span>Click to Zoom Beverages Page</span>
                        </span>
                      </div>
                    </div>
                    <div className="p-4 bg-white border-t border-gray-100 flex items-center justify-between text-sm">
                      <span className="font-bold text-brand-dark">{currentSheetData.p1.title}</span>
                      <button
                        onClick={() => openImage(currentSheetData.p1.src, currentSheetData.p1.title)}
                        className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-olive cursor-pointer"
                      >
                        <FiMaximize2 className="w-4 h-4" />
                        <span>Expand</span>
                      </button>
                    </div>
                  </div>

                  {/* Page 2 */}
                  <div className="relative group rounded-3xl overflow-hidden shadow-xl border border-brand-olive/20 bg-white">
                    <div 
                      className="relative cursor-pointer overflow-hidden flex items-center justify-center bg-gray-50"
                      onClick={() => openImage(currentSheetData.p2.src, currentSheetData.p2.title)}
                    >
                      <img
                        src={currentSheetData.p2.src}
                        alt={currentSheetData.p2.title}
                        className="w-full h-auto object-contain group-hover:scale-[1.01] transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="bg-white/95 text-brand-dark px-5 py-2.5 rounded-2xl font-bold text-sm shadow-xl flex items-center space-x-2">
                          <FiEye className="w-5 h-5 text-brand-olive" />
                          <span>Click to Zoom Pastries & Desserts Page</span>
                        </span>
                      </div>
                    </div>
                    <div className="p-4 bg-white border-t border-gray-100 flex items-center justify-between text-sm">
                      <span className="font-bold text-brand-dark">{currentSheetData.p2.title}</span>
                      <button
                        onClick={() => openImage(currentSheetData.p2.src, currentSheetData.p2.title)}
                        className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-olive cursor-pointer"
                      >
                        <FiMaximize2 className="w-4 h-4" />
                        <span>Expand</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                /* Single Page View for Arabic Sheet */
                <div className="relative group rounded-3xl overflow-hidden shadow-xl border border-brand-olive/20 bg-white">
                  <div 
                    className="relative cursor-pointer overflow-hidden flex items-center justify-center bg-gray-50"
                    onClick={() => openImage(currentSheetData[activeTab].src, currentSheetData[activeTab].title)}
                  >
                    <img
                      src={currentSheetData[activeTab].src}
                      alt={currentSheetData[activeTab].title}
                      className="w-full h-auto object-contain group-hover:scale-[1.01] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-white/95 text-brand-dark px-5 py-2.5 rounded-2xl font-bold text-sm shadow-xl flex items-center space-x-2">
                        <FiEye className="w-5 h-5 text-brand-olive" />
                        <span>Click to Zoom & View Fullscreen</span>
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-white border-t border-gray-100 flex items-center justify-between text-sm">
                    <span className="font-bold text-brand-dark">{currentSheetData[activeTab].title}</span>
                    <button
                      onClick={() => openImage(currentSheetData[activeTab].src, currentSheetData[activeTab].title)}
                      className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-olive cursor-pointer"
                    >
                      <FiMaximize2 className="w-4 h-4" />
                      <span>Expand</span>
                    </button>
                  </div>
                </div>
              )
            ) : (
              /* English Menu Image View */
              <div className="relative group rounded-3xl overflow-hidden shadow-xl border border-brand-olive/20 bg-white">
                <div 
                  className="relative cursor-pointer overflow-hidden flex items-center justify-center bg-gray-50"
                  onClick={() => openImage(currentSheetData.full.src, currentSheetData.full.title)}
                >
                  <img
                    src={currentSheetData.full.src}
                    alt={currentSheetData.full.title}
                    className="w-full h-auto object-contain group-hover:scale-[1.01] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white/95 text-brand-dark px-5 py-2.5 rounded-2xl font-bold text-sm shadow-xl flex items-center space-x-2">
                      <FiEye className="w-5 h-5 text-brand-olive" />
                      <span>Click to Zoom & View Fullscreen</span>
                    </span>
                  </div>
                </div>
                <div className="p-4 bg-white border-t border-gray-100 flex items-center justify-between text-sm">
                  <span className="font-bold text-brand-dark">{currentSheetData.full.title}</span>
                  <button
                    onClick={() => openImage(currentSheetData.full.src, currentSheetData.full.title)}
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-olive cursor-pointer"
                  >
                    <FiMaximize2 className="w-4 h-4" />
                    <span>Expand</span>
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Product Photo Gallery */}
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
                  onClick={() => openImage(product.image, product.nameEn)}
                  className="group relative cursor-pointer overflow-hidden rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 bg-white border border-brand-olive/15"
                >
                  <div className="aspect-[4/5] w-full overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.nameEn}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                  <div className="p-3 text-center bg-white border-t border-gray-100">
                    <p className="text-xs font-bold text-brand-dark line-clamp-1">
                      {product.nameEn}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Fullscreen Interactive Lightbox Viewer */}
      <AnimatePresence>
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-xl select-none overflow-hidden"
            onClick={handleClose}
          >
            {/* Top Toolbar */}
            <div 
              className="w-full bg-black/80 border-b border-white/10 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between z-30 text-white shadow-xl gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center space-x-3">
                <span className="font-bold text-sm sm:text-base text-gray-100">
                  {selectedImageTitle || "Martin's Roll Menu Sheet"}
                </span>
                
                <a
                  href={currentSheetData.pdfUrl}
                  download={currentSheetData.pdfName}
                  className="hidden sm:inline-flex items-center space-x-1.5 bg-[#1B3A2D] hover:bg-[#122A20] text-white px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors shadow-sm cursor-pointer"
                >
                  <FiDownload className="w-4 h-4 text-amber-400" />
                  <span>Download PDF</span>
                </a>
              </div>

              {/* Center Zoom Controls & Presets */}
              <div className="flex items-center space-x-2 bg-white/10 px-3 py-1.5 rounded-2xl backdrop-blur-md">
                <button
                  onClick={handleZoomOut}
                  disabled={zoomScale <= 0.8}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-40 flex items-center justify-center text-white transition-colors cursor-pointer"
                  title="Zoom Out (-)"
                >
                  <FiZoomOut className="w-4 h-4" />
                </button>

                {[1, 1.5, 2, 3].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => handleSetPresetZoom(preset)}
                    className={`px-2 py-1 rounded-md text-xs font-mono font-bold transition-colors cursor-pointer ${
                      Math.abs(zoomScale - preset) < 0.15 
                        ? 'bg-amber-400 text-black' 
                        : 'bg-white/10 hover:bg-white/20 text-gray-200'
                    }`}
                  >
                    {preset * 100}%
                  </button>
                ))}

                <button
                  onClick={handleZoomIn}
                  disabled={zoomScale >= 4.5}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-40 flex items-center justify-center text-white transition-colors cursor-pointer"
                  title="Zoom In (+)"
                >
                  <FiZoomIn className="w-4 h-4" />
                </button>

                <div className="w-px h-5 bg-white/20 mx-1" />

                <button
                  onClick={handleResetZoom}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                  title="Reset Zoom & Pan (0 / R)"
                >
                  <FiRotateCcw className="w-4 h-4" />
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            {/* Viewport Canvas (Draggable & Zoomable in all directions) */}
            <div 
              ref={viewportRef}
              className="flex-1 w-full h-full relative overflow-hidden flex items-center justify-center cursor-default"
              onClick={handleClose}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <motion.div
                className={`relative max-w-none flex items-center justify-center select-none ${
                  isDragging ? 'cursor-grabbing' : zoomScale > 1 ? 'cursor-grab' : 'cursor-zoom-in'
                }`}
                animate={{
                  x: panPosition.x,
                  y: panPosition.y,
                  scale: zoomScale,
                }}
                transition={
                  isDragging
                    ? { duration: 0 }
                    : { type: 'spring', stiffness: 350, damping: 30, mass: 0.6 }
                }
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt={selectedImageTitle || "Menu Image"}
                  onDoubleClick={toggleZoom}
                  draggable={false}
                  className="max-w-[90vw] max-h-[85vh] w-auto h-auto object-contain rounded-xl shadow-2xl pointer-events-auto"
                />
              </motion.div>

              {/* Floating Pan & Zoom Hint */}
              <div 
                className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-black/75 backdrop-blur-md border border-white/15 px-4 py-2 rounded-full text-xs text-gray-200 shadow-2xl flex items-center space-x-2 pointer-events-none z-20"
              >
                <FiMove className="w-4 h-4 text-amber-400 animate-pulse" />
                <span>
                  <strong>Drag</strong> to pan in all directions &bull; <strong>Scroll wheel</strong> to zoom &bull; <strong>Double-click</strong> to toggle
                </span>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};

export default Menu;
