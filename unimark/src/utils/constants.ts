// Application constants

// Brand Colors
export const COLORS = {
  PRIMARY: '#008751', // Deep Emerald
  PRIMARY_DARK: '#006840',
  PRIMARY_LIGHT: '#4ade80',
  SECONDARY: '#f0fdf4', // Mint
  ACCENT_DARK: '#1a3a3a',
  ERROR: '#ef4444',
  SUCCESS: '#22c55e',
  WARNING: '#eab308',
  INFO: '#0ea5e9',
} as const;

// Tax Configuration
export const TAX_RATE = 0.23; // 23% VAT for Portugal
export const CURRENCY = 'EUR';
export const CURRENCY_SYMBOL = '€';

// Shipping
export const FREE_SHIPPING_THRESHOLD = 50; // Free shipping on orders over €50
export const STANDARD_SHIPPING_COST = 4.99;
export const EXPRESS_SHIPPING_COST = 9.99;
export const STANDARD_DELIVERY_DAYS = 3;
export const EXPRESS_DELIVERY_DAYS = 1;

// Pagination
export const ITEMS_PER_PAGE = 12;
export const ITEMS_PER_PAGE_MOBILE = 6;

// API Endpoints (Mock)
export const API_ENDPOINTS = {
  PRODUCTS: '/api/products',
  CATEGORIES: '/api/categories',
  CHECKOUT: '/api/checkout',
  ORDERS: '/api/orders',
  USER: '/api/user',
} as const;

// Product Categories
export const CATEGORIES = [
  'Organic & Bio',
  'Fresh Catch',
  'International Deli',
  'Export Bundles',
  'Market Essentials',
] as const;

// Price Ranges
export const PRICE_RANGES = [
  { label: 'Under €5', min: 0, max: 5 },
  { label: '€5 - €10', min: 5, max: 10 },
  { label: '€10 - €15', min: 10, max: 15 },
  { label: 'Over €15', min: 15, max: 1000 },
] as const;

// Sorting Options
export const SORT_OPTIONS = [
  { value: 'popular', label: 'Most Popular' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' },
] as const;

// Cart Messages
export const MESSAGES = {
  ITEM_ADDED: 'Product added to cart!',
  ITEM_REMOVED: 'Product removed from cart',
  CART_CLEARED: 'Cart has been cleared',
  CHECKOUT_SUCCESS: 'Order placed successfully!',
  CHECKOUT_ERROR: 'An error occurred during checkout',
  LOADING: 'Loading...',
  EMPTY_CART: 'Your cart is empty. Start shopping!',
  FILTER_APPLIED: 'Filters applied',
  NO_RESULTS: 'No products found matching your criteria',
} as const;

// Validation Rules
export const VALIDATION = {
  MIN_QUANTITY: 1,
  MAX_QUANTITY: 999,
  MIN_PASSWORD_LENGTH: 8,
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^[\d\s\-\+\(\)]+$/,
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  CART: 'freshmarkets_cart',
  USER: 'freshmarkets_user',
  PREFERENCES: 'freshmarkets_preferences',
  RECENT_SEARCHES: 'freshmarkets_recent_searches',
} as const;

// Animation Durations (ms)
export const ANIMATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
  VERY_SLOW: 1000,
} as const;

// Responsive Breakpoints (px)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  XXL: 1536,
} as const;

// Feature Flags
export const FEATURES = {
  ENABLE_WISHLISTS: false,
  ENABLE_REVIEWS: true,
  ENABLE_LIVE_CHAT: false,
  ENABLE_LOYALTY_PROGRAM: false,
  ENABLE_GIFT_CARDS: false,
} as const;

// Discount Tiers
export const DISCOUNT_TIERS = {
  NO_DISCOUNT: 0,
  SMALL: 10,
  MEDIUM: 25,
  LARGE: 50,
  HUGE: 75,
} as const;

// Performance Thresholds
export const PERFORMANCE = {
  LARGE_LIST_THRESHOLD: 100, // For virtualization
  IMAGE_LAZY_LOAD_OFFSET: 50, // px
  DEBOUNCE_DELAY: 300, // ms
  SEARCH_MIN_CHARS: 2,
} as const;

// Default Filters
export const DEFAULT_FILTERS = {
  categories: [] as string[],
  priceRange: [0, 100] as [number, number],
  onSaleOnly: false,
} as const;

// Error Codes
export const ERROR_CODES = {
  NOT_FOUND: 'NOT_FOUND',
  INVALID_INPUT: 'INVALID_INPUT',
  UNAUTHORIZED: 'UNAUTHORIZED',
  SERVER_ERROR: 'SERVER_ERROR',
  NETWORK_ERROR: 'NETWORK_ERROR',
} as const;

// Social Media Links
export const SOCIAL_MEDIA = {
  FACEBOOK: 'https://facebook.com/freshmarkets',
  INSTAGRAM: 'https://instagram.com/freshmarkets',
  TWITTER: 'https://twitter.com/freshmarkets',
  LINKEDIN: 'https://linkedin.com/company/freshmarkets',
} as const;

// Contact Information
export const CONTACT_INFO = {
  EMAIL: 'support@freshmarkets.pt',
  PHONE: '+351 XXX XXX XXX',
  ADDRESS: '123 Green Street, Lisbon, Portugal',
} as const;

// Business Hours (in 24-hour format)
export const BUSINESS_HOURS = {
  MONDAY_TO_FRIDAY: { OPEN: 9, CLOSE: 22 },
  SATURDAY: { OPEN: 10, CLOSE: 20 },
  SUNDAY: { OPEN: 10, CLOSE: 18 },
} as const;
