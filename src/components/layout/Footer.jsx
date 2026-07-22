import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiInstagram, FiFacebook, FiSend, FiClock, FiMapPin, FiPhone } from 'react-icons/fi';
import { SiTiktok } from 'react-icons/si';
import { NAV_LINKS } from '../../data/navigation';
import { Button } from '../common/Button';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#1E1E1E] text-gray-300 pt-16 pb-8 border-t border-amber-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-brand-olive text-white flex items-center justify-center text-xl font-bold">
                🌀
              </div>
              <span className="font-heading text-2xl font-extrabold tracking-tight text-white">
                MARTIN'S<span className="text-brand-gold ml-2">ROLL</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Crafted fresh every single day. Gourmet cinnamon rolls, fluffy brioche donuts, waffle towers, and artisanal coffee blends made for true bakery lovers.
            </p>
            <div className="flex space-x-3 pt-2">
              <a
                href="https://www.instagram.com/martinsroll1?fbclid=IwY2xjawTNq-lleHRuA2FlbQIxMABicmlkETEwU2l6QngwdWV1SGJzT0hsc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHqhaZfihGl0UAQek3iiPCPZLRNHQaXgYAiU7M4Hyxfte4yRMdI9EF_3W0gNX_aem_pTgolNMXXPwaDW4VqxzN1w"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-brand-olive text-gray-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <FiInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@martins.roll?fbclid=IwY2xjawTNq_ZleHRuA2FlbQIxMABicmlkETEwU2l6QngwdWV1SGJzT0hsc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHqz-eac-g0o0qRIidiCLqGBRxOHOOobY08OIxcUBTStYIdpsXn1x0XjsW_Fc_aem_2lVHcRlY5bV-P5gQjY0djg"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-brand-olive text-gray-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <SiTiktok className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61558526129050"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-brand-olive text-gray-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <FiFacebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold font-heading mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-brand-gold transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours & Contact */}
          <div>
            <h3 className="text-white text-lg font-bold font-heading mb-4">Store & Hours</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <FiClock className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <span>
                  <strong>Sun - Sat:</strong> 7:00 AM - 12:00 AM
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <FiMapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <span>Riyadh • Dubai • Jeddah • Abu Dhabi • Dammam</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="w-5 h-5 text-brand-gold shrink-0" />
                <span>+966 11 234 5678</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-bold font-heading mb-4">Stay Sweet</h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to get secret menu updates, special offers & bakery news directly to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-full text-white text-sm focus:outline-none focus:border-brand-gold transition-colors pr-10"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-brand-olive hover:bg-brand-olive-dark text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <FiSend className="w-4 h-4" />
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-green-400">
                  ✓ Thank you! You're subscribed to sweet updates.
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>
            © {new Date().getFullYear()} Martins Rolleg. All rights reserved. • Built by{' '}
            <a
              href="https://ibrahim-ezzat.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-brand-gold hover:underline font-medium transition-colors"
            >
              Engineer🌀Ibrahim Ezzat
            </a>
          </p>
          <div className="flex space-x-6">
            <Link to="/contact" className="hover:text-gray-300">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-gray-300">Terms of Service</Link>
            <Link to="/b2b" className="hover:text-gray-300">Wholesale Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
