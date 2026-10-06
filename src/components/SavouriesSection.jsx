import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function SavouriesSection({ products, onOpenRange }) {
  // Only 4 top savouries images
  const savouries = products.filter((p) => p.category === 'savouries').slice(0, 4);

  return (
    <section id="savouries" style={{ padding: '24px 0 60px', backgroundColor: '#FAF7F2' }}>
      <div className="container">
        
        {/* Section Heading matching Reference Image 4 */}
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
                fontSize: 'clamp(2.3rem, 4vw, 3.4rem)',
                fontWeight: 600,
                color: '#630C1E',
                margin: 0,
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

        {/* 4 Stylish Showcase Cards (Only 4 images, No price, No Add to Cart) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            marginBottom: '32px',
          }}
        >
          {savouries.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -8 }}
              onClick={() => onOpenRange && onOpenRange('savouries')}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid rgba(21, 77, 54, 0.2)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
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
                    backgroundColor: '#154D36',
                    color: '#FFFFFF',
                    fontSize: '0.68rem',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    padding: '4px 10px',
                    borderRadius: '999px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                  }}
                >
                  {product.badge || 'COLD PRESSED OIL'}
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
                  {product.tag || 'Crispy, crunchy and seasoned with authentic whole spices'}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button to Buy in Shop Our Range */}
        <div style={{ textAlign: 'center' }}>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onOpenRange && onOpenRange('savouries')}
            style={{
              backgroundColor: '#154D36',
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
              boxShadow: '0 6px 20px rgba(21, 77, 54, 0.25)',
            }}
          >
            <span>Explore & Order Savouries in Shop Range</span>
            <ArrowRight size={16} />
          </motion.button>
        </div>

      </div>
    </section>
  );
}
