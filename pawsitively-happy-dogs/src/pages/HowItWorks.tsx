/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { CheckCircle2, ClipboardList, Handshake, MessageSquare, Search, Users } from 'lucide-react';
import { CurvedRainbowLead } from '../components/RainbowLead';

const steps = [
  {
    title: 'Enquiry',
    desc: 'Fill out our quick enquiry form with details about your dog and your needs.',
    icon: MessageSquare
  },
  {
    title: 'Register Online',
    desc: 'Complete our full registration through our external booking app.',
    icon: ClipboardList
  },
  {
    title: 'Meet and Greet',
    desc: 'We visit you and your dog at home to get to know each other.',
    icon: Handshake
  },
  {
    title: 'Dog Assessment',
    desc: 'We observe your dog’s behavior and social skills in a controlled environment.',
    icon: Search
  },
  {
    title: 'Matching',
    desc: 'We match your dog with a suitable group of "dog friends" for their walks.',
    icon: Users
  },
  {
    title: 'First Walk',
    desc: 'Your dog joins the pack for their first adventure with Team Pawsitively!',
    icon: CheckCircle2
  }
];

const faqs = [
  {
    q: 'How do you handle keys?',
    a: 'We keep all keys in a secure, unmarked location. We are fully insured for key holding and lock replacement.'
  },
  {
    q: 'What happens in an emergency?',
    a: 'Our team is first aid trained. In an emergency, we will contact you immediately and take your dog to your nominated vet or the nearest emergency clinic.'
  },
  {
    q: 'Do you take reactive dogs?',
    a: 'We specialize in sociable, happy dogs. If your dog is reactive, we may offer solo walks depending on the situation, but our group walks are for social dogs only.'
  },
  {
    q: 'What is your cancellation policy?',
    a: 'We require 24 hours notice for cancellations. Cancellations within 24 hours will be charged at the full rate.'
  }
];

export const HowItWorks = () => {
  return (
    <div className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h1 className="text-6xl font-display font-bold mb-8">How It Works.</h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            From the first enquiry to the first walk, we ensure a smooth and 
            professional process for you and your dog.
          </p>
        </div>

        <div className="relative mb-32">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-zinc-100 hidden lg:block -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-white border-2 border-zinc-100 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-emerald-500 transition-colors">
                  <step.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <CurvedRainbowLead className="opacity-30 mb-32" />

        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-display font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100">
                <h3 className="text-xl font-bold mb-4 text-zinc-900">{faq.q}</h3>
                <p className="text-zinc-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
