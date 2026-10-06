import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, ArrowRight } from 'lucide-react';
import { assetUrl } from '../utils/assetUrl';

export default function KitchenMenuSection({ onOpenRange }) {
  // Exactly 4 signature dining dishes (only four images, no buy buttons)
  const featuredDishes = [
    {
      id: 'k-thali',
      name: 'Murari Special Royal Thali Feast',
      tag: 'SIGNATURE ROYAL THALI',
      image: assetUrl('/kitchen/murari_royal_thali.jpg'),
      desc: 'Grand multi-course feast with paneer delicacy, dal makhani, seasonal veg, aromatic pulao, tandoori breads & sweet.',
    },
    {
      id: 'k-dosa',
      name: 'Mysore Butter Masala Dosa',
      tag: 'SOUTH INDIAN SPECIAL',
      image: assetUrl('/kitchen/dosa.jpg'),
      desc: 'Crispy golden crepe smeared with spicy red chutney, stuffed with spiced potato mash, served with sambar & coconut chutney.',
    },
    {
      id: 'k-raj-kachori',
      name: 'Royal Shahi Raj Kachori Chaat',
      tag: 'CRISPY STREET SPECIAL',
      image: assetUrl('/kitchen/raj_kachori.jpg'),
      desc: 'Crisp giant sphere loaded with boiled potatoes, sprouted lentils, sweet whipped curd, pomegranate seeds & duo chutneys.',
    },
    {
      id: 'k-paneer',
      name: 'Shahi Paneer Butter Masala',
      tag: 'NORTH INDIAN CURRY',
      image: assetUrl('/kitchen/paneer_butter_masala.jpg'),
      desc: 'Fresh cottage cheese cubes simmered in a velvety tomato and cashew gravy, finished with fresh cream and kasuri methi.',
    },
  ];

  return (
    <section id="kitchen" style={{ padding: '80px 0', backgroundColor: '#FAF7F2', position: 'relative' }}>
      
      {/* Decorative Emerald Subtle Ambient */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: '5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(21, 77, 54, 0.05), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Header with Murari Kitchen Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '40px' }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(21, 77, 54, 0.1)',
              border: '1px solid rgba(21, 77, 54, 0.25)',
              color: '#154D36',
              padding: '6px 16px',
              borderRadius: '999px',
              fontSize: '0.82rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '14px',
            }}
          >
            <Utensils size={15} />
            <span>Murari • The Kitchen Menu</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
              fontWeight: 600,
              color: '#630C1E',
              margin: 0,
            }}
          >
            Royal Dining & Multi-Cuisine Feast
          </h2>
          <p
            style={{
              color: '#5C4F48',
              fontSize: '1.05rem',
              maxWidth: '700px',
              margin: '8px auto 0',
            }}
          >
            Cooked fresh on order with pure spices and ingredients. Enjoy comfortable family dine-in or takeaway at Dhimrapur Road.
          </p>
        </motion.div>

        {/* 4 Stylish Showcase Cards (Only 4 images, No Buy, No Add to Cart) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            marginBottom: '36px',
          }}
        >
          {featuredDishes.map((dish, idx) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -8 }}
              onClick={() => onOpenRange && onOpenRange('kitchen')}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid rgba(21, 77, 54, 0.2)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Dish Photo */}
              <div
                style={{
                  height: '260px',
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundColor: '#F3EFEA',
                }}
              >
                <img
                  src={dish.image}
                  alt={dish.name}
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
                  {dish.tag}
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
                  {dish.name}
                </h3>
                <p
                  style={{
                    fontSize: '0.86rem',
                    color: '#6C5E57',
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {dish.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button to Order in Shop Our Range */}
        <div style={{ textAlign: 'center' }}>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onOpenRange && onOpenRange('kitchen')}
            style={{
              backgroundColor: '#154D36',
              color: '#FFFFFF',
              border: 'none',
              padding: '12px 32px',
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
            <span>Explore & Order Full Menu in Shop Range</span>
            <ArrowRight size={16} />
          </motion.button>
        </div>

      </div>
    </section>
  );
}
