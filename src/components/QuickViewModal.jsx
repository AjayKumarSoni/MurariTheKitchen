import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Plus, Minus, Check, Clock, ShieldCheck } from 'lucide-react';

export default function QuickViewModal({ product, isOpen, onClose, onAddToCart, currency = 'INR' }) {
  const [selectedWeightIdx, setSelectedWeightIdx] = useState(0);
  const [qty, setQty] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!isOpen || !product) return null;

  const currentWeight = product.weights ? product.weights[selectedWeightIdx] : null;
  const currentPrice = currentWeight ? currentWeight.price : product.basePrice;

  const currencyRate = currency === 'USD' ? 0.012 : currency === 'GBP' ? 0.0095 : 1;
  const currencySymbol = currency === 'USD' ? '$' : currency === 'GBP' ? '£' : '₹';

  const handleAdd = () => {
    onAddToCart({
      ...product,
      selectedWeight: currentWeight ? currentWeight.label : 'Standard',
      price: currentPrice,
      quantity: qty,
    });
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(18, 5, 8, 0.75)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          width: '100%',
          maxWidth: '780px',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
          position: 'relative',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: '#FAF7F2',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            cursor: 'pointer',
            color: '#6C5E57',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
        >
          <X size={20} />
        </button>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          }}
        >
          {/* Product Image */}
          <div style={{ height: '100%', minHeight: '340px', backgroundColor: '#FAF7F2', position: 'relative' }}>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            {product.badge && (
              <span
                style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  backgroundColor: '#630C1E',
                  color: '#F3C363',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  padding: '4px 12px',
                  borderRadius: '999px',
                }}
              >
                {product.badge}
              </span>
            )}
          </div>

          {/* Details */}
          <div style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span className="veg-badge"></span>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#154D36', textTransform: 'uppercase' }}>
                100% Pure Vegetarian
              </span>
            </div>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.9rem', color: '#630C1E', lineHeight: 1.2, marginBottom: '8px' }}>
              {product.name}
            </h3>

            {/* Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <div style={{ display: 'flex', color: '#B42318' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#B42318" />
                ))}
              </div>
              <span style={{ fontSize: '0.86rem', fontWeight: 700, color: '#231815' }}>{product.rating}</span>
              <span style={{ fontSize: '0.8rem', color: '#7E6E67' }}>({product.reviewsCount || 48} reviews)</span>
            </div>

            {/* Price */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <span style={{ fontSize: '1.7rem', fontWeight: 800, color: '#231815' }}>
                {currencySymbol}{Math.round(currentPrice * currencyRate)}
              </span>
              {product.originalPrice && (
                <span style={{ fontSize: '1.1rem', color: '#887B75', textDecoration: 'line-through' }}>
                  {currencySymbol}{Math.round(product.originalPrice * currencyRate)}
                </span>
              )}
            </div>

            <p style={{ fontSize: '0.9rem', color: '#5C4F48', lineHeight: 1.6, marginBottom: '20px' }}>
              {product.description}
            </p>

            {/* Weight Pills */}
            {product.weights && product.weights.length > 0 && (
              <div style={{ marginBottom: '20px' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#3A2E2A', display: 'block', marginBottom: '6px' }}>
                  Select Net Quantity / Weight:
                </label>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {product.weights.map((w, idx) => (
                    <button
                      key={w.label}
                      onClick={() => setSelectedWeightIdx(idx)}
                      style={{
                        padding: '6px 14px',
                        borderRadius: '8px',
                        border: selectedWeightIdx === idx ? '2px solid #630C1E' : '1px solid #D6CDC7',
                        backgroundColor: selectedWeightIdx === idx ? '#630C1E' : '#FFFFFF',
                        color: selectedWeightIdx === idx ? '#FFFFFF' : '#3A2E2A',
                        fontWeight: 700,
                        fontSize: '0.84rem',
                        cursor: 'pointer',
                      }}
                    >
                      {w.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Ingredients */}
            {product.ingredients && (
              <div style={{ marginBottom: '20px' }}>
                <p style={{ fontSize: '0.78rem', fontWeight: 700, color: '#630C1E', textTransform: 'uppercase', marginBottom: '6px' }}>
                  Key Ingredients:
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {product.ingredients.map((ing, i) => (
                    <span
                      key={i}
                      style={{
                        backgroundColor: '#FAF5EE',
                        border: '1px solid #EAE0D3',
                        color: '#4A3D36',
                        fontSize: '0.75rem',
                        padding: '3px 8px',
                        borderRadius: '4px',
                      }}
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart Stepper & CTA */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  border: '1.5px solid #D6CDC7',
                  borderRadius: '8px',
                  padding: '4px',
                }}
              >
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  style={{ border: 'none', background: 'none', padding: '6px 10px', cursor: 'pointer' }}
                >
                  <Minus size={15} />
                </button>
                <span style={{ fontWeight: 800, padding: '0 8px', minWidth: '24px', textAlign: 'center' }}>
                  {qty}
                </span>
                <button
                  onClick={() => setQty(qty + 1)}
                  style={{ border: 'none', background: 'none', padding: '6px 10px', cursor: 'pointer' }}
                >
                  <Plus size={15} />
                </button>
              </div>

              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={handleAdd}
                style={{
                  flexGrow: 1,
                  backgroundColor: isAdded ? '#154D36' : '#F4CB4A',
                  color: isAdded ? '#FFFFFF' : '#231815',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '13px',
                  fontWeight: 800,
                  fontSize: '0.94rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
              >
                {isAdded ? (
                  <>
                    <Check size={18} /> Added to Cart
                  </>
                ) : (
                  <>
                    <Plus size={18} /> Add to Cart ({currencySymbol}{Math.round(currentPrice * qty * currencyRate)})
                  </>
                )}
              </motion.button>
            </div>

          </div>
        </div>

      </motion.div>
    </div>
  );
}
