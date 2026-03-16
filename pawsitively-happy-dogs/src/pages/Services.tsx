/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, DollarSign, Info } from 'lucide-react';
import { RainbowFrame } from '../components/RainbowLead';

const services = [
  {
    id: 'group-walks',
    name: 'Group Walks',
    description: 'Our most popular service. Dogs are matched by temperament and energy level for a social, fun experience.',
    price: 'From £18 per hour',
    includes: [
      'Pick up and drop off',
      '1 hour of active walking',
      'Fresh water and towel dry',
      'Socialisation with friends',
      'Photo updates'
    ],
    image: 'https://picsum.photos/seed/group-walk/800/600'
  },
  {
    id: 'solo-walks',
    name: 'Solo Walks',
    description: 'One-on-one attention for dogs who prefer their own company or have specific training needs.',
    price: 'From £25 per hour',
    includes: [
      'Pick up and drop off',
      '1 hour of focused walking',
      'Fresh water and towel dry',
      'Individual attention',
      'Photo updates'
    ],
    image: 'https://picsum.photos/seed/solo-walk/800/600'
  },
  {
    id: 'puppy-visits',
    name: 'Puppy Visits',
    description: 'Short visits for puppies too young for full walks. Includes play, feeding, and toilet breaks.',
    price: 'From £15 per visit',
    includes: [
      'Feeding and fresh water',
      'Play and socialisation',
      'Toilet breaks',
      'Basic training reinforcement',
      'Photo updates'
    ],
    image: 'https://picsum.photos/seed/puppy/800/600'
  },
  {
    id: 'adventure-walks',
    name: 'Adventure Walks',
    description: 'Longer, more challenging walks in the beautiful countryside surrounding Bath.',
    price: 'From £35 per session',
    includes: [
      'Pick up and drop off',
      '2-3 hours of exploration',
      'Fresh water and towel dry',
      'Varied terrain and trails',
      'Photo updates'
    ],
    image: 'https://picsum.photos/seed/adventure/800/600'
  }
];

export const Services = () => {
  return (
    <div className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h1 className="text-6xl font-display font-bold mb-8">Our Services.</h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Professional care tailored to your dog's needs. All services are provided 
            by our highly qualified team of experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col h-full"
            >
              <div className="aspect-video rounded-3xl overflow-hidden mb-8 border border-zinc-100 shadow-sm relative group">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full font-bold text-zinc-900 shadow-lg">
                  {service.price}
                </div>
              </div>
              
              <h2 className="text-3xl font-display font-bold mb-4">{service.name}</h2>
              <p className="text-lg text-zinc-600 mb-8 flex-grow leading-relaxed">
                {service.description}
              </p>
              
              <div className="bg-zinc-50 rounded-3xl p-8 border border-zinc-100 mb-8">
                <h3 className="font-bold text-zinc-900 mb-4 flex items-center">
                  <Info className="w-5 h-5 mr-2 text-emerald-600" />
                  What's included:
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.includes.map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-zinc-600">
                      <Check className="w-4 h-4 mr-2 text-emerald-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link
                to="/enquire"
                className="inline-flex items-center text-emerald-600 font-bold hover:underline text-lg"
              >
                Enquire about {service.name}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-12 bg-zinc-900 rounded-[3rem] text-white text-center">
          <h2 className="text-4xl font-display font-bold mb-8">Need something else?</h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            We also offer pet sitting, wedding chaperone services, and more. 
            Get in touch to discuss a bespoke care plan for your pet.
          </p>
          <Link
            to="/enquire"
            className="px-10 py-5 bg-white text-zinc-900 rounded-full font-bold text-lg hover:bg-zinc-100 transition-all"
          >
            Custom Enquiry
          </Link>
        </div>
      </div>
    </div>
  );
};
