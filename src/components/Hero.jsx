import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Clock, Award, Leaf, Volume2, VolumeX, Play } from 'lucide-react';
import { assetUrl } from '../utils/assetUrl';

export default function Hero({ onExploreSweets, onExploreKitchen, onExploreReels }) {
  const [isMuted, setIsMuted] = useState(true);
  const [isHoverFlipped, setIsHoverFlipped] = useState(false);
  const videoRef = useRef(null);
  const trustBadges = [
    { icon: <Award size={20} />, label: '100% Pure Desi Ghee', sub: 'Traditional Bilona Churned' },
    { icon: <ShieldCheck size={20} />, label: 'Lab-Tested Ingredients', sub: 'Zero Adulteration Guarantee' },
    { icon: <Clock size={20} />, label: 'Freshly Prepared Daily', sub: 'Handcrafted Every Morning' },
    { icon: <Leaf size={20} />, label: 'Zero Artificial Preservatives', sub: 'Authentic Natural Taste' },
  ];

  return (
    <section id="home" style={{ position: 'relative', overflow: 'hidden', paddingTop: '32px' }}>
      
      {/* Hero Main Content */}
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: '48px',
            minHeight: '620px',
            padding: '24px 0 60px',
          }}
        >
          {/* Left Column: Copy & CTAs */}
          <motion.div
            className="hero-text-col"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '999px',
                backgroundColor: 'rgba(198, 137, 40, 0.12)',
                border: '1px solid rgba(198, 137, 40, 0.35)',
                color: '#9F6915',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              <Sparkles size={14} style={{ color: '#C68928' }} />
              <span>Royal Heritage Confectionery & Dining</span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.8rem, 5vw, 4.4rem)',
                lineHeight: 1.08,
                fontWeight: 600,
                color: '#630C1E',
                marginBottom: '22px',
              }}
            >
              Tradition, <br />
              <span
                style={{
                  fontStyle: 'italic',
                  color: '#C68928',
                  backgroundImage: 'linear-gradient(135deg, #C68928 0%, #E7AB48 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Crafted Into
              </span>{' '}
              Every Bite.
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.3vw, 1.18rem)',
                color: '#5C4F48',
                lineHeight: 1.6,
                maxWidth: '520px',
                marginBottom: '32px',
              }}
            >
              Fresh sweets made with 100% pure desi cow ghee, crispy namkeens, and delicious food. Made fresh every day with authentic taste and love.
            </p>

            {/* CTAs */}
            <div className="hero-cta-group" style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={onExploreSweets}
                className="btn-primary"
                style={{ fontSize: '0.96rem', padding: '13px 28px' }}
              >
                <span>Explore Sweets</span>
                <ArrowRight size={18} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={onExploreKitchen}
                className="btn-secondary"
                style={{ fontSize: '0.96rem', padding: '13px 24px' }}
              >
                <span>The Kitchen Menu</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={onExploreReels}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(99, 12, 30, 0.08)',
                  border: '1.5px solid rgba(231, 171, 72, 0.4)',
                  color: '#630C1E',
                  padding: '12px 20px',
                  borderRadius: '9999px',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
              >
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#E53E3E', display: 'inline-block', boxShadow: '0 0 8px #E53E3E' }}></span>
                <span>Watch Live Reels</span>
              </motion.button>
            </div>

            {/* Micro Stats */}
            <div
              className="hero-stats-group"
              style={{
                display: 'flex',
                gap: '28px',
                marginTop: '40px',
                paddingTop: '24px',
                borderTop: '1px solid rgba(99, 12, 30, 0.1)',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 700, color: '#630C1E' }}>50+ Yrs</p>
                <p style={{ fontSize: '0.8rem', color: '#6C5E57', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Heritage Legacy</p>
              </div>
              <div style={{ width: '1px', background: 'rgba(99, 12, 30, 0.12)' }}></div>
              <div>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 700, color: '#630C1E' }}>100%</p>
                <p style={{ fontSize: '0.8rem', color: '#6C5E57', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Pure Desi Ghee</p>
              </div>
              <div style={{ width: '1px', background: 'rgba(99, 12, 30, 0.12)' }}></div>
              <div>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 700, color: '#630C1E' }}>4.9★</p>
                <p style={{ fontSize: '0.8rem', color: '#6C5E57', textTransform: 'uppercase', letterSpacing: '0.06em' }}>50,000+ Happy Patrons</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Masterpiece with Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            {/* Background Radial Glow */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle, rgba(198, 137, 40, 0.22) 0%, rgba(99, 12, 30, 0.05) 60%, transparent 80%)',
                zIndex: 0,
                borderRadius: '50%',
                filter: 'blur(40px)',
              }}
            />

            {/* Interactive 3D Flip Container: Video on Front, Mascot on Back */}
            <div
              onMouseEnter={() => setIsHoverFlipped(true)}
              onMouseLeave={() => setIsHoverFlipped(false)}
              style={{
                position: 'relative',
                zIndex: 1,
                perspective: '1200px',
                cursor: 'pointer',
              }}
            >
              {/* Flip Hint Indicator */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  marginBottom: '10px',
                }}
              >
                <span
                  style={{
                    backgroundColor: isHoverFlipped ? 'rgba(99, 12, 30, 0.9)' : 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid rgba(198, 137, 40, 0.4)',
                    color: isHoverFlipped ? '#F3C363' : '#630C1E',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '4px 14px',
                    borderRadius: '999px',
                    letterSpacing: '0.04em',
                    boxShadow: '0 4px 14px rgba(64, 6, 18, 0.08)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {isHoverFlipped ? '✦ Mouse Hataiye Video Wapas Dekhne Ke Liye' : '✨ Hover Mouse To Reveal Surprise Art!'}
                </span>
              </div>

              {/* Flipping 3D Inner Wrapper */}
              <div
                className="hero-flip-card-wrapper"
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '500px',
                  transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
                  transformStyle: 'preserve-3d',
                  transform: isHoverFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {/* FRONT SIDE: Royal Gilded Frame with Video */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    borderRadius: '30px',
                    padding: '8px',
                    background: 'linear-gradient(135deg, #ECC876 0%, #A26B18 25%, #ECC876 50%, #7A4907 75%, #F7DC9A 100%)',
                    boxShadow: '0 25px 60px rgba(64, 6, 18, 0.28), 0 0 35px rgba(198, 137, 40, 0.25)',
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                      borderRadius: '24px',
                      overflow: 'hidden',
                      backgroundColor: '#1A060C',
                      border: '2px solid rgba(255, 255, 255, 0.2)',
                      height: '100%',
                    }}
                  >
                    <video
                      ref={videoRef}
                      src={assetUrl('/reels/front.mp4')}
                      autoPlay
                      loop
                      muted={isMuted}
                      playsInline
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />

                    {/* Top Gold Corner Filigree Accents */}
                    <span style={{ position: 'absolute', top: '12px', left: '14px', color: '#F3C363', fontSize: '1rem', textShadow: '0 1px 4px rgba(0,0,0,0.8)', zIndex: 3 }}>❖</span>
                    <span style={{ position: 'absolute', top: '12px', right: '54px', color: '#F3C363', fontSize: '1rem', textShadow: '0 1px 4px rgba(0,0,0,0.8)', zIndex: 3 }}>❖</span>

                    {/* Mute/Unmute Audio Toggle */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (videoRef.current) {
                          videoRef.current.muted = !isMuted;
                          setIsMuted(!isMuted);
                        }
                      }}
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        zIndex: 4,
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(35, 12, 18, 0.75)',
                        backdropFilter: 'blur(6px)',
                        border: '1px solid rgba(243, 195, 99, 0.4)',
                        color: '#F3C363',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                      title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                    >
                      {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                    </button>

                    {/* Gradient Overlay for Text Readability */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(22, 4, 8, 0.88) 0%, rgba(22, 4, 8, 0.25) 45%, transparent 70%)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        padding: '24px',
                        color: '#FFFFFF',
                        pointerEvents: 'none',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                        <span className="veg-badge" style={{ backgroundColor: '#FFFFFF' }}></span>
                        <span style={{ fontSize: '0.78rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F3C363', fontWeight: 800 }}>
                          ✦ Murari Royal Heritage Film
                        </span>
                      </div>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', color: '#FFFFFF', fontWeight: 600, lineHeight: 1.2 }}>
                        MURARI • Sweets & Multi-Cuisine
                      </h3>
                      <p style={{ fontSize: '0.86rem', color: 'rgba(255, 255, 255, 0.88)', marginTop: '4px' }}>
                        Handcrafted with pure cow ghee & daily fresh love in Raigarh
                      </p>
                    </div>
                  </div>
                </div>

                {/* BACK SIDE: Royal Gilded Frame with Mascot Image */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    borderRadius: '30px',
                    padding: '8px',
                    background: 'linear-gradient(135deg, #ECC876 0%, #A26B18 25%, #ECC876 50%, #7A4907 75%, #F7DC9A 100%)',
                    boxShadow: '0 25px 60px rgba(64, 6, 18, 0.28), 0 0 35px rgba(198, 137, 40, 0.25)',
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                      borderRadius: '24px',
                      overflow: 'hidden',
                      backgroundColor: '#FAF5EE',
                      border: '2px solid rgba(255, 255, 255, 0.2)',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <img
                      src={assetUrl('/murari-hero-flip.png')}
                      alt="Mere Bachche Garmi Se Mehfooz Rehna Hai? Chalo Murari Chalein"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        backgroundColor: '#F3EFE6',
                        display: 'block',
                      }}
                    />

                    {/* Bottom Floating Tag */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '12px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: 'rgba(99, 12, 30, 0.92)',
                        backdropFilter: 'blur(8px)',
                        color: '#F3C363',
                        padding: '6px 18px',
                        borderRadius: '999px',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        whiteSpace: 'nowrap',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                        border: '1px solid rgba(243, 195, 99, 0.4)',
                      }}
                    >
                      ✦ "Chalo Murari Chalein!"
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Accent Badge 1: Mysore Pak */}
            <motion.div
              className="hero-floating-badge"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: '-15px',
                right: '-15px',
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '12px 18px',
                boxShadow: '0 12px 30px rgba(64, 6, 18, 0.15)',
                border: '1px solid rgba(198, 137, 40, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                zIndex: 2,
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #FAF3E3 0%, #F5ECE0 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#C68928',
                }}
              >
                <Sparkles size={20} />
              </div>
              <div>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#C68928', textTransform: 'uppercase' }}>Royal Special</p>
                <p style={{ fontSize: '0.92rem', fontWeight: 700, color: '#630C1E' }}>Ghee Mysore Pak</p>
              </div>
            </motion.div>

            {/* Floating Accent Badge 2: Daily Fresh */}
            <motion.div
              className="hero-floating-badge"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '-15px',
                background: '#154D36',
                color: '#FAF7F2',
                borderRadius: '16px',
                padding: '14px 20px',
                boxShadow: '0 12px 30px rgba(21, 77, 54, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                zIndex: 2,
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#65E39E',
                }}
              >
                <ShieldCheck size={20} />
              </div>
              <div>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#65E39E', textTransform: 'uppercase' }}>100% Pavitra</p>
                <p style={{ fontSize: '0.9rem', fontWeight: 600 }}>Pure Vegetarian</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Anandhaas-Inspired Trust Highlights Ribbon */}
        <div
          style={{
            background: 'linear-gradient(135deg, #154D36 0%, #0F3827 100%)',
            borderRadius: '20px',
            padding: '24px 32px',
            color: '#FFFFFF',
            boxShadow: '0 14px 40px rgba(21, 77, 54, 0.25)',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '20px',
              alignItems: 'center',
            }}
          >
            {trustBadges.map((badge, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '8px 12px',
                  borderRight: idx !== trustBadges.length - 1 ? '1px solid rgba(255, 255, 255, 0.15)' : 'none',
                }}
                className="trust-item"
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#F3C363',
                    flexShrink: 0,
                  }}
                >
                  {badge.icon}
                </div>
                <div>
                  <p style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.2 }}>
                    {badge.label}
                  </p>
                  <p style={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.75)', marginTop: '2px' }}>
                    {badge.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .trust-item {
            border-right: none !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.12);
            padding-bottom: 14px;
          }
        }
      `}</style>
    </section>
  );
}
