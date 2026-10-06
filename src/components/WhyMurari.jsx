import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Flame, Heart, Sparkles } from 'lucide-react';

export default function WhyMurari() {
  const pillars = [
    {
      icon: <Flame size={26} />,
      title: 'Pure Desi Bilona Ghee',
      desc: 'Made from traditionally churned cow curd. Light, aromatic, and easy to digest.',
    },
    {
      icon: <ShieldCheck size={26} />,
      title: '100% Pure & Tested',
      desc: 'Only authentic dry fruits, real saffron, and fresh dairy. Zero artificial additives.',
    },
    {
      icon: <Sparkles size={26} />,
      title: 'Fresh Daily Batches',
      desc: 'Handcrafted fresh every morning by experienced halwais for genuine taste.',
    },
    {
      icon: <Heart size={26} />,
      title: 'Clean & Sealed Packaging',
      desc: 'Packed in airtight hygienic boxes to keep sweets fresh and crispy for your family.',
    },
  ];

  return (
    <section style={{ padding: '80px 0', backgroundColor: '#FAF7F2' }}>
      <div className="container">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <span className="section-tag">Pure & Authentic</span>
          <h2 className="section-title">The Murari Promise</h2>
          <p className="section-subtitle">
            Pure ingredients, authentic taste, and daily fresh preparation you can trust.
          </p>
        </motion.div>

        {/* 4 Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}
        >
          {pillars.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, boxShadow: '0 18px 36px rgba(64, 6, 18, 0.1)' }}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: '32px 24px',
                border: '1px solid rgba(198, 137, 40, 0.25)',
                boxShadow: '0 8px 24px rgba(64, 6, 18, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Gold Top Accent Line */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '24px',
                  right: '24px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #630C1E 0%, #C68928 100%)',
                }}
              />

              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(99, 12, 30, 0.06)',
                  color: '#630C1E',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.4rem',
                  fontWeight: 600,
                  color: '#630C1E',
                  marginBottom: '10px',
                  lineHeight: 1.25,
                }}
              >
                {item.title}
              </h3>

              <p style={{ fontSize: '0.9rem', color: '#5C4F48', lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
