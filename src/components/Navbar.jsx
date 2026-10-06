import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, Menu, X, Phone, Utensils, Heart, ChevronDown } from 'lucide-react';
import { assetUrl } from '../utils/assetUrl';

export default function Navbar({
  cartCount,
  onOpenCart,
  onOpenSearch,
  currency,
  setCurrency,
  activeSection,
  onNavigate
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Sweets', href: '#sweets' },
    { label: 'Savouries', href: '#savouries' },
    { label: 'Kitchen Menu', href: '#kitchen', highlight: true },
    { label: 'Gifting', href: '#gifting' },
    { label: 'Outlets', href: '#outlets' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Announcement Bar like Anandhaas Reference */}
      <div
        style={{
          background: 'linear-gradient(90deg, #570A1A 0%, #750E24 50%, #570A1A 100%)',
          color: '#FAF4EB',
          fontSize: '0.8rem',
          fontWeight: 500,
          padding: '6px 16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
          zIndex: 100,
          borderBottom: '1px solid rgba(198, 137, 40, 0.25)',
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#E7AB48' }}>🛵</span>
            <span>Fast Fresh Delivery across Raigarh City in 45 Mins | Free on orders above ₹499</span>
          </div>

          <div style={{ display: 'none', mdDisplay: 'flex', gap: '18px', alignItems: 'center' }} className="topbar-right">
            <span>Prepared fresh daily with pure Cow Ghee</span>
            <span style={{ opacity: 0.5 }}>|</span>
            <a
              href="tel:+917805939822"
              style={{ color: '#FAF4EB', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px' }}
            >
              <Phone size={12} style={{ color: '#E7AB48' }} /> 078059 39822
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 90,
          backgroundColor: isScrolled ? 'rgba(255, 253, 249, 0.94)' : 'rgba(255, 253, 249, 0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: isScrolled ? '1px solid rgba(99, 12, 30, 0.12)' : '1px solid rgba(198, 137, 40, 0.15)',
          boxShadow: isScrolled ? '0 8px 30px rgba(64, 6, 18, 0.08)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>
          
          {/* Logo with clean transparency, larger size and THE KITCHEN badge */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('#home');
            }}
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              textDecoration: 'none',
              position: 'relative',
              outline: 'none',
              gap: '10px',
            }}
          >
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              src={assetUrl('/murari-logo-clean.png')}
              alt="Murari Logo"
              style={{
                height: isScrolled ? '54px' : '62px',
                width: 'auto',
                transition: 'height 0.3s ease',
                filter: 'drop-shadow(0 2px 8px rgba(99, 12, 30, 0.15))',
                display: 'block',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.66rem',
                fontWeight: 800,
                letterSpacing: '0.14em',
                color: '#630C1E',
                textTransform: 'uppercase',
                paddingBottom: '6px',
                lineHeight: 1,
                borderLeft: '1.5px solid #C68928',
                paddingLeft: '8px',
                marginBottom: '6px',
                whiteSpace: 'nowrap',
              }}
            >
              THE KITCHEN
            </span>
          </a>

          {/* Desktop Nav Links - Clean, Compact & Refined */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
            className="desktop-nav"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.href);
                }}
                style={{
                  position: 'relative',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.78rem',
                  fontWeight: item.highlight ? '700' : '600',
                  letterSpacing: '0.03em',
                  textTransform: 'uppercase',
                  color: item.highlight
                    ? '#154D36'
                    : activeSection === item.href.replace('#', '')
                    ? '#630C1E'
                    : '#4A3D36',
                  textDecoration: 'none',
                  padding: item.highlight ? '5px 11px' : '5px 4px',
                  borderRadius: item.highlight ? '9999px' : '0',
                  background: item.highlight ? 'rgba(21, 77, 54, 0.08)' : 'transparent',
                  border: item.highlight ? '1px solid rgba(21, 77, 54, 0.25)' : 'none',
                  transition: 'all 0.25s ease',
                  whiteSpace: 'nowrap',
                }}
                className="nav-link"
              >
                {item.highlight && <Utensils size={12} style={{ marginRight: '4px', verticalAlign: '-1px' }} />}
                {item.label}
                {item.highlightBadge && (
                  <span
                    style={{
                      marginLeft: '4px',
                      backgroundColor: '#E53E3E',
                      color: '#FFFFFF',
                      fontSize: '0.62rem',
                      padding: '1px 5px',
                      borderRadius: '4px',
                      fontWeight: 800,
                      letterSpacing: '0.04em',
                    }}
                  >
                    LIVE
                  </span>
                )}
                {activeSection === item.href.replace('#', '') && !item.highlight && (
                  <motion.div
                    layoutId="active-indicator"
                    style={{
                      position: 'absolute',
                      bottom: -2,
                      left: 0,
                      right: 0,
                      height: '2px',
                      backgroundColor: '#630C1E',
                      borderRadius: '2px',
                    }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Right Action Icons & Cart */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            
            {/* Currency Selector (like Anandhaas) */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                background: '#F5ECE1',
                padding: '5px 10px',
                borderRadius: '999px',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: '#630C1E',
                cursor: 'pointer',
              }}
              onClick={() => {
                const next = currency === 'INR' ? 'USD' : currency === 'USD' ? 'GBP' : 'INR';
                setCurrency(next);
              }}
              title="Click to change currency"
            >
              <span>{currency === 'INR' ? '🇮🇳 INR ₹' : currency === 'USD' ? '🇺🇸 USD $' : '🇬🇧 GBP £'}</span>
            </div>

            {/* Search Trigger */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenSearch}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#4A3D36',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'rgba(99, 12, 30, 0.05)',
              }}
              aria-label="Search Sweets & Menu"
            >
              <Search size={18} />
            </motion.button>

            {/* Cart Trigger */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenCart}
              style={{
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'linear-gradient(135deg, #630C1E 0%, #400612 100%)',
                color: '#FFFDF9',
                border: 'none',
                padding: '9px 18px',
                borderRadius: '9999px',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(99, 12, 30, 0.25)',
                fontWeight: 600,
                fontSize: '0.88rem',
              }}
              aria-label="View Shopping Cart"
            >
              <ShoppingBag size={17} />
              <span className="cart-text">Cart</span>
              {cartCount > 0 && (
                <motion.span
                  key={cartCount}
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  style={{
                    backgroundColor: '#C68928',
                    color: '#120508',
                    borderRadius: '999px',
                    padding: '1px 7px',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                  }}
                >
                  {cartCount}
                </motion.span>
              )}
            </motion.button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#630C1E',
                padding: '4px',
              }}
              className="mobile-hamburger"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              style={{
                background: '#FFFDF9',
                borderBottom: '2px solid #C68928',
                padding: '16px 24px 24px',
                overflow: 'hidden',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      onNavigate(item.href);
                    }}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: item.highlight ? '#154D36' : '#630C1E',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '8px 0',
                      borderBottom: '1px solid rgba(99, 12, 30, 0.08)',
                    }}
                  >
                    {item.highlight && <Utensils size={16} />}
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Responsive CSS for desktop vs mobile nav */}
      <style>{`
        @media (max-width: 992px) {
          .desktop-nav { display: none !important; }
          .mobile-hamburger { display: block !important; }
          .topbar-right { display: none !important; }
        }
        @media (max-width: 480px) {
          .cart-text { display: none; }
        }
      `}</style>
    </>
  );
}
