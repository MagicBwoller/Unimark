'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  HandHeart,
  MapPin,
  MessageCircle,
  PackageCheck,
  Recycle,
  Route,
  ShoppingBasket,
  Star,
} from 'lucide-react';
import products from '@/src/data/products.json';

const producers = [
  {
    name: 'Ana Martins',
    role: 'Free-range egg producer',
    location: 'Campo Claro Farm',
    distanceKm: 24,
    specialty: 'Heritage eggs packed in reusable trays',
    quote: 'Neighbors tell us when the yolks remind them of breakfast at their grandparents house. That keeps us careful.',
    image: 'https://images.unsplash.com/photo-1492496913980-501348b61469?w=900&h=700&fit=crop',
  },
  {
    name: 'Maria Lopes',
    role: 'Heirloom tomato grower',
    location: 'Horta da Maria',
    distanceKm: 12,
    specialty: 'Colorful tomatoes harvested at sunrise',
    quote: 'I pick for flavor first, because the best tomato is the one you want to eat before it reaches the salad.',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=900&h=700&fit=crop',
  },
  {
    name: 'Lucas Pereira',
    role: 'Neighborhood baker',
    location: 'Rua do Forno Bakery',
    distanceKm: 3,
    specialty: 'Slow-fermented sourdough baked daily',
    quote: 'The route is short enough that people still receive the bread with a crisp crust. That is the whole point.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900&h=700&fit=crop',
  },
  {
    name: 'Rita Carvalho',
    role: 'Regional berry grower',
    location: 'Pinhal Berry Farm',
    distanceKm: 39,
    specialty: 'Blueberries for breakfast baskets',
    quote: 'Small harvests make better berries. Unimark helps us send them where they will be eaten quickly.',
    image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=900&h=700&fit=crop',
  },
  {
    name: 'Farmer John',
    role: 'Nearby valley grower',
    location: 'Quinta da Encosta',
    distanceKm: 18,
    specialty: 'Seasonal fruit baskets from the valley',
    quote: 'When the valley has a generous week, your baskets should feel generous too.',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=900&h=700&fit=crop',
  },
];

