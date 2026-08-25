import React from 'react';
import { PageTransition } from '../components/common/PageTransition';
import { SectionTitle } from '../components/common/SectionTitle';
import { FiRefreshCw, FiClock, FiCheckCircle, FiAlertCircle, FiCreditCard } from 'react-icons/fi';

export const RefundPolicy = () => {
  return (
    <PageTransition>
      <div className="relative pt-32 pb-20 bg-brand-cream text-brand-dark min-h-screen">
        
        {/* Background ambient glow */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-olive/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <SectionTitle
            badge="Customer Satisfaction Guarantee"
            title="Refund Policy"
            subtitle="Last Updated: August 2026 • We stand behind the quality of every roll and treat we bake."
          />

          <div className="mt-10 bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-brand-olive/15 space-y-8 text-gray-700 leading-relaxed font-body">
            
            <div className="p-4 sm:p-6 bg-brand-cream/60 rounded-2xl border border-brand-olive/20 flex items-start space-x-4">
              <FiRefreshCw className="w-8 h-8 text-brand-olive shrink-0 mt-1" />
              <p className="text-sm font-medium text-brand-dark">
                At Martinsroll, customer satisfaction is our top priority. We take immense pride in crafting fresh, high-quality cinnamon rolls, pastries, and beverages daily. Please read our refund policy below to understand your rights and our process for returns.
              </p>
            </div>

            {/* Refund Timelines Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 space-y-2">
                <div className="flex items-center space-x-2 text-brand-olive font-extrabold text-base">
                  <FiClock className="w-5 h-5 text-brand-gold" />
                  <span>14-Day Refund Window</span>
                </div>
                <p className="text-sm text-gray-600">
                  You have <strong>14 days</strong> to make a refund request after your order has been delivered.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 space-y-2">
                <div className="flex items-center space-x-2 text-brand-olive font-extrabold text-base">
                  <FiCheckCircle className="w-5 h-5 text-brand-gold" />
                  <span>30-Day Defective Product Return</span>
                </div>
                <p className="text-sm text-gray-600">
                  If the item you have received is defective or not fit for purpose on the website, you may return it within <strong>30 days</strong> from receiving it and will receive a full refund along with any shipping fees applied.
                </p>
              </div>

            </div>

            {/* Inspection & Processing */}
            <section className="space-y-3 pt-4 border-t border-gray-100">
              <h3 className="text-xl font-bold font-heading text-brand-dark">
                Inspection & Return Notification
              </h3>
              <p className="text-sm text-gray-700">
                Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you of the status of your refund after inspecting the item.
              </p>
            </section>

            {/* Payment Refund Method */}
            <section className="space-y-3 pt-4 border-t border-gray-100">
              <h3 className="text-xl font-bold font-heading text-brand-dark flex items-center space-x-2">
                <FiCreditCard className="w-5 h-5 text-brand-olive" />
                <span>Refund Method & Processing Time</span>
              </h3>
              <p className="text-sm text-gray-700">
                If your return is approved, we will initiate a refund to your credit card (or original method of payment). You will receive the credit within a certain amount of days, depending on your card issuer's policies.
              </p>
            </section>

            {/* Important Exceptions */}
            <div className="p-6 bg-amber-50 rounded-2xl border border-amber-200 flex items-start space-x-4">
              <FiAlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm text-amber-900">
                <strong className="block font-bold text-base mb-1">Sealed Packets Notice:</strong>
                *Sealed packets are not eligible for returns if open.
              </div>
            </div>

            {/* Contact Support CTA */}
            <div className="pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-600 mb-3">
                Need help with a return or refund request?
              </p>
              <a
                href="https://wa.me/201118822595?text=Hello%20Martinsroll%20Support,%20I%20have%20a%20refund/return%20inquiry."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-[#2C463D] hover:bg-[#1f332c] text-white text-xs font-bold rounded-full shadow-md transition-all transform hover:scale-105"
              >
                <span>Contact Refund Support on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default RefundPolicy;
