import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Flame, ShieldCheck, MapPin, Sparkles, CheckCircle2, Crown, Smartphone, Store, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { assetUrl } from '../utils/assetUrl';

export default function AboutSection() {
  const [activeStoryTab, setActiveStoryTab] = useState('heritage');

  // The 4 Generations Family Lineage as requested by the user
  const generations = [
    {
      gen: 'GEN 1',
      era: '1952 • The Inception',
      role: 'Great-Grandfather',
      name: 'Murari Sharma',
      action: 'Started the Business',
      title: 'The Sacred Foundation',
      desc: 'Founded the business in 1952 at Hatri Chowk, Raigarh with a sacred vow: 100% pure Bilona cow ghee, temple-pure recipes, and uncompromised authenticity.',
      badgeBg: 'linear-gradient(135deg, #630C1E 0%, #400612 100%)',
      accentColor: '#C68928',
      symbol: '⚜',
      highlightBadge: 'Founder • Estd. 1952',
    },
    {
      gen: 'GEN 2',
      era: '1970s–1980s • Growth',
      role: 'Grandfather',
      name: 'Vimal Sharma',
      action: 'Expanded the Business',
      title: 'Heritage & Reputation',
      desc: 'Expanded the business across Raigarh, popularised our signature desi ghee sweets, and established Murari as the city’s undisputed landmark of purity and trust.',
      badgeBg: 'linear-gradient(135deg, #154D36 0%, #0E3525 100%)',
      accentColor: '#2D8659',
      symbol: '❖',
      highlightBadge: 'Pioneered Expansion',
    },
    {
      gen: 'GEN 3',
      era: '2010s • The Kitchen Era',
      role: 'Father & Mother',
      name: 'Pawan Sharma & Manisha Sharma',
      action: 'Opened the New Grand Outlet',
      title: 'Murari The Kitchen Dining',
      desc: 'Envisioned modern culinary excellence and opened our flagship new outlet—Murari The Kitchen on Dhimrapur Road—offering grand pure-veg multi-cuisine dining & thalis.',
      badgeBg: 'linear-gradient(135deg, #7A1C2E 0%, #540D1C 100%)',
      accentColor: '#C68928',
      symbol: '◈',
      highlightBadge: 'Flagship New Outlet',
    },
    {
      gen: 'GEN 4',
      era: 'Present & Future • Innovation',
      role: 'Siblings',
      name: 'Yuvraj Sharma & Shivee Sharma',
      action: 'Digitalisation & Modern Operations',
      title: 'Digital Era & Luxury Gifting',
      desc: 'Spearheading complete digitalisation—seamless online ordering, 45-minute citywide delivery, artisanal festive hampers, and pan-India reach while preserving age-old Vedic recipes.',
      badgeBg: 'linear-gradient(135deg, #1A365D 0%, #0F2341 100%)',
      accentColor: '#3182CE',
      symbol: '✦',
      highlightBadge: 'Digitalisation & Future',
    },
  ];

  const milestones = [
    { year: '1952', title: 'The Sacred Foundation', desc: 'Started by Great-Grandfather Murari Sharma at Hatri Chowk with pure Vedic ghee sweets.' },
    { year: '1970s', title: 'Grandfather’s Expansion', desc: 'Grandfather Vimal Sharma expanded the brand into Raigarh’s premier sweet destination.' },
    { year: '2010s', title: 'Murari The Kitchen Outlet', desc: 'Father Pawan Sharma & Mother Manisha Sharma opened the grand Dhimrapur Road restaurant.' },
    { year: 'Today', title: 'Gen 4 Digitalisation', desc: 'Siblings Yuvraj Sharma & Shivee Sharma bring doorstep delivery and digital ordering across Raigarh.' },
  ];

  const storyTabs = {
    heritage: {
      title: 'Our Roots in Raigarh Since 1952',
      badge: '70+ Years Family Legacy',
      image: assetUrl('/heritage/about_legacy_hero.jpg'),
      content:
        'Founded in 1952 by Great-Grandfather Murari Sharma at Hatri Chowk, Raigarh, our family business began with a singular vow: every confection must be as pure as temple prasad. Over four generations and more than seven decades, that sacred promise has only grown stronger. Expanded by Grandfather Vimal Sharma, transformed into a modern dining destination with our new Dhimrapur Road outlet by Father Pawan Sharma & Mother Manisha Sharma, and now digitally modernized by Gen 4—Yuvraj Sharma & Shivee Sharma—Murari remains Raigarh’s most cherished culinary heritage.',
      points: [
        'Founded in 1952 by Great-Grandfather Murari Sharma in Raigarh',
        'Four generations of unbroken family dedication to pure Vedic taste',
        'Traditional Bilona cow ghee recipes handed down across 70+ years',
        'Modernized with a flagship dining outlet and complete digital ordering',
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
        'Recognizing Raigarh’s growing appetite for quality dining, Father Pawan Sharma and Mother Manisha Sharma opened Murari The Kitchen on Dhimrapur Road. Designed as a warm, welcoming haven for families, it offers a multi-cuisine feast spanning authentic North Indian gravies, slow-cooked royal thalis, crispy golden South Indian dosas, tandoori breads, and street-style chaat—all prepared under the strictest standards of purity and kitchen hygiene.',
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
            A 70+ year legacy of pure desi cow ghee sweets, authentic family recipes, and grand dining across four generations in Raigarh.
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
            { number: '1952', label: 'Founded by Murari Sharma', icon: <MapPin size={20} color="#C68928" /> },
            { number: '4 Gens', label: 'Generations of Trust', icon: <Crown size={20} color="#630C1E" /> },
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

        {/* Story Narrative Card (Using user's newly uploaded authentic photo) */}
        <motion.div
          key={activeStoryTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            border: '1.5px solid rgba(198, 137, 40, 0.25)',
            boxShadow: '0 16px 45px rgba(64, 6, 18, 0.07)',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            alignItems: 'center',
            marginBottom: '44px',
          }}
        >
          {/* Left Column: Image with Tag */}
          <div style={{ position: 'relative', height: '100%', minHeight: '380px', backgroundColor: '#F3EFEA' }}>
            <img
              src={currentTab.image}
              alt={currentTab.title}
              onError={(e) => {
                if (!e.target.dataset.triedFallback) {
                  e.target.dataset.triedFallback = 'true';
                  e.target.src = assetUrl('/heritage/about_legacy_hero.jpg');
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

            {/* Sub-caption badge for authentic Kaju Katli */}
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                right: '16px',
                backgroundColor: 'rgba(21, 77, 54, 0.92)',
                backdropFilter: 'blur(8px)',
                color: '#FFFFFF',
                padding: '8px 14px',
                borderRadius: '12px',
                fontSize: '0.78rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(0,0,0,0.18)',
              }}
            >
              <Sparkles size={14} style={{ color: '#F3C363', flexShrink: 0 }} />
              <span>Murari Signature Silver Vark Kaju Katli • 100% Goan Cashews</span>
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

        {/* ═══ 4 GENERATIONS FAMILY HERITAGE SHOWCASE ═══ */}
        <div style={{ marginTop: '20px', marginBottom: '50px' }}>
          
          {/* Generations Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            style={{ textAlign: 'center', marginBottom: '32px' }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(198, 137, 40, 0.12)',
                border: '1px solid rgba(198, 137, 40, 0.35)',
                color: '#630C1E',
                padding: '6px 18px',
                borderRadius: '999px',
                fontSize: '0.8rem',
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}
            >
              <Crown size={15} style={{ color: '#C68928' }} />
              <span>Four Generations of Unbroken Purity</span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 3.5vw, 2.7rem)',
                color: '#630C1E',
                fontWeight: 600,
                margin: '0 0 10px',
                lineHeight: 1.2,
              }}
            >
              The Journey of 4 Generations (Gen 1 – Gen 4)
            </h3>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.02rem',
                color: '#5C4F48',
                maxWidth: '660px',
                margin: '0 auto',
                lineHeight: 1.65,
              }}
            >
              From our Great-Grandfather’s pure beginning in 1952 to today’s digital era — discover how each generation expanded the taste, quality, and legacy of Murari.
            </p>
          </motion.div>

          {/* 4 Generation Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '22px',
              position: 'relative',
            }}
          >
            {generations.map((gen, idx) => (
              <motion.div
                key={gen.gen}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(99, 12, 30, 0.12)' }}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '22px',
                  border: '1.5px solid rgba(198, 137, 40, 0.28)',
                  boxShadow: '0 10px 30px rgba(64, 6, 18, 0.05)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                }}
              >
                {/* Top Banner with Generation Tag */}
                <div
                  style={{
                    background: gen.badgeBg,
                    padding: '18px 20px',
                    color: '#FFFFFF',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Subtle Background Symbol */}
                  <span
                    style={{
                      position: 'absolute',
                      right: '12px',
                      top: '8px',
                      fontSize: '3.5rem',
                      opacity: 0.12,
                      fontFamily: 'serif',
                      lineHeight: 1,
                      pointerEvents: 'none',
                    }}
                  >
                    {gen.symbol}
                  </span>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.18)',
                        backdropFilter: 'blur(4px)',
                        padding: '3px 10px',
                        borderRadius: '999px',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        letterSpacing: '0.1em',
                        color: '#F3C363',
                        border: '1px solid rgba(243, 195, 99, 0.3)',
                      }}
                    >
                      {gen.gen}
                    </span>
                    <span style={{ fontSize: '0.74rem', color: '#FAF7F2', opacity: 0.85, fontWeight: 500 }}>
                      {gen.era}
                    </span>
                  </div>

                  {/* Generation Role Tag */}
                  <p
                    style={{
                      fontSize: '0.82rem',
                      color: '#FAF7F2',
                      opacity: 0.9,
                      fontWeight: 600,
                      margin: '0 0 4px',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {gen.role}
                  </p>

                  {/* Person Name */}
                  <h4
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.45rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      margin: 0,
                      lineHeight: 1.25,
                      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                    }}
                  >
                    {gen.name}
                  </h4>
                </div>

                {/* Card Body */}
                <div style={{ padding: '22px 20px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  
                  {/* Business Action Badge */}
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      backgroundColor: 'rgba(198, 137, 40, 0.1)',
                      border: '1px solid rgba(198, 137, 40, 0.25)',
                      padding: '5px 12px',
                      borderRadius: '8px',
                      marginBottom: '12px',
                      width: 'fit-content',
                    }}
                  >
                    <span style={{ color: '#C68928', fontSize: '0.85rem' }}>❖</span>
                    <span
                      style={{
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: '#630C1E',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {gen.action}
                    </span>
                  </div>

                  <h5
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.12rem',
                      fontWeight: 700,
                      color: '#2A1F1D',
                      margin: '0 0 8px',
                      lineHeight: 1.3,
                    }}
                  >
                    {gen.title}
                  </h5>

                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: '#5C4F48',
                      lineHeight: 1.6,
                      margin: '0 0 16px',
                      flexGrow: 1,
                    }}
                  >
                    {gen.desc}
                  </p>

                  {/* Bottom Milestone Footer Pill */}
                  <div
                    style={{
                      borderTop: '1px dashed rgba(99, 12, 30, 0.15)',
                      paddingTop: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.78rem',
                      color: '#154D36',
                      fontWeight: 700,
                    }}
                  >
                    <span>✓ {gen.highlightBadge}</span>
                    <span style={{ color: '#C68928' }}>{gen.symbol}</span>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>

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
