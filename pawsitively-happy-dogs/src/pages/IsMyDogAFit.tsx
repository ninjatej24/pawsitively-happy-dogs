/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { CheckCircle2, Heart, Smile, Sparkles, Star, Users } from 'lucide-react';
import { RainbowFrame } from '../components/RainbowLead';

const traits = [
  { title: 'Friendly and Social', icon: Users, desc: 'Enjoys being around other dogs and people.' },
  { title: 'Good Manners', icon: CheckCircle2, desc: 'Basic training and obedience are key.' },
  { title: 'Up-to-date Vaccinations', icon: Heart, desc: 'Health and safety for the whole pack.' },
  { title: 'Active and Outdoorsy', icon: Sparkles, desc: 'Loves exercise and exploring Bath.' },
  { title: 'Happy and Smiley', icon: Smile, desc: 'We walk the happiest dogs in Bath!' },
  { title: 'Reliable Schedule', icon: Star, desc: 'Regular walks for consistency and routine.' }
];

export const IsMyDogAFit = () => {
  return (
    <div className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h1 className="text-6xl font-display font-bold mb-8">Is my dog a good fit?</h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            We specialize in sociable, happy, and smiley dogs. 
            Our group walks are designed for dogs who love to make friends.
          </p>
        </div>

        <div className="relative mb-32 flex items-center justify-center min-h-[600px]">
          {/* Spider Diagram Concept */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <div className="w-[500px] h-[500px] border-2 border-zinc-900 rounded-full" />
            <div className="absolute w-[400px] h-[400px] border-2 border-zinc-900 rounded-full" />
            <div className="absolute w-[300px] h-[300px] border-2 border-zinc-900 rounded-full" />
            <div className="absolute w-[200px] h-[200px] border-2 border-zinc-900 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
            {traits.map((trait, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-10 bg-white rounded-[3rem] border border-zinc-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors">
                  <trait.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-zinc-900">{trait.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{trait.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center justify-center p-12 bg-zinc-900 text-white rounded-full w-48 h-48 shadow-2xl z-20">
            <span className="text-sm font-bold uppercase tracking-widest mb-1">The</span>
            <span className="text-2xl font-display font-bold text-emerald-400">Ideal</span>
            <span className="text-sm font-bold uppercase tracking-widest mt-1">Dog</span>
          </div>
        </div>

        <div className="max-w-3xl mx-auto p-12 bg-zinc-50 rounded-[3rem] border border-zinc-100 text-center">
          <h2 className="text-3xl font-display font-bold mb-8">Not sure if your dog fits?</h2>
          <p className="text-lg text-zinc-600 mb-12 leading-relaxed">
            We offer solo walks for dogs who may not be ready for group socialisation. 
            Get in touch to discuss your dog's personality and we'll help you decide.
          </p>
          <button className="px-10 py-4 bg-zinc-900 text-white rounded-full font-bold hover:bg-zinc-800 transition-all">
            Contact us to discuss
          </button>
        </div>
      </div>
    </div>
  );
};
