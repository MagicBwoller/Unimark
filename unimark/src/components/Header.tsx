'use client';

import React, { useEffect, useState } from 'react';
import {
  BadgeCheck,
  ChevronDown,
  Gift,
  Leaf,
  MapPin,
  Recycle,
  Route,
  Search,
  UserRound,
} from 'lucide-react';

interface CategoryItem {
  name: string;
  subcategories?: string[];
}

const categories: CategoryItem[] = [
  {
    name: 'Local Produce',
    subcategories: ['Seasonal Fruit', 'Market Vegetables', 'Microgreens', 'Local Origin Picks'],
  },
  {
    name: 'Dairy & Eggs',
    subcategories: ['Free-Range Eggs', 'Organic Milk', 'Returnable Bottles', 'Morning Staples'],
  },
  {
    name: 'Neighborhood Bakery',
    subcategories: ['Sourdough', 'Breakfast Bread', 'Weekend Pastries', 'Pre-Order Bakes'],
  },
  {
    name: 'Fresh Catch',
    subcategories: ['Salmon', 'Tuna', 'Seafood Specials', 'Weekend Counter'],
  },
  {
    name: 'Pantry & Deli',
    subcategories: ['Olive Oil', 'Coffee', 'Cheese', 'Reusable Jar Goods'],
  },
  {
    name: 'Market Essentials',
    subcategories: ['Weekly Basket', 'Family Dinner', 'Street Delivery Picks', 'Low-Waste Staples'],
  },
];

const getNeighborGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 12) {
    return 'Good morning, neighbor! Ready for your fresh basket?';
  }

  if (hour < 18) {
    return 'Good afternoon, neighbor! Your local picks are waiting.';
  }

  return "Good evening, neighbor! Let us prepare tomorrow's basket.";
};

export const Header: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [greeting, setGreeting] = useState('Hello, neighbor! Your basket starts close to home.');

  useEffect(() => {
    const updateGreeting = () => setGreeting(getNeighborGreeting());

    updateGreeting();
    const interval = window.setInterval(updateGreeting, 60000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/[.82] shadow-[0_10px_30px_rgba(55,94,59,0.1)] backdrop-blur-2xl">
      <div className="hidden border-b border-primary-100/80 bg-primary-50/[.82] backdrop-blur-xl lg:block">
        <div className="mx-auto flex max-w-7xl justify-between px-4 py-2 text-sm text-gray-700">
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary-700" />
              <span>Local Origin tags appear automatically within 50km</span>
            </div>
            <div className="flex items-center gap-2">
              <Route size={16} className="text-primary-700" />
              <span>Deliveries grouped by street</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Recycle size={16} className="text-primary-700" />
            <span>Return empty jars for account credit</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <span className="rounded-2xl bg-primary-700 p-2 text-white">
                <Leaf size={22} />
              </span>
              <div>
                <h1 className="text-2xl font-bold text-primary-800 sm:text-3xl">Unimark</h1>
                <p className="text-xs font-medium text-gray-600">Your Vizinhança fresh market</p>
              </div>
            </div>
          </div>

          <div className="hidden flex-1 justify-center lg:flex">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-gray-800">
              <BadgeCheck size={16} className="text-primary-700" />
              {greeting}
            </div>
          </div>

          <div className="hidden max-w-md flex-1 md:flex lg:max-w-sm">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search local products..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className="w-full rounded-2xl border border-white/80 bg-white/[.62] px-4 py-2 pr-10 text-sm shadow-inner backdrop-blur transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-primary-700" aria-label="Search products">
                <Search size={20} />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button className="hidden items-center gap-2 rounded-2xl border border-primary-200 px-4 py-2 text-primary-800 transition-colors hover:border-primary-600 hover:bg-primary-50 sm:flex">
              <Gift size={18} />
              <span className="hidden text-sm font-semibold md:inline">Offers</span>
            </button>
            <button className="flex items-center gap-2 rounded-2xl bg-primary-700 px-4 py-2 text-white transition-colors hover:bg-primary-800">
              <UserRound size={18} />
              <span className="hidden text-sm font-semibold sm:inline">Account</span>
            </button>
          </div>
        </div>

        <div className="mt-3 lg:hidden">
          <div className="mb-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-amber-50 px-4 py-2 text-center text-sm font-semibold text-gray-800">
            <BadgeCheck size={16} className="text-primary-700" />
            {greeting}
          </div>
          <div className="relative w-full md:hidden">
            <input
              type="text"
              placeholder="Search local products..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="w-full rounded-2xl border border-white/80 bg-white/[.68] px-4 py-2 pr-10 backdrop-blur focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>
      </div>

      <nav className="hidden border-t border-primary-100/80 bg-white/[.70] backdrop-blur-2xl sm:block">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <div
                key={category.name}
                className="relative group"
                onMouseEnter={() => setActiveCategory(category.name)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <button className="flex items-center gap-2 whitespace-nowrap px-4 py-3 font-medium text-gray-700 transition-colors hover:text-primary-700">
                  {category.name}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${activeCategory === category.name ? 'rotate-180' : ''}`}
                  />
                </button>

                <div
                  className={`absolute left-0 top-full overflow-hidden rounded-2xl border border-white/80 bg-white/[.78] shadow-[0_14px_38px_rgba(55,94,59,0.14)] backdrop-blur-2xl transition-all ${
                    activeCategory === category.name
                      ? 'visible translate-y-0 opacity-100'
                      : 'invisible translate-y-2 opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="min-w-max py-2">
                    {category.subcategories?.map((sub) => (
                      <button
                        key={sub}
                        className="block w-full px-4 py-2 text-left text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary-700"
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};
