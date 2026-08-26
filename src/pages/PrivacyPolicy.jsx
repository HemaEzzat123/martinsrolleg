import React from "react";
import { PageTransition } from "../components/common/PageTransition";
import { SectionTitle } from "../components/common/SectionTitle";
import { FiShield, FiMail, FiPhone, FiMapPin, FiTruck } from "react-icons/fi";

export const PrivacyPolicy = () => {
  return (
    <PageTransition>
      <div className="relative pt-32 pb-20 bg-brand-cream text-brand-dark min-h-screen">
        {/* Background ambient glow */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-olive/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            badge="Legal Information"
            title="Privacy Policy"
            subtitle="Last Updated: August 2026 • We are committed to protecting your personal information and privacy."
          />

          <div className="mt-10 bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-brand-olive/15 space-y-8 text-gray-700 leading-relaxed font-body">
            <div className="p-4 sm:p-6 bg-brand-cream/60 rounded-2xl border border-brand-olive/20 flex items-start space-x-4">
              <FiShield className="w-8 h-8 text-brand-olive shrink-0 mt-1" />
              <p className="text-sm font-medium text-brand-dark">
                Welcome to Martinsroll. We are committed
                to protecting your personal information and your right to
                privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our
                website, use our mobile services, or interact with our brand.
              </p>
            </div>

            <p className="text-sm italic text-gray-600">
              Please read this privacy policy carefully. If you do not agree
              with the terms of this privacy policy, please do not access our
              services.
            </p>

            {/* 1. Information We Collect */}
            <section className="space-y-3">
              <h3 className="text-xl font-bold font-heading text-brand-dark border-b border-gray-100 pb-2">
                1. Information We Collect
              </h3>
              <p className="text-sm text-gray-700">
                We may collect information about you in a variety of ways,
                including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
                <li>
                  <strong className="text-brand-dark">Personal Data:</strong>{" "}
                  Personally identifiable information, such as your name,
                  delivery address, email address, and telephone number, that
                  you voluntarily give to us when you place an order, create an
                  account, or contact us.
                </li>
                <li>
                  <strong className="text-brand-dark">Transaction Data:</strong>{" "}
                  Details regarding the products you purchase, order history,
                  and payment details (note: financial/payment card details are
                  typically processed securely by our third-party payment
                  gateways and are not stored directly by us).
                </li>
                <li>
                  <strong className="text-brand-dark">Derivative Data:</strong>{" "}
                  Information automatically collected when you access our
                  platforms, such as your IP address, browser type, operating
                  system, access times, and the pages you viewed directly before
                  and after accessing our platform.
                </li>
              </ul>
            </section>

            {/* 2. How We Use Your Information */}
            <section className="space-y-3">
              <h3 className="text-xl font-bold font-heading text-brand-dark border-b border-gray-100 pb-2">
                2. How We Use Your Information
              </h3>
              <p className="text-sm text-gray-700">
                Having accurate information permits us to provide you with a
                smooth, efficient, and customized experience. Specifically, we
                may use information collected about you to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
                <li>
                  Process your orders, fulfill deliveries, and manage your
                  transactions with Martinsroll.
                </li>
                <li>Create and manage your account.</li>
                <li>
                  Communicate with you regarding your orders, updates, customer
                  service inquiries, or promotional offers.
                </li>
                <li>
                  Improve our menu offerings, website functionality, and overall
                  customer experience.
                </li>
                <li>
                  Monitor and analyze usage trends and activities to improve
                  safety and prevent fraudulent transactions.
                </li>
              </ul>
            </section>

            {/* 3. Sharing Your Information */}
            <section className="space-y-3">
              <h3 className="text-xl font-bold font-heading text-brand-dark border-b border-gray-100 pb-2">
                3. Sharing Your Information
              </h3>
              <p className="text-sm text-gray-700">
                We do not sell, trade, or rent your personal identification
                information to others. We may share information we have
                collected about you in certain situations:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
                <li>
                  <strong className="text-brand-dark">
                    Third-Party Service Providers:
                  </strong>{" "}
                  We may share your data with third parties that perform
                  services for us or on our behalf, including payment
                  processing, order delivery (such as delivery couriers and
                  partners like Talabat), data analysis, email delivery, and
                  hosting services.
                </li>
                <li>
                  <strong className="text-brand-dark">
                    Legal Obligations:
                  </strong>{" "}
                  We may disclose your information where required to do so by
                  law or in response to valid requests by public authorities.
                </li>
              </ul>
            </section>

            {/* 4. Security of Your Information */}
            <section className="space-y-3">
              <h3 className="text-xl font-bold font-heading text-brand-dark border-b border-gray-100 pb-2">
                4. Security of Your Information
              </h3>
              <p className="text-sm text-gray-700">
                We use administrative, technical, and physical security measures
                to help protect your personal information. While we have taken
                reasonable steps to secure the personal information you provide
                to us, please be aware that despite our efforts, no security
                measures are perfect or impenetrable, and no method of data
                transmission can be guaranteed against any interception or other
                type of misuse.
              </p>
            </section>

            {/* 5. Policy for Children */}
            <section className="space-y-3">
              <h3 className="text-xl font-bold font-heading text-brand-dark border-b border-gray-100 pb-2">
                5. Policy for Children
              </h3>
              <p className="text-sm text-gray-700">
                We do not knowingly solicit information from or market to
                children under the age of 13. If we learn that we have collected
                personal information from a child under age 13 without
                verification of parental consent, we will delete that
                information as quickly as possible.
              </p>
            </section>

            {/* 6. Your Choices and Rights */}
            <section className="space-y-3">
              <h3 className="text-xl font-bold font-heading text-brand-dark border-b border-gray-100 pb-2">
                6. Your Choices and Rights
              </h3>
              <p className="text-sm text-gray-700">
                You have the right to request access to the personal data we
                hold about you, ask for corrections to any inaccurate data, or
                request the deletion of your account and personal information,
                subject to certain legal exceptions.
              </p>
            </section>

            {/* 7. Shipping & Delivery Policy */}
            <section className="space-y-3">
              <h3 className="text-xl font-bold font-heading text-brand-dark border-b border-gray-100 pb-2 flex items-center space-x-2">
                <FiTruck className="w-5 h-5 text-brand-olive inline" />
                <span>7. Shipping & Delivery Policy</span>
              </h3>
              <p className="text-sm text-gray-700">
                We are committed to delivering your order fresh and fast. The shipping policy guarantees delivery <strong>within one hour</strong> from order confirmation, subject to traffic conditions and specific delivery zone distances.
              </p>
            </section>

            {/* 8. Changes to This Privacy Policy */}
            <section className="space-y-3">
              <h3 className="text-xl font-bold font-heading text-brand-dark border-b border-gray-100 pb-2">
                8. Changes to This Privacy Policy
              </h3>
              <p className="text-sm text-gray-700">
                We may update this Privacy Policy from time to time in order to
                reflect, for example, changes to our practices or for other
                operational, legal, or regulatory reasons. We will notify you of
                any changes by updating the "Last Updated" date of this Privacy
                Policy.
              </p>
            </section>

            {/* 9. Contact Us */}
            <section className="space-y-4 pt-4 border-t border-gray-200">
              <h3 className="text-xl font-bold font-heading text-brand-dark">
                9. Contact Us
              </h3>
              <p className="text-sm text-gray-700">
                If you have questions or comments about this Privacy Policy,
                please contact us at:
              </p>

              <div className="bg-[#2C463D] text-white p-6 rounded-2xl space-y-3 text-sm">
                <p className="font-extrabold text-base text-brand-gold">
                  Brand Name: Martinsroll
                </p>
                <div className="flex items-center space-x-3">
                  <FiMail className="w-5 h-5 text-brand-gold shrink-0" />
                  <span>
                    <strong>Email:</strong> martisnroll2024@gmail.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiPhone className="w-5 h-5 text-brand-gold shrink-0" />
                  <span>
                    <strong>Phone:</strong> 01118822595
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <FiMapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <span>
                    <strong>Address:</strong> Cairo, Egypt (Sheraton & Nasr City
                    Branches)
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default PrivacyPolicy;
