import React from 'react';
import { motion } from 'framer-motion';
import { FiInstagram, FiHeart, FiMessageCircle } from 'react-icons/fi';
import { SectionTitle } from '../common/SectionTitle';

const INSTA_POSTS = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
    likes: '2.4K',
    comments: 184,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1583338917451-ace2795704aa?auto=format&fit=crop&w=600&q=80',
    likes: '3.1K',
    comments: 240,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80',
    likes: '1.9K',
    comments: 92,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80',
    likes: '4.2K',
    comments: 310,
  },
];

export const InstagramFeed = () => {
  return (
    <section className="py-20 bg-brand-cream/30 dark:bg-[#181715]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="@MARTINSROLLEG"
          title="Follow Us On Instagram"
          subtitle="Tag #MartinsRolleg in your cinnamon roll moments for a chance to be featured."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {INSTA_POSTS.map((post, idx) => (
            <motion.a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative aspect-square rounded-2xl overflow-hidden group shadow-md"
            >
              <img
                src={post.image}
                alt="Instagram bakery post"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-6 text-white font-bold text-sm">
                <div className="flex items-center space-x-1.5">
                  <FiHeart className="w-5 h-5 fill-white" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <FiMessageCircle className="w-5 h-5 fill-white" />
                  <span>{post.comments}</span>
                </div>
              </div>

              <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 text-white backdrop-blur-sm">
                <FiInstagram className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
