'use client';

import React from 'react';
import { Minus, PackageCheck, Plus, ShoppingCart, Sparkles, Trash2, X } from 'lucide-react';
import { useCart } from '@/src/contexts/CartContext';

export const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, clearCart } = useCart();

  const handleCheckout = () => {
    alert('Checkout simulation: your neighborly route, batch discounts, and jar credits are ready for confirmation.');
  };

  return (
    <>
      {isCartOpen && (
        <div
          className="fixed inset-0 z-40 bg-primary-900/[.45] backdrop-blur-md transition-opacity"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      <div
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-md overflow-y-auto border-l border-white/60 bg-white/[.82] shadow-[0_30px_100px_rgba(20,40,25,0.28)] backdrop-blur-2xl transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/70 bg-white/[.70] p-5 backdrop-blur-2xl">
          <div className="flex items-center gap-3">
            <span className="rounded-2xl bg-primary-700 p-2 text-white shadow-lg">
              <ShoppingCart size={24} />
            </span>
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-950">Your Basket</h2>
              <p className="text-xs font-semibold text-primary-700">
                {cart.totalItems} items on the neighborhood route
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="rounded-2xl p-2 text-gray-600 transition-colors hover:bg-white"
            aria-label="Close cart"
          >
            <X size={24} />
          </button>
        </div>

        {cart.items.length === 0 ? (
          <div className="flex h-96 flex-col items-center justify-center p-6 text-center">
            <div className="mb-5 rounded-[2rem] bg-primary-50 p-5 text-primary-700">
              <ShoppingCart size={48} />
            </div>
            <p className="font-display mb-2 text-2xl font-bold text-gray-950">Your basket is empty</p>
            <p className="mb-6 text-sm leading-6 text-gray-600">
              Start with your usual, or ask The Neighbor what came in fresh today.
            </p>
            <button
              onClick={() => setIsCartOpen(false)}
              className="rounded-2xl bg-primary-700 px-6 py-3 font-bold text-white transition-colors hover:bg-primary-800"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="space-y-4 p-4">
              <div className="rounded-3xl border border-primary-100 bg-primary-50/[.76] p-4">
                <div className="flex items-start gap-3">
                  <span className="rounded-2xl bg-primary-700 p-2 text-white">
                    <Sparkles size={18} />
                  </span>
                  <div>
                    <p className="font-bold text-gray-950">Route intelligence applied</p>
                    <p className="text-sm leading-6 text-gray-600">
                      This basket is simulated for grouped street delivery, jar-return credit, and batch-buying savings.
                    </p>
                  </div>
                </div>
              </div>

              {cart.items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 rounded-3xl border border-white/75 bg-white/[.74] p-3 shadow-[0_12px_34px_rgba(55,94,59,0.08)] backdrop-blur-xl transition-colors hover:border-primary-200"
                >
                  <div className="h-[72px] w-[72px] flex-shrink-0 overflow-hidden rounded-2xl bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="line-clamp-2 text-sm font-bold text-gray-950">
                      {item.name}
                    </h3>
                    {item.weight && (
                      <p className="mt-1 text-xs text-gray-500">{item.weight}</p>
                    )}
                    <div className="mt-2 flex items-center justify-between">
                      <span className="font-bold text-primary-700">
                        €{(item.price * (1 - (item.discount || 0) / 100)).toFixed(2)}
                      </span>
                      <span className="rounded-full bg-primary-50 px-2 py-1 text-xs font-bold text-primary-700">
                        x{item.quantity}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center rounded-2xl border border-primary-100 bg-white">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1.5 text-gray-600 hover:text-primary-700"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1.5 text-gray-600 hover:text-primary-700"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="rounded-xl p-1.5 text-rose-500 transition-colors hover:bg-rose-50"
                      aria-label="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="sticky bottom-0 space-y-3 border-t border-white/70 bg-white/[.76] p-4 shadow-[0_-18px_45px_rgba(55,94,59,0.08)] backdrop-blur-2xl">
              <div className="rounded-3xl border border-primary-100 bg-primary-50/[.78] p-4">
                <div className="mb-2 flex items-center gap-2 text-primary-800">
                  <PackageCheck size={18} />
                  <span className="text-sm font-bold">Simulated loyalty benefits</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                  <span>Batch-buying: pending</span>
                  <span>Jar credit: €1.20</span>
                  <span>Route: Rua Verde</span>
                  <span>ETA: tonight</span>
                </div>
              </div>

              <div className="flex justify-between text-gray-700">
                <span>Subtotal</span>
                <span>€{cart.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Tax (23%)</span>
                <span>€{cart.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t border-primary-100 pt-3 text-lg font-bold text-gray-950">
                <span>Total</span>
                <span className="text-primary-700">€{cart.total.toFixed(2)}</span>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  onClick={handleCheckout}
                  className="w-full rounded-2xl bg-primary-700 py-3 font-bold text-white transition-colors hover:bg-primary-800"
                >
                  Confirm Neighborly Checkout
                </button>
                <button
                  onClick={clearCart}
                  className="w-full rounded-2xl border border-rose-200 py-2 font-semibold text-rose-600 transition-colors hover:bg-rose-50"
                >
                  Clear Basket
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
