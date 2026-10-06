import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

export default function MasterpieceShowcase({ products, onAddToCart, onQuickView, currency }) {
  const masterpieces = products.filter((p) => p.isMasterpiece);

  return (
    <section id="masterpieces" style={{ padding: '80px 0', backgroundColor: '#F6EFE6', position: 'relative' }}>
      
      {/* Decorative Golden Ambient Accent */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '250px',
          background: 'radial-gradient(ellipse at top, rgba(198, 137, 40, 0.15), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Heading matching Reference Image 5 */}
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
              Our Master Pieces
            </h2>
            <span style={{ color: '#630C1E', fontSize: '1.2rem' }}>❖</span>
          </div>
          <p
            style={{
              color: '#5C4F48',
              fontSize: '1.05rem',
              marginTop: '6px',
              maxWidth: '680px',
              margin: '6px auto 0',
            }}
          >
            Special handcrafted recipes: Unique royal biscuits, rose fudges, and premium cashew sweets.
          </p>
        </motion.div>

        {/* Masterpieces Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '24px',
          }}
        >
          {masterpieces.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
              currency={currency}
            />
          ))}
        </div>

        {/* Brand Guarantee quote */}
        <div
          style={{
            textAlign: 'center',
            marginTop: '45px',
            fontStyle: 'italic',
            color: '#630C1E',
            fontFamily: 'var(--font-heading)',
            fontSize: '1.2rem',
          }}
        >
          “Each biscuit is layered with genuine nuts and infused with pure edible flower distillates.”
        </div>

      </div>
    </section>
  );
}
