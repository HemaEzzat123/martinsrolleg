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
import { PRODUCTS, MAIN_CATEGORIES } from '../data/products';
import { PageTransition } from '../components/common/PageTransition';
import { useLanguage } from '../context/LanguageContext';

export const Menu = ({ isSection = false }) => {
  const { isAr, t } = useLanguage();
  const [activeMenuSheet, setActiveMenuSheet] = useState(isAr ? 'ar' : 'en');
  const [activeTab, setActiveTab] = useState('full'); // 'full', 'p1', 'p2'
  const [selectedCategory, setSelectedCategory] = useState('coffee');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageTitle, setSelectedImageTitle] = useState('');
  const [zoomScale, setZoomScale] = useState(1);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const dragStartRef = useRef({ x: 0, y: 0 });
  const viewportRef = useRef(null);
  const galleryRef = useRef(null);

  // Sync menu sheet default when language switches
  useEffect(() => {
    setActiveMenuSheet(isAr ? 'ar' : 'en');
    setActiveTab('full');
  }, [isAr]);

  const menuImages = {
    ar: {
      full: {
        src: '/images/menu-pages/menu-ar-full.jpg',
        title: t('menu.officialSheetTitleArFull', "Martin's Roll Official Arabic Menu (Full)")
      },
      p1: {
        src: '/images/menu-pages/menu-ar-p1.jpg',
        title: t('menu.officialSheetTitleArP1', "Page 1: Beverages, Coffee & Mojitos (Arabic)")
      },
      p2: {
        src: '/images/menu-pages/menu-ar-p2.jpg',
        title: t('menu.officialSheetTitleArP2', "Page 2: Cinnamon Rolls, Croissants, Desserts & Breakfast (Arabic)")
      },
      pdfUrl: '/المنيو.pdf',
      pdfName: 'Martins-Roll-Menu-Arabic.pdf'
    },
    en: {
      full: {
        src: '/images/menu-pages/menu-full.jpg',
        title: t('menu.officialSheetTitleEn', "Martin's Roll Official English Menu Sheet")
      },
      pdfUrl: '/Martins-Menu.pdf',
      pdfName: 'Martins-Roll-Menu-English.pdf'
    }
  };

  const handleSelectCategory = (catId) => {
    setSelectedCategory(catId);
    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openImage = (imageSrc, title = '') => {
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
        setPanPosition((prev) => ({ ...prev, x: prev.x + (isAr ? -80 : 80) }));
      } else if (e.key === 'ArrowRight') {
        setPanPosition((prev) => ({ ...prev, x: prev.x + (isAr ? 80 : -80) }));
      } else if (e.key === 'ArrowUp') {
        setPanPosition((prev) => ({ ...prev, y: prev.y + 80 }));
      } else if (e.key === 'ArrowDown') {
        setPanPosition((prev) => ({ ...prev, y: prev.y - 80 }));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, isAr]);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el || !selectedImage) return;

    const onWheel = (e) => handleWheel(e);
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [selectedImage]);

  const currentSheetData = menuImages[activeMenuSheet];
  const activeCategoryData = MAIN_CATEGORIES.find((c) => c.id === selectedCategory) || MAIN_CATEGORIES[0];

  // Deduplicate products so each card has a completely UNIQUE photo (no duplicate images)
  const uniqueCategoryProducts = [];
  const seenImages = new Set();
  for (const product of PRODUCTS.filter((p) => p.mainCategory === selectedCategory)) {
    if (product.image && !seenImages.has(product.image)) {
      seenImages.add(product.image);
      uniqueCategoryProducts.push(product);
    }
  }

  const menuContent = (
    <>
      <div className={`relative ${isSection ? 'py-14 md:py-20' : 'pt-28 pb-20 min-h-screen'} bg-brand-cream font-body text-brand-dark`}>
        
        {/* Ambient glow backgrounds */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-olive/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

          {/* Header & Menu Sheet Controls */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-brand-olive/15 pb-6">
            
            <div className="text-start">
              <span className="inline-block px-4 py-1 mb-2 text-xs font-bold uppercase tracking-widest text-brand-olive bg-brand-olive/10 rounded-full">
                {t('menu.badge')}
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-brand-dark">
                {t('menu.title')}
              </h1>
              <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-xl leading-relaxed">
                {t('menu.subtitle')}
              </p>
            </div>

            {/* Menu Sheet Toggle Buttons & PDF Downloads */}
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              
              {/* Sheet Language Switcher */}
              <div className="flex items-center bg-white border border-brand-olive/20 rounded-full p-1 shadow-sm" dir="ltr">
                <button
                  onClick={() => {
                    setActiveMenuSheet('ar');
                    setActiveTab('full');
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeMenuSheet === 'ar' ? 'bg-brand-olive text-white shadow-md' : 'text-gray-600 hover:text-brand-dark'
                  }`}
                >
                  {t('menu.arabicMenuBtn')}
                </button>
                <button
                  onClick={() => {
                    setActiveMenuSheet('en');
                    setActiveTab('full');
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeMenuSheet === 'en' ? 'bg-brand-olive text-white shadow-md' : 'text-gray-600 hover:text-brand-dark'
                  }`}
                >
                  {t('menu.englishMenuBtn')}
                </button>
              </div>

              {/* PDF Download Buttons */}
              <div className="flex items-center gap-2">
                <a
                  href="/المنيو.pdf"
                  download="Martins-Roll-Menu-Arabic.pdf"
                  className="inline-flex items-center gap-1.5 bg-brand-olive hover:bg-brand-olive-dark text-white px-4 py-2.5 rounded-full text-xs font-bold transition-all shadow-md cursor-pointer hover:scale-105 active:scale-95"
                  title={t('menu.downloadArabicPdf')}
                >
                  <FiDownload className="w-4 h-4 shrink-0 text-brand-gold" />
                  <span>{t('menu.downloadArabicPdf')}</span>
                </a>

                <a
                  href="/Martins-Menu.pdf"
                  download="Martins-Roll-Menu-English.pdf"
                  className="inline-flex items-center gap-1.5 bg-brand-dark hover:bg-black text-white px-4 py-2.5 rounded-full text-xs font-bold transition-all shadow-md cursor-pointer hover:scale-105 active:scale-95"
                  title={t('menu.downloadEnglishPdf')}
                >
                  <FiDownload className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>{t('menu.downloadEnglishPdf')}</span>
                </a>
              </div>

            </div>

          </div>

          {/* 1. Original Official Menu Sheet Image Display (Shown directly as before) */}
          <div className="space-y-6">
            
            {/* Page Tabs Selector for Arabic Sheet */}
            {activeMenuSheet === 'ar' && (
              <div className="flex items-center justify-center sm:justify-start gap-2 overflow-x-auto pb-2 no-scrollbar">
                <button
                  onClick={() => setActiveTab('full')}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === 'full' 
                      ? 'bg-brand-olive text-white shadow-md' 
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {t('menu.fullStackedView')}
                </button>
                <button
                  onClick={() => setActiveTab('p1')}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === 'p1' 
                      ? 'bg-brand-olive text-white shadow-md' 
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {t('menu.page1Beverages')}
                </button>
                <button
                  onClick={() => setActiveTab('p2')}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === 'p2' 
                      ? 'bg-brand-olive text-white shadow-md' 
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {t('menu.page2Pastries')}
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
                        <span className="bg-white/95 text-brand-dark px-5 py-2.5 rounded-2xl font-bold text-sm shadow-xl flex items-center gap-2">
                          <FiEye className="w-5 h-5 text-brand-olive shrink-0" />
                          <span>{t('menu.clickToZoomBeverages')}</span>
                        </span>
                      </div>
                    </div>
                    <div className="p-4 bg-white border-t border-gray-100 flex items-center justify-between text-sm">
                      <span className="font-bold text-brand-dark">{currentSheetData.p1.title}</span>
                      <button
                        onClick={() => openImage(currentSheetData.p1.src, currentSheetData.p1.title)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-olive cursor-pointer"
                      >
                        <FiMaximize2 className="w-4 h-4 shrink-0" />
                        <span>{t('menu.expand')}</span>
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
                        <span className="bg-white/95 text-brand-dark px-5 py-2.5 rounded-2xl font-bold text-sm shadow-xl flex items-center gap-2">
                          <FiEye className="w-5 h-5 text-brand-olive shrink-0" />
                          <span>{t('menu.clickToZoomPastries')}</span>
                        </span>
                      </div>
                    </div>
                    <div className="p-4 bg-white border-t border-gray-100 flex items-center justify-between text-sm">
                      <span className="font-bold text-brand-dark">{currentSheetData.p2.title}</span>
                      <button
                        onClick={() => openImage(currentSheetData.p2.src, currentSheetData.p2.title)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-olive cursor-pointer"
                      >
                        <FiMaximize2 className="w-4 h-4 shrink-0" />
                        <span>{t('menu.expand')}</span>
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
                      <span className="bg-white/95 text-brand-dark px-5 py-2.5 rounded-2xl font-bold text-sm shadow-xl flex items-center gap-2">
                        <FiEye className="w-5 h-5 text-brand-olive shrink-0" />
                        <span>{t('menu.clickToZoomBeverages')}</span>
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-white border-t border-gray-100 flex items-center justify-between text-sm">
                    <span className="font-bold text-brand-dark">{currentSheetData[activeTab].title}</span>
                    <button
                      onClick={() => openImage(currentSheetData[activeTab].src, currentSheetData[activeTab].title)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-olive cursor-pointer"
                    >
                      <FiMaximize2 className="w-4 h-4 shrink-0" />
                      <span>{t('menu.expand')}</span>
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
                    <span className="bg-white/95 text-brand-dark px-5 py-2.5 rounded-2xl font-bold text-sm shadow-xl flex items-center gap-2">
                      <FiEye className="w-5 h-5 text-brand-olive shrink-0" />
                      <span>{t('menu.clickToZoomEnglish')}</span>
                    </span>
                  </div>
                </div>
                <div className="p-4 bg-white border-t border-gray-100 flex items-center justify-between text-sm">
                  <span className="font-bold text-brand-dark">{currentSheetData.full.title}</span>
                  <button
                    onClick={() => openImage(currentSheetData.full.src, currentSheetData.full.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-olive cursor-pointer"
                  >
                    <FiMaximize2 className="w-4 h-4 shrink-0" />
                    <span>{t('menu.expand')}</span>
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* 2. The 3 Main Category Cards (cat 1: Coffee, cat 2: Pastries, cat 3: Desserts) */}
          <div className="pt-4 space-y-4">
            <div className="flex items-center justify-between border-b border-brand-olive/15 pb-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-heading text-brand-dark">
                  {t('menu.mainCategoriesTitle', isAr ? 'الأقسام الرئيسية' : 'Main Categories')}
                </h2>
                <p className="text-xs text-gray-500 mt-0.5">
                  {isAr ? 'اضغط على أي قسم لعرض أصنافه أدناه' : 'Click any category to browse its photos below'}
                </p>
              </div>
              <span className="text-xs font-semibold text-brand-olive bg-brand-olive/10 px-3 py-1 rounded-full">
                {isAr ? '٣ أقسام رئيسية' : '3 Main Categories'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {MAIN_CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                const title = isAr ? cat.titleAr : cat.titleEn;
                const tag = isAr ? cat.tagAr : cat.tagEn;

                return (
                  <motion.div
                    key={cat.id}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleSelectCategory(cat.id)}
                    className={`relative group cursor-pointer rounded-3xl overflow-hidden transition-all duration-300 ${
                      isSelected
                        ? 'ring-4 ring-brand-olive shadow-2xl shadow-brand-olive/25 border-2 border-brand-olive'
                        : 'border border-brand-olive/20 shadow-lg hover:shadow-xl opacity-90 hover:opacity-100'
                    } bg-white`}
                  >
                    {/* Category Banner Photo */}
                    <div className="relative aspect-[2.1/1] w-full overflow-hidden bg-brand-dark">
                      <img
                        src={cat.image}
                        alt={title}
                        className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                          isSelected ? 'scale-105' : 'group-hover:scale-105'
                        }`}
                      />
                      
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 transition-opacity duration-300 ${
                        isSelected 
                          ? 'bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60' 
                          : 'bg-black/20 group-hover:bg-black/10'
                      }`} />

                      {/* Active Indicator Badge */}
                      {isSelected && (
                        <div className="absolute top-3 end-3 z-10">
                          <span className="inline-flex items-center gap-1.5 bg-brand-olive text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-white/20">
                            <span className="w-2 h-2 rounded-full bg-brand-gold animate-ping" />
                            <span>{isAr ? 'القسم المختار' : 'Active'}</span>
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Card Footer Bar */}
                    <div className={`p-4 transition-colors flex items-center justify-between ${
                      isSelected ? 'bg-brand-olive text-white' : 'bg-white text-brand-dark group-hover:bg-brand-cream/50'
                    }`}>
                      <div>
                        <span className={`text-[10px] font-extrabold uppercase tracking-widest block mb-0.5 ${
                          isSelected ? 'text-brand-gold' : 'text-brand-olive'
                        }`}>
                          {tag}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold font-heading">
                          {title}
                        </h3>
                      </div>

                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        isSelected 
                          ? 'bg-white text-brand-olive shadow-sm' 
                          : 'bg-brand-cream text-brand-dark group-hover:bg-brand-olive group-hover:text-white'
                      }`}>
                        <FiEye className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* 3. Filtered Product Photos Gallery (STRICTLY UNIQUE PHOTOS - NO DUPLICATES - NO PRODUCT NAMES) */}
          <div ref={galleryRef} className="pt-4 space-y-6 scroll-mt-24">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-olive/15 pb-4">
              <div className="text-start">
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-dark">
                    {isAr ? activeCategoryData.titleAr : activeCategoryData.titleEn}
                  </h2>
                  <span className="text-xs font-bold text-brand-olive bg-brand-olive/10 px-3 py-1 rounded-full">
                    {uniqueCategoryProducts.length} {t('menu.itemsCount', isAr ? 'صنف مميز' : 'items')}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  {isAr ? activeCategoryData.descAr : activeCategoryData.descEn}
                </p>
              </div>

              <span className="text-xs text-gray-400">
                {isAr ? 'صور حصرية بدون تكرار • انقر للتكبير' : 'Unique photos only • Click to zoom'}
              </span>
            </div>

            {/* Grid of Product Photos (NO PRODUCT NAMES - PHOTOS ONLY - NO DUPLICATES) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              <AnimatePresence mode="popLayout">
                {uniqueCategoryProducts.map((product, index) => (
                  <motion.div
                    key={product.image || product.id || index}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25, delay: (index % 12) * 0.02 }}
                    onClick={() => openImage(product.image, '')}
                    className="group relative cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 bg-white border border-brand-olive/15"
                  >
                    <div className="aspect-square sm:aspect-[4/5] w-full overflow-hidden bg-gray-50 relative">
                      <img
                        src={product.image}
                        alt="Martin's Roll Menu Photo"
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                      />
                      {/* Dark glass hover overlay with zoom icon */}
                      <div className="absolute inset-0 bg-brand-dark/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 text-brand-dark shadow-xl flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
                          <FiMaximize2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand-olive shrink-0" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
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
              <div className="flex items-center gap-3">
                <span className="font-bold text-sm sm:text-base text-gray-100">
                  {selectedImageTitle || (isAr ? "مارتنز رول - صورة المنيو" : "Martin's Roll - Menu Photo")}
                </span>
                
                <a
                  href={currentSheetData.pdfUrl}
                  download={currentSheetData.pdfName}
                  className="hidden sm:inline-flex items-center gap-1.5 bg-[#1B3A2D] hover:bg-[#122A20] text-white px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors shadow-sm cursor-pointer"
                >
                  <FiDownload className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{t('menu.downloadPdf')}</span>
                </a>
              </div>

              {/* Center Zoom Controls & Presets */}
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-2xl backdrop-blur-md" dir="ltr">
                <button
                  onClick={handleZoomOut}
                  disabled={zoomScale <= 0.8}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-40 flex items-center justify-center text-white transition-colors cursor-pointer"
                  title={t('menu.zoomOut')}
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
                  title={t('menu.zoomIn')}
                >
                  <FiZoomIn className="w-4 h-4" />
                </button>

                <div className="w-px h-5 bg-white/20 mx-1" />

                <button
                  onClick={handleResetZoom}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                  title={t('menu.resetZoom')}
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
                className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-black/75 backdrop-blur-md border border-white/15 px-4 py-2 rounded-full text-xs text-gray-200 shadow-2xl flex items-center gap-2 pointer-events-none z-20"
              >
                <FiMove className="w-4 h-4 text-amber-400 animate-pulse shrink-0" />
                <span>
                  {t('menu.dragHint')}
                </span>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );

  if (isSection) {
    return menuContent;
  }

  return <PageTransition>{menuContent}</PageTransition>;
};

export default Menu;
