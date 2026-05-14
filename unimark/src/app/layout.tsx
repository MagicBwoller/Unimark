import type { Metadata, Viewport } from 'next';
import { CartProvider } from '@/src/contexts/CartContext';
import './globals.css';

export const metadata: Metadata = {
  title: 'Unimark - Your Neighborhood Fresh Market',
  description: 'Shop fresh local products, meet neighborhood producers, return empty jars for credit, and receive street-smart delivery from Unimark.',
  keywords: ['Unimark', 'neighborhood grocery', 'local produce', 'fresh delivery', 'jar return'],
  authors: [{ name: 'Unimark Team' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#405f35" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75'>🌿</text></svg>" />
      </head>
      <body className="bg-white text-gray-900">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
