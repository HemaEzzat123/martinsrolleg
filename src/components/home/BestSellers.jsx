import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../../data/products';
import { SectionTitle } from '../common/SectionTitle';
import { ProductCard } from '../menu/ProductCard';
import { ProductModal } from '../menu/ProductModal';

export const BestSellers = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller).slice(0, 4);

  return (
    <section id="best-sellers" className="py-20 bg-brand-cream/40 dark:bg-[#1C1B18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Curated Favorites"
          title="Our Best Sellers"
          subtitle="Discover the cinnamon rolls, treats, and specialty beverages our customers fall in love with daily."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellers.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <ProductCard
                product={product}
                onQuickView={(p) => setSelectedProduct(p)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};
