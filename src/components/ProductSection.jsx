import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function ProductSection({ products, onOpenRange }) {
  // Only 4 top best seller sweets
  const bestSellers = products.filter((p) => p.category === 'sweets').slice(0, 4);

  return (
    <section id="sweets" style={{ padding: '60px 0 20px', backgroundColor: '#FAF7F2' }}>
      <div className="container">
        
        {/* Title Header with Reference Diamonds */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '36px' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: '#630C1E', fontSize: '1.2rem' }}>❖</span>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                fontWeight: 600,
                color: '#630C1E',
                margin: 0,
              }}
            >
              Our Best Sellers & Confections
            </h2>
            <span style={{ color: '#630C1E', fontSize: '1.2rem' }}>❖</span>
          </div>
          <p style={{ color: '#6C5E57', fontSize: '1.05rem', marginTop: '6px' }}>
            Traditional Indian sweets prepared fresh daily with 100% pure desi cow ghee.
          </p>
        </motion.div>

        {/* 4 Stylish Image Showcase Cards (Only 4 images, No price, No Add to Cart) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            marginBottom: '32px',
          }}
        >
          {bestSellers.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -8 }}
              onClick={() => onOpenRange && onOpenRange('sweets')}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid rgba(198, 137, 40, 0.25)',
                boxShadow: '0 8px 24px rgba(64, 6, 18, 0.05)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Image Container with Hover Zoom */}
              <div
                style={{
                  height: '280px',
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundColor: '#F3EFEA',
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  onError={(e) => {
                    if (e.target.src.endsWith('.jpg')) {
                      e.target.src = e.target.src.replace('.jpg', '.jfif');
                    }
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />

                {/* Badge Tag */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: '#630C1E',
                    color: '#F3C363',
                    fontSize: '0.68rem',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    padding: '4px 10px',
                    borderRadius: '999px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                  }}
                >
                  {product.badge || '100% PURE DESI GHEE'}
                </div>
              </div>

              {/* Title & Short Detail */}
              <div style={{ padding: '20px 18px', textAlign: 'center', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: '#2A1F1D',
                    margin: '0 0 6px',
                    lineHeight: 1.25,
                  }}
                >
                  {product.name}
                </h3>
                <p
                  style={{
                    fontSize: '0.86rem',
                    color: '#6C5E57',
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {product.tag || 'Handcrafted fresh every morning with pure saffron and dry fruits'}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button to Buy in Shop Our Range */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onOpenRange && onOpenRange('sweets')}
            style={{
              backgroundColor: '#630C1E',
              color: '#FFFFFF',
              border: 'none',
              padding: '12px 30px',
              borderRadius: '999px',
              fontSize: '0.94rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 6px 20px rgba(99, 12, 30, 0.25)',
            }}
          >
            <span>Explore & Order All Sweets in Shop Range</span>
            <ArrowRight size={16} />
          </motion.button>
        </div>

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
              <p style={{ fontWeight: 700, color: '#630C1E', fontSize: '0.98rem', margin: 0 }}>
                Airlock Freshness-Guaranteed Packaging
              </p>
              <p style={{ fontSize: '0.84rem', color: '#6C5E57', margin: '3px 0 0' }}>
                Every tin and box is sealed in oxygen-barrier pouches to retain peak aroma and crispness.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenRange && onOpenRange('gifting')}
            className="btn-secondary"
            style={{ fontSize: '0.86rem', padding: '9px 20px', cursor: 'pointer' }}
          >
            Explore Custom Gift Boxes
          </button>
        </div>

      </div>
    </section>
  );
}
