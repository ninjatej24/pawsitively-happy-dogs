/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { RainbowFrame } from '../components/RainbowLead';

const galleryItems = [
  { id: 1, url: 'https://picsum.photos/seed/dog1/800/800', caption: 'Happy dogs in the park' },
  { id: 2, url: 'https://picsum.photos/seed/dog2/800/1000', caption: 'Adventure walk in the countryside' },
  { id: 3, url: 'https://picsum.photos/seed/dog3/1000/800', caption: 'Group socialisation' },
  { id: 4, url: 'https://picsum.photos/seed/dog4/800/800', caption: 'Puppy play time' },
  { id: 5, url: 'https://picsum.photos/seed/dog5/800/1000', caption: 'Rainbow leads in action' },
  { id: 6, url: 'https://picsum.photos/seed/dog6/1000/800', caption: 'Team Pawsitively' },
  { id: 7, url: 'https://picsum.photos/seed/dog7/800/800', caption: 'Joyful moments' },
  { id: 8, url: 'https://picsum.photos/seed/dog8/800/1000', caption: 'Professional care' },
  { id: 9, url: 'https://picsum.photos/seed/dog9/1000/800', caption: 'Best reviewed in Bath' }
];

export const Gallery = () => {
  return (
    <div className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h1 className="text-6xl font-display font-bold mb-8">Our Gallery.</h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            A glimpse into the joyful adventures of our pack. 
            Happy dogs, professional photography, and rainbow leads.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="break-inside-avoid"
            >
              <RainbowFrame className="p-2">
                <div className="relative group overflow-hidden rounded-lg">
                  <img
                    src={item.url}
                    alt={item.caption}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-white font-medium text-sm">{item.caption}</p>
                  </div>
                </div>
              </RainbowFrame>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-12 bg-zinc-50 rounded-[3rem] text-center border border-zinc-100">
          <h2 className="text-4xl font-display font-bold mb-8">Hall of Fame</h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Coming soon: A special place for our most memorable pack members.
          </p>
          <div className="flex justify-center space-x-4">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="w-16 h-16 bg-zinc-200 rounded-full animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
