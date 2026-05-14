'use client';

import React from 'react';
import { Download, Sparkles } from 'lucide-react';

export const WeeklyFlyer: React.FC = () => {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Sparkles size={32} />
              <h2 className="text-3xl md:text-4xl font-bold">This Week on Your Street</h2>
            </div>
            <p className="text-lg opacity-95 mb-6">
              A digital flyer shaped by nearby baskets, local harvest timing, and the items your neighbors keep adding before delivery day.
            </p>
            <ul className="space-y-3 mb-8 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Fresh local specials updated every week
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Basket bundles based on neighborhood demand
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Returnable packaging and route-friendly picks highlighted
              </li>
            </ul>
            <button className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-3 font-bold text-primary-800 transition-colors hover:bg-primary-50">
              <Download size={20} />
              View Neighborhood Flyer
            </button>
          </div>

          <div className="relative hidden md:block">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <div className="space-y-4">
                <div className="h-32 bg-white bg-opacity-10 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white mb-2">Local Picks</p>
                    <p className="text-sm opacity-90">Updated from nearby basket activity</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white bg-opacity-5 rounded-lg p-4 text-center border border-white border-opacity-10">
                    <p className="text-3xl font-bold mb-2">18</p>
                    <p className="text-xs opacity-75">Local producers</p>
                  </div>
                  <div className="bg-white bg-opacity-5 rounded-lg p-4 text-center border border-white border-opacity-10">
                    <p className="text-3xl font-bold mb-2">50km</p>
                    <p className="text-xs opacity-75">Origin tag radius</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
