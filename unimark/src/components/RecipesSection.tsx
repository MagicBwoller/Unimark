'use client';

import React from 'react';
import { ChefHat, Clock, Leaf, Users } from 'lucide-react';

interface Recipe {
  id: string;
  name: string;
  description: string;
  servings: string;
  prepTime: string;
  image: string;
  ingredients: string[];
}

const recipes: Recipe[] = [
  {
    id: '1',
    name: 'Valley Tomato Sourdough Toast',
    description: "A bright neighborhood lunch with Maria's heirloom tomatoes, Rua do Forno sourdough, olive oil, and soft cheese.",
    servings: '4 servings',
    prepTime: '15 mins',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=400&fit=crop',
    ingredients: ["Maria's Heirloom Tomato Selection", 'Artisanal Sourdough Bread', 'Creamy Camembert Cheese', 'Valley Grove Extra Virgin Olive Oil', 'Fresh herbs']
  },
  {
    id: '2',
    name: 'Shared-Route Salmon Traybake',
    description: 'A simple dinner built for busy streets: salmon, microgreens, olive oil, and a quick seasonal side from the weekly basket.',
    servings: '2 servings',
    prepTime: '25 mins',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=400&fit=crop',
    ingredients: ['Responsibly Caught Atlantic Salmon', 'Valley Grove Extra Virgin Olive Oil', 'Urban Hydroponic Microgreens', 'Neighborhood Seasonal Fruit Basket', 'Fresh herbs']
  },
  {
    id: '3',
    name: 'Market Morning Berry Bowl',
    description: 'A fresh breakfast bowl with local blueberries, organic milk, and a soft-boiled egg on the side for a fuller morning basket.',
    servings: '2 servings',
    prepTime: '10 mins',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=400&fit=crop',
    ingredients: ['Forest Blueberries', 'Organic Whole Milk', 'Campo Claro Free-Range Eggs', 'Fair-Trade Organic Coffee Beans', 'Seasonal fruit']
  }
];

export const RecipesSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ChefHat className="text-primary-700" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Neighborhood Basket Recipes
            </h2>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Cook from what is already fresh nearby, with recipes that make local baskets, returnable packaging, and neighbor-loved staples easy to use.
          </p>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="overflow-hidden rounded-3xl border border-primary-100 bg-white shadow-[0_12px_34px_rgba(55,94,59,0.1)] transition-shadow hover:shadow-[0_18px_46px_rgba(55,94,59,0.16)]"
            >
              {/* Recipe Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-primary-700 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Leaf size={14} />
                  Basket-friendly
                </div>
              </div>

              {/* Recipe Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{recipe.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {recipe.description}
                </p>

                {/* Recipe Meta Info */}
                <div className="flex gap-4 mb-4 text-xs text-gray-600 font-medium">
                  <span className="inline-flex items-center gap-1"><Clock size={14} /> {recipe.prepTime}</span>
                  <span className="inline-flex items-center gap-1"><Users size={14} /> {recipe.servings}</span>
                </div>

                {/* Ingredients List */}
                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 text-sm mb-2">Key Ingredients:</h4>
                  <ul className="space-y-1">
                    {recipe.ingredients.slice(0, 3).map((ingredient, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                        <span className="text-primary-700 font-bold">•</span>
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Shop Button */}
                <button className="w-full rounded-2xl bg-primary-700 px-4 py-2 font-bold text-white transition-colors hover:bg-primary-800">
                  Shop Ingredients
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Recipes Call-to-Action */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Explore more recipes built from neighborhood baskets and seasonal producer notes
          </p>
          <button className="rounded-2xl bg-primary-700 px-8 py-3 font-bold text-white transition-colors hover:bg-primary-800">
            View All Recipes
          </button>
        </div>
      </div>
    </section>
  );
};
