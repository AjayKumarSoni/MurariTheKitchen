import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section style={{ padding: '80px 0', backgroundColor: '#FAF7F2' }}>
      <div className="container">
        
        {/* Section Heading matching Reference Image 6 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
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
              Testimonials
            </h2>
            <span style={{ color: '#630C1E', fontSize: '1.2rem' }}>❖</span>
          </div>
          <p style={{ color: '#6C5E57', fontSize: '1.05rem', marginTop: '6px' }}>
            Hear what our patrons and connoisseurs have to say
          </p>
        </motion.div>

        {/* Testimonials Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            marginBottom: '32px',
          }}
        >
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, boxShadow: '0 16px 36px rgba(64, 6, 18, 0.08)' }}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: '32px 28px',
                border: '1px solid rgba(198, 137, 40, 0.2)',
                boxShadow: '0 8px 24px rgba(64, 6, 18, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
              }}
            >
              {/* Reference Golden Double Quote */}
              <div
                style={{
                  fontSize: '3rem',
                  lineHeight: 1,
                  fontFamily: 'Georgia, serif',
                  color: '#E7AB48',
                  marginBottom: '12px',
                }}
              >
                ““
              </div>

              {/* Review Text */}
              <p
                style={{
                  fontSize: '0.94rem',
                  color: '#3A2E2A',
                  lineHeight: 1.6,
                  fontStyle: 'normal',
                  marginBottom: '24px',
                  flexGrow: 1,
                }}
              >
                {item.comment}
              </p>

              {/* 5 Stars matching Reference Image 6 */}
              <div style={{ display: 'flex', gap: '3px', marginBottom: '8px' }}>
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={15} fill="#B42318" color="#B42318" />
                ))}
              </div>

              {/* Author & Verification */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#231815' }}>
                    {item.name}
                  </h4>
                  <p style={{ fontSize: '0.78rem', color: '#7E6E67' }}>
                    {item.location} • Verified Buyer
                  </p>
                </div>
                <CheckCircle2 size={16} style={{ color: '#154D36' }} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
