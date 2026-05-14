// Global types and interfaces

// Product related types
export interface Product {
  id: string;
  name: string;
  price: number;
  discount?: number;
  image: string;
  category: string;
  weight?: string;
  onSale?: boolean;
  rating?: number;
  reviews?: number;
  description?: string;
  originName?: string;
  originDistanceKm?: number;
  producerName?: string;
  areaPurchases?: number;
  batchNeighborsNeeded?: number;
  batchNeighborsJoined?: number;
  batchDiscountPercent?: number;
  blockchainId?: string;
  originTimeline?: string[];
  mapPin?: {
    x: number;
    y: number;
  };
  freshPick?: boolean;
  aiSignal?: string;
  sku?: string;
  stock?: number;
  tags?: string[];
  dateAdded?: Date | string;
}

// Cart related types
export interface CartItem extends Product {
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  tax: number;
  total: number;
  shippingCost?: number;
  discountCode?: string;
  discountAmount?: number;
}

// User related types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  avatar?: string;
  isVerified: boolean;
  createdAt: Date | string;
  lastLogin?: Date | string;
}

// Address related types
export interface Address {
  id: string;
  userId: string;
  street: string;
  city: string;
  postalCode: string;
  country: string;
  isDefault: boolean;
  type: 'home' | 'work' | 'other';
}

// Order related types
export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  subtotal: number;
  tax: number;
  shippingCost: number;
  total: number;
  status: OrderStatus;
  shippingAddress: Address;
  billingAddress?: Address;
  paymentMethod: PaymentMethod;
  trackingNumber?: string;
  createdAt: Date | string;
  updatedAt?: Date | string;
  estimatedDelivery?: Date | string;
}

// Order status types
export type OrderStatus = 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled' | 'returned';

// Payment related types
export interface PaymentMethod {
  id: string;
  type: 'credit_card' | 'debit_card' | 'paypal' | 'bank_transfer';
  lastFour?: string;
  expiryDate?: string;
  isDefault: boolean;
}

// Filter related types
export interface FilterState {
  categories: string[];
  priceRange: [number, number];
  onSaleOnly: boolean;
  searchQuery?: string;
  rating?: number;
}

// API Response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: ApiError;
  message?: string;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, string>;
}

// Pagination types
export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

// Review & Rating types
export interface Review {
  id: string;
  productId: string;
  userId: string;
  rating: number;
  title: string;
  comment: string;
  helpful: number;
  unhelpful: number;
  verified: boolean;
  createdAt: Date | string;
  updatedAt?: Date | string;
}

// Discount & Coupon types
export interface Coupon {
  id: string;
  code: string;
  description: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  minPurchase: number;
  maxUses: number;
  usesCount: number;
  expiryDate: Date | string;
  isActive: boolean;
}

// Search result types
export interface SearchResult {
  products: Product[];
  categories: string[];
  suggestions: string[];
  totalResults: number;
}

// Analytics event types
export interface AnalyticsEvent {
  eventName: string;
  eventData: Record<string, any>;
  timestamp: Date;
  userId?: string;
  sessionId: string;
}

// Notification types
export interface Notification {
  id: string;
  userId: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  actionUrl?: string;
  isRead: boolean;
  createdAt: Date | string;
}

// Theme types
export interface Theme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    error: string;
  };
}

// Component prop types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  ariaLabel?: string;
}

export interface ButtonProps extends BaseComponentProps {
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  isLoading?: boolean;
}

export interface InputProps extends BaseComponentProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'date';
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}

// Utility types
export type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;

export type Nullable<T> = T | null;

export type Optional<T> = T | undefined;

// Hook return types
export interface UseCart {
  cart: Cart;
  addToCart: (item: Omit<Product, 'id'> & { id: string }, quantity: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

// LocalStorage types
export interface StorageItem<T = any> {
  key: string;
  value: T;
  expiresAt?: number;
}

// Error handling types
export class AppError extends Error {
  constructor(
    message: string,
    public code: string = 'UNKNOWN_ERROR',
    public statusCode: number = 500
  ) {
    super(message);
    this.name = 'AppError';
  }
}
