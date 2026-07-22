import React from 'react';
import { PageTransition } from '../components/common/PageTransition';
import { CateringForm } from '../components/forms/CateringForm';

export const Catering = () => {
  return (
    <PageTransition>
      <div className="pt-28 pb-20 bg-white min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Block 1: CATERING YOUR EVENT? */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch overflow-hidden rounded-xl shadow-sm">
            {/* Left Light Green Card */}
            <div className="md:col-span-5 bg-[#C5E9B4] p-8 md:p-10 flex flex-col justify-center text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-[#2C4824] tracking-tight mb-4 uppercase">
                CATERING YOUR EVENT?
              </h2>
              <p className="text-xs md:text-sm text-[#2C4824]/90 leading-relaxed font-medium">
                Transform your special moments into unforgettable experiences with our bespoke catering service. From elegant weddings to corporate gatherings, we craft unique menus and stunning displays that reflect your style and vision. Let us bring the magic of French pastries and gourmet delights to your next celebration.
              </p>
            </div>

            {/* Right Photo Collages (4 vertical slices) */}
            <div className="md:col-span-7 grid grid-cols-4 gap-1 h-64 md:h-auto min-h-[300px]">
              <div className="h-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=400&q=80"
                  alt="Pastry tier 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=400&q=80"
                  alt="Pastry tier 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=400&q=80"
                  alt="Pastry tier 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80"
                  alt="Pastry tier 4"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Middle Dark Green Action Bar / Button */}
          <div className="w-full">
            <a
              href="#catering-form"
              className="block w-full py-4 text-center bg-[#1D4A3E] hover:bg-[#15382F] text-white font-semibold text-sm uppercase tracking-wider rounded-lg transition-colors shadow-sm"
            >
              Request Event Quote
            </a>
          </div>

          {/* Block 2: CATERING FOR BUSINESSES? */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch overflow-hidden rounded-xl shadow-sm">
            {/* Left Light Green Card */}
            <div className="md:col-span-5 bg-[#C5E9B4] p-8 md:p-10 flex flex-col justify-center text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-[#2C4824] tracking-tight mb-4 uppercase">
                CATERING FOR BUSINESSES?
              </h2>
              <p className="text-xs md:text-sm text-[#2C4824]/90 leading-relaxed font-medium">
                Does your F&B business need high quality breads, croissants, tarts, pastries? We got you covered. With multiple solutions such as ready-to-proof, ready-to-bake, par-baked, or ready-to-display solutions we got your business covered.
              </p>
            </div>

            {/* Right Photo Collages (Platters / Boxes) */}
            <div className="md:col-span-7 grid grid-cols-2 gap-1 h-64 md:h-auto min-h-[300px]">
              <div className="h-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80"
                  alt="Business Bakery Box 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
                  alt="Business Bakery Box 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div id="catering-form" className="pt-10 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold font-heading text-center text-brand-dark mb-6">
              Request Catering
            </h3>
            <CateringForm />
          </div>

        </div>
      </div>
    </PageTransition>
  );
};
export default Catering;
