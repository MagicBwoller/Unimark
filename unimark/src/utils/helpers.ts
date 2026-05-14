// Utility functions for e-commerce platform

/**
 * Format price to EUR currency format
 */
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('pt-PT', {
    style: 'currency',
    currency: 'EUR',
  }).format(price);
};

/**
 * Calculate discount savings
 */
export const calculateSavings = (price: number, discount: number): number => {
  return price - price * (1 - discount / 100);
};

/**
 * Calculate final price with discount
 */
export const calculateFinalPrice = (price: number, discount: number = 0): number => {
  return price * (1 - discount / 100);
};

/**
 * Calculate VAT (23% for Portugal)
 */
export const calculateVAT = (amount: number, taxRate: number = 0.23): number => {
  return amount * taxRate;
};

/**
 * Calculate total with VAT
 */
export const calculateTotal = (subtotal: number, taxRate: number = 0.23): number => {
  return subtotal + calculateVAT(subtotal, taxRate);
};

/**
 * Truncate string with ellipsis
 */
export const truncateString = (str: string, maxLength: number): string => {
  if (str.length <= maxLength) return str;
  return `${str.slice(0, maxLength)}...`;
};

/**
 * Debounce function for search input
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Get user's location (mock implementation)
 */
export const getUserLocation = async (): Promise<{ city: string; country: string } | null> => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    return {
      city: data.city,
      country: data.country_code,
    };
  } catch (error) {
    console.error('Failed to get user location:', error);
    return null;
  }
};

/**
 * Calculate estimated delivery date
 */
export const getEstimatedDeliveryDate = (daysFromNow: number = 2): Date => {
  const date = new Date();
  date.setDate(date.getDate() + daysFromNow);
  return date;
};

/**
 * Format date to readable string
 */
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('pt-PT', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};

/**
 * Check if product is new (added in last 7 days)
 */
export const isNewProduct = (dateAdded: Date | string): boolean => {
  const productDate = typeof dateAdded === 'string' ? new Date(dateAdded) : dateAdded;
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  return productDate > sevenDaysAgo;
};

/**
 * Generate unique ID
 */
export const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Parse URL search parameters
 */
export const getSearchParams = (url: string): Record<string, string> => {
  const params: Record<string, string> = {};
  const searchParams = new URLSearchParams(new URL(url).search);

  searchParams.forEach((value, key) => {
    params[key] = value;
  });

  return params;
};

/**
 * Check if discount is valid
 */
export const isValidDiscount = (discount: number): boolean => {
  return discount >= 0 && discount <= 100;
};

/**
 * Get discount category
 */
export const getDiscountCategory = (discount: number): string => {
  if (discount === 0) return 'No Discount';
  if (discount <= 10) return 'Small Discount';
  if (discount <= 25) return 'Medium Discount';
  if (discount <= 50) return 'Large Discount';
  return 'Huge Discount';
};

/**
 * Pluralize word based on count
 */
export const pluralize = (word: string, count: number): string => {
  return count === 1 ? word : `${word}s`;
};

/**
 * Get initials from name
 */
export const getInitials = (fullName: string): string => {
  return fullName
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase();
};
