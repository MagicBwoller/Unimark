'use client';

import React, { useState, useMemo } from 'react';
import { ProductCard } from './ProductCard';
import { Sidebar, FilterState } from './Sidebar';
import { Menu } from 'lucide-react';
import products from '@/src/data/products.json';

export const ProductGrid: React.FC = () => {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    priceRange: [0, 100],
    onSaleOnly: false,
  });
  const [sortBy, setSortBy] = useState<'popular' | 'price-low' | 'price-high' | 'newest'>('popular');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      // Category filter
      if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
        return false;
      }

      // Price filter
      const productPrice = product.price * (1 - (product.discount || 0) / 100);
      if (productPrice < filters.priceRange[0] || productPrice > filters.priceRange[1]) {
        return false;
      }

      // On sale filter
      if (filters.onSaleOnly && !product.onSale) {
        return false;
      }

      return true;
    });

    // Sort products
    switch (sortBy) {
      case 'price-low':
        return filtered.sort(
          (a, b) => a.price * (1 - (a.discount || 0) / 100) - b.price * (1 - (b.discount || 0) / 100)
        );
      case 'price-high':
        return filtered.sort(
          (a, b) => b.price * (1 - (b.discount || 0) / 100) - a.price * (1 - (a.discount || 0) / 100)
        );
      case 'newest':
        return filtered.reverse();
      case 'popular':
      default:
        return filtered.sort((a, b) => (b.areaPurchases || 0) - (a.areaPurchases || 0));
    }
  }, [filters, sortBy]);

  return (
    <div className="bg-gradient-to-b from-white to-primary-50/70">
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-12">
        <div className="flex items-center justify-between mb-6 gap-4">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-wide text-primary-700">Neighborhood market</p>
            <h2 className="text-3xl font-bold text-gray-950">
              Fresh picks near you {filteredProducts.length > 0 && `(${filteredProducts.length})`}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="rounded-2xl border border-primary-200 bg-white px-4 py-2 text-sm hover:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="popular">Neighbor Favorites</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>

            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden flex items-center gap-2 rounded-2xl bg-primary-700 px-4 py-2 text-white transition-colors hover:bg-primary-800"
            >
              <Menu size={20} />
              <span className="text-sm">Filters</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-6">
          {/* Sidebar */}
          <Sidebar
            onFilterChange={setFilters}
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="rounded-3xl border border-primary-100 bg-white p-12 text-center shadow-[0_12px_34px_rgba(55,94,59,0.1)]">
                <p className="text-xl text-gray-600 mb-4">No products found matching your filters.</p>
                <button
                  onClick={() => setFilters({
                    categories: [],
                    priceRange: [0, 100],
                    onSaleOnly: false,
                  })}
                  className="rounded-2xl bg-primary-700 px-6 py-2 text-white transition-colors hover:bg-primary-800"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    {...product}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
