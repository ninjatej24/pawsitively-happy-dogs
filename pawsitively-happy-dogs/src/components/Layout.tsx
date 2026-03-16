/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { RainbowLead } from './RainbowLead';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Meet the Team', path: '/team' },
  { name: 'Why Pawsitively?', path: '/why-choose' },
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Enquire', path: '/enquire' },
];

const colors = ['#FF6321', '#FFD700', '#00FF00', '#00BFFF', '#9370DB', '#FF1493', '#FF6321'];

export const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex flex-col group">
            <span className="text-2xl font-display font-bold tracking-tight text-zinc-900">
              Pawsitively
            </span>
            <div className="relative overflow-hidden">
              <span className="text-xs font-medium text-zinc-500 block">
                The ones with the rainbow leads
              </span>
              <motion.div
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#FF6321] via-[#00FF00] to-[#FF1493]"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.slice(0, -1).map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative group py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                {item.name}
                {location.pathname === item.path ? (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ backgroundColor: colors[index % colors.length] }}
                  />
                ) : (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    style={{ backgroundColor: colors[index % colors.length] }}
                  />
                )}
              </Link>
            ))}
            <Link
              to="/enquire"
              className="px-6 py-2.5 bg-zinc-900 text-white rounded-full text-sm font-bold hover:bg-zinc-800 transition-all shadow-lg hover:shadow-emerald-500/10"
            >
              Enquire
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-zinc-600 hover:text-zinc-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-zinc-100"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 text-base font-medium ${
                  location.pathname === item.path
                    ? 'text-zinc-900 bg-zinc-50'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
      <RainbowLead className="h-0.5 opacity-50" />
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-zinc-50 pt-16 pb-8 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-display font-bold mb-4">Pawsitively Happy Dogs</h3>
            <p className="text-zinc-600 mb-6 max-w-md">
              The best reviewed dog walking service in Bath. Your local dopamine dealers,
              walking the happiest dogs in the city with our signature rainbow leads.
            </p>
            <div className="flex space-x-4">
              {/* Social links would go here */}
              <span className="text-sm font-medium text-zinc-400">#TeamPawsitively</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-zinc-600">
              <li><Link to="/services" className="hover:text-zinc-900">Services</Link></li>
              <li><Link to="/team" className="hover:text-zinc-900">Meet the Team</Link></li>
              <li><Link to="/how-it-works" className="hover:text-zinc-900">How It Works</Link></li>
              <li><Link to="/gallery" className="hover:text-zinc-900">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-zinc-600">
              <li>Bath, United Kingdom</li>
              <li>hello@pawsitivelyhappydogs.com</li>
              <li><Link to="/enquire" className="text-emerald-600 font-bold hover:underline">Enquire Now</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-zinc-500">
            © 2026 Pawsitively Happy Dogs. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-zinc-500">
            <Link to="/privacy" className="hover:text-zinc-900">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-zinc-900">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
