import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from './ProductCard';
import { CATEGORIES } from '../data/products';

export default function ProductSection({
  products,
  selectedCategory,
  onSelectCategory,
  onAddToCart,
  onQuickView,
  currency
}) {
  const [showAll, setShowAll] = useState(false);

  // Reset showAll when category filter changes
  useEffect(() => {
    setShowAll(false);
  }, [selectedCategory]);

  // Filter products based on selected tab
  const filteredProducts = products.filter((p) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'bestsellers') return p.isBestSeller;
    return p.category === selectedCategory;
  });

  const visibleProducts = showAll ? filteredProducts : filteredProducts.slice(0, 4);

  return (
    <section id="sweets" style={{ padding: '60px 0 20px', backgroundColor: '#FAF7F2' }}>
      <div className="container">
        
        {/* Title Header with Reference Diamonds */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '32px' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: '#630C1E', fontSize: '1.2rem' }}>❖</span>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                fontWeight: 600,
                color: '#630C1E',
              }}
            >
              Our Best Sellers & Confections
            </h2>
            <span style={{ color: '#630C1E', fontSize: '1.2rem' }}>❖</span>
          </div>
          <p style={{ color: '#6C5E57', fontSize: '1.05rem', marginTop: '6px' }}>
            Traditional Indian sweets prepared fresh daily with 100% pure desi ghee.
          </p>
        </motion.div>

        {/* Category Pills Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '40px',
            flexWrap: 'wrap',
          }}
        >
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  padding: '8px 18px',
                  borderRadius: '999px',
                  cursor: 'pointer',
                  border: isSelected ? '1.5px solid #630C1E' : '1px solid rgba(99, 12, 30, 0.12)',
                  backgroundColor: isSelected ? '#630C1E' : '#FFFFFF',
                  color: isSelected ? '#FAF7F2' : '#4A3D36',
                  transition: 'all 0.2s ease',
                  boxShadow: isSelected ? '0 4px 15px rgba(99, 12, 30, 0.2)' : 'none',
                }}
              >
                <span style={{ marginRight: '6px' }}>{cat.icon}</span>
                {cat.name}
              </button>
            );
          })}
        </motion.div>

        {/* Product Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
              currency={currency}
            />
          ))}
        </div>

        {/* Show More / Show Less Toggle Button */}
        {filteredProducts.length > 4 && (
          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setShowAll((prev) => !prev)}
              className="btn-gold"
              style={{
                fontSize: '0.94rem',
                padding: '12px 32px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: 700,
                boxShadow: '0 8px 24px rgba(198, 137, 40, 0.35)',
              }}
            >
              <span>{showAll ? 'Show Less' : `Show More (${filteredProducts.length - 4} More Sweets)`}</span>
              <span style={{ fontSize: '0.8rem', transform: showAll ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }}>▼</span>
            </motion.button>
          </div>
        )}

        {/* Bottom Guarantee Banner */}
        <div
          style={{
            marginTop: '24px',
            background: '#FFFFFF',
            border: '1.5px dashed rgba(198, 137, 40, 0.4)',
            borderRadius: '16px',
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span style={{ fontSize: '1.8rem' }}>📦</span>
            <div>
              <p style={{ fontWeight: 700, color: '#630C1E', fontSize: '0.98rem' }}>
                Airlock Freshness-Guaranteed Packaging
              </p>
              <p style={{ fontSize: '0.84rem', color: '#6C5E57' }}>
                Every tin and box is sealed in oxygen-barrier nitrogen flush pouches to retain peak aroma and crispness.
              </p>
            </div>
          </div>

          <a
            href="#gifting"
            className="btn-secondary"
            style={{ fontSize: '0.86rem', padding: '9px 20px' }}
          >
            Explore Custom Gift Boxes
          </a>
        </div>

      </div>
    </section>
  );
}