export const MeetLocalProducer: React.FC = () => {
  const [producer, setProducer] = useState(producers[0]);
  const [monthLabel, setMonthLabel] = useState('This month');

  useEffect(() => {
    const today = new Date();
    setProducer(producers[today.getMonth() % producers.length]);
    setMonthLabel(new Intl.DateTimeFormat('en', { month: 'long' }).format(today));
  }, []);

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-800">
            <HandHeart size={18} />
            Producer of the Month &bull; {monthLabel}
          </div>
          <h2 className="mb-4 text-3xl font-bold text-gray-950 md:text-4xl">
            Meet your local producer
          </h2>
          <p className="mb-6 max-w-2xl text-lg leading-8 text-gray-600">
            This month, Unimark highlights {producer.name} from {producer.location}. The selection updates with the calendar, so the face behind your basket changes as the neighborhood harvest changes.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { label: 'Distance', value: `${producer.distanceKm}km away` },
              { label: 'Specialty', value: producer.specialty },
              { label: 'Automation', value: 'Local origin checked under 50km' },
            ].map((item) => (
              <div key={item.label} className="rounded-3xl border border-primary-100 bg-primary-50/60 p-5 shadow-[0_10px_30px_rgba(55,94,59,0.08)]">
                <p className="mb-1 text-xs font-bold uppercase tracking-wide text-primary-700">{item.label}</p>
                <p className="text-sm font-semibold leading-6 text-gray-900">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-primary-100 bg-primary-900 shadow-[0_18px_50px_rgba(55,94,59,0.2)]">
          <div className="relative h-72 overflow-hidden sm:h-96">
            <img
              src={producer.image}
              alt={`${producer.name} at ${producer.location}`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/75 via-gray-950/[.15] to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                <MapPin size={14} />
                {producer.distanceKm}km from your area
              </p>
              <h3 className="text-2xl font-bold">{producer.name}</h3>
              <p className="font-medium text-white/90">{producer.role}</p>
              <p className="mt-3 text-sm leading-6 text-white/90">&ldquo;{producer.quote}&rdquo;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const NeighborsFavoritesCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const favorites = useMemo(
    () =>
      [...products]
        .sort((first, second) => second.areaPurchases - first.areaPurchases)
        .slice(0, 8),
    []
  );

  const scrollFavorites = (direction: 'previous' | 'next') => {
    carouselRef.current?.scrollBy({
      left: direction === 'next' ? 340 : -340,
      behavior: 'smooth',
    });
  };

  return (
    <section className="bg-gradient-to-b from-primary-50 to-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary-800 shadow-sm">
              <ShoppingBasket size={18} />
              Automatically ranked near you
            </div>
            <h2 className="text-3xl font-bold text-gray-950 md:text-4xl">Neighbor&apos;s Favorites</h2>
            <p className="mt-3 max-w-2xl text-gray-600">
              The carousel refreshes from the most purchased items in your area, helping every basket feel a little more trusted before it reaches your door.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => scrollFavorites('previous')}
              className="rounded-full border border-primary-200 bg-white p-3 text-primary-800 shadow-sm transition-colors hover:bg-primary-100"
              aria-label="Show previous neighbor favorites"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={() => scrollFavorites('next')}
              className="rounded-full border border-primary-200 bg-white p-3 text-primary-800 shadow-sm transition-colors hover:bg-primary-100"
              aria-label="Show next neighbor favorites"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="-mx-4 flex snap-x gap-5 overflow-x-auto px-4 pb-4 [scrollbar-width:thin]"
        >
          {favorites.map((product, index) => {
            const isLocalOrigin = product.originDistanceKm <= 50;

            return (
              <article
                key={product.id}
                className="min-w-[280px] snap-start overflow-hidden rounded-3xl border border-primary-100 bg-white shadow-[0_14px_38px_rgba(55,94,59,0.12)] sm:min-w-[330px]"
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                  <div className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-bold text-primary-800 shadow-sm">
                    #{index + 1} in your area
                  </div>
                  {isLocalOrigin && (
                    <div className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-primary-700 px-3 py-1 text-xs font-bold text-white shadow-sm">
                      <MapPin size={13} />
                      Local Origin
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="mb-3 flex items-center gap-2 text-amber-500">
                    <Star size={18} fill="currentColor" />
                    <span className="text-sm font-bold text-gray-900">{product.rating.toFixed(1)}</span>
                    <span className="text-sm text-gray-500">from {product.reviews} reviews</span>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-950">{product.name}</h3>
                  <p className="mb-4 text-sm leading-6 text-gray-600">
                    Ordered {product.areaPurchases} times nearby this week.
                  </p>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xl font-bold text-primary-800">€{product.price.toFixed(2)}</span>
                    <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-800">
                      {product.category}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const CommunityServices: React.FC = () => {
  const services = [
    {
      icon: <Recycle size={28} />,
      title: 'Empty Jar Return',
      badge: 'Credit applied automatically',
      description:
        'Leave clean glass jars and bottles with your next delivery. Your merchant scans the return, confirms pickup, and credits your account for the next basket.',
    },
    {
      icon: <Route size={28} />,
      title: 'Neighborly Delivery',
      badge: 'Grouped by street',
      description:
        'Unimark groups nearby orders onto the same route, reducing repeated trips while giving your street a predictable fresh-basket window.',
    },
  ];

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-800">
            <BadgeCheck size={18} />
            Community services
          </div>
          <h2 className="text-3xl font-bold text-gray-950 md:text-4xl">Helpful habits for the whole neighborhood</h2>
          <p className="mt-3 text-gray-600">
            Vizinhança means making the small routines easier: less packaging waste, smarter delivery routes, and clearer credit for every return.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[2rem] border border-primary-100 bg-gradient-to-br from-primary-50 to-white p-6 shadow-[0_14px_38px_rgba(55,94,59,0.1)]"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="rounded-2xl bg-primary-700 p-3 text-white">{service.icon}</div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-bold text-primary-800 shadow-sm">
                  <PackageCheck size={14} />
                  {service.badge}
                </span>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-gray-950">{service.title}</h3>
              <p className="leading-7 text-gray-600">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

interface AIConciergeBubbleProps {
  onReserveSourdough: () => void;
}

export const AIConciergeBubble: React.FC<AIConciergeBubbleProps> = ({ onReserveSourdough }) => {
  const sourdough = products.find((product) => product.name.includes('Sourdough'));
  const signals = [
    sourdough?.aiSignal || 'Hey! The sourdough bread just came out of the oven 5 mins ago. Want me to save you one?',
    'Your usual basket is trending again: eggs, milk, tomatoes, and sourdough. I can rebuild it in one click.',
    'Four nearby households are close to unlocking a batch discount on tomatoes. Want to join them?',
  ];
  const [signalIndex, setSignalIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSignalIndex((current) => (current + 1) % signals.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, [signals.length]);

  return (
    <section className="relative bg-gradient-to-b from-primary-900 to-primary-800 py-10 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur-xl">
            <MessageCircle size={18} />
            AI Concierge: The Neighbor
          </p>
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Not a chatbot. A merchant who remembers the street.
          </h2>
          <p className="mt-3 max-w-xl leading-7 text-white/[.78]">
            The Neighbor simulates freshness alerts, loyalty memory, batch-buying nudges, and producer context without making the store feel impersonal.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/20 bg-white/[.12] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.18)] backdrop-blur-2xl">
          <div className="mb-4 flex items-center gap-3">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary-800">
              <MessageCircle size={24} />
              <span className="absolute -right-1 -top-1 h-3 w-3 animate-pulse rounded-full bg-emerald-400" />
            </div>
            <div>
              <p className="font-bold">The Neighbor</p>
              <p className="text-sm text-white/70">Freshness-aware AI concierge</p>
            </div>
          </div>

          <div className="animate-float-soft rounded-[1.5rem] border border-white/[.15] bg-white/[.16] p-5 text-lg leading-8 shadow-inner backdrop-blur-xl">
            {signals[signalIndex]}
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              onClick={onReserveSourdough}
              className="rounded-2xl bg-white px-5 py-3 font-bold text-primary-800 transition-transform hover:scale-105"
            >
              Save the sourdough
            </button>
            <button className="rounded-2xl border border-white/30 px-5 py-3 font-bold text-white transition-colors hover:bg-white/10">
              Ask what is freshest
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const InteractiveNeighborhoodMap: React.FC = () => {
  const freshPicks = products.filter((product) => product.freshPick && product.mapPin).slice(0, 8);

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-800">
            <MapPin size={18} />
            Interactive neighborhood map
          </div>
          <h2 className="font-display text-3xl font-bold text-gray-950 md:text-4xl">
            See where today&apos;s fresh picks begin.
          </h2>
          <p className="mt-4 max-w-xl leading-7 text-gray-600">
            Pins show the simulated local flow behind the basket: farms, bakeries, dairies, and Unimark&apos;s market hub stitched into one transparent route.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {freshPicks.slice(0, 4).map((product) => (
              <div key={product.id} className="rounded-3xl border border-primary-100 bg-primary-50/70 p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-primary-700">{product.originDistanceKm}km away</p>
                <p className="font-bold text-gray-950">{product.originName}</p>
                <p className="text-sm text-gray-600">{product.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2.25rem] border border-white/70 bg-primary-900 p-4 shadow-[0_28px_80px_rgba(55,94,59,0.22)]">
          <div className="relative h-[430px] overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-primary-100 via-amber-50 to-sky-100">
            <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(90deg,rgba(64,95,53,0.16)_1px,transparent_1px),linear-gradient(rgba(64,95,53,0.16)_1px,transparent_1px)] [background-size:34px_34px]" />
            <div className="absolute left-[48%] top-[49%] h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-700/10" />
            <div className="absolute left-[48%] top-[49%] flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-primary-800 text-white shadow-[0_16px_40px_rgba(55,94,59,0.35)]">
              <ShoppingBasket size={24} />
            </div>

            {freshPicks.map((product, index) => (
              <div
                key={product.id}
                className="group/map-pin absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${product.mapPin.x}%`, top: `${product.mapPin.y}%` }}
              >
                <div className="relative">
                  <span className="absolute inset-0 animate-map-pulse rounded-full bg-rose-400/30" />
                  <span className="relative flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-rose-500 shadow-lg" />
                </div>
                <div className="pointer-events-none absolute left-1/2 top-6 z-20 w-48 -translate-x-1/2 translate-y-2 rounded-2xl border border-white/80 bg-white/[.92] p-3 text-center opacity-0 shadow-xl backdrop-blur-xl transition-all group-hover/map-pin:translate-y-0 group-hover/map-pin:opacity-100">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-primary-700">Fresh pick #{index + 1}</p>
                  <p className="text-sm font-bold text-gray-950">{product.name}</p>
                  <p className="text-xs text-gray-600">{product.originName}</p>
                </div>
              </div>
            ))}

            <div className="absolute bottom-4 left-4 right-4 rounded-3xl border border-white/70 bg-white/[.78] p-4 backdrop-blur-2xl">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-primary-700">Fresh Picks of the Day</p>
                  <p className="font-display text-xl font-bold text-gray-950">{freshPicks.length} verified origins feeding today&apos;s baskets</p>
                </div>
                <span className="rounded-full bg-primary-800 px-4 py-2 text-sm font-bold text-white">
                  Live route simulation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FloatingMerchantChat: React.FC = () => {
  return (
    <a
      href="https://wa.me/351912345678?text=Hello%20Unimark%2C%20I%27d%20like%20to%20ask%20my%20neighborly%20grocer%20about%20today%27s%20basket."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-5 z-40 flex max-w-[calc(100vw-2rem)] items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 font-bold text-white shadow-[0_14px_34px_rgba(37,211,102,0.35)] transition-transform hover:scale-105 sm:right-6"
      aria-label="Ask your Neighborly Grocer on WhatsApp"
    >
      <MessageCircle size={22} />
      <span>Ask your Neighborly Grocer</span>
    </a>
  );
};
