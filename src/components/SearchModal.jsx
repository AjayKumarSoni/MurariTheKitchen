import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Plus, Check } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { KITCHEN_MENU } from '../data/kitchenMenu';

export default function SearchModal({ isOpen, onClose, onAddToCart, currency = 'INR' }) {
  const [query, setQuery] = useState('');
  const [addedItemIds, setAddedItemIds] = useState({});

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const currencyRate = currency === 'USD' ? 0.012 : currency === 'GBP' ? 0.0095 : 1;
  const currencySymbol = currency === 'USD' ? '$' : currency === 'GBP' ? '£' : '₹';

  // Combine products and kitchen dishes for universal search
  const allSearchable = [
    ...PRODUCTS.map(p => ({ ...p, type: 'sweet', displayCategory: 'Confectionery' })),
    ...KITCHEN_MENU.map(k => ({ ...k, type: 'kitchen', displayCategory: 'Kitchen Dining', basePrice: k.price }))
  ];

  const searchResults = query.trim() === ''
    ? allSearchable.slice(0, 6)
    : allSearchable.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(query.toLowerCase()))
      );

  const handleAdd = (item) => {
    onAddToCart({
      id: item.id,
      name: item.name,
      price: item.basePrice || item.price,
      selectedWeight: item.weights ? item.weights[0].label : 'Standard',
      image: item.image,
      category: item.category,
      isVeg: true,
    });

    setAddedItemIds(prev => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds(prev => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  const quickPills = ['Mysore Pak', 'Gulkand', 'Mixture', 'Murukku', 'Dosa', 'Thali', 'Biryani', 'Ladoo'];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        backgroundColor: 'rgba(18, 5, 8, 0.75)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '60px 20px',
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.94, opacity: 0, y: -20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.94, opacity: 0, y: -20 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          width: '100%',
          maxWidth: '680px',
          maxHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
          overflow: 'hidden',
        }}
      >
        {/* Search Input Bar */}
        <div
          style={{
            padding: '20px 24px',
            borderBottom: '1px solid rgba(99, 12, 30, 0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            backgroundColor: '#FAF7F2',
          }}
        >
          <Search size={22} style={{ color: '#C68928' }} />
          <input
            autoFocus
            type="text"
            placeholder="Search sweets, savouries, thalis, or kitchen delicacies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              width: '100%',
              border: 'none',
              background: 'none',
              outline: 'none',
              fontSize: '1.1rem',
              color: '#231815',
              fontFamily: 'var(--font-sans)',
            }}
          />
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#7E6E67',
              padding: '4px',
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Quick Suggestion Chips */}
        <div style={{ padding: '12px 24px', backgroundColor: '#F6EFE6', display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: '0.76rem', fontWeight: 700, color: '#630C1E', textTransform: 'uppercase' }}>Popular:</span>
          {quickPills.map((pill) => (
            <button
              key={pill}
              onClick={() => setQuery(pill)}
              style={{
                background: '#FFFFFF',
                border: '1px solid #D9CDBF',
                borderRadius: '999px',
                padding: '3px 10px',
                fontSize: '0.78rem',
                color: '#4A3D36',
                cursor: 'pointer',
              }}
            >
              {pill}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div style={{ padding: '20px 24px', overflowY: 'auto', flexGrow: 1 }}>
          {searchResults.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px 10px', color: '#7E6E67' }}>
              <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#630C1E', marginBottom: '6px' }}>
                No delicacies found for "{query}"
              </p>
              <p style={{ fontSize: '0.86rem' }}>Try searching for Mysore Pak, Mixture, Dosa, or Thali.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {searchResults.map((item) => {
                const isAdded = !!addedItemIds[item.id];
                const price = Math.round((item.basePrice || item.price) * currencyRate);

                return (
                  <div
                    key={item.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      padding: '10px 14px',
                      borderRadius: '12px',
                      backgroundColor: '#FAF7F2',
                      border: '1px solid rgba(99, 12, 30, 0.06)',
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: '54px',
                        height: '54px',
                        borderRadius: '8px',
                        objectFit: 'cover',
                      }}
                    />

                    <div style={{ flexGrow: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ fontSize: '0.68rem', fontWeight: 800, color: '#C68928', textTransform: 'uppercase' }}>
                          {item.displayCategory}
                        </span>
                      </div>
                      <h4 style={{ fontSize: '0.94rem', fontWeight: 700, color: '#231815' }}>
                        {item.name}
                      </h4>
                      <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#154D36' }}>
                        {currencySymbol}{price}
                      </span>
                    </div>

                    <button
                      onClick={() => handleAdd(item)}
                      style={{
                        backgroundColor: isAdded ? '#154D36' : '#F4CB4A',
                        color: isAdded ? '#FFFFFF' : '#231815',
                        border: 'none',
                        borderRadius: '999px',
                        padding: '6px 14px',
                        fontWeight: 700,
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      {isAdded ? <Check size={14} /> : <Plus size={14} />}
                      {isAdded ? 'Added' : 'Add'}
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

      </motion.div>
    </div>
  );
}
