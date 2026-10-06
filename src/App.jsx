import React, { useState, useEffect } from 'react';
import IntroSplash from './components/IntroSplash';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import CategoryShowcase from './components/CategoryShowcase';
import ProductSection from './components/ProductSection';
import SavouriesSection from './components/SavouriesSection';
import MasterpieceShowcase from './components/MasterpieceShowcase';
import ReelShowcase from './components/ReelShowcase';
import KitchenMenuSection from './components/KitchenMenuSection';
import GiftingSection from './components/GiftingSection';
import WhyMurari from './components/WhyMurari';
import Testimonials from './components/Testimonials';
import StoreLocator from './components/StoreLocator';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import QuickViewModal from './components/QuickViewModal';
import SearchModal from './components/SearchModal';
import Toast from './components/Toast';

import { PRODUCTS } from './data/products';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [currency, setCurrency] = useState('INR');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeSection, setActiveSection] = useState('home');

  // Cart State (Persisted in localStorage)
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('murari_cart_v1');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutTotal, setCheckoutTotal] = useState(0);
  const [toast, setToast] = useState(null);

  // Sync Cart with LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('murari_cart_v1', JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  // Keyboard shortcut Ctrl+K / Cmd+K for search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'sweets', 'savouries', 'masterpieces', 'reels', 'kitchen', 'gifting', 'outlets', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth Navigation
  const scrollToSection = (hash) => {
    const targetId = hash.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Cart Operations
  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const existingIdx = prevCart.findIndex(
        (i) => i.id === item.id && i.selectedWeight === item.selectedWeight
      );

      const addQty = item.quantity || 1;

      if (existingIdx > -1) {
        const updated = [...prevCart];
        updated[existingIdx].quantity += addQty;
        return updated;
      } else {
        return [...prevCart, { ...item, quantity: addQty }];
      }
    });

    // Show Toast Notification
    setToast({
      title: 'Added to your Box',
      subtitle: `${item.name} (${item.selectedWeight || 'Fresh'})`,
    });
    setTimeout(() => {
      setToast(null);
    }, 2800);
  };

  const handleUpdateQty = (id, weight, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id, weight);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.selectedWeight === weight
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  const handleRemoveItem = (id, weight) => {
    setCart((prevCart) =>
      prevCart.filter((item) => !(item.id === id && item.selectedWeight === weight))
    );
  };

  const handleProceedToCheckout = (total) => {
    setCheckoutTotal(total);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderSuccess = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="murari-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* 1. Intro Splash Screen with Logo Morph */}
      {showIntro && (
        <IntroSplash onFinish={() => setShowIntro(false)} />
      )}

      {/* 2. Top Header & Floating Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        currency={currency}
        setCurrency={setCurrency}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Page Layout */}
      <main style={{ flexGrow: 1 }}>
        
        {/* 3. Hero Section with Trust Bar */}
        <Hero
          onExploreSweets={() => scrollToSection('#sweets')}
          onExploreKitchen={() => scrollToSection('#kitchen')}
          onExploreReels={() => scrollToSection('#reels')}
        />

        {/* 4. Brand Legacy & Bilona Craft Story */}
        <BrandStory />

        {/* 5. Shop By Category Showcase */}
        <CategoryShowcase
          selectedCategory={selectedCategory}
          onSelectCategory={(catId) => {
            setSelectedCategory(catId);
            scrollToSection('#sweets');
          }}
        />

        {/* 6. Best Sellers & Sweets Section */}
        <ProductSection
          products={PRODUCTS}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onAddToCart={handleAddToCart}
          onQuickView={(prod) => setQuickViewProduct(prod)}
          currency={currency}
        />

        {/* 7. Savouries Showcase (Reference Image 4) */}
        <SavouriesSection
          products={PRODUCTS}
          onAddToCart={handleAddToCart}
          onQuickView={(prod) => setQuickViewProduct(prod)}
          currency={currency}
        />

        {/* 8. Masterpieces Showcase (Reference Image 5) */}
        <MasterpieceShowcase
          products={PRODUCTS}
          onAddToCart={handleAddToCart}
          onQuickView={(prod) => setQuickViewProduct(prod)}
          currency={currency}
        />

        {/* 9. Murari Live Reels & Kitchen Stories (3D Perspective Showcase) */}
        <ReelShowcase
          onAddToCart={handleAddToCart}
          currency={currency}
        />

        {/* 10. The Kitchen Multi-Cuisine Menu (Menu Images 9-16) */}
        <KitchenMenuSection
          onAddToCart={handleAddToCart}
          currency={currency}
        />

        {/* 10. Royal Gifting & Hampers */}
        <GiftingSection
          onAddToCart={handleAddToCart}
          currency={currency}
        />

        {/* 11. Hallmark Brand Pillars */}
        <WhyMurari />

        {/* 12. Testimonials (Reference Image 6) */}
        <Testimonials />

        {/* 13. Store Outlets / Visit Us (Reference Image 7) */}
        <StoreLocator />

      </main>

      {/* 14. Luxury Emerald & Maroon Footer (Reference Image 8) */}
      <Footer onNavigate={scrollToSection} />

      {/* 15. Cart Drawer (Persistent, Working) */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={handleProceedToCheckout}
        currency={currency}
      />

      {/* 16. Checkout Modal with Confetti Celebration */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        totalAmount={checkoutTotal}
        cartItems={cart}
        onOrderSuccess={handleOrderSuccess}
        currency={currency}
      />

      {/* 17. Product Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        currency={currency}
      />

      {/* 18. Universal Instant Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onAddToCart={handleAddToCart}
        currency={currency}
      />

      {/* 19. Floating Cart Toast Notification */}
      <Toast
        toast={toast}
        onClose={() => setToast(null)}
        onOpenCart={() => setIsCartOpen(true)}
      />

    </div>
  );
}
