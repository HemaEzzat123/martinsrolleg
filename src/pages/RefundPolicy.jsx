import React from 'react';
import { PageTransition } from '../components/common/PageTransition';
import { SectionTitle } from '../components/common/SectionTitle';
import { FiRefreshCw, FiClock, FiCheckCircle, FiAlertCircle, FiCreditCard } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

export const RefundPolicy = () => {
  const { isAr } = useLanguage();

  return (
    <PageTransition>
      <div className="relative pt-32 pb-20 bg-brand-cream text-brand-dark min-h-screen">
        {/* Background ambient glow */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-olive/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            badge={isAr ? "ضمان رضا العملاء" : "Customer Satisfaction Guarantee"}
            title={isAr ? "سياسة الاسترجاع والاستبدال" : "Refund Policy"}
            subtitle={
              isAr
                ? "آخر تحديث: أغسطس 2026 • نضمن لك جودة وطزاجة كل رول وقطعة حلوى نخبزها."
                : "Last Updated: August 2026 • We stand behind the quality of every roll and treat we bake."
            }
          />

          <div className="mt-10 bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-brand-olive/15 space-y-8 text-gray-700 leading-relaxed font-body">
            <div className="p-4 sm:p-6 bg-brand-cream/60 rounded-2xl border border-brand-olive/20 flex items-start gap-4">
              <FiRefreshCw className="w-8 h-8 text-brand-olive shrink-0 mt-1" />
              <p className="text-sm font-medium text-brand-dark">
                {isAr
                  ? "في مارتنز رول (Martinsroll)، رضا عملائنا هو أولويتنا القصوى. نفخر بصناعة رولات السينابون والمخبوزات والقهوة المختصة طازجة يومياً بأعلى معايير الجودة. يرجى الاطلاع على سياسة الاسترجاع أدناه لمعرفة حقوقك وإجراءات الإرجاع."
                  : "At Martinsroll, customer satisfaction is our top priority. We take immense pride in crafting fresh, high-quality cinnamon rolls, pastries, and beverages daily. Please read our refund policy below to understand your rights and our process for returns."}
              </p>
            </div>

            {/* Refund Timelines Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 space-y-2">
                <div className="flex items-center gap-2 text-brand-olive font-extrabold text-base">
                  <FiClock className="w-5 h-5 text-brand-gold shrink-0" />
                  <span>
                    {isAr ? "مهلة طلب الاسترجاع (14 يوماً)" : "14-Day Refund Window"}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  {isAr ? (
                    <>
                      لديك مهلة <strong>14 يوماً</strong> لتقديم طلب استرجاع بعد استلام طلبك.
                    </>
                  ) : (
                    <>
                      You have <strong>14 days</strong> to make a refund request after your order has been delivered.
                    </>
                  )}
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 space-y-2">
                <div className="flex items-center gap-2 text-brand-olive font-extrabold text-base">
                  <FiCheckCircle className="w-5 h-5 text-brand-gold shrink-0" />
                  <span>
                    {isAr ? "ضمان المنتجات غير المطابقة (30 يوماً)" : "30-Day Defective Product Return"}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  {isAr ? (
                    <>
                      إذا كان المنتج المستلم غير مطابق للمواصفات أو تالفاً، يمكنك إعادته خلال <strong>30 يوماً</strong> من تاريخ الاستلام والحصول على استرداد كامل للمبلغ شاملاً أي رسوم شحن مطبقة.
                    </>
                  ) : (
                    <>
                      If the item you have received is defective or not fit for purpose on the website, you may return it within <strong>30 days</strong> from receiving it and will receive a full refund along with any shipping fees applied.
                    </>
                  )}
                </p>
              </div>
            </div>

            {/* Inspection & Processing */}
            <section className="space-y-3 pt-4 border-t border-gray-100">
              <h3 className="text-xl font-bold font-heading text-brand-dark">
                {isAr ? "فحص المرتجعات والإشعار" : "Inspection & Return Notification"}
              </h3>
              <p className="text-sm text-gray-700">
                {isAr
                  ? "بمجرد استلام المنتج المرتجع، سنقوم بفحصه وإشعارك بتأكيد الاستلام، وسنبلغك فوراً بحالة الموافقة على طلب الاسترداد بعد استكمال الفحص."
                  : "Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you of the status of your refund after inspecting the item."}
              </p>
            </section>

            {/* Payment Refund Method */}
            <section className="space-y-3 pt-4 border-t border-gray-100">
              <h3 className="text-xl font-bold font-heading text-brand-dark flex items-center gap-2">
                <FiCreditCard className="w-5 h-5 text-brand-olive shrink-0" />
                <span>
                  {isAr ? "طريقة الاسترداد والمدة الزمنية" : "Refund Method & Processing Time"}
                </span>
              </h3>
              <p className="text-sm text-gray-700">
                {isAr
                  ? "في حال الموافقة على طلب الاسترجاع، يتم إرجاع المبلغ المسترد إلى بطاقتك الائتمانية (أو طريقة الدفع الأصلية). سيصل الرصيد إلى حسابك خلال عدة أيام وفقاً لسياسات البنك ومصدر البطاقة."
                  : "If your return is approved, we will initiate a refund to your credit card (or original method of payment). You will receive the credit within a certain amount of days, depending on your card issuer's policies."}
              </p>
            </section>

            {/* Important Exceptions */}
            <div className="p-6 bg-amber-50 rounded-2xl border border-amber-200 flex items-start gap-4">
              <FiAlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm text-amber-900">
                <strong className="block font-bold text-base mb-1">
                  {isAr ? "تنويه بشأن العبوات المغلقة:" : "Sealed Packets Notice:"}
                </strong>
                {isAr
                  ? "*العبوات والمغلفات الغذائية المحكمة الغلق غير قابلة للاسترجاع في حال تم فتحها وذلك لضمان معايير السلامة والصحة الغذائية."
                  : "*Sealed packets are not eligible for returns if open."}
              </div>
            </div>

            {/* Contact Support CTA */}
            <div className="pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-600 mb-3">
                {isAr
                  ? "هل تحتاج لمساعدة أو ترغب في تقديم طلب استرجاع؟"
                  : "Need help with a return or refund request?"}
              </p>
              <a
                href={
                  isAr
                    ? "https://wa.me/201118822595?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%81%D8%B1%D9%8A%D9%82%20%D9%85%D8%A7%D8%B1%D8%AA%D9%86%D8%B2%20%D8%B1%D9%88%D9%84%D8%8C%20%D9%84%D8%AF%D9%8A%20%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%AD%D9%88%D9%84%20%D8%B7%D9%84%D8%A8%20%D8%A7%D8%B3%D8%AA%D8%B1%D8%AC%D8%A7%D8%B9."
                    : "https://wa.me/201118822595?text=Hello%20Martinsroll%20Support,%20I%20have%20a%20refund/return%20inquiry."
                }
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#2C463D] hover:bg-[#1f332c] text-white text-xs font-bold rounded-full shadow-md transition-all transform hover:scale-105"
              >
                <span>
                  {isAr
                    ? "تواصل مع خدمة عملاء الاسترجاع على واتساب"
                    : "Contact Refund Support on WhatsApp"}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default RefundPolicy;
