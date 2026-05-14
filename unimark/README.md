# E-Commerce Platform - Project Documentation

## 🌿 Fresh Markets - Production-Ready E-Commerce Platform

A high-end, fully responsive e-commerce platform built with **Next.js 14**, **React 18**, **Tailwind CSS**, and **React Context API**. Features a professional green-themed design inspired by Continente.pt with advanced filtering, dynamic cart management, and mobile-first responsiveness.

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Component Documentation](#component-documentation)
- [Tailwind Theme Customization](#tailwind-theme-customization)
- [State Management](#state-management)
- [Browser Support](#browser-support)
- [Performance Optimizations](#performance-optimizations)

---

## ✨ Features

### Core Features
- **Dynamic Header** with sticky navigation, category mega-menu, and real-time search bar
- **Advanced Product Grid** with automatic filtering and sorting capabilities
- **Real-time Shopping Cart** with automatic calculations (subtotal, tax, total)
- **Mobile-First Responsive Design** (Mobile, Tablet, Desktop)
- **Professional Green Theme** (Deep Emerald #008751 + Mint #f0fdf4)
- **Product Image Gallery** with lazy loading support
- **Quantity Selectors** with +/- buttons for cart items
- **Discount Badges** and "On Sale" indicators
- **Rating System** with customer reviews displayed on product cards
- **Advanced Sidebar Filtering** by category, price range, and sale status
- **Product Sorting** (Popular, Price Low-to-High, Price High-to-Low, Newest)
- **Cart Drawer/Sidebar** with drag-free smooth animations
- **Sticky Navigation** for quick cart access

### Additional Features
- 23% VAT (Portugal) automatically calculated
- Empty cart state with call-to-action
- Filter state management and reset functionality
- Responsive hamburger menu for mobile
- Accessible form controls (ARIA labels)
- Loading and confirmation states
- Professional typography and spacing

---

## 🛠 Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **Frontend Framework** | Next.js | 14.x |
| **UI Library** | React | 18.x |
| **Styling** | Tailwind CSS | 3.4.x |
| **Icons** | Lucide React | 0.424.x |
| **State Management** | React Context API | Built-in |
| **Language** | TypeScript | 5.3.x |
| **Package Manager** | npm | Latest |
| **Development** | Node.js | 18+ |

---

## 📁 Project Structure

```
meu-folheto/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Main home page
│   │   ├── layout.tsx            # Root layout with providers
│   │   └── globals.css           # Global styles and Tailwind directives
│   ├── components/
│   │   ├── Header.tsx            # Sticky header with mega-menu
│   │   ├── ProductCard.tsx       # Reusable product card component
│   │   ├── ProductGrid.tsx       # Product listing with filtering/sorting
│   │   ├── Sidebar.tsx           # Filter sidebar (mobile-responsive)
│   │   └── CartDrawer.tsx        # Shopping cart sidebar drawer
│   ├── contexts/
│   │   └── CartContext.tsx       # React Context for cart state
│   └── data/
│       └── products.json         # Mock product database
├── public/                        # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js            # Tailwind configuration with green theme
├── postcss.config.js
├── next.config.js
├── .gitignore
├── .env.local.example
└── README.md
```

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git (optional, for version control)

### Step 1: Install Dependencies
```bash
cd meu-folheto
npm install
# or
yarn install
```

### Step 2: Configure Environment
```bash
cp .env.local.example .env.local
# Optional: Update values in .env.local if needed
```

### Step 3: Start Development Server
```bash
npm run dev
# or
yarn dev
```

The application will be available at **http://localhost:3000**

### Step 4: Build for Production
```bash
npm run build
npm start
```

---

## 🎨 Component Documentation

### 1. **Header Component** (`Header.tsx`)
- Sticky navigation bar with logo
- Category mega-menu with hover effects
- Responsive search bar
- Info banner (mobile-friendly)
- Three sections: Logo, Search, and Actions

**Props:** None (Context-dependent)

```tsx
<Header />
```

### 2. **ProductCard Component** (`ProductCard.tsx`)
- Product image with hover zoom effect
- Discount and "On Sale" badges
- Star rating with review count
- Dynamic pricing with discount calculation
- Quantity selector with +/- buttons
- Add to cart button with confirmation state

**Props:**
```tsx
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
}
```

### 3. **ProductGrid Component** (`ProductGrid.tsx`)
- Responsive product grid (1, 2, or 3 columns)
- Integrated filtering (category, price, sale status)
- Sorting functionality (4 options)
- Display product count
- Empty state with call-to-action
- Mobile filter toggle button

**Props:** None (Uses local state)

### 4. **Sidebar Component** (`Sidebar.tsx`)
- Advanced filtering interface
- Collapsible sections
- Category checkboxes (multi-select)
- Price range radio buttons
- "On Sale Only" checkbox
- Reset filters button
- Mobile drawer + Desktop sidebar versions

**Props:**
```tsx
interface SidebarProps {
  onFilterChange: (filters: FilterState) => void;
  isOpen: boolean;
  onClose: () => void;
}
```

### 5. **CartDrawer Component** (`CartDrawer.tsx`)
- Slide-out shopping cart
- Product items with images
- Quantity adjustment controls
- Remove item functionality
- Cart totals (subtotal, tax, total)
- Checkout button
- Clear cart button
- Empty cart state

**Props:** None (Uses useCart hook)

### 6. **CartContext** (`CartContext.tsx`)
**State:**
```tsx
interface Cart {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  tax: number;
  total: number;
}
```

**Functions:**
- `addToCart(item, quantity)` - Add/update item
- `removeFromCart(id)` - Remove item
- `updateQuantity(id, quantity)` - Update quantity
- `clearCart()` - Empty cart
- `setIsCartOpen(open)` - Toggle drawer

**Usage:**
```tsx
const { cart, addToCart, removeFromCart } = useCart();
```

---

## 🎨 Tailwind Theme Customization

The platform uses a custom green theme configured in `tailwind.config.js`:

### Color Palette
```javascript
colors: {
  primary: '#008751',      // Deep Emerald (main brand color)
  secondary: '#f0fdf4',    // Mint (light accents)
  accent: {
    primary: '#008751',
    secondary: '#f0fdf4',
    light: '#f0fdf4',
    dark: '#1a3a3a',
  }
}
```

### Extending Colors
```tsx
// To add custom colors, edit tailwind.config.js:
colors: {
  'brand-green': '#008751',
  'brand-mint': '#f0fdf4',
}

// Usage in components:
<div className="bg-brand-green text-brand-mint">
```

### Dark Mode (Optional)
To enable dark mode, update `tailwind.config.js`:
```javascript
theme: {
  extend: {
    darkMode: 'class',
  }
}
```

---

## 🔄 State Management with CartContext

### How It Works
1. **CartProvider** wraps the entire application in `layout.tsx`
2. **useCart** hook provides access to cart state and functions
3. Automatic calculations for totals, tax, discounts
4. Persistent state during session

### Adding Items to Cart
```tsx
const { addToCart } = useCart();

addToCart(
  {
    id: '1',
    name: 'Product Name',
    price: 9.99,
    image: 'url...',
    weight: '1kg'
  },
  quantity // number
);
```

### Calculating Totals
```tsx
const finalPrice = price * (1 - discount / 100);
const subtotal = cart.subtotal;
const tax = subtotal * 0.23; // 23% VAT
const total = subtotal + tax;
```

---

## 📱 Responsive Breakpoints

The platform uses Tailwind's default breakpoints:

```
sm  - 640px  (Tablets)
md  - 768px  (Small laptops)
lg  - 1024px (Desktops)
xl  - 1280px (Large screens)
```

### Mobile-First Classes
```tsx
// Mobile-first approach
<div className="text-sm md:text-base lg:text-lg">
  // sm (default), md, lg, xl versions
</div>
```

---

## ⚡ Performance Optimizations

1. **Image Optimization** - Next.js Image component ready
2. **Code Splitting** - Automatic with Next.js
3. **CSS Optimization** - Tailwind purges unused styles
4. **Memoization** - useMemo for filtered products
5. **Lazy Loading** - Product cards use CSS transforms for smooth animations
6. **TypeScript** - Type safety and better IDE support

---

## 🌐 Browser Support

- ✅ Chrome/Chromium (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📝 Products Data Format

Located in `src/data/products.json`:

```json
{
  "id": "1",
  "name": "Product Name",
  "price": 9.99,
  "discount": 15,
  "image": "https://...",
  "category": "Vegetables",
  "weight": "1kg",
  "onSale": true,
  "rating": 4.5,
  "reviews": 128
}
```

---

## 🔌 Extending the Platform

### Adding New Components
1. Create file in `src/components/`
2. Export from component file
3. Import and use in parent component

### Adding New Pages
1. Create `route` folder in `src/app/`
2. Add `page.tsx` file
3. Wrap with layout if needed

### Modifying Colors
Edit `tailwind.config.js` color configuration

### Adding New Features
Use the CartContext pattern for new global state management

---

## 🐛 Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Tailwind styles not applying?**
- Clear `.next` folder: `rm -rf .next`
- Rebuild: `npm run dev`

**Cart state resets on page refresh?**
To persist cart to localStorage:
- Update `CartContext.tsx` with localStorage sync

**Images not loading?**
- Check image URLs in `products.json`
- Verify CORS settings if using external images

---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Lucide Icons](https://lucide.dev)

---

## 📄 License

This project is provided as-is for educational and commercial use.

---

**Built with ❤️ for modern e-commerce platforms**
