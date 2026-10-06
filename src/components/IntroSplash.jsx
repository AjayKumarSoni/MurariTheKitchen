import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { assetUrl } from '../utils/assetUrl';

export default function IntroSplash({ onFinish }) {
  const [phase, setPhase] = useState('center'); // 'center' -> 'moving' -> 'done'

  useEffect(() => {
    // Stage 1: Display centered for 1.8s
    const timer1 = setTimeout(() => {
      setPhase('moving');
    }, 1800);

    // Stage 2: Move towards header and finish
    const timer2 = setTimeout(() => {
      setPhase('done');
      onFinish();
    }, 2800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinish]);

  if (phase === 'done') return null;

  return (
    <AnimatePresence>
      <motion.div
        className="intro-overlay"
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === 'moving' ? 0.95 : 1 }}
        exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          background: 'radial-gradient(circle at center, #FFFDF9 0%, #F5ECE0 60%, #EBDBC8 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: phase === 'moving' ? 'none' : 'auto',
          cursor: 'pointer',
        }}
        onClick={() => {
          setPhase('done');
          onFinish();
        }}
      >
        {/* Subtle Decorative Golden Rings */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1.1, opacity: [0, 0.4, 0.2] }}
          transition={{ duration: 2.2, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            width: '420px',
            height: '420px',
            borderRadius: '50%',
            border: '1.5px dashed rgba(198, 137, 40, 0.45)',
            pointerEvents: 'none',
          }}
        />

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.3, opacity: [0, 0.25, 0.1] }}
          transition={{ duration: 2.5, ease: 'easeOut', delay: 0.2 }}
          style={{
            position: 'absolute',
            width: '560px',
            height: '560px',
            borderRadius: '50%',
            border: '1px solid rgba(99, 12, 30, 0.2)',
            pointerEvents: 'none',
          }}
        />

        {/* Central Logo Container with Motion Morph */}
        <motion.div
          layoutId="murari-brand-logo"
          initial={{ scale: 0.6, opacity: 0, y: 30 }}
          animate={
            phase === 'center'
              ? { scale: 1, opacity: 1, y: 0 }
              : {
                  scale: 0.35,
                  x: typeof window !== 'undefined' ? -window.innerWidth * 0.38 : -400,
                  y: typeof window !== 'undefined' ? -window.innerHeight * 0.42 : -300,
                  opacity: 0.9,
                }
          }
          transition={{
            duration: phase === 'center' ? 0.9 : 0.85,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 10,
          }}
        >
          <img
            src={assetUrl('/murari-logo-clean.png')}
            alt="Murari Royal Sweets & Kitchen"
            style={{
              width: '320px',
              maxWidth: '85vw',
              height: 'auto',
              filter: 'drop-shadow(0 14px 35px rgba(99, 12, 30, 0.25))',
            }}
          />

          {phase === 'center' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              style={{
                textAlign: 'center',
                marginTop: '18px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.25rem',
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: '#630C1E',
                  fontWeight: 600,
                }}
              >
                Royal Sweets & Heritage Dining
              </p>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  marginTop: '8px',
                }}
              >
                <span style={{ width: '40px', height: '1px', background: 'rgba(198, 137, 40, 0.5)' }}></span>
                <span style={{ color: '#C68928', fontSize: '0.8rem' }}>✦ ESTD. 1974 ✦</span>
                <span style={{ width: '40px', height: '1px', background: 'rgba(198, 137, 40, 0.5)' }}></span>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Skip Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          whileHover={{ opacity: 1, scale: 1.05 }}
          style={{
            position: 'absolute',
            bottom: '36px',
            background: 'none',
            border: 'none',
            color: '#6C5E57',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.85rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            padding: '8px 16px',
          }}
          onClick={(e) => {
            e.stopPropagation();
            setPhase('done');
            onFinish();
          }}
        >
          Click anywhere or Skip →
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
}
