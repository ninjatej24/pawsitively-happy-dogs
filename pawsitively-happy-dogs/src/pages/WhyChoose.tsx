/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Award, CheckCircle2, Heart, ShieldCheck, Star, Users } from 'lucide-react';
import { RainbowFrame } from '../components/RainbowLead';

const reasons = [
  {
    title: 'Professionalism',
    desc: 'We are a registered business with a team of highly qualified professionals, not just casual walkers.',
    icon: ShieldCheck
  },
  {
    title: 'Trustworthiness',
    desc: 'DBS checked, fully insured, and first aid trained. Your dog’s safety is our absolute priority.',
    icon: Award
  },
  {
    title: 'Quality of Care',
    desc: 'We focus on group dynamics and socialisation, ensuring every dog is happy and well-cared for.',
    icon: Heart
  },
  {
    title: 'Unique Identity',
    desc: 'The ones with the rainbow leads! Our brand is built on joy, personality, and premium service.',
    icon: Star
  },
  {
    title: 'Reputation',
    desc: 'The best reviewed dog walking service in Bath for 4 years running. Our clients love us!',
    icon: Users
  }
];

export const WhyChoose = () => {
  return (
    <div className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h1 className="text-6xl font-display font-bold mb-8">Why choose Pawsitively?</h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            We're not just dog walkers. We're your local dopamine dealers, 
            providing a premium service that stands out in Bath.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col h-full"
            >
              <RainbowFrame className="flex-grow">
                <div className="flex flex-col h-full">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-8">
                    <reason.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4 text-zinc-900">{reason.title}</h3>
                  <p className="text-lg text-zinc-600 leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </RainbowFrame>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-16 bg-emerald-600 rounded-[4rem] text-white text-center shadow-2xl shadow-emerald-200">
          <h2 className="text-5xl font-display font-bold mb-8 italic">"Your local dopamine dealers"</h2>
          <p className="text-2xl font-medium mb-12 max-w-2xl mx-auto opacity-90">
            We bring joy to every walk, ensuring your dog comes home happy, 
            socialised, and ready for a nap.
          </p>
          <div className="flex justify-center space-x-4">
            <span className="px-6 py-3 bg-white/20 backdrop-blur-md rounded-full font-bold text-sm uppercase tracking-widest">
              #TeamPawsitively
            </span>
            <span className="px-6 py-3 bg-white/20 backdrop-blur-md rounded-full font-bold text-sm uppercase tracking-widest">
              #RainbowLeads
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
