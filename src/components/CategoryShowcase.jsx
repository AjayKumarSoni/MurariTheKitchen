import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { assetUrl } from '../utils/assetUrl';

export default function CategoryShowcase({ onSelectCategory, selectedCategory }) {
  const categories = [
    {
      id: 'express',
      name: '₹99 Store',
      tag: 'DAILY FRESH',
      image: assetUrl('/items/Savouries-2.jpg'),
      badgeColor: '#630C1E',
    },
    {
      id: 'sweets',
      name: 'Pure Ghee Sweets',
      tag: 'HANDCRAFTED',
      image: assetUrl('/items/sweet-1.jpg'),
      badgeColor: '#C68928',
    },
    {
      id: 'savouries',
      name: 'Crispy Savouries',
      tag: 'GROUNDNUT OIL',
      image: assetUrl('/items/Savouries-1.jpg'),
      badgeColor: '#154D36',
    },
    {
      id: 'masterpieces',
      name: 'Royal Masterpieces',
      tag: 'PREMIUM',
      image: assetUrl('/items/sweet-6.jpg'),
      badgeColor: '#8A152E',
    },
    {
      id: 'gifting',
      name: 'Royal Gifting',
      tag: 'FESTIVE HAMPERS',
      image: assetUrl('/items/gift-2.jpg'),
      badgeColor: '#520C1C',
    },
  ];

  return (
    <section style={{ padding: '60px 0 20px', backgroundColor: '#FAF7F2' }}>
      <div className="container">
        
        {/* Header with decorative diamonds like reference */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '36px' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: '#630C1E', fontSize: '1.1rem' }}>❖</span>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                fontWeight: 600,
                color: '#630C1E',
              }}
            >
              Shop By Category
            </h2>
            <span style={{ color: '#630C1E', fontSize: '1.1rem' }}>❖</span>
          </div>
          <p style={{ color: '#6C5E57', fontSize: '0.98rem', marginTop: '4px' }}>
            Select from our curated collections of pure ghee confections and crunch savouries
          </p>
        </motion.div>

        {/* Categories Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '20px',
          }}
        >
          {categories.map((cat, idx) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSelectCategory(cat.id)}
                style={{
                  background: isSelected ? '#FFF8EB' : '#FFFFFF',
                  border: isSelected ? '2px solid #C68928' : '1px solid rgba(99, 12, 30, 0.1)',
                  borderRadius: '20px',
                  padding: '20px 16px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer',
                  textAlign: 'center',
                  boxShadow: isSelected ? '0 12px 30px rgba(198, 137, 40, 0.25)' : '0 4px 15px rgba(0,0,0,0.03)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Badge Tag */}
                <span
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    backgroundColor: cat.badgeColor,
                    color: '#FFFFFF',
                    padding: '3px 8px',
                    borderRadius: '999px',
                    marginBottom: '12px',
                  }}
                >
                  {cat.tag}
                </span>

                {/* Circular Product Image */}
                <div
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    marginBottom: '14px',
                    border: '3px solid #FAF7F2',
                    boxShadow: '0 6px 16px rgba(0,0,0,0.08)',
                  }}
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    onError={(e) => {
                      if (e.target.src.endsWith('.jpg')) {
                        e.target.src = e.target.src.replace('.jpg', '.jfif');
                      }
                    }}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease',
                    }}
                  />
                </div>

                {/* Title */}
                <h4
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#231815',
                    marginBottom: '6px',
                  }}
                >
                  {cat.name}
                </h4>

                <span
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: isSelected ? '#C68928' : '#8A152E',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  Explore <ArrowRight size={12} />
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
