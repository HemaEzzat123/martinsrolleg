import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiStar, FiShoppingBag, FiCheck } from 'react-icons/fi';
import { Button } from '../common/Button';

export const ORDER_NOW_URL = 'https://martins-roll-eg.fodista.com/apps/online/18p0hie137?category=BREAKFAST';

export const ProductModal = ({ product, onClose, lang = 'ar' }) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const isAr = lang === 'ar';
  const displayName = isAr ? product.nameAr || product.nameEn : product.nameEn;
  const displayDesc = isAr ? product.descriptionAr || product.descriptionEn : product.descriptionEn;
  const priceDisplay = product.priceRange 
    ? product.priceRange 
    : isAr 
      ? `${(product.price * quantity).toFixed(2)} ج.م` 
      : `${(product.price * quantity).toFixed(2)} EGP`;

  const handleOrder = () => {
    setAdded(true);
    setTimeout(() => {
      window.open(ORDER_NOW_URL, '_blank');
      setAdded(false);
      onClose();
    }, 800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" dir={isAr ? 'rtl' : 'ltr'}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-amber-900/10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className={`absolute top-4 ${isAr ? 'left-4' : 'right-4'} z-20 w-10 h-10 rounded-full bg-white/80 text-gray-700 flex items-center justify-center hover:bg-white transition-colors cursor-pointer`}
          >
            <FiX className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image section */}
            <div className="relative h-64 md:h-full bg-gray-100">
              <img
                src={product.image}
                alt={displayName}
                className="w-full h-full object-cover"
              />
              {product.isBestSeller && (
                <span className={`absolute top-4 ${isAr ? 'right-4' : 'left-4'} px-3 py-1 text-xs font-bold bg-brand-gold text-white rounded-full shadow-md`}>
                  {isAr ? 'الأكثر مبيعاً' : 'Best Seller'}
                </span>
              )}
            </div>

            {/* Details section */}
            <div className="p-6 md:p-8 flex flex-col justify-between text-right">
              <div>
                <h2 className="text-2xl font-bold font-heading text-brand-dark">
                  {displayName}
                </h2>

                <div className="flex items-center space-x-2 mt-2 text-amber-500 font-bold text-sm" dir="ltr">
                  <FiStar className="fill-amber-400" />
                  <span>{product.rating}</span>
                  <span className="text-gray-400 font-normal">({product.reviewsCount} {isAr ? 'تقييم' : 'reviews'})</span>
                </div>

                <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                  {displayDesc}
                </p>
              </div>

              {/* Action bar */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center border border-gray-200 rounded-full overflow-hidden" dir="ltr">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 font-bold cursor-pointer"
                    >
                      -
                    </button>
                    <span className="px-4 py-1.5 font-bold text-sm text-brand-dark">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 font-bold cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  <div className={isAr ? 'text-left' : 'text-right'}>
                    <span className="text-xs text-gray-400 block">{isAr ? 'السعر' : 'Price'}</span>
                    <span className="text-xl font-bold font-heading text-brand-dark">
                      {priceDisplay}
                    </span>
                  </div>
                </div>

                <Button
                  variant="primary"
                  fullWidth
                  icon={added ? FiCheck : FiShoppingBag}
                  onClick={handleOrder}
                >
                  {added ? (isAr ? 'جاري فتح صفحة الطلب...' : 'Opening Checkout...') : (isAr ? 'اطلب الآن أونلاين' : 'Proceed to Order')}
                </Button>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
