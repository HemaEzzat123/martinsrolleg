import React from 'react';
import { Link } from 'react-router-dom';
import { FiInstagram, FiFacebook, FiClock, FiMapPin, FiPhone } from 'react-icons/fi';
import { SiTiktok } from 'react-icons/si';
import { FaWhatsapp } from 'react-icons/fa';
import { NAV_LINKS } from '../../data/navigation';
import { Logo } from '../common/Logo';

export const Footer = () => {
  return (
    <footer className="bg-[#181818] text-gray-300 pt-16 pb-8 border-t border-amber-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="bg-[#F8EFE3] px-4 py-2.5 rounded-2xl inline-block shadow-md">
              <Logo />
            </div>
            <p className="text-sm text-gray-300 leading-relaxed font-medium">
              Crafted fresh every single day. Gourmet cinnamon rolls, fluffy brioche donuts, waffle towers, and artisanal coffee blends made for true bakery lovers.
            </p>
            <div className="flex space-x-3 pt-2">
              <a
                href="https://www.instagram.com/martinsroll1?fbclid=IwY2xjawTNq-lleHRuA2FlbQIxMABicmlkETEwU2l6QngwdWV1SGJzT0hsc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHqhaZfihGl0UAQek3iiPCPZLRNHQaXgYAiU7M4Hyxfte4yRMdI9EF_3W0gNX_aem_pTgolNMXXPwaDW4VqxzN1w"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#2C463D] text-gray-200 hover:text-white flex items-center justify-center transition-colors"
              >
                <FiInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@martins.roll?fbclid=IwY2xjawTNq_ZleHRuA2FlbQIxMABicmlkETEwU2l6QngwdWV1SGJzT0hsc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHqz-eac-g0o0qRIidiCLqGBRxOHOOobY08OIxcUBTStYIdpsXn1x0XjsW_Fc_aem_2lVHcRlY5bV-P5gQjY0djg"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#2C463D] text-gray-200 hover:text-white flex items-center justify-center transition-colors"
              >
                <SiTiktok className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61558526129050"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#2C463D] text-gray-200 hover:text-white flex items-center justify-center transition-colors"
              >
                <FiFacebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (Two Columns Grid) */}
          <div className="lg:col-span-1">
            <h3 className="text-white text-lg font-bold font-heading mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-300 hover:text-brand-gold transition-colors inline-block font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours & Contact */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-lg font-bold font-heading mb-4">Store & Hours</h3>
            <ul className="space-y-3.5 text-sm text-gray-300">
              <li className="flex items-start space-x-3">
                <FiClock className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <span className="text-gray-200">
                  <strong className="text-white">Hours:</strong> Open 24/7
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <FiMapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div className="space-y-1 text-gray-300 font-medium">
                  <p><strong className="text-white">Sheraton:</strong> <span className="text-gray-400">Ahmed El Sheikh, Al Nozha, Cairo</span></p>
                  <p><strong className="text-white">Nasr City:</strong> <span className="text-gray-400">14 Ahmed Kassim Gouda, Abbas El Akkad, Cairo</span></p>
                </div>
              </li>
              <li className="flex items-center space-x-3 pt-1">
                <FaWhatsapp className="w-5 h-5 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/201118822595"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400 text-gray-100 transition-colors font-bold"
                >
                  WhatsApp: 01118822595
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="w-5 h-5 text-brand-gold shrink-0" />
                <a href="tel:01118822595" className="hover:text-brand-gold text-gray-200 transition-colors font-bold">
                  Call: 01118822595
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright & Legal Links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>
            © {new Date().getFullYear()} Martins Rolleg. All rights reserved. • Built by{' '}
            <a
              href="https://ibrahim-ezzat.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-brand-gold hover:underline font-bold transition-colors"
            >
              Engineer 🌀 Ibrahim Ezzat
            </a>
          </p>
          <div className="flex flex-wrap space-x-6 gap-y-2">
            <Link to="/privacy-policy" className="hover:text-brand-gold transition-colors font-medium">Privacy Policy</Link>
            <Link to="/refund-policy" className="hover:text-brand-gold transition-colors font-medium">Refund Policy</Link>
            <Link to="/b2b" className="hover:text-brand-gold transition-colors font-medium">Wholesale Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
