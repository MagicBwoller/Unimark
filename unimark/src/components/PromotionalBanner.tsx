'use client';

import React from 'react';
import { Clock, Leaf, Recycle, Route, Sparkles } from 'lucide-react';

export const PromotionalBanner: React.FC = () => {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-[2rem] border border-amber-200 bg-gradient-to-r from-amber-50 to-primary-50">
          <div className="relative z-10 px-6 py-8 md:px-12 md:py-12">
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <Sparkles className="text-amber-600" size={28} />
                  <span className="inline-block rounded-full bg-amber-600 px-4 py-1 text-sm font-bold text-white">
                    Neighborhood Basket Week
                  </span>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-gray-950 md:text-3xl">
                  Local staples, friendlier routes, less waste
                </h3>
                <p className="mb-2 text-lg font-semibold text-gray-800">
                  Save up to 20% on the items neighbors are already choosing.
                </p>
                <p className="mb-6 max-w-3xl text-gray-600">
                  Pair sourdough, eggs, milk, tomatoes, and seasonal fruit in one basket. Unimark groups the delivery with nearby streets and reminds you when returnable jars can come back for credit.
                </p>

                <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-amber-200 bg-white/75 p-4">
                    <p className="mb-1 text-xs text-gray-600">Basket builder</p>
                    <p className="font-bold text-amber-700">Popular combinations near you</p>
                  </div>
                  <div className="rounded-2xl border border-primary-200 bg-white/75 p-4">
                    <p className="mb-1 text-xs text-gray-600">Returns</p>
                    <p className="font-bold text-primary-800">Glass credit on next pickup</p>
                  </div>
                </div>

                <button className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-primary-700 to-primary-800 px-8 py-3 font-bold text-white transition-transform hover:scale-105">
                  <Clock size={20} />
                  Shop This Week&apos;s Basket
                </button>
              </div>

              <div className="hidden flex-shrink-0 text-center md:block">
                <div className="mb-2 text-7xl font-bold text-primary-700">20%</div>
                <div className="text-xl font-bold text-gray-950">OFF</div>
                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <p>Local producer picks</p>
                  <p>Street-grouped delivery</p>
                  <p>Returnable packaging</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: 'Market Essentials',
              description: 'Daily staples selected for nearby homes',
              icon: <Leaf size={30} />,
              className: 'from-primary-50 to-primary-100 border-primary-200 text-primary-800',
            },
            {
              title: 'Grouped Delivery',
              description: 'Routes planned by street to reduce trips',
              icon: <Route size={30} />,
              className: 'from-sky-50 to-sky-100 border-sky-200 text-sky-800',
            },
            {
              title: 'Jar Return Credit',
              description: 'Clean glass returns become basket credit',
              icon: <Recycle size={30} />,
              className: 'from-amber-50 to-amber-100 border-amber-200 text-amber-800',
            },
          ].map((item) => (
            <div
              key={item.title}
              className={`rounded-3xl border bg-gradient-to-br p-6 text-center shadow-[0_10px_30px_rgba(55,94,59,0.08)] transition-shadow hover:shadow-[0_14px_38px_rgba(55,94,59,0.13)] ${item.className}`}
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white">
                {item.icon}
              </div>
              <h4 className="mb-1 font-bold text-gray-950">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
