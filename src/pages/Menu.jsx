import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { PRODUCTS } from '../data/products';
import { PageTransition } from '../components/common/PageTransition';

export const Menu = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <PageTransition>
      <div className="relative pt-32 pb-20 bg-brand-cream min-h-screen overflow-hidden">
        
        {/* Background ambient glow shapes matching Home page */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-olive/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Pure Product Images Grid */}
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

      {/* Fullscreen Lightbox Image Preview */}
      <AnimatePresence>
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                aria-label="Close"
              >
                <FiX className="w-6 h-6" />
              </button>
              <img
                src={selectedImage}
                alt="Product Full Resolution View"
                className="w-full h-full object-contain max-h-[85vh] rounded-3xl"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};

export default Menu;
