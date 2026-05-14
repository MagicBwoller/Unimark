'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Leaf, Truck, Package, UtensilsCrossed } from 'lucide-react';

interface CarouselSlide {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    title: 'Farm Selection',
    description: 'We partner with certified sustainable farms globally, ensuring ethical practices and premium quality from the source.',
    icon: <Leaf className="w-12 h-12" />,
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 2,
    title: 'Careful Harvesting',
    description: 'Our expert teams hand-select only the finest products at peak ripeness and quality, respecting harvest cycles.',
    icon: <Package className="w-12 h-12" />,
    color: 'from-emerald-500 to-teal-600'
  },
  {
    id: 3,
    title: 'Premium Packaging',
    description: 'Eco-friendly, temperature-controlled packaging ensures your products arrive in pristine condition.',
    icon: <Truck className="w-12 h-12" />,
    color: 'from-teal-500 to-cyan-600'
  },
  {
    id: 4,
    title: 'Your Table',
    description: 'Fresh, premium, globally sourced - every product tells a story of excellence and sustainability.',
    icon: <UtensilsCrossed className="w-12 h-12" />,
    color: 'from-cyan-500 to-blue-600'
  }
];

export const FarmToTableCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const goToSlide = (index: number) => {
    setCurrent(index);
    setAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoPlay(false);
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Farm to Table Excellence
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our commitment to sustainability and quality through every step of our supply chain
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Slides Container */}
          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === current ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className={`h-full bg-gradient-to-br ${slide.color} flex flex-col items-center justify-center text-white p-8`}>
                  <div className="mb-6">{slide.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">{slide.title}</h3>
                  <p className="text-center text-white text-opacity-95 max-w-md text-lg">
                    {slide.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 text-emerald-600 p-2 rounded-full shadow-lg transition-all transform hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 text-emerald-600 p-2 rounded-full shadow-lg transition-all transform hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === current
                    ? 'bg-emerald-600 w-8 h-3'
                    : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { label: 'Global Farms', value: '150+' },
            { label: 'Certified Organic', value: '95%' },
            { label: 'Carbon Neutral', value: '100%' },
            { label: 'Fair Trade', value: '85%' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 text-center shadow-md border border-emerald-100">
              <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
