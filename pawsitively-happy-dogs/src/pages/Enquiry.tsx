/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { RainbowFrame } from '../components/RainbowLead';

export const Enquiry = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    dogName: '',
    dogBreed: '',
    dogAge: '',
    daysNeeded: [] as string[],
    temperament: '',
    additionalInfo: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to a backend
    setIsSubmitted(true);
  };

  const toggleDay = (day: string) => {
    setFormData(prev => ({
      ...prev,
      daysNeeded: prev.daysNeeded.includes(day)
        ? prev.daysNeeded.filter(d => d !== day)
        : [...prev.daysNeeded, day]
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center p-12 bg-emerald-50 rounded-[3rem] border border-emerald-100"
        >
          <CheckCircle2 className="w-20 h-20 text-emerald-600 mx-auto mb-8" />
          <h2 className="text-4xl font-display font-bold text-zinc-900 mb-6">Enquiry Sent!</h2>
          <p className="text-lg text-zinc-600 mb-12">
            Thank you for your enquiry. Becky or one of the team will be in touch 
            within 24 hours to discuss your dog's needs.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-10 py-4 bg-zinc-900 text-white rounded-full font-bold hover:bg-zinc-800 transition-all"
          >
            Send another enquiry
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-display font-bold mb-8">Start the journey.</h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Fill out the form below to enquire about our services. 
            We'll get back to you to arrange a meet and greet.
          </p>
        </div>

        <RainbowFrame className="p-12">
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Owner Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Your Name</label>
                <input
                  required
                  type="text"
                  className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Email Address</label>
                <input
                  required
                  type="email"
                  className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Phone Number</label>
                <input
                  required
                  type="tel"
                  className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  placeholder="07123 456789"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Postcode</label>
                <input
                  required
                  type="text"
                  className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  placeholder="BA1 1AA"
                  value={formData.postcode}
                  onChange={e => setFormData({ ...formData, postcode: e.target.value })}
                />
              </div>
            </div>

            {/* Dog Info */}
            <div className="pt-8 border-t border-zinc-100">
              <h3 className="text-2xl font-display font-bold mb-8">About your dog</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Dog's Name</label>
                  <input
                    required
                    type="text"
                    className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    placeholder="Barnaby"
                    value={formData.dogName}
                    onChange={e => setFormData({ ...formData, dogName: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Breed</label>
                  <input
                    required
                    type="text"
                    className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    placeholder="Golden Retriever"
                    value={formData.dogBreed}
                    onChange={e => setFormData({ ...formData, dogBreed: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Age</label>
                  <input
                    required
                    type="text"
                    className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    placeholder="3 years"
                    value={formData.dogAge}
                    onChange={e => setFormData({ ...formData, dogAge: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {/* Days Needed */}
            <div className="space-y-4">
              <label className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Days Needed</label>
              <div className="flex flex-wrap gap-3">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                  <button
                    key={day}
                    type="button"
                    onClick={() => toggleDay(day)}
                    className={`px-6 py-3 rounded-full font-bold transition-all ${
                      formData.daysNeeded.includes(day)
                        ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200'
                        : 'bg-zinc-50 text-zinc-600 border border-zinc-100 hover:bg-zinc-100'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            {/* Temperament */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Dog's Temperament</label>
              <textarea
                required
                className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all min-h-[120px]"
                placeholder="Tell us about your dog's personality, behavior with other dogs, etc."
                value={formData.temperament}
                onChange={e => setFormData({ ...formData, temperament: e.target.value })}
              />
            </div>

            {/* Submit */}
            <div className="pt-8 flex flex-col items-center">
              <button
                type="submit"
                className="w-full md:w-auto px-16 py-6 bg-zinc-900 text-white rounded-full font-bold text-xl hover:bg-zinc-800 transition-all shadow-2xl hover:shadow-emerald-500/20 flex items-center justify-center"
              >
                Send Enquiry
                <Send className="ml-3 w-6 h-6" />
              </button>
              <p className="mt-6 text-sm text-zinc-400 flex items-center">
                <AlertCircle className="w-4 h-4 mr-2" />
                We'll respond within 24 hours.
              </p>
            </div>
          </form>
        </RainbowFrame>
      </div>
    </div>
  );
};
