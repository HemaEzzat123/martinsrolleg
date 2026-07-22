import React from 'react';
import { PageTransition } from '../components/common/PageTransition';
import { CateringForm } from '../components/forms/CateringForm';
import { MENU_IMAGES } from '../data/products';

export const Catering = () => {
  const cateringPhotos = [
    MENU_IMAGES[0],
    MENU_IMAGES[1],
    MENU_IMAGES[2],
    MENU_IMAGES[3],
  ];

  return (
    <PageTransition>
      <div className="relative pt-32 pb-20 bg-brand-cream text-brand-dark min-h-screen overflow-hidden">
        
        {/* Background ambient glow shapes matching Home page */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-olive/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          
          {/* Block 1: CATERING YOUR EVENT? */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch overflow-hidden rounded-3xl shadow-md border border-brand-olive/15 bg-white">
            {/* Left Light Green Card */}
            <div className="md:col-span-5 bg-[#C5E9B4] p-8 md:p-10 flex flex-col justify-center text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-[#16241F] tracking-tight mb-4 uppercase">
                CATERING YOUR EVENT?
              </h2>
              <p className="text-xs md:text-sm text-[#16241F]/90 leading-relaxed font-medium">
                Transform your special moments into unforgettable experiences with our bespoke catering service. From elegant weddings to corporate gatherings, we craft unique menus and stunning displays that reflect your style and vision. Let us bring the magic of French pastries and gourmet delights to your next celebration.
              </p>
            </div>

            {/* Right Photo Collages (4 vertical slices) */}
            <div className="md:col-span-7 grid grid-cols-4 gap-1 h-64 md:h-auto min-h-[300px]">
              {cateringPhotos.map((photoUrl, idx) => (
                <div key={idx} className="h-full overflow-hidden">
                  <img
                    src={photoUrl}
                    alt={`Pastry Catering ${idx + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Block 2: Order Box Info */}
          <div className="bg-[#5B6B38] text-white p-8 md:p-12 rounded-3xl text-center space-y-4 shadow-lg border border-brand-olive/20">
            <h3 className="text-2xl md:text-4xl font-extrabold font-heading tracking-tight uppercase">
              SWEETEN YOUR SPECIAL CELEBRATIONS
            </h3>
            <p className="text-sm md:text-base max-w-3xl mx-auto opacity-95 leading-relaxed font-medium">
              Elevate your weddings, birthdays, baby showers, or anniversaries with custom-crafted cinnamon roll towers, gourmet brioche donut platters, and artisanal coffee bars tailored for your guests.
            </p>
          </div>

          {/* Block 3: Catering Form */}
          <div className="pt-6">
            <CateringForm />
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default Catering;
