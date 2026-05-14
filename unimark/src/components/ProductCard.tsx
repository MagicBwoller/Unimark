'use client';

import React, { useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Clock3,
  Leaf,
  MapPin,
  Minus,
  Network,
  Plus,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Users,
  Zap,
} from 'lucide-react';
import { useCart } from '@/src/contexts/CartContext';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  discount?: number;
  image: string;
  weight?: string;
  category: string;
  onSale?: boolean;
  rating?: number;
  reviews?: number;
  stock?: number;
  badge?: string;
  originName?: string;
  originDistanceKm?: number;
  batchNeighborsNeeded?: number;
  batchNeighborsJoined?: number;
  batchDiscountPercent?: number;
  blockchainId?: string;
  originTimeline?: string[];
  mapPin?: {
    x: number;
    y: number;
  };
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  discount = 0,
  image,
  weight,
  category,
  onSale = false,
  rating = 0,
  reviews = 0,
  stock = 10,
  badge,
  originName,
  originDistanceKm,
  batchNeighborsNeeded = 4,
  batchNeighborsJoined = 0,
  batchDiscountPercent = 15,
  blockchainId = 'UM-TRACE-LOCAL',
  originTimeline = ['Harvested at 6 AM', 'Arrived at Unimark at 9 AM', 'Ready for you at 10 AM'],
  mapPin = { x: 50, y: 50 },
}) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  const finalPrice = price * (1 - discount / 100);
  const savings = (price - finalPrice).toFixed(2);
  const isLowStock = stock <= 3;
  const isLocalOrigin = typeof originDistanceKm === 'number' && originDistanceKm <= 50;
  const joinedNeighbors = Math.min(batchNeighborsJoined, batchNeighborsNeeded);
  const batchProgress = Math.min((joinedNeighbors / batchNeighborsNeeded) * 100, 100);

  const handleAddToCart = () => {
    addToCart(
      {
        id,
        name,
        price,
        discount,
        image,
        weight,
      },
      quantity
    );
    setIsAdded(true);
    setQuantity(1);

    window.setTimeout(() => setIsAdded(false), 1800);
  };

  const getBadgeStyles = () => {
    switch (badge) {
      case 'Best Seller':
        return {
          bg: 'bg-amber-500',
          icon: <Zap size={14} />,
          text: 'Neighbor Favorite',
        };
      case 'Eco-Friendly':
        return {
          bg: 'bg-primary-600',
          icon: <Leaf size={14} />,
          text: 'Low-Waste Pick',
        };
      case 'Premium':
        return {
          bg: 'bg-slate-700',
          icon: <Sparkles size={14} />,
          text: 'Special Table',
        };
      default:
        return null;
    }
  };

  const badgeStyles = getBadgeStyles();

  return (
    <div className="group/product relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/70 bg-white/[.82] shadow-[0_18px_55px_rgba(55,94,59,0.14)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(55,94,59,0.2)]">
      {isAdded && (
        <div className="pointer-events-none absolute inset-x-6 top-4 z-20 flex justify-center">
          <div className="animate-cart-orbit rounded-full border border-white/80 bg-primary-700/90 px-4 py-2 text-xs font-bold text-white shadow-xl backdrop-blur">
            Basket saved
          </div>
        </div>
      )}

      <div className="relative flex h-48 w-full items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 to-amber-50 sm:h-56">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover/product:scale-105"
          onError={(event) => {
            (event.target as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=400&fit=crop';
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/30 via-transparent to-transparent" />

        <div className="absolute left-3 top-3 flex max-w-[78%] flex-col gap-2">
          {onSale && (
            <span className="inline-flex w-fit rounded-full bg-primary-700/[.92] px-3 py-1 text-xs font-semibold text-white shadow-sm backdrop-blur">
              Neighborhood Special
            </span>
          )}

          {isLocalOrigin && (
            <span className="inline-flex w-fit items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-primary-800 shadow-sm backdrop-blur">
              <MapPin size={13} />
              Local Origin &bull; {originDistanceKm}km
            </span>
          )}
        </div>

        {discount > 0 && (
          <div className="absolute right-3 top-3 rounded-full bg-rose-500 px-3 py-1 text-sm font-bold text-white shadow-sm">
            -{discount}%
          </div>
        )}

        {badgeStyles && (
          <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-white/[.92] px-3 py-1 text-xs font-semibold text-gray-800 shadow-sm backdrop-blur">
            <span className={`${badgeStyles.bg} rounded-full p-1 text-white`}>{badgeStyles.icon}</span>
            {badgeStyles.text}
          </div>
        )}

        {isLowStock && (
          <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-amber-300 px-3 py-1 text-xs font-bold text-gray-900 shadow-sm">
            <AlertCircle size={14} />
            Only {stock} left
          </div>
        )}
      </div>

      <div className="flex flex-grow flex-col p-5">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-primary-700">
              {category}
            </p>
            <h3 className="font-display text-lg font-bold leading-6 text-gray-950 transition-colors group-hover/product:text-primary-700">
              {name}
            </h3>
          </div>

          <div className="group/trace relative shrink-0">
            <button className="inline-flex items-center gap-1 rounded-full border border-primary-200 bg-white/[.85] px-2.5 py-1.5 text-xs font-bold text-primary-800 shadow-sm backdrop-blur transition-colors hover:bg-primary-50">
              <ShieldCheck size={14} />
              Verified
            </button>
            <div className="pointer-events-none absolute right-0 top-10 z-30 w-72 translate-y-2 rounded-3xl border border-white/70 bg-white/[.92] p-4 text-left opacity-0 shadow-[0_20px_55px_rgba(20,40,25,0.18)] backdrop-blur-2xl transition-all duration-300 group-hover/trace:pointer-events-auto group-hover/trace:translate-y-0 group-hover/trace:opacity-100">
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1 rounded-full bg-primary-700 px-3 py-1 text-xs font-bold text-white">
                  <Network size={13} />
                  Blockchain Verified
                </span>
                <span className="text-[10px] font-bold text-gray-500">{blockchainId}</span>
              </div>

              <div className="relative mb-4 h-24 overflow-hidden rounded-2xl border border-primary-100 bg-gradient-to-br from-primary-50 via-amber-50 to-sky-50">
                <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(90deg,rgba(64,95,53,0.14)_1px,transparent_1px),linear-gradient(rgba(64,95,53,0.14)_1px,transparent_1px)] [background-size:22px_22px]" />
                <span className="absolute left-[18%] top-[62%] h-2 w-2 rounded-full bg-primary-500" />
                <span className="absolute left-[48%] top-[52%] h-3 w-3 rounded-full bg-primary-900 shadow-[0_0_0_8px_rgba(64,95,53,0.12)]" />
                <span
                  className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-rose-500 shadow-[0_0_0_8px_rgba(244,63,94,0.15)]"
                  style={{ left: `${mapPin.x}%`, top: `${mapPin.y}%` }}
                />
              </div>

              <div className="space-y-2">
                {originTimeline.map((event, index) => (
                  <div key={event} className="flex gap-2 text-xs text-gray-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                      {index === originTimeline.length - 1 ? <CheckCircle2 size={12} /> : <Clock3 size={12} />}
                    </span>
                    <span>{event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-3 min-h-[2.25rem]">
          {originName && (
            <p className="text-xs leading-5 text-gray-500">
              From {originName}
            </p>
          )}
          {weight && <p className="text-xs leading-5 text-gray-500">{weight}</p>}
        </div>

        {rating > 0 && (
          <div className="mb-4 flex items-center gap-2">
            <div className="flex text-amber-400" aria-label={`${rating} out of 5 stars`}>
              {[...Array(5)].map((_, index) => (
                <span key={index} className={index < Math.floor(rating) ? 'text-amber-400' : 'text-gray-300'}>
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs text-gray-500">({reviews} neighbors)</span>
          </div>
        )}

        <div className="mb-4 rounded-3xl border border-amber-200 bg-amber-50/80 p-3">
          <div className="mb-2 flex items-start gap-2">
            <span className="rounded-full bg-amber-500 p-1.5 text-white">
              <Users size={15} />
            </span>
            <div>
              <p className="text-sm font-bold text-gray-950">
                Join {batchNeighborsNeeded} neighbors to unlock a {batchDiscountPercent}% discount on this item.
              </p>
              <p className="text-xs text-gray-600">
                Batch buying turns local demand into stronger negotiation power.
              </p>
            </div>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white">
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-500 to-primary-600 transition-all duration-500"
              style={{ width: `${batchProgress}%` }}
            />
          </div>
          <p className="mt-1 text-[11px] font-semibold text-gray-600">
            {joinedNeighbors}/{batchNeighborsNeeded} neighbors joined
          </p>
        </div>

        <div className="mb-4">
          {discount > 0 ? (
            <div>
              <p className="text-xs text-gray-500 line-through">€{price.toFixed(2)}</p>
              <div className="flex flex-wrap items-baseline gap-2">
                <p className="text-xl font-bold text-primary-700">
                  €{finalPrice.toFixed(2)}
                </p>
                <p className="text-xs font-semibold text-primary-700">Save €{savings}</p>
              </div>
            </div>
          ) : (
            <p className="text-xl font-bold text-gray-950">€{price.toFixed(2)}</p>
          )}
        </div>

        <div className="mt-auto flex gap-2">
          <div className="flex items-center rounded-2xl border border-primary-100 bg-primary-50/70 transition-colors hover:border-primary-300">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2 text-gray-600 transition-colors hover:text-primary-700"
              aria-label="Decrease quantity"
            >
              <Minus size={16} />
            </button>
            <span className="w-8 text-center font-semibold text-gray-900">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-2 text-gray-600 transition-colors hover:text-primary-700"
              aria-label="Increase quantity"
            >
              <Plus size={16} />
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={stock === 0}
            className={`relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-2xl px-3 py-2 font-semibold transition-all duration-300 ${
              isAdded
                ? 'animate-basket-pop bg-primary-500 text-white'
                : stock === 0
                  ? 'cursor-not-allowed bg-gray-200 text-gray-500'
                  : 'bg-primary-700 text-white hover:bg-primary-800'
            }`}
          >
            {isAdded && <span className="absolute inset-0 animate-soft-shimmer bg-white/20" />}
            <ShoppingCart size={18} />
            <span className="hidden sm:inline">
              {stock === 0 ? 'Out of Stock' : isAdded ? 'Added' : 'Add'}
            </span>
            <span className="sm:hidden">{isAdded ? '✓' : stock === 0 ? 'x' : '+'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
