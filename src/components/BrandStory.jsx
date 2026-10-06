import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Flame, HeartHandshake, CheckCircle } from 'lucide-react';
import { assetUrl } from '../utils/assetUrl';

export default function BrandStory() {
  const [activeTab, setActiveTab] = useState(0);

  const storyPillars = [
    {
      title: 'The Sacred Heritage',
      tag: 'Estd. 1974',
      description: 'Murari is named after Lord Krishna. Since 1974, every sweet is made pure and fresh like temple prasad. Honest ingredients, zero shortcuts, and genuine family love.',
      highlights: ['100% Pure & Fresh Daily', '50+ Years of Family Trust', 'No Artificial Preservatives'],
      image: assetUrl('/heritage/sacred-heritage.jpg'),
    },
    {
      title: 'The Bilona Ghee Standard',
      tag: '100% Pure Cow Ghee',
      description: 'We use pure Bilona desi cow ghee made by traditional curd churning. It gives our sweets a rich golden look, pure aroma, and melt-in-mouth lightness.',
      highlights: ['Traditional Vedic Bilona Method', 'Rich Natural Aroma & Golden Shine', 'Healthy, Pure & Easy to Digest'],
      image: assetUrl('/heritage/bilona-ghee.jpg'),
    },
    {
      title: 'Artisanal Brass Kadhai Craft',
      tag: 'Slow-Cooked in Brass',
      description: 'Our master halwais slow-cook sweets in traditional heavy brass kadhais over a gentle flame. This slow simmering brings out the rich natural sweetness and fine texture.',
      highlights: ['Cooked in Heavy Brass Vessels', 'Handcrafted by Master Halwais', 'Pure Kashmiri Saffron & Dry Fruits'],
      image: assetUrl('/heritage/brass-kadhai.jpg'),
    },
  ];

  return (
    <section id="about" style={{ padding: '80px 0', backgroundColor: '#FAF7F2', position: 'relative' }}>
      <div className="container">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <span className="section-tag">Our Living Heritage</span>
          <h2 className="section-title">The Legend of Murari</h2>
          <p className="section-subtitle">
            Over 50 years of trust. Handcrafting pure sweets and delicious food with authentic family recipes.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '40px',
            flexWrap: 'wrap',
          }}
        >
          {storyPillars.map((pillar, idx) => (
            <button
              key={pillar.title}
              onClick={() => setActiveTab(idx)}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.92rem',
                fontWeight: 600,
                padding: '10px 22px',
                borderRadius: '999px',
                border: activeTab === idx ? '1px solid #C68928' : '1px solid rgba(99, 12, 30, 0.12)',
                backgroundColor: activeTab === idx ? '#630C1E' : '#FFFFFF',
                color: activeTab === idx ? '#FAF7F2' : '#5C4F48',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeTab === idx ? '0 6px 20px rgba(99, 12, 30, 0.25)' : 'none',
              }}
            >
              {pillar.title}
            </button>
          ))}
        </div>

        {/* Split Screen Narrative Box */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid rgba(198, 137, 40, 0.25)',
            boxShadow: '0 20px 50px rgba(64, 6, 18, 0.08)',
            overflow: 'hidden',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                alignItems: 'center',
              }}
            >
              {/* Left Column: Image with Mor Pankh Crest */}
              <div style={{ position: 'relative', height: '100%', minHeight: '380px' }}>
                <img
                  src={storyPillars[activeTab].image}
                  alt={storyPillars[activeTab].title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    backgroundColor: '#630C1E',
                    color: '#F3C363',
                    padding: '6px 14px',
                    borderRadius: '999px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                  }}
                >
                  {storyPillars[activeTab].tag}
                </div>
              </div>

              {/* Right Column: Detailed Story Content */}
              <div style={{ padding: '40px 36px' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '2rem',
                    color: '#630C1E',
                    marginBottom: '16px',
                    lineHeight: 1.2,
                  }}
                >
                  {storyPillars[activeTab].title}
                </h3>
                <p
                  style={{
                    fontSize: '1.02rem',
                    color: '#5C4F48',
                    lineHeight: 1.7,
                    marginBottom: '28px',
                  }}
                >
                  {storyPillars[activeTab].description}
                </p>

                {/* Highlights List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {storyPillars[activeTab].highlights.map((h, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <CheckCircle size={18} style={{ color: '#154D36', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.94rem', fontWeight: 600, color: '#3A2E2A' }}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
