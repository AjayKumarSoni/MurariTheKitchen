import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Flame, Heart, ShieldCheck, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { assetUrl } from '../utils/assetUrl';

export default function AboutSection() {
  const [activeStoryTab, setActiveStoryTab] = useState('heritage');

  const milestones = [
    { year: '1952', title: 'The Sacred Foundation', desc: 'Started in Raigarh with a singular vow: every confection must be as pure as temple prasad.' },
    { year: '1970s', title: 'Hatri Chowk Landmark', desc: 'Shree Mahavir Misthan Bhandar became the go-to heritage destination for hot kachoris and pure ghee sweets.' },
    { year: '2010s', title: 'Murari The Kitchen', desc: 'Expanded into a premier multi-cuisine pure vegetarian family restaurant on Dhimrapur Road.' },
    { year: 'Today', title: '70+ Years of Purity', desc: 'Serving third-generation patrons across Chhattisgarh with doorstep delivery and festive gifting.' },
  ];

  const storyTabs = {
    heritage: {
      title: 'Our Roots in Raigarh Since 1952',
      badge: '70+ Years Legacy',
      image: assetUrl('/heritage/sacred-heritage.jpg'),
      content:
        'Named in reverence to Lord Krishna—the divine embodiment of sweetness, melody, and sacred butter—Murari was founded in 1952 in the cultural city of Raigarh, Chhattisgarh. What began at Hatri Chowk as a passionate pursuit of authentic halwai craftsmanship has flourished into one of the region’s most revered culinary traditions. Over seven decades and across three generations, our ovens and kadhais have remained true to ancient Vedic recipes, never swapping time-honoured technique for modern shortcuts.',
      points: [
        'Founded in 1952 at Hatri Chowk, Raigarh',
        'Traditional recipes handed down through three generations',
        'Beloved landmark for festivals, weddings, and daily celebrations',
      ],
    },
    bilona: {
      title: 'The Vedic Bilona Ghee Standard',
      badge: '100% Pure Cow Ghee',
      image: assetUrl('/heritage/bilona-ghee.jpg'),
      content:
        'In an age of industrial vegetable oils, Murari remains steadfast in its devotion to pure Bilona Ghee. Crafted by traditionally churning cultured curd from indigenous grass-fed cows, our ghee retains its golden hue, granular texture, and divine earthy aroma. It gives our Motichoor Laddus, Kaju Katlis, and Mohanthal a melt-in-the-mouth delicacy that is nourishing, easy to digest, and genuinely pure.',
      points: [
        'Traditionally churned curd method (Vedic Bilona)',
        'Zero palm oil, dalda, or artificial coloring',
        'Rich in natural aroma, vitamins, and antioxidants',
      ],
    },
    dining: {
      title: 'Murari The Kitchen – Modern Dining Landmark',
      badge: '100% Pure Vegetarian',
      image: assetUrl('/stores/outlet-1.png'),
      content:
        'Recognizing Raigarh’s growing appetite for quality dining, we opened Murari The Kitchen on Dhimrapur Road. Designed as a warm, welcoming haven for families, it offers a multi-cuisine feast spanning authentic North Indian gravies, slow-cooked royal thalis, crispy golden South Indian dosas, tandoori breads, and street-style chaat—all prepared under the strictest standards of purity and kitchen hygiene.',
      points: [
        'Spacious, air-conditioned family dining on Dhimrapur Road',
        'Multi-cuisine menu: North Indian, South Indian, Tandoor & Thalis',
        'Live sweet counters and fresh hot savouries prepared daily',
      ],
    },
  };

  const currentTab = storyTabs[activeStoryTab];

  return (
    <section
      id="about"
      style={{
        padding: '80px 0',
        backgroundColor: '#FAF7F2',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Background Accents */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(198, 137, 40, 0.08) 0%, rgba(250, 247, 242, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        
        {/* Section Header with Raigarh Heritage Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '46px' }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(99, 12, 30, 0.08)',
              border: '1px solid rgba(99, 12, 30, 0.18)',
              padding: '6px 16px',
              borderRadius: '999px',
              marginBottom: '14px',
            }}
          >
            <Sparkles size={14} style={{ color: '#C68928' }} />
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 800,
                color: '#630C1E',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              ESTD. 1952 • RAIGARH, CHHATTISGARH
            </span>
          </div>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', justifyContent: 'center', width: '100%' }}>
            <span style={{ color: '#630C1E', fontSize: '1.2rem' }}>❖</span>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.3rem, 4.2vw, 3.4rem)',
                fontWeight: 600,
                color: '#630C1E',
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              About Murari The Kitchen
            </h2>
            <span style={{ color: '#630C1E', fontSize: '1.2rem' }}>❖</span>
          </div>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.05rem',
              color: '#5C4F48',
              maxWidth: '680px',
              margin: '12px auto 0',
              lineHeight: 1.6,
            }}
          >
            A 70+ year legacy of authentic Indian sweets, pure bilona ghee, and grand multi-cuisine dining in Raigarh.
          </p>
        </motion.div>

        {/* 4 Stat Badges */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            marginBottom: '44px',
          }}
        >
          {[
            { number: '1952', label: 'Inception in Raigarh', icon: <MapPin size={20} color="#C68928" /> },
            { number: '70+ Yrs', label: 'Legacy of Trust', icon: <Award size={20} color="#630C1E" /> },
            { number: '100%', label: 'Pure Desi Cow Ghee', icon: <Flame size={20} color="#154D36" /> },
            { number: '2 Outlets', label: 'Dhimrapur & Hatri Chowk', icon: <ShieldCheck size={20} color="#C68928" /> },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '18px 20px',
                border: '1px solid rgba(198, 137, 40, 0.2)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: '#FAF5EE',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {stat.icon}
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#630C1E',
                    margin: 0,
                    lineHeight: 1,
                  }}
                >
                  {stat.number}
                </h4>
                <p style={{ margin: '4px 0 0', fontSize: '0.82rem', color: '#6C5E57', fontWeight: 600 }}>
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tab Navigation for Story */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '32px',
            flexWrap: 'wrap',
          }}
        >
          {[
            { id: 'heritage', label: 'Our Raigarh Story (1952)' },
            { id: 'bilona', label: 'Bilona Ghee Standard' },
            { id: 'dining', label: 'Murari The Kitchen Dining' },
          ].map((tab) => {
            const isActive = activeStoryTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveStoryTab(tab.id)}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  padding: '10px 22px',
                  borderRadius: '999px',
                  cursor: 'pointer',
                  border: isActive ? '1.5px solid #630C1E' : '1px solid rgba(99, 12, 30, 0.15)',
                  backgroundColor: isActive ? '#630C1E' : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : '#4A3D36',
                  transition: 'all 0.25s ease',
                  boxShadow: isActive ? '0 6px 18px rgba(99, 12, 30, 0.25)' : 'none',
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Story Narrative Card */}
        <motion.div
          key={activeStoryTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid rgba(198, 137, 40, 0.25)',
            boxShadow: '0 16px 45px rgba(64, 6, 18, 0.07)',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            alignItems: 'center',
            marginBottom: '48px',
          }}
        >
          {/* Left Column: Image with Tag */}
          <div style={{ position: 'relative', height: '100%', minHeight: '340px' }}>
            <img
              src={currentTab.image}
              alt={currentTab.title}
              onError={(e) => {
                if (e.target.src.endsWith('.jpg')) {
                  e.target.src = e.target.src.replace('.jpg', '.jfif');
                }
              }}
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
                padding: '6px 16px',
                borderRadius: '999px',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
              }}
            >
              {currentTab.badge}
            </div>
          </div>

          {/* Right Column: Detailed Narrative */}
          <div style={{ padding: 'clamp(28px, 4vw, 44px)' }}>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.7rem, 2.5vw, 2.2rem)',
                color: '#630C1E',
                marginBottom: '14px',
                lineHeight: 1.2,
                fontWeight: 600,
              }}
            >
              {currentTab.title}
            </h3>

            <p
              style={{
                fontSize: '0.98rem',
                color: '#5C4F48',
                lineHeight: 1.7,
                marginBottom: '22px',
              }}
            >
              {currentTab.content}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {currentTab.points.map((pt, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} style={{ color: '#154D36', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.92rem', fontWeight: 600, color: '#3A2E2A' }}>
                    {pt}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Heritage Timeline Grid */}
        <div style={{ marginTop: '20px' }}>
          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.8rem',
              color: '#630C1E',
              textAlign: 'center',
              marginBottom: '24px',
              fontWeight: 600,
            }}
          >
            The Murari Journey Across Decades
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
              gap: '18px',
            }}
          >
            {milestones.map((m, idx) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '22px',
                  border: '1px solid rgba(198, 137, 40, 0.2)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '20px',
                    right: '20px',
                    height: '3px',
                    background: 'linear-gradient(90deg, #630C1E 0%, #C68928 100%)',
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.7rem',
                    fontWeight: 700,
                    color: '#C68928',
                    display: 'block',
                    marginBottom: '6px',
                  }}
                >
                  {m.year}
                </span>
                <h4
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#2A1F1D',
                    marginBottom: '6px',
                  }}
                >
                  {m.title}
                </h4>
                <p
                  style={{
                    fontSize: '0.86rem',
                    color: '#6C5E57',
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  {m.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
