'use client';

import React, { useState, useCallback } from 'react';
import { ChevronDown, Filter, X } from 'lucide-react';

export interface FilterState {
  categories: string[];
  priceRange: [number, number];
  onSaleOnly: boolean;
}

interface SidebarProps {
  onFilterChange: (filters: FilterState) => void;
  isOpen: boolean;
  onClose: () => void;
}

const categories = [
  'Local Produce',
  'Fresh Catch',
  'Neighborhood Bakery',
  'Dairy & Eggs',
  'Pantry & Deli',
  'Market Essentials',
];

const priceOptions = [
  { label: 'Under €5', value: [0, 5] as [number, number] },
  { label: '€5 - €10', value: [5, 10] as [number, number] },
  { label: '€10 - €15', value: [10, 15] as [number, number] },
  { label: 'Over €15', value: [15, 100] as [number, number] },
];

export const Sidebar: React.FC<SidebarProps> = ({ onFilterChange, isOpen, onClose }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<[number, number]>([0, 100]);
  const [onSaleOnly, setOnSaleOnly] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    categories: true,
    price: true,
    sale: true,
  });

  const toggleCategory = useCallback((category: string) => {
    setSelectedCategories((prev) => {
      const updated = prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category];
      onFilterChange({
        categories: updated,
        priceRange: selectedPrice,
        onSaleOnly,
      });
      return updated;
    });
  }, [selectedPrice, onSaleOnly, onFilterChange]);

  const togglePrice = useCallback((priceRange: [number, number]) => {
    setSelectedPrice(priceRange);
    onFilterChange({
      categories: selectedCategories,
      priceRange,
      onSaleOnly,
    });
  }, [selectedCategories, onSaleOnly, onFilterChange]);

  const toggleSaleOnly = useCallback(() => {
    const updated = !onSaleOnly;
    setOnSaleOnly(updated);
    onFilterChange({
      categories: selectedCategories,
      priceRange: selectedPrice,
      onSaleOnly: updated,
    });
  }, [selectedCategories, selectedPrice, onFilterChange]);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedPrice([0, 100]);
    setOnSaleOnly(false);
    onFilterChange({
      categories: [],
      priceRange: [0, 100],
      onSaleOnly: false,
    });
  };

  const sidebarContent = (
    <div className="space-y-6">
      {/* Header with close button */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter size={20} className="text-primary-600" />
          <h2 className="text-xl font-bold text-gray-900">Market filters</h2>
        </div>
        <button
          onClick={onClose}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
        >
          <X size={20} />
        </button>
      </div>

      {/* Reset Filters */}
      {(selectedCategories.length > 0 || selectedPrice[0] > 0 || onSaleOnly) && (
        <button
          onClick={resetFilters}
          className="w-full rounded-2xl bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700 transition-colors hover:bg-primary-100"
        >
          Reset Filters
        </button>
      )}

      {/* Categories */}
      <div>
        <button
          onClick={() => toggleSection('categories')}
          className="flex items-center justify-between w-full py-2 font-bold text-gray-900 hover:text-primary-600 transition-colors"
        >
          <span>Neighborhood aisles</span>
          <ChevronDown
            size={20}
            className={`transition-transform ${expandedSections.categories ? 'rotate-180' : ''}`}
          />
        </button>
        {expandedSections.categories && (
          <div className="mt-3 space-y-2 pl-2 border-l-2 border-primary-200">
            {categories.map((category) => (
              <label key={category} className="flex items-center gap-2 cursor-pointer hover:text-primary-600 transition-colors">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => toggleCategory(category)}
                  className="w-4 h-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
                />
                <span className="text-sm text-gray-700">{category}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Range */}
      <div>
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full py-2 font-bold text-gray-900 hover:text-primary-600 transition-colors"
        >
          <span>Price Range</span>
          <ChevronDown
            size={20}
            className={`transition-transform ${expandedSections.price ? 'rotate-180' : ''}`}
          />
        </button>
        {expandedSections.price && (
          <div className="mt-3 space-y-2 pl-2 border-l-2 border-primary-200">
            {priceOptions.map((option) => (
              <label key={option.label} className="flex items-center gap-2 cursor-pointer hover:text-primary-600 transition-colors">
                <input
                  type="radio"
                  name="price"
                  checked={
                    selectedPrice[0] === option.value[0] &&
                    selectedPrice[1] === option.value[1]
                  }
                  onChange={() => togglePrice(option.value)}
                  className="w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500"
                />
                <span className="text-sm text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* On Sale */}
      <div>
        <button
          onClick={() => toggleSection('sale')}
          className="flex items-center justify-between w-full py-2 font-bold text-gray-900 hover:text-primary-600 transition-colors"
        >
          <span>Neighborhood specials</span>
          <ChevronDown
            size={20}
            className={`transition-transform ${expandedSections.sale ? 'rotate-180' : ''}`}
          />
        </button>
        {expandedSections.sale && (
          <div className="mt-3 pl-2 border-l-2 border-primary-200">
            <label className="flex items-center gap-2 cursor-pointer hover:text-primary-600 transition-colors">
              <input
                type="checkbox"
                checked={onSaleOnly}
                onChange={toggleSaleOnly}
                className="w-4 h-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
              />
              <span className="text-sm text-gray-700">Specials only</span>
            </label>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile overlay and drawer */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={onClose}
          />
          <div className="fixed left-0 top-0 z-40 h-full w-64 overflow-y-auto border-r border-white/70 bg-white/[.84] p-6 shadow-2xl backdrop-blur-2xl md:hidden">
            {sidebarContent}
          </div>
        </>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden md:block w-64 rounded-3xl border border-white/70 bg-white/[.78] p-6 shadow-[0_12px_34px_rgba(55,94,59,0.1)] backdrop-blur-2xl sticky top-28 h-fit max-h-[calc(100vh-120px)] overflow-y-auto">
        {sidebarContent}
      </aside>
    </>
  );
};
