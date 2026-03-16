/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export const RainbowLead = ({ className = "" }: { className?: string }) => {
  const colors = [
    '#FF6321', // Orange
    '#FFD700', // Gold
    '#00FF00', // Neon Green
    '#00BFFF', // Deep Sky Blue
    '#9370DB', // Medium Purple
    '#FF1493'  // Deep Pink
  ];

  return (
    <div className={`flex h-1 w-full overflow-hidden rounded-full ${className}`}>
      {colors.map((color, index) => (
        <div
          key={index}
          className="h-full flex-1"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
};

export const CurvedRainbowLead = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 1000 100"
      className={`w-full h-auto ${className}`}
      preserveAspectRatio="none"
    >
      <motion.path
        d="M0,50 Q250,0 500,50 T1000,50"
        fill="none"
        stroke="url(#rainbowGradient)"
        strokeWidth="8"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <defs>
        <linearGradient id="rainbowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#FF6321' }} />
          <stop offset="20%" style={{ stopColor: '#FFD700' }} />
          <stop offset="40%" style={{ stopColor: '#00FF00' }} />
          <stop offset="60%" style={{ stopColor: '#00BFFF' }} />
          <stop offset="80%" style={{ stopColor: '#9370DB' }} />
          <stop offset="100%" style={{ stopColor: '#FF1493' }} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const RainbowFrame = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`relative p-1 rounded-2xl overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF6321] via-[#00FF00] to-[#FF1493] animate-gradient-x" />
      <div className="relative bg-white rounded-xl p-6 h-full">
        {children}
      </div>
    </div>
  );
};
