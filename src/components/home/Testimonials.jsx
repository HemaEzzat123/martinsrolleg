import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FiStar } from 'react-icons/fi';
import { TESTIMONIALS } from '../../data/testimonials';
import { SectionTitle } from '../common/SectionTitle';

import 'swiper/css';
import 'swiper/css/pagination';

export const Testimonials = () => {
  return (
    <section className="py-20 bg-brand-cream/50 dark:bg-[#1C1B18] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Customer Stories"
          title="What Bakery Lovers Say"
          subtitle="Real reviews from cinnamon roll enthusiasts across Riyadh, Dubai, Jeddah, and Abu Dhabi."
        />

        <div className="mt-8 pb-10">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="bg-white dark:bg-brand-charcoal p-8 rounded-3xl shadow-sm border border-amber-900/5 dark:border-white/5 flex flex-col justify-between h-full min-h-[280px]">
                  <div>
                    <div className="flex items-center space-x-1 text-amber-400 mb-4">
                      {[...Array(t.rating)].map((_, i) => (
                        <FiStar key={i} className="fill-amber-400 w-5 h-5" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-200 italic leading-relaxed">
                      "{t.comment}"
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center space-x-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-brand-olive dark:border-brand-gold"
                    />
                    <div>
                      <h4 className="text-sm font-bold font-heading text-brand-dark dark:text-brand-cream">
                        {t.name}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {t.role} • <span className="text-brand-olive dark:text-brand-gold">{t.location}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
