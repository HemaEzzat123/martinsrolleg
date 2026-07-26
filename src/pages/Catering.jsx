import React from 'react';
import { PageTransition } from '../components/common/PageTransition';
import { CateringForm } from '../components/forms/CateringForm';

export const Catering = () => {
  const eventTowerPhotos = [
    '/images/catering/tower-1.jpg',
    '/images/catering/tower-2.jpg',
    '/images/catering/tower-3.jpg',
    '/images/catering/tower-4.jpg',
  ];

  const scrollToForm = (quoteType) => {
    const formElement = document.getElementById('catering-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <PageTransition>
      <div className="relative pt-28 pb-20 bg-[#F8EFE3] text-[#16241F] min-h-screen overflow-hidden">
        
        {/* Background ambient glow shapes */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-olive/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          
          {/* Header Subtitle */}
          <div className="text-center pt-2 pb-1">
            <h1 className="text-xl md:text-2xl font-bold font-heading text-[#1B3A2D] tracking-wider uppercase">
              YOUR DAILY DOSE OF DELICIOUS
            </h1>
          </div>

          {/* BLOCK 1: CATERING YOUR EVENT? */}
          <div className="shadow-lg rounded-2xl overflow-hidden border border-[#1B3A2D]/15 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-12 items-stretch min-h-[340px]">
              {/* Left Light Green Text Box */}
              <div className="md:col-span-5 bg-[#C5E9B4] p-8 md:p-10 lg:p-12 flex flex-col justify-center text-left">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-heading text-[#1B3A2D] tracking-tight mb-4 uppercase leading-tight">
                  CATERING YOUR EVENT?
                </h2>
                <p className="text-xs md:text-sm lg:text-base text-[#16241F]/90 leading-relaxed font-medium">
                  Transform your special moments into unforgettable experiences with our bespoke catering service. From elegant weddings to corporate gatherings, we craft unique menus and stunning displays that reflect your style and vision. Let us bring the magic of French pastries and gourmet delights to your next celebration.
                </p>
              </div>

              {/* Right Photo collage (4 vertical slices) */}
              <div className="md:col-span-7 grid grid-cols-4 gap-[2px] bg-white h-64 md:h-auto min-h-[300px]">
                {eventTowerPhotos.map((photoUrl, idx) => (
                  <div key={idx} className="h-full w-full overflow-hidden bg-gray-100">
                    <img
                      src={photoUrl}
                      alt={`Event Catering Tower ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Dark Green Full-Width Button Banner */}
            <button
              onClick={() => scrollToForm('Event Quote')}
              className="w-full bg-[#1B3A2D] hover:bg-[#122A20] active:bg-[#0E2018] text-white py-3.5 px-6 font-semibold font-heading text-sm md:text-base tracking-wide transition-colors duration-200 text-center block cursor-pointer"
            >
              Request Event Quote
            </button>
          </div>

          {/* BLOCK 2: CATERING FOR BUSINESSES? */}
          <div className="shadow-lg rounded-2xl overflow-hidden border border-[#1B3A2D]/15 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-12 items-stretch min-h-[340px]">
              {/* Left Light Green Text Box */}
              <div className="md:col-span-5 bg-[#C5E9B4] p-8 md:p-10 lg:p-12 flex flex-col justify-center text-left">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-heading text-[#1B3A2D] tracking-tight mb-4 uppercase leading-tight">
                  CATERING FOR BUSINESSES?
                </h2>
                <p className="text-xs md:text-sm lg:text-base text-[#16241F]/90 leading-relaxed font-medium">
                  Does your F&B business need high quality breads, croissants, tarts, pastries? We got you covered. With multiple solutions such as ready-to-proof, ready-to-bake, par-baked, or ready-to-display solutions we got your business covered.
                </p>
              </div>

              {/* Right B2B Image */}
              <div className="md:col-span-7 h-64 md:h-auto min-h-[300px] overflow-hidden bg-white">
                <img
                  src="/images/catering/b2b-boxes.jpg"
                  alt="Catering B2B Solutions"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Dark Green Full-Width Button Banner */}
            <button
              onClick={() => scrollToForm('B2B Quote')}
              className="w-full bg-[#1B3A2D] hover:bg-[#122A20] active:bg-[#0E2018] text-white py-3.5 px-6 font-semibold font-heading text-sm md:text-base tracking-wide transition-colors duration-200 text-center block cursor-pointer"
            >
              Request B2B Quote
            </button>
          </div>

          {/* BLOCK 3: CATERING FORM */}
          <div id="catering-form" className="pt-6">
            <CateringForm />
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default Catering;

