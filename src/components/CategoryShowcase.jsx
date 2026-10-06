import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { assetUrl } from '../utils/assetUrl';

export default function CategoryShowcase({ onSelectCategory, selectedCategory }) {
  const scrollContainerRef = useRef(null);

  const categories = [
    {
      id: 'sweets',
      name: 'Pure Ghee Sweets',
      count: '8 Products',
      target: 'sweets',
      image: assetUrl('/items/new_sweet_5.jpg'),
    },
    {
      id: 'gifting',
      name: 'Sweets Gifting',
      count: '8 Products',
      target: 'gifting',
      image: assetUrl('/items/new_sweet_2.png'),
    },
    {
      id: 'savouries',
      name: 'Traditional Savouries',
      count: '5 Products',
      target: 'savouries',
      image: assetUrl('/items/new_savouries_1.jpg'),
    },
    {
      id: 'kitchen',
      name: 'The Kitchen Dining',
      count: '14 Products',
      target: 'kitchen',
      image: assetUrl('/kitchen/murari_royal_thali.jpg'),
    },
    {
      id: 'express',
      name: '₹99 Fresh Bestsellers',
      count: '4 Products',
      target: 'express',
      image: assetUrl('/items/new_savouries_2.jpg'),
    },
    {
      id: 'dryfruits',
      name: 'Royal Dry Fruits & Hampers',
      count: '5 Products',
      target: 'gifting',
      image: assetUrl('/items/new_sweet_3.png'),
    },
    {
      id: 'milk-delights',
      name: 'Bengali & Milk Sweets',
      count: '6 Products',
      target: 'sweets',
      image: assetUrl('/items/sweet-2.jpg'),
    },
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleCardClick = (cat) => {
    if (onSelectCategory) {
      onSelectCategory(cat.id);
    }
  };

  return (
    <section
      id="shop-range"
      style={{
        padding: '50px 0 30px',
        backgroundColor: '#FAF7F2',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
        
        {/* Header Bar matching Reference Image 1 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '28px',
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.1rem, 3.8vw, 3rem)',
                fontWeight: 600,
                color: '#2A1F1D',
                letterSpacing: '-0.02em',
                margin: 0,
                lineHeight: 1.15,
              }}
            >
              Shop Our Range
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.95rem',
                color: '#706059',
                margin: '6px 0 0',
              }}
            >
              Swipe through our signature pure ghee sweets, native snacks, and dining specials
            </p>
          </motion.div>

          {/* Navigation Arrows for Side Scroll */}
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll Left"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                border: '1.5px solid rgba(99, 12, 30, 0.2)',
                backgroundColor: '#FFFFFF',
                color: '#630C1E',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 3px 10px rgba(0,0,0,0.06)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#630C1E';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.color = '#630C1E';
              }}
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={() => scroll('right')}
              aria-label="Scroll Right"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                border: '1.5px solid rgba(99, 12, 30, 0.2)',
                backgroundColor: '#FFFFFF',
                color: '#630C1E',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 3px 10px rgba(0,0,0,0.06)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#630C1E';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.color = '#630C1E';
              }}
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Horizontal Side-Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="range-scroll-container"
          style={{
            display: 'flex',
            gap: '22px',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
            paddingBottom: '20px',
            paddingTop: '6px',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleCardClick(cat)}
              style={{
                flex: '0 0 250px',
                scrollSnapAlign: 'start',
                cursor: 'pointer',
                userSelect: 'none',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Tall Portrait Image Container matching Reference Image 1 */}
              <div
                style={{
                  width: '100%',
                  height: '320px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: '#EBE5DC',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                  transition: 'box-shadow 0.3s ease',
                }}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  onError={(e) => {
                    if (!e.target.dataset.triedJfif && e.target.src.endsWith('.jpg')) {
                      e.target.dataset.triedJfif = 'true';
                      e.target.src = e.target.src.replace('.jpg', '.jfif');
                    } else if (!e.target.dataset.triedFallback) {
                      e.target.dataset.triedFallback = 'true';
                      e.target.src = assetUrl('/items/new_sweet_5.jpg');
                    }
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.06)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </div>

              {/* Text Meta Below Card matching Reference Image 1 */}
              <div style={{ textAlign: 'center', marginTop: '16px' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.28rem',
                    fontWeight: 700,
                    color: '#2A1F1D',
                    margin: '0 0 4px',
                    lineHeight: 1.25,
                  }}
                >
                  {cat.name}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.94rem',
                    color: '#706059',
                    fontWeight: 500,
                    margin: 0,
                  }}
                >
                  {cat.count}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <style>{`
        .range-scroll-container::-webkit-scrollbar {
          display: none;
        }
        @media (max-width: 600px) {
          .range-scroll-container > div {
            flex: 0 0 210px !important;
          }
          .range-scroll-container > div > div:first-child {
            height: 270px !important;
          }
        }
      `}</style>
    </section>
  );
}
