import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMaximize2, FiX } from 'react-icons/fi';
import { GALLERY_IMAGES } from '../../data/gallery';
import { SectionTitle } from '../common/SectionTitle';

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-20 bg-white dark:bg-brand-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Bakery Moments"
          title="Our Bakery Gallery"
          subtitle="A visual taste of our master ovens, fresh ingredients, and signature rolls."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedImage(item)}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer shadow-md"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-xs uppercase font-bold text-brand-gold tracking-widest mb-1">
                  {item.category}
                </span>
                <h4 className="text-xl font-bold font-heading">{item.title}</h4>
                <p className="text-xs text-gray-300 mt-1 line-clamp-1">{item.caption}</p>
                <div className="mt-3 flex items-center space-x-1 text-xs font-semibold text-white/90">
                  <FiMaximize2 className="w-4 h-4" />
                  <span>Click to expand</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full bg-brand-charcoal rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40 transition-colors"
              >
                <FiX className="w-6 h-6" />
              </button>

              <div className="aspect-[16/10] w-full overflow-hidden bg-black">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 bg-brand-charcoal text-white">
                <span className="text-xs uppercase font-bold text-brand-gold tracking-widest">
                  {selectedImage.category}
                </span>
                <h3 className="text-2xl font-bold font-heading mt-1">{selectedImage.title}</h3>
                <p className="text-sm text-gray-300 mt-2">{selectedImage.caption}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
