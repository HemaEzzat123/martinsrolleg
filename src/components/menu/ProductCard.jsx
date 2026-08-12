import React from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiEye, FiPlus } from 'react-icons/fi';
import { Card } from '../common/Card';

export const ProductCard = ({ product, onQuickView, lang = 'ar' }) => {
  const isAr = lang === 'ar';
  const displayName = isAr ? product.nameAr || product.nameEn : product.nameEn;
  const displayDesc = isAr ? product.descriptionAr || product.descriptionEn : product.descriptionEn;
  const priceDisplay = product.priceRange 
    ? product.priceRange 
    : isAr 
      ? `${product.price} ج.م` 
      : `${product.price} EGP`;

  return (
    <Card hoverEffect className="flex flex-col h-full overflow-hidden p-0 group">
      {/* Image container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={displayName}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-1 z-10">
          {product.isBestSeller && (
            <span className="px-3 py-1 text-xs font-bold bg-brand-gold text-white rounded-full shadow-sm">
              {isAr ? 'الأكثر مبيعاً' : 'Best Seller'}
            </span>
          )}
        </div>

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
          <button
            onClick={() => onQuickView(product)}
            className="w-10 h-10 rounded-full bg-white text-brand-dark flex items-center justify-center shadow-lg hover:bg-brand-olive hover:text-white transition-all transform hover:scale-110"
            title={isAr ? 'عرض التفاصيل' : 'Quick View'}
          >
            <FiEye className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow justify-between bg-white text-right font-body" dir={isAr ? 'rtl' : 'ltr'}>
        <div>
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
            <span className="uppercase tracking-wider font-semibold text-brand-olive">
              {product.category.replace('-', ' ')}
            </span>
            <div className="flex items-center space-x-1 text-amber-500 font-bold" dir="ltr">
              <FiStar className="fill-amber-400 w-3.5 h-3.5" />
              <span>{product.rating}</span>
              <span className="text-gray-400 font-normal">({product.reviewsCount})</span>
            </div>
          </div>

          <h3 className="text-lg font-bold font-heading text-brand-dark line-clamp-1 group-hover:text-brand-olive transition-colors">
            {displayName}
          </h3>

          <p className="mt-2 text-xs text-gray-600 line-clamp-2 leading-relaxed">
            {displayDesc}
          </p>
        </div>

        {/* Price & Action */}
        <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className={isAr ? 'text-right' : 'text-left'}>
            <span className="text-xs text-gray-400 block">{isAr ? 'السعر' : 'Price'}</span>
            <span className="text-base font-bold font-heading text-brand-dark">
              {priceDisplay}
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onQuickView(product)}
            className="px-3.5 py-2 bg-brand-cream text-brand-olive hover:bg-brand-olive hover:text-white rounded-xl text-xs font-bold flex items-center space-x-1.5 transition-colors cursor-pointer"
          >
            <FiPlus className="w-4 h-4" />
            <span>{isAr ? 'اطلب الآن' : 'Order'}</span>
          </motion.button>
        </div>
      </div>
    </Card>
  );
};
