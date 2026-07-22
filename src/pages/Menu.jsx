import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiSliders } from 'react-icons/fi';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { PageTransition } from '../components/common/PageTransition';
import { SectionTitle } from '../components/common/SectionTitle';
import { ProductCard } from '../components/menu/ProductCard';
import { ProductModal } from '../components/menu/ProductModal';

export const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filter products
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return b.reviewsCount - a.reviewsCount; // popular
  });

  return (
    <PageTransition>
      <div className="pt-32 pb-20 bg-brand-cream/30 dark:bg-[#181715] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            badge="Freshly Baked Catalog"
            title="Our Full Bakery Menu"
            subtitle="Hand-crafted cinnamon rolls, gourmet brioche donuts, crisp Belgian waffles, and specialty coffee brewed fresh for you."
          />

          {/* Search & Filter Bar */}
          <div className="mt-8 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                    activeCategory === cat.id
                      ? 'bg-brand-olive text-white shadow-md dark:bg-brand-gold dark:text-brand-dark'
                      : 'bg-white dark:bg-brand-charcoal text-gray-700 dark:text-gray-300 hover:bg-brand-cream dark:hover:bg-gray-800'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-3 w-full md:w-auto">
              {/* Search */}
              <div className="relative flex-1 md:w-64">
                <FiSearch className="absolute left-3.5 top-3.5 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search rolls, coffee..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-brand-charcoal text-sm text-brand-dark dark:text-brand-cream focus:outline-none focus:ring-2 focus:ring-brand-olive"
                />
              </div>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2.5 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-brand-charcoal text-xs font-semibold text-brand-dark dark:text-brand-cream focus:outline-none focus:ring-2 focus:ring-brand-olive"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>

            </div>

          </div>

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-white dark:bg-brand-charcoal rounded-3xl p-8">
              <span className="text-5xl">🍩</span>
              <h3 className="mt-4 text-xl font-bold font-heading text-brand-dark dark:text-brand-cream">
                No items found matching your search.
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Try selecting a different category or clearing your search term.
              </p>
              <button
                onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                className="mt-4 px-6 py-2.5 bg-brand-olive text-white rounded-full text-xs font-bold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard
                    product={product}
                    onQuickView={(p) => setSelectedProduct(p)}
                  />
                </motion.div>
              ))}
            </div>
          )}

        </div>
      </div>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </PageTransition>
  );
};
export default Menu;
