import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

export default function SavouriesSection({ products, onAddToCart, onQuickView, currency = 'INR' }) {
  const savouries = products.filter((p) => p.category === 'savouries');

  return (
    <section id="savouries" style={{ padding: '80px 0', backgroundColor: '#FAF7F2' }}>
      <div className="container">
        
        {/* Section Heading matching Reference Image 4 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '40px' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: '#630C1E', fontSize: '1.2rem' }}>❖</span>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.3rem, 4vw, 3.4rem)',
                fontWeight: 600,
                color: '#630C1E',
              }}
            >
              Savouries
            </h2>
            <span style={{ color: '#630C1E', fontSize: '1.2rem' }}>❖</span>
          </div>
          <p
            style={{
              color: '#5C4F48',
              fontSize: '1.05rem',
              marginTop: '6px',
            }}
          >
            Traditional snacks prepared daily using pure cold-pressed groundnut oil.
          </p>
        </motion.div>

        {/* Savouries Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '24px',
          }}
        >
          {savouries.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
              currency={currency}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
