'use client';

import React, { useState } from 'react';
import { Header } from '@/src/components/Header';
import { ProductGrid } from '@/src/components/ProductGrid';
import { CartDrawer } from '@/src/components/CartDrawer';
import { WeeklyFlyer } from '@/src/components/WeeklyFlyer';
import { PromotionalBanner } from '@/src/components/PromotionalBanner';
import { RecipesSection } from '@/src/components/RecipesSection';
import {
  AIConciergeBubble,
  CommunityServices,
  FloatingMerchantChat,
  InteractiveNeighborhoodMap,
  MeetLocalProducer,
  NeighborsFavoritesCarousel,
} from '@/src/components/NeighborhoodSections';
import { useCart } from '@/src/contexts/CartContext';
import products from '@/src/data/products.json';
import { BadgeCheck, HandHeart, Recycle, Route, ShoppingCart, Sparkles, Wand2 } from 'lucide-react';

export default function Home() {
  const { cart, addToCart, setIsCartOpen } = useCart();
  const [usualAdded, setUsualAdded] = useState(false);

  const addProductByName = (productName: string, quantity = 1) => {
    const product = products.find((item) => item.name === productName);

    if (!product) return;

    addToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        discount: product.discount,
        image: product.image,
        weight: product.weight,
      },
      quantity
    );
  };

  const bringUsualBasket = () => {
    [
      ['Artisanal Sourdough Bread', 1],
      ['Campo Claro Free-Range Eggs', 1],
      ['Organic Whole Milk', 2],
      ["Maria's Heirloom Tomato Selection", 1],
    ].forEach(([productName, quantity]) => addProductByName(productName as string, quantity as number));

    setUsualAdded(true);
    setIsCartOpen(true);
    window.setTimeout(() => setUsualAdded(false), 2200);
  };

  const reserveSourdough = () => {
    addProductByName('Artisanal Sourdough Bread', 1);
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-24 right-6 z-30 rounded-full bg-primary-700 p-4 text-white shadow-[0_14px_34px_rgba(55,94,59,0.28)] transition-all duration-200 hover:scale-105 hover:bg-primary-800 lg:hidden"
        aria-label={`Shopping cart with ${cart.totalItems} items`}
      >
        <div className="relative">
          <ShoppingCart size={24} />
          {cart.totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
              {cart.totalItems}
            </span>
          )}
        </div>
      </button>
      <FloatingMerchantChat />

      <CartDrawer />

      <main>
        <section className="relative overflow-hidden bg-primary-900 py-16 text-white md:py-20">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600&h=900&fit=crop"
            alt="Fresh neighborhood market produce"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/80 to-primary-800/40" />
          <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 lg:grid-cols-[1fr_430px] lg:items-end">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                <HandHeart size={18} />
                Built around Vizinhança
              </div>
              <h1 className="font-display mb-4 text-5xl font-bold md:text-7xl">
                Unimark, the living neighborhood market
              </h1>
              <p className="mb-8 max-w-3xl text-lg leading-8 text-white/90 md:text-xl">
                A community commerce platform where AI freshness alerts, batch-buying negotiation, verified origins, street-grouped delivery, and returnable packaging turn the weekly shop into a shared neighborhood advantage.
              </p>

              <div className="mb-8 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  { value: 'AI', label: 'freshness concierge' },
                  { value: '15%', label: 'batch discount simulation' },
                  { value: 'Ledger', label: 'verified origin timeline' },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-white/80">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={bringUsualBasket}
                  className={`inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-bold text-primary-800 transition-all hover:bg-primary-50 ${usualAdded ? 'animate-basket-pop' : ''}`}
                >
                  <Wand2 size={20} />
                  {usualAdded ? 'Usual added' : 'Bring me the usual'}
                </button>
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="rounded-2xl border-2 border-white px-6 py-3 font-bold text-white transition-colors hover:bg-white/10"
                >
                  Build a Custom Basket
                </button>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/20 bg-white/[.12] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.2)] backdrop-blur-2xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-2xl bg-white p-3 text-primary-800">
                  <Sparkles size={24} />
                </div>
                <div>
                  <p className="font-bold">Returning neighbor profile</p>
                  <p className="text-sm text-white/70">Simulated loyalty intelligence</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  ['Usual basket', 'Sourdough, eggs, milk, tomatoes'],
                  ['Preferred route', 'Rua Verde evening batch'],
                  ['Next credit', '2 glass jars ready to return'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/[.15] bg-white/[.10] p-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-white/60">{label}</p>
                    <p className="font-semibold text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <AIConciergeBubble onReserveSourdough={reserveSourdough} />

        <section className="border-b border-primary-100 bg-primary-50 py-8 md:py-12">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <BadgeCheck size={28} />,
                  title: 'Local by Default',
                  desc: 'Products under 50km receive an automatic Local Origin tag.',
                },
                {
                  icon: <HandHeart size={28} />,
                  title: 'Producer Stories',
                  desc: 'Meet the growers and makers behind your monthly basket.',
                },
                {
                  icon: <Route size={28} />,
                  title: 'Street-Smart Delivery',
                  desc: 'Orders are grouped by street to reduce unnecessary trips.',
                },
                {
                  icon: <Recycle size={28} />,
                  title: 'Jar Credit',
                  desc: 'Return empty glass packaging and receive account credit.',
                },
              ].map((feature, idx) => (
                <div key={idx} className="rounded-3xl bg-white p-6 text-center shadow-[0_10px_30px_rgba(55,94,59,0.09)]">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-700 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="mb-1 font-bold text-gray-950">{feature.title}</h3>
                  <p className="text-sm leading-6 text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <MeetLocalProducer />
        <InteractiveNeighborhoodMap />
        <NeighborsFavoritesCarousel />
        <WeeklyFlyer />
        <PromotionalBanner />
        <ProductGrid />
        <CommunityServices />
        <RecipesSection />
      </main>

      <footer className="bg-gray-950 py-12 text-gray-300 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Our Neighborhood',
                links: ['Producer Stories', 'Local Origin Promise', 'Street Delivery', 'Jar Return Credit'],
              },
              {
                title: 'Customer Care',
                links: ['Contact Your Grocer', 'FAQ', 'Delivery Windows', 'Returns'],
              },
              {
                title: 'Policies',
                links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility'],
              },
              {
                title: 'Connect',
                links: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn'],
              },
            ].map((section, idx) => (
              <div key={idx}>
                <h4 className="font-bold text-white mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a href="#" className="hover:text-primary-400 transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div>
                <p className="text-sm">
                  © 2024 Unimark. Your Vizinhança fresh market.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="text-sm">Accepted payments: Card, bank transfer, and mobile wallet</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
