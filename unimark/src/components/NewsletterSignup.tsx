'use client';

import React, { useState } from 'react';
import { Mail, X, Check, TrendingUp } from 'lucide-react';

export const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
        setIsOpen(false);
      }, 3000);
    }
  };

  return (
    <>
      {/* Newsletter Banner in Footer */}
      <section className="py-8 md:py-12 bg-gradient-to-r from-emerald-700 to-emerald-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="text-white" size={28} />
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Weekly Market Insights
                </h3>
              </div>
              <p className="text-emerald-100 mb-4">
                Get exclusive insights on international sourcing trends, sustainability updates, and premium product recommendations delivered straight to your inbox.
              </p>
              <ul className="space-y-2 text-emerald-100 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-lg">✓</span>
                  Expert market analysis & buying strategies
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-lg">✓</span>
                  Exclusive pre-launch product offers
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-lg">✓</span>
                  Sustainability certifications & reports
                </li>
              </ul>
            </div>

            {/* Newsletter Form */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-emerald-300" size={20} />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white bg-opacity-90 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-500 hover:to-teal-500 disabled:from-green-600 disabled:to-green-700 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-105 disabled:scale-100 flex items-center justify-center gap-2"
                >
                  {submitted ? (
                    <>
                      <Check size={20} />
                      Subscribed!
                    </>
                  ) : (
                    <>
                      <Mail size={20} />
                      Subscribe Now
                    </>
                  )}
                </button>
              </form>
              <p className="text-xs text-emerald-100 mt-4 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Newsletter CTA Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 z-40 bg-gradient-to-br from-emerald-600 to-teal-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all flex items-center gap-2"
          aria-label="Open newsletter signup"
        >
          <Mail size={24} />
        </button>
      )}

      {/* Newsletter Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl transform transition-all">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="p-8">
              {/* Header */}
              <div className="text-center mb-6">
                <div className="inline-block bg-gradient-to-br from-emerald-100 to-teal-100 p-4 rounded-full mb-4">
                  <TrendingUp className="text-emerald-700" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Weekly Market Insights
                </h3>
                <p className="text-gray-600">
                  Get premium sourcing tips and exclusive offers
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-3 mb-6">
                {[
                  'International buying strategies',
                  'Exclusive product previews',
                  'Sustainability updates'
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-700">
                    <span className="flex items-center justify-center w-5 h-5 bg-emerald-100 rounded-full flex-shrink-0">
                      <Check size={14} className="text-emerald-600" />
                    </span>
                    {benefit}
                  </div>
                ))}
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-emerald-500 text-gray-900"
                  required
                />
                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 disabled:from-green-700 disabled:to-green-800 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-105 disabled:scale-100 flex items-center justify-center gap-2"
                >
                  {submitted ? (
                    <>
                      <Check size={20} />
                      Subscribed!
                    </>
                  ) : (
                    'Subscribe Now'
                  )}
                </button>
              </form>

              {/* Privacy Note */}
              <p className="text-xs text-gray-500 text-center mt-4">
                We respect your privacy. Your email is safe with us.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
