import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ShoppingBag } from 'lucide-react';

export default function Toast({ toast, onClose, onOpenCart }) {
  if (!toast) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 99999,
          backgroundColor: '#154D36',
          color: '#FAF7F2',
          borderRadius: '16px',
          padding: '14px 20px',
          boxShadow: '0 12px 35px rgba(21, 77, 54, 0.35)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        <CheckCircle2 size={20} style={{ color: '#65E39E' }} />
        <div>
          <p style={{ fontSize: '0.88rem', fontWeight: 700, margin: 0 }}>
            {toast.title}
          </p>
          <p style={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.8)', margin: 0 }}>
            {toast.subtitle}
          </p>
        </div>

        <button
          onClick={onOpenCart}
          style={{
            marginLeft: '8px',
            backgroundColor: '#FAF7F2',
            color: '#154D36',
            border: 'none',
            borderRadius: '999px',
            padding: '6px 14px',
            fontWeight: 800,
            fontSize: '0.78rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          <ShoppingBag size={13} />
          <span>View Cart</span>
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
