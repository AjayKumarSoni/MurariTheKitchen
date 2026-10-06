import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight, Phone, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';
import { REELS_DATA } from '../data/reels';

export default function ReelShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const videoRef = useRef(null);
  const progressTimerRef = useRef(null);
  const stripScrollRef = useRef(null);

  const totalReels = REELS_DATA.length;
  const activeReel = REELS_DATA[currentIndex % totalReels];

  // Auto-advance reels every 7 seconds when playing
  useEffect(() => {
    setProgress(0);
    clearInterval(progressTimerRef.current);

    if (isPlaying) {
      const intervalMs = 100;
      const totalDurationMs = 7000;
      const step = (intervalMs / totalDurationMs) * 100;

      progressTimerRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            handleNext();
            return 0;
          }
          return prev + step;
        });
      }, intervalMs);
    }

    return () => clearInterval(progressTimerRef.current);
  }, [currentIndex, isPlaying]);

  // Center active thumbnail in filmstrip WITHOUT scrolling the browser window
  useEffect(() => {
    if (stripScrollRef.current) {
      const container = stripScrollRef.current;
      const activeThumb = container.children[currentIndex];
      if (activeThumb) {
        const scrollTarget = activeThumb.offsetLeft - (container.clientWidth / 2) + (activeThumb.clientWidth / 2);
        container.scrollTo({ left: scrollTarget, behavior: 'smooth' });
      }
    }
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalReels);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalReels) % totalReels);
  };

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleToggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Helper to safely get wrapped index items
  const getItemAt = (offset) => {
    return REELS_DATA[(currentIndex + offset + totalReels) % totalReels];
  };

  return (
    <section
      id="reels"
      style={{
        padding: '90px 0 80px',
        background: 'linear-gradient(180deg, #130307 0%, #290812 50%, #110205 100%)',
        color: '#FAF7F2',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Golden Ambient Glow Behind Stage */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '900px',
          height: '500px',
          background: 'radial-gradient(ellipse at center, rgba(198, 137, 40, 0.2) 0%, rgba(99, 12, 30, 0.08) 60%, transparent 80%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(198, 137, 40, 0.15)',
              border: '1px solid rgba(198, 137, 40, 0.35)',
              color: '#F3C363',
              padding: '6px 18px',
              borderRadius: '999px',
              fontSize: '0.8rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              marginBottom: '14px',
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#E53E3E', display: 'inline-block', boxShadow: '0 0 10px #E53E3E' }}></span>
            <span>Murari Raigarh • Official Brand Reels ({totalReels} Films)</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
              fontWeight: 600,
              color: '#FAF7F2',
              lineHeight: 1.15,
            }}
          >
            Experience The Murari Magic
          </h2>

          <p
            style={{
              color: 'rgba(250, 247, 242, 0.82)',
              fontSize: '1.05rem',
              maxWidth: '680px',
              margin: '8px auto 0',
            }}
          >
            Explore live kitchen energy, authentic traditional bilona sweets, and festive family dining captured straight from our Raigarh outlets.
          </p>

          {/* Social Badges */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '16px', flexWrap: 'wrap' }}>
            <a
              href="https://www.instagram.com/murarithekitchen/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#E7AB48',
                fontSize: '0.84rem',
                fontWeight: 600,
                textDecoration: 'none',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                padding: '6px 16px',
                borderRadius: '999px',
                border: '1px solid rgba(231, 171, 72, 0.35)',
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              <span>Follow @murarithekitchen</span>
              <ExternalLink size={12} />
            </a>

            <a
              href="tel:+917805939822"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#FAF7F2',
                fontSize: '0.84rem',
                fontWeight: 600,
                textDecoration: 'none',
                backgroundColor: '#154D36',
                padding: '6px 16px',
                borderRadius: '999px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
              }}
            >
              <Phone size={13} />
              <span>Call 078059 39822</span>
            </a>
          </div>
        </div>

        {/* 3D Perspective Stage */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            perspective: '1400px',
            minHeight: '600px',
            padding: '20px 0',
          }}
        >
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="reel-arrow-left"
            style={{
              position: 'absolute',
              left: 'clamp(10px, 3vw, 40px)',
              zIndex: 35,
              backgroundColor: 'rgba(18, 5, 8, 0.75)',
              border: '1.5px solid rgba(231, 171, 72, 0.5)',
              color: '#FAF7F2',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 8px 30px rgba(0,0,0,0.6)',
              transition: 'all 0.2s ease',
            }}
            aria-label="Previous Brand Reel"
          >
            <ChevronLeft size={26} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="reel-arrow-right"
            style={{
              position: 'absolute',
              right: 'clamp(10px, 3vw, 40px)',
              zIndex: 35,
              backgroundColor: 'rgba(18, 5, 8, 0.75)',
              border: '1.5px solid rgba(231, 171, 72, 0.5)',
              color: '#FAF7F2',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 8px 30px rgba(0,0,0,0.6)',
              transition: 'all 0.2s ease',
            }}
            aria-label="Next Brand Reel"
          >
            <ChevronRight size={26} />
          </button>

          {/* Layered 3D Cards */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              maxWidth: '1050px',
              position: 'relative',
            }}
          >
            {/* Outer Left Card (-2) */}
            <div
              onClick={() => setCurrentIndex((prev) => (prev - 2 + totalReels) % totalReels)}
              style={{
                position: 'absolute',
                left: '2%',
                width: '210px',
                height: '400px',
                borderRadius: '20px',
                overflow: 'hidden',
                transform: 'rotateY(32deg) scale(0.72)',
                opacity: 0.25,
                filter: 'blur(3px) brightness(60%)',
                zIndex: 3,
                cursor: 'pointer',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'none',
                lgDisplay: 'block',
                transition: 'all 0.4s ease',
              }}
              className="reel-card-outer-left"
            >
              <img
                src={getItemAt(-2).poster}
                alt={getItemAt(-2).title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Inner Left Card (-1) */}
            <div
              onClick={handlePrev}
              style={{
                position: 'absolute',
                left: '12%',
                width: '260px',
                height: '480px',
                borderRadius: '24px',
                overflow: 'hidden',
                transform: 'rotateY(24deg) scale(0.84)',
                opacity: 0.55,
                filter: 'blur(1.5px) brightness(80%)',
                zIndex: 8,
                cursor: 'pointer',
                border: '1.5px solid rgba(231, 171, 72, 0.25)',
                display: 'none',
                mdDisplay: 'block',
                transition: 'all 0.4s ease',
              }}
              className="reel-card-inner-left"
            >
              <img
                src={getItemAt(-1).poster}
                alt={getItemAt(-1).title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)',
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'flex-end',
                }}
              >
                <p style={{ fontSize: '0.88rem', fontWeight: 700, color: '#FAF7F2' }}>
                  {getItemAt(-1).title}
                </p>
              </div>
            </div>

            {/* Central Active Reel Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeReel.id}
                initial={{ opacity: 0, scale: 0.92, rotateY: 15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.92, rotateY: -15 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: 'relative',
                  width: '330px',
                  maxWidth: '85vw',
                  height: '580px',
                  borderRadius: '28px',
                  overflow: 'hidden',
                  backgroundColor: '#000000',
                  boxShadow: '0 30px 80px rgba(0, 0, 0, 0.9), 0 0 40px rgba(198, 137, 40, 0.35)',
                  border: '2.5px solid rgba(231, 171, 72, 0.6)',
                  zIndex: 25,
                  cursor: 'pointer',
                }}
                onClick={handleTogglePlay}
              >
                {/* Top Story Progress Bar */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '14px',
                    right: '14px',
                    height: '3.5px',
                    backgroundColor: 'rgba(255, 255, 255, 0.25)',
                    borderRadius: '2px',
                    overflow: 'hidden',
                    zIndex: 30,
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: `${progress}%`,
                      backgroundColor: '#F3C363',
                      transition: 'width 0.1s linear',
                    }}
                  />
                </div>

                {/* Top Header: Badge, Reel Number & Sound Toggle */}
                <div
                  style={{
                    position: 'absolute',
                    top: '24px',
                    left: '14px',
                    right: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    zIndex: 30,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span
                      style={{
                        backgroundColor: '#630C1E',
                        color: '#F3C363',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        padding: '4px 10px',
                        borderRadius: '999px',
                        letterSpacing: '0.04em',
                        border: '1px solid rgba(231, 171, 72, 0.4)',
                      }}
                    >
                      {activeReel.badge}
                    </span>
                    <span
                      style={{
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        color: '#FAF7F2',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        padding: '4px 8px',
                        borderRadius: '999px',
                      }}
                    >
                      {currentIndex + 1} / {totalReels}
                    </span>
                  </div>

                  <button
                    onClick={handleToggleMute}
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.65)',
                      border: '1px solid rgba(255, 255, 255, 0.25)',
                      color: '#FFFFFF',
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}
                    title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
                  >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </button>
                </div>

                {/* Active Reel Video Player */}
                <video
                  ref={videoRef}
                  src={activeReel.videoSrc}
                  poster={activeReel.poster}
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

                {/* Play/Pause Overlay indicator when paused */}
                {!isPlaying && (
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(0,0,0,0.45)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 28,
                    }}
                  >
                    <div
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(231, 171, 72, 0.9)',
                        color: '#120508',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                      }}
                    >
                      <Play size={30} style={{ marginLeft: '4px' }} />
                    </div>
                  </div>
                )}

                {/* Bottom Shadow Gradient */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.92) 0%, rgba(0, 0, 0, 0.45) 45%, transparent 75%)',
                    pointerEvents: 'none',
                    zIndex: 26,
                  }}
                />

                {/* Bottom Advertisement Content & Call-to-Action */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '16px',
                    right: '16px',
                    zIndex: 30,
                  }}
                >
                  <p
                    style={{
                      fontSize: '0.76rem',
                      fontWeight: 700,
                      color: '#F3C363',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      marginBottom: '3px',
                    }}
                  >
                    {activeReel.tag}
                  </p>

                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.45rem',
                      color: '#FAF7F2',
                      lineHeight: 1.2,
                      marginBottom: '4px',
                    }}
                  >
                    {activeReel.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.84rem',
                      color: 'rgba(250, 247, 242, 0.85)',
                      lineHeight: 1.4,
                      marginBottom: '16px',
                    }}
                  >
                    {activeReel.tagline}
                  </p>

                  {/* Brand Action Buttons */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    <a
                      href="https://wa.me/917805939822?text=Hello%20Murari%2C%20I%20saw%20your%20reels%20and%20want%20to%20order%20food%20in%20Raigarh."
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        backgroundColor: '#25D366',
                        color: '#FFFFFF',
                        border: 'none',
                        borderRadius: '10px',
                        padding: '10px',
                        fontWeight: 700,
                        fontSize: '0.8rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        textDecoration: 'none',
                      }}
                    >
                      <MessageCircle size={15} />
                      <span>WhatsApp</span>
                    </a>

                    <a
                      href="tel:+917805939822"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        backgroundColor: '#F4CB4A',
                        color: '#120508',
                        border: 'none',
                        borderRadius: '10px',
                        padding: '10px',
                        fontWeight: 800,
                        fontSize: '0.8rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        textDecoration: 'none',
                      }}
                    >
                      <Phone size={14} />
                      <span>Call Order</span>
                    </a>
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>

            {/* Inner Right Card (+1) */}
            <div
              onClick={handleNext}
              style={{
                position: 'absolute',
                right: '12%',
                width: '260px',
                height: '480px',
                borderRadius: '24px',
                overflow: 'hidden',
                transform: 'rotateY(-24deg) scale(0.84)',
                opacity: 0.55,
                filter: 'blur(1.5px) brightness(80%)',
                zIndex: 8,
                cursor: 'pointer',
                border: '1.5px solid rgba(231, 171, 72, 0.25)',
                display: 'none',
                mdDisplay: 'block',
                transition: 'all 0.4s ease',
              }}
              className="reel-card-inner-right"
            >
              <img
                src={getItemAt(1).poster}
                alt={getItemAt(1).title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)',
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'flex-end',
                }}
              >
                <p style={{ fontSize: '0.88rem', fontWeight: 700, color: '#FAF7F2' }}>
                  {getItemAt(1).title}
                </p>
              </div>
            </div>

            {/* Outer Right Card (+2) */}
            <div
              onClick={() => setCurrentIndex((prev) => (prev + 2) % totalReels)}
              style={{
                position: 'absolute',
                right: '2%',
                width: '210px',
                height: '400px',
                borderRadius: '20px',
                overflow: 'hidden',
                transform: 'rotateY(-32deg) scale(0.72)',
                opacity: 0.25,
                filter: 'blur(3px) brightness(60%)',
                zIndex: 3,
                cursor: 'pointer',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'none',
                lgDisplay: 'block',
                transition: 'all 0.4s ease',
              }}
              className="reel-card-outer-right"
            >
              <img
                src={getItemAt(2).poster}
                alt={getItemAt(2).title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        {/* 16-Reel Horizontal Filmstrip Selector */}
        <div style={{ marginTop: '20px' }}>
          <p
            style={{
              textAlign: 'center',
              fontSize: '0.78rem',
              fontWeight: 700,
              color: '#F3C363',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            Select Any Brand Film ({currentIndex + 1} of {totalReels})
          </p>

          <div
            ref={stripScrollRef}
            style={{
              display: 'flex',
              gap: '10px',
              overflowX: 'auto',
              padding: '10px 4px 16px',
              WebkitOverflowScrolling: 'touch',
              justifyContent: 'flex-start',
            }}
          >
            {REELS_DATA.map((reel, idx) => {
              const isActive = currentIndex === idx;
              return (
                <button
                  key={reel.id}
                  onClick={() => setCurrentIndex(idx)}
                  style={{
                    flexShrink: 0,
                    width: '74px',
                    height: '110px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    position: 'relative',
                    border: isActive ? '2px solid #F3C363' : '1px solid rgba(255, 255, 255, 0.15)',
                    transform: isActive ? 'scale(1.08)' : 'scale(1)',
                    boxShadow: isActive ? '0 0 16px rgba(243, 195, 99, 0.5)' : 'none',
                    cursor: 'pointer',
                    backgroundColor: '#1C060B',
                    padding: 0,
                    transition: 'all 0.25s ease',
                  }}
                  title={reel.title}
                >
                  <img
                    src={reel.poster}
                    alt={reel.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: isActive ? 1 : 0.65,
                    }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '4px',
                      left: '4px',
                      backgroundColor: isActive ? '#630C1E' : 'rgba(0,0,0,0.7)',
                      color: isActive ? '#F3C363' : '#FAF7F2',
                      fontSize: '0.62rem',
                      fontWeight: 800,
                      padding: '2px 5px',
                      borderRadius: '4px',
                    }}
                  >
                    #{idx + 1}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      <style>{`
        @media (min-width: 768px) {
          .reel-card-inner-left, .reel-card-inner-right {
            display: block !important;
          }
        }
        @media (min-width: 1024px) {
          .reel-card-outer-left, .reel-card-outer-right {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
}
