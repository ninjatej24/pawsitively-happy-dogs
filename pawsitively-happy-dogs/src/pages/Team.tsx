/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Award, CheckCircle2, GraduationCap, Heart, ShieldCheck } from 'lucide-react';
import { RainbowFrame } from '../components/RainbowLead';

const team = [
  {
    id: 'becky',
    name: 'Becky',
    role: 'Founder & Head Walker',
    qualifications: ['First Aid Trained', 'DBS Checked', 'Canine Psychology Cert'],
    bio: 'Becky started Pawsitively with a simple goal: to walk the happiest dogs in Bath. She leads the team with a focus on group dynamics and socialisation.',
    image: 'https://picsum.photos/seed/becky-dog/800/1000'
  },
  {
    id: 'laura',
    name: 'Laura',
    role: 'Veterinary Practitioner',
    qualifications: ['DVM (Doctor of Veterinary Medicine)', 'First Aid Trained', 'DBS Checked'],
    bio: 'Laura brings a high level of medical expertise to the team. She ensures all dogs are healthy and safe during their adventures.',
    image: 'https://picsum.photos/seed/laura-dog/800/1000'
  },
  {
    id: 'lucy',
    name: 'Lucy',
    role: 'Professional Photographer',
    qualifications: ['Master’s in Fine Art', 'First Aid Trained', 'DBS Checked'],
    bio: 'Lucy captures the joyful moments of our walks. Her professional photography background helps us share the happiness of our pack.',
    image: 'https://picsum.photos/seed/lucy-dog/800/1000'
  },
  {
    id: 'james',
    name: 'James',
    role: 'Canine Behaviourist',
    qualifications: ['MSc Canine Psychology', 'First Aid Trained', 'DBS Checked'],
    bio: 'James specializes in dog behavior and training. He ensures that every group walk is a positive and structured experience.',
    image: 'https://picsum.photos/seed/james-dog/800/1000'
  }
];

export const Team = () => {
  return (
    <div className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h1 className="text-6xl font-display font-bold mb-8">Meet the Team.</h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Highly qualified, professional, and passionate about dogs. 
            Our team brings diverse backgrounds and expertise to every walk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col lg:flex-row gap-12 items-center lg:items-start"
            >
              <div className="w-full lg:w-1/2">
                <RainbowFrame className="aspect-[4/5] w-full">
                  <img
                    src={member.image}
                    alt={`${member.name} walking a dog`}
                    className="w-full h-full object-cover rounded-lg"
                    referrerPolicy="no-referrer"
                  />
                </RainbowFrame>
              </div>
              
              <div className="w-full lg:w-1/2">
                <div className="mb-6">
                  <h2 className="text-4xl font-display font-bold mb-2">{member.name}</h2>
                  <p className="text-emerald-600 font-bold text-lg">{member.role}</p>
                </div>
                
                <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="space-y-4">
                  <h3 className="font-bold text-zinc-900 flex items-center">
                    <GraduationCap className="w-5 h-5 mr-2 text-emerald-600" />
                    Qualifications:
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {member.qualifications.map((qual, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-zinc-50 border border-zinc-100 rounded-full text-sm font-medium text-zinc-700"
                      >
                        {qual}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: 'First Aid Trained',
              desc: 'Every team member is fully trained in canine first aid for total safety.',
              icon: Heart
            },
            {
              title: 'DBS Checked',
              desc: 'We are fully vetted and background checked for your peace of mind.',
              icon: ShieldCheck
            },
            {
              title: 'Highly Educated',
              desc: 'Many of our team hold Master’s level qualifications in relevant fields.',
              icon: GraduationCap
            }
          ].map((feature, i) => (
            <div key={i} className="text-center p-8 rounded-3xl bg-zinc-50 border border-zinc-100">
              <feature.icon className="w-12 h-12 text-emerald-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-zinc-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
