# 🔥 Fresh Markets - Quick Reference

## ⚡ Quick Commands
```bash
npm install          # Install dependencies
npm run dev         # Start dev server (http://localhost:3000)
npm run build       # Build for production
npm start           # Start production server
npm run lint        # Run linter
```

---

## 📂 Key Files Guide

| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Main home page |
| `src/contexts/CartContext.tsx` | Cart state & functions |
| `src/components/Header.tsx` | Navigation bar |
| `src/components/ProductCard.tsx` | Product display card |
| `src/components/ProductGrid.tsx` | Product listing |
| `src/components/Sidebar.tsx` | Filters |
| `src/components/CartDrawer.tsx` | Shopping cart |
| `src/data/products.json` | Product database |
| `tailwind.config.js` | Theme colors |

---

## 🎨 Theme Colors

```python
PRIMARY = "#008751"    # Deep Emerald (Main)
SECONDARY = "#f0fdf4"  # Mint (Light)
```

### Using in Components
```tsx
<div className="bg-primary-600">Green Background</div>
<p className="text-secondary">Light Text</p>
```

---

## 🛒 Cart Hook Usage

```tsx
import { useCart } from '@/src/contexts/CartContext';

const MyComponent = () => {
  const { cart, addToCart, removeFromCart, updateQuantity } = useCart();

  // Access cart data
  console.log(cart.totalItems);    // 5
  console.log(cart.total);         // 47.50
  
  // Add product
  addToCart({ id: '1', name: 'Item', price: 9.99, image: 'url' }, 2);
  
  // Remove product
  removeFromCart('1');
  
  // Update quantity
  updateQuantity('1', 3);
};
```

---

## 📦 Product Data Structure

```json
{
  "id": "1",
  "name": "Organic Milk",
  "price": 2.99,
  "discount": 15,
  "image": "https://...",
  "category": "Beverages",
  "weight": "1L",
  "onSale": true,
  "rating": 4.5,
  "reviews": 128
}
```

---

## 🎯 Cart Calculations

```
Price = $10.00
Discount = 20%
Final Price = $10.00 × (1 - 0.20) = $8.00

Subtotal = $48.00
Tax (23%) = $48.00 × 0.23 = $11.04
Total = $48.00 + $11.04 = $59.04
```

---

## 📱 Responsive Breakpoints

```
sm  → 640px   (Tablets)
md  → 768px   (Desktops)
lg  → 1024px  (Large screens)
xl  → 1280px  (Very large)
```

### Mobile-First Classes
```tsx
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

---

## 🔄 Component Props

### ProductCard
```tsx
<ProductCard
  id="1"
  name="Product"
  price={9.99}
  discount={15}
  image="url"
  category="Vegetables"
  weight="1kg"
  onSale={true}
  rating={4.5}
  reviews={128}
/>
```

### Sidebar
```tsx
<Sidebar
  onFilterChange={(filters) => {}}
  isOpen={false}
  onClose={() => {}}
/>
```

---

## 🚀 Deployment

### Local Build
```bash
npm run build && npm start
# http://localhost:3000
```

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
# Follow prompts
```

### Docker
```dockerfile
FROM node:18
WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 🐛 Debug Tips

```tsx
// Log cart state
const { cart } = useCart();
console.log('Cart:', cart);
console.log('Total Items:', cart.totalItems);
console.log('Total Price:', cart.total);

// Monitor filter changes
const handleFilterChange = (filters) => {
  console.log('Filters:', filters);
};

// Check product data
import products from '@/src/data/products.json';
console.log('Products:', products);
```

---

## 🔐 Environment Variables

Create `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_TAX_RATE=0.23
NEXT_PUBLIC_FREE_SHIPPING=50
```

Usage in components:
```tsx
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

---

## 📊 Performance Monitoring

```bash
# Build analysis
npm run build

# Check bundle size
npm install -S bundle-analyzer
```

---

## 🎯 Customization Quick Links

1. **Change Colors** → Edit `tailwind.config.js`
2. **Modify VAT** → Edit `src/contexts/CartContext.tsx`
3. **Add Products** → Edit `src/data/products.json`
4. **Change Shipping** → Edit `src/utils/constants.ts`
5. **Adjust Filters** → Edit `src/components/Sidebar.tsx`

---

## 📚 File Size Reference

```
Typical Production Build:
- HTML:  ~50KB
- CSS:   ~30KB (with Tailwind purge)
- JS:    ~150-200KB (gzipped)
- Total: ~230-280KB
```

---

## ✅ Pre-Launch Checklist

- [ ] All products loaded in `products.json`
- [ ] Theme colors match brand (check `tailwind.config.js`)
- [ ] Images loading correctly
- [ ] Cart calculations accurate
- [ ] Mobile layout responsive
- [ ] Filters working
- [ ] Checkout button linked
- [ ] SEO meta tags updated
- [ ] Analytics setup (optional)
- [ ] Error handling implemented

---

## 🆘 Quick Troubleshooting

| Issue | Solution |
|-------|----------|
| Styles not working | `rm -rf .next && npm run dev` |
| Port in use | `npm run dev -- -p 3001` |
| Module not found | `npm install` |
| Images broken | Check URLs in `products.json` |
| Cart empty on refresh | Add localStorage sync |
| TypeScript errors | Run `npm run build` |

---

## 📞 Support Files

- **README.md** - Full documentation
- **SETUP_GUIDE.md** - Detailed setup instructions
- **TECH_STACK.md** - Technology details (if exists)

---

**Built with ❤️ for modern e-commerce. Happy coding! 🌿**
