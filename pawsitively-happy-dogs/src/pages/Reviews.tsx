/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { RainbowFrame } from '../components/RainbowLead';

const reviews = [
  {
    id: 1,
    author: 'Sarah & Barnaby',
    text: 'Becky and the team are absolutely incredible. Barnaby is always so excited when he sees the rainbow leads! We trust them completely and love the photo updates.',
    rating: 5,
    source: 'Google'
  },
  {
    id: 2,
    author: 'James & Luna',
    text: 'The most professional dog walking service in Bath. The team is highly qualified and it shows in how they handle the dogs. Luna has made so many friends!',
    rating: 5,
    source: 'Facebook'
  },
  {
    id: 3,
    author: 'Emily & Cooper',
    text: 'We love Pawsitively! The group walks are perfect for Cooper’s socialisation. He comes home happy and tired every time. Highly recommend.',
    rating: 5,
    source: 'Google'
  },
  {
    id: 4,
    author: 'Mark & Daisy',
    text: 'Professional, reliable, and joyful. The rainbow leads are a great touch, and the team’s expertise gives us total peace of mind.',
    rating: 5,
    source: 'Google'
  },
  {
    id: 5,
    author: 'Sophie & Milo',
    text: 'The best Reviewed dog walkers in Bath for a reason. They truly care about the dogs and their happiness. Milo loves his adventures!',
    rating: 5,
    source: 'Facebook'
  },
  {
    id: 6,
    author: 'David & Rex',
    text: 'Team Pawsitively is the best! The meet and greet process was so thorough, and we knew Rex was in good hands from day one.',
    rating: 5,
    source: 'Google'
  }
];

export const Reviews = () => {
  return (
    <div className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h1 className="text-6xl font-display font-bold mb-8">What our pack says.</h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            We're proud to be the best reviewed dog walking service in Bath. 
            Our reputation is built on trust, professionalism, and happy dogs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col h-full"
            >
              <RainbowFrame className="flex-grow">
                <div className="flex flex-col h-full">
                  <div className="flex mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-emerald-500 fill-emerald-500 mr-1" />
                    ))}
                  </div>
                  
                  <Quote className="w-10 h-10 text-zinc-100 mb-6" />
                  
                  <p className="text-lg text-zinc-600 mb-8 flex-grow leading-relaxed italic">
                    "{review.text}"
                  </p>
                  
                  <div className="pt-6 border-t border-zinc-100 flex justify-between items-center">
                    <div>
                      <p className="font-bold text-zinc-900">{review.author}</p>
                      <p className="text-xs text-zinc-400 font-medium uppercase tracking-widest">
                        via {review.source}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-zinc-300" />
                  </div>
                </div>
              </RainbowFrame>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-12 bg-zinc-900 rounded-[3rem] text-white text-center">
          <h2 className="text-4xl font-display font-bold mb-8">Join the conversation</h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Check out more reviews on Google and Facebook, or follow us on Instagram 
            to see our daily adventures in Bath.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="#"
              className="px-10 py-5 bg-white text-zinc-900 rounded-full font-bold text-lg hover:bg-zinc-100 transition-all flex items-center justify-center"
            >
              Google Reviews
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
            <a
              href="#"
              className="px-10 py-5 bg-white text-zinc-900 rounded-full font-bold text-lg hover:bg-zinc-100 transition-all flex items-center justify-center"
            >
              Facebook Reviews
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
