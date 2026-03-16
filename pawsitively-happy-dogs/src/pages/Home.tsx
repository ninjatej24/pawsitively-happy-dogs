/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, CheckCircle2, MapPin, Star, Users } from 'lucide-react';
import { CurvedRainbowLead, RainbowFrame } from '../components/RainbowLead';

export const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-400 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-bold mb-8 border border-emerald-100">
              <Star className="w-4 h-4 mr-2 fill-emerald-600" />
              Best Reviewed Dog Walkers in Bath
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-8 text-zinc-900">
              We walk the <span className="text-emerald-600">happiest</span> dogs in Bath.
            </h1>
            <p className="text-xl text-zinc-600 mb-12 max-w-lg leading-relaxed">
              Premium, professional dog walking with a team of highly qualified experts. 
              The ones with the rainbow leads.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/enquire"
                className="px-10 py-5 bg-zinc-900 text-white rounded-full font-bold text-lg hover:bg-zinc-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center"
              >
                Book a walk / Enquire
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="px-10 py-5 bg-white text-zinc-900 border-2 border-zinc-100 rounded-full font-bold text-lg hover:bg-zinc-50 transition-all flex items-center justify-center"
              >
                Our Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <RainbowFrame className="aspect-[4/5] w-full max-w-md mx-auto">
              <img
                src="https://picsum.photos/seed/happy-dog/800/1000"
                alt="Happy dog walking"
                className="w-full h-full object-cover rounded-lg"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl border border-zinc-100 max-w-[200px]">
                <p className="text-sm font-bold text-zinc-900 mb-1 italic">
                  "The best walkers in Bath, hands down!"
                </p>
                <p className="text-xs text-zinc-500">— Sarah & Barnaby</p>
              </div>
            </RainbowFrame>
          </motion.div>
        </div>
      </section>

      <CurvedRainbowLead className="opacity-30 -mt-12 mb-12" />

      {/* Awards Section */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-sm font-bold tracking-widest uppercase text-zinc-400 mb-12">
            Award-Winning Excellence
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {[2023, 2024, 2025, 2026].map((year) => (
              <div key={year} className="flex flex-col items-center">
                <Award className="w-16 h-16 text-emerald-600 mb-4" />
                <span className="font-bold text-zinc-900">Three Best Rated</span>
                <span className="text-sm text-zinc-500">{year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Area & Map */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-5xl font-display font-bold mb-8">Where we operate.</h2>
            <p className="text-lg text-zinc-600 mb-12 leading-relaxed">
              Bath is a large city, and to ensure the highest quality of care, we focus our services 
              on specific areas. We walk in the most beautiful parks and trails around the city centre 
              and surrounding neighbourhoods.
            </p>
            <ul className="space-y-4 mb-12">
              {[
                'Bath City Centre',
                'Lansdown & Weston',
                'Widcombe & Bear Flat',
                'Bathwick & Claverton Down',
                'Oldfield Park & Combe Down'
              ].map((area) => (
                <li key={area} className="flex items-center text-zinc-700 font-medium">
                  <MapPin className="w-5 h-5 mr-3 text-emerald-600" />
                  {area}
                </li>
              ))}
            </ul>
            <Link
              to="/enquire"
              className="inline-flex items-center text-emerald-600 font-bold hover:underline text-lg"
            >
              Check if we cover your postcode
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
          <div className="aspect-square bg-zinc-100 rounded-3xl overflow-hidden shadow-inner border border-zinc-200 relative">
            {/* Placeholder for Map */}
            <div className="absolute inset-0 flex items-center justify-center text-zinc-400 font-medium">
              Interactive Coverage Map
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-32 bg-zinc-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-display font-bold mb-6">Why choose Pawsitively?</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              We're not just dog walkers. We're your local dopamine dealers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Highly Qualified',
                desc: 'Our team includes veterinary practitioners and canine psychology experts.',
                icon: Award
              },
              {
                title: 'Professional Care',
                desc: 'DBS checked, first aid trained, and fully insured for total peace of mind.',
                icon: CheckCircle2
              },
              {
                title: 'Joyful Experience',
                desc: 'We focus on sociable, happy dogs and group dynamics for maximum fun.',
                icon: Star
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm"
              >
                <feature.icon className="w-12 h-12 text-emerald-400 mb-8" />
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-display font-bold mb-8">Ready to join the pack?</h2>
          <p className="text-xl text-zinc-600 mb-12">
            Start the process today. We'll match your dog with the perfect group of friends.
          </p>
          <Link
            to="/enquire"
            className="px-12 py-6 bg-zinc-900 text-white rounded-full font-bold text-xl hover:bg-zinc-800 transition-all shadow-2xl hover:shadow-emerald-500/20"
          >
            Enquire Now
          </Link>
        </div>
      </section>
    </div>
  );
};
