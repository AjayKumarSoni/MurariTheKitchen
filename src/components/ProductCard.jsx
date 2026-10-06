import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Eye, Plus, Check } from 'lucide-react';

export default function ProductCard({ product, onAddToCart, onQuickView, currency = 'INR' }) {
  const [selectedWeightIdx, setSelectedWeightIdx] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  const currentWeight = product.weights ? product.weights[selectedWeightIdx] : null;
  const currentPrice = currentWeight ? currentWeight.price : product.basePrice;

  // Currency multiplier
  const currencyRate = currency === 'USD' ? 0.012 : currency === 'GBP' ? 0.0095 : 1;
  const currencySymbol = currency === 'USD' ? '$' : currency === 'GBP' ? '£' : '₹';
  const displayPrice = Math.round(currentPrice * currencyRate);
  const displayOrigPrice = product.originalPrice ? Math.round(product.originalPrice * currencyRate) : null;

  const handleAdd = () => {
    onAddToCart({
      ...product,
      selectedWeight: currentWeight ? currentWeight.label : 'Standard',
      price: currentPrice,
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1400);
  };

  const isGhee = product.badge?.toLowerCase().includes('ghee');

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, boxShadow: '0 16px 32px rgba(99, 12, 30, 0.12)' }}
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid rgba(99, 12, 30, 0.1)',
        boxShadow: '0 6px 20px rgba(0,0,0,0.04)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      {/* Top Banner Stripe like Anandhaas Reference (Made with Ghee / Groundnut Oil) */}
      <div
        style={{
          backgroundColor: isGhee ? '#D6A83E' : '#154D36',
          color: '#FFFFFF',
          fontSize: '0.72rem',
          fontWeight: 800,
          letterSpacing: '0.08em',
          textAlign: 'center',
          padding: '5px 8px',
          textTransform: 'uppercase',
        }}
      >
        {product.badge || 'HANDCRAFTED FRESH'}
      </div>

      {/* Image Area with Overlay Badges */}
      <div style={{ position: 'relative', width: '100%', height: '220px', backgroundColor: '#F8F5F0', overflow: 'hidden' }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
          }}
          className="product-img"
        />

        {/* Best Seller / Tag Chip */}
        {product.tag && (
          <div
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              backgroundColor: '#154D36',
              color: '#FFFFFF',
              fontSize: '0.68rem',
              fontWeight: 800,
              padding: '3px 8px',
              borderRadius: '4px',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            {product.tag}
          </div>
        )}

        {/* Quick View Button */}
        <button
          onClick={() => onQuickView(product)}
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            border: 'none',
            borderRadius: '50%',
            width: '34px',
            height: '34px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#630C1E',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            transition: 'all 0.2s ease',
          }}
          title="Quick View Details"
        >
          <Eye size={16} />
        </button>

        {/* Veg Dot Icon on bottom right of image */}
        <div style={{ position: 'absolute', bottom: '10px', right: '12px' }}>
          <span className="veg-badge"></span>
        </div>
      </div>

      {/* Card Body */}
      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        
        {/* Product Title */}
        <h3
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1.05rem',
            fontWeight: 700,
            color: '#231815',
            lineHeight: 1.3,
            minHeight: '2.6em',
            marginBottom: '6px',
          }}
        >
          {product.name}
        </h3>

        {/* Price & Discount Tags */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#231815' }}>
            {currencySymbol}{displayPrice}
          </span>

          {displayOrigPrice && (
            <span style={{ fontSize: '0.9rem', color: '#887B75', textDecoration: 'line-through' }}>
              {currencySymbol}{displayOrigPrice}
            </span>
          )}

          {product.saveAmount && (
            <span
              style={{
                backgroundColor: '#154D36',
                color: '#FFFFFF',
                fontSize: '0.68rem',
                fontWeight: 700,
                padding: '2px 6px',
                borderRadius: '3px',
              }}
            >
              SAVE {currencySymbol}{Math.round(product.saveAmount * currencyRate)}
            </span>
          )}
        </div>

        {product.saveAmount && (
          <p style={{ color: '#B42318', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
            PRICE DROP
          </p>
        )}

        {/* Weight Selector Pills */}
        {product.weights && product.weights.length > 0 && (
          <div style={{ display: 'flex', gap: '6px', marginBottom: '14px', flexWrap: 'wrap' }}>
            {product.weights.map((w, idx) => (
              <button
                key={w.label}
                onClick={() => setSelectedWeightIdx(idx)}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  padding: '4px 10px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  border: selectedWeightIdx === idx ? '1.5px solid #231815' : '1px solid #D6CDC7',
                  backgroundColor: selectedWeightIdx === idx ? '#231815' : '#F9F7F5',
                  color: selectedWeightIdx === idx ? '#FFFFFF' : '#4A3D36',
                  transition: 'all 0.2s ease',
                }}
              >
                {w.label}
              </button>
            ))}
          </div>
        )}

        {/* Rating and Reviews */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', marginTop: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ color: '#154D36', fontSize: '0.82rem', fontWeight: 800 }}>✦ {product.rating}</span>
          </div>
          <span style={{ fontSize: '0.78rem', color: '#7E6E67' }}>({product.reviewsCount || 42})</span>
        </div>

        {/* Anandhaas-Style Golden Yellow "Add to Cart" Button */}
        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={handleAdd}
          style={{
            width: '100%',
            backgroundColor: isAdded ? '#154D36' : '#F4CB4A',
            color: isAdded ? '#FFFFFF' : '#231815',
            border: 'none',
            borderRadius: '6px',
            padding: '11px',
            fontWeight: 800,
            fontSize: '0.9rem',
            letterSpacing: '0.02em',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            transition: 'background-color 0.25s ease',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}
        >
          {isAdded ? (
            <>
              <Check size={16} />
              <span>Added to Cart</span>
            </>
          ) : (
            <>
              <Plus size={16} />
              <span>Add to cart</span>
            </>
          )}
        </motion.button>

      </div>

      <style>{`
        .product-img:hover {
          transform: scale(1.06);
        }
      `}</style>
    </motion.div>
  );
}
