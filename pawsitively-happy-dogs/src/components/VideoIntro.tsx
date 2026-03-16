/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Play } from 'lucide-react';

export const VideoIntro = ({ onComplete }: { onComplete: () => void }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center p-6 text-center"
    >
      <div className="relative w-full max-w-4xl aspect-video bg-zinc-100 rounded-3xl overflow-hidden shadow-2xl mb-12">
        {/* Placeholder for the video */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg mb-6">
              <Play className="text-emerald-600 fill-emerald-600 ml-1" size={32} />
            </div>
            <h2 className="text-3xl font-display font-bold text-zinc-900 mb-2">
              Pawsitively Happy Dogs
            </h2>
            <p className="text-zinc-500 font-medium">
              The ones with the rainbow leads
            </p>
          </motion.div>
        </div>
        
        {/* Rainbow lead drawing across the screen */}
        <div className="absolute bottom-0 left-0 right-0 h-2 flex">
          {[
            '#FF6321', '#FFD700', '#00FF00', '#00BFFF', '#9370DB', '#FF1493'
          ].map((color, i) => (
            <motion.div
              key={i}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
              className="h-full flex-1 origin-left"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isReady && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            onClick={onComplete}
            className="px-12 py-5 bg-zinc-900 text-white rounded-full font-bold text-lg hover:bg-zinc-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Enter Website
          </motion.button>
        )}
      </AnimatePresence>

      <div className="mt-12">
        <p className="text-sm font-medium text-zinc-400 tracking-widest uppercase">
          London Philharmonic – “Happy”
        </p>
      </div>
    </motion.div>
  );
};
