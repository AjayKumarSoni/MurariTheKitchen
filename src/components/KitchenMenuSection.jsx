import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, Search, Plus, Check, Flame, Users, Sparkles, Package } from 'lucide-react';
import { KITCHEN_CATEGORIES, KITCHEN_MENU } from '../data/kitchenMenu';

export default function KitchenMenuSection({ onAddToCart, currency = 'INR' }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [orderType, setOrderType] = useState('dine-in'); // 'dine-in' or 'parcel'
  const [addedItems, setAddedItems] = useState({});

  const currencyRate = currency === 'USD' ? 0.012 : currency === 'GBP' ? 0.0095 : 1;
  const currencySymbol = currency === 'USD' ? '$' : currency === 'GBP' ? '£' : '₹';

  const filteredMenu = KITCHEN_MENU.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddItem = (dish) => {
    const parcelExtra = orderType === 'parcel' ? 10 : 0;
    const finalPrice = dish.price + parcelExtra;
    
    onAddToCart({
      id: dish.id,
      name: `${dish.name} (${orderType === 'parcel' ? 'Takeaway Parcel' : 'Dine-In'})`,
      price: finalPrice,
      selectedWeight: orderType === 'parcel' ? 'Parcel (Incl ₹10 Pack)' : 'Fresh Dine-in',
      image: dish.image,
      category: 'kitchen',
      isVeg: true,
    });

    setAddedItems((prev) => ({ ...prev, [dish.id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [dish.id]: false }));
    }, 1200);
  };

  return (
    <section id="kitchen" style={{ padding: '80px 0', backgroundColor: '#FAF7F2', position: 'relative' }}>
      
      {/* Decorative Emerald Subtle Ambient */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: '5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(21, 77, 54, 0.05), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Header with Murari Kitchen Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '36px' }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(21, 77, 54, 0.1)',
              border: '1px solid rgba(21, 77, 54, 0.25)',
              color: '#154D36',
              padding: '6px 16px',
              borderRadius: '999px',
              fontSize: '0.82rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '14px',
            }}
          >
            <Utensils size={15} />
            <span>Murari • The Kitchen Menu</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
              fontWeight: 600,
              color: '#630C1E',
            }}
          >
            Royal Dining & Multi-Cuisine Feast
          </h2>
          <p
            style={{
              color: '#5C4F48',
              fontSize: '1.05rem',
              maxWidth: '700px',
              margin: '8px auto 0',
            }}
          >
            Cooked fresh on order with pure spices and fresh ingredients. Enjoy dine-in or takeaway.
          </p>

          {/* Dine-In vs Parcel Toggle with Notice */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: '#FFFFFF',
              border: '1.5px solid rgba(198, 137, 40, 0.3)',
              borderRadius: '999px',
              padding: '4px',
              marginTop: '24px',
              boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
            }}
          >
            <button
              onClick={() => setOrderType('dine-in')}
              style={{
                border: 'none',
                background: orderType === 'dine-in' ? '#154D36' : 'transparent',
                color: orderType === 'dine-in' ? '#FFFFFF' : '#5C4F48',
                fontWeight: 700,
                fontSize: '0.85rem',
                padding: '8px 18px',
                borderRadius: '999px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <Utensils size={14} /> Restaurant Dine-In
            </button>
            <button
              onClick={() => setOrderType('parcel')}
              style={{
                border: 'none',
                background: orderType === 'parcel' ? '#630C1E' : 'transparent',
                color: orderType === 'parcel' ? '#FFFFFF' : '#5C4F48',
                fontWeight: 700,
                fontSize: '0.85rem',
                padding: '8px 18px',
                borderRadius: '999px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <Package size={14} /> Takeaway Parcel (+₹10)
            </button>
          </div>
          {orderType === 'parcel' && (
            <p style={{ fontSize: '0.78rem', color: '#8A152E', fontWeight: 600, marginTop: '8px' }}>
              Notice: All item parcel packaging charges ₹10 included in takeaway orders.
            </p>
          )}
        </motion.div>

        {/* Filter Controls: Search & Category Tabs */}
        <div style={{ marginBottom: '32px' }}>
          
          {/* Quick Search */}
          <div style={{ maxWidth: '480px', margin: '0 auto 24px', position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#9F6915' }} />
            <input
              type="text"
              placeholder="Search dishes (e.g. Dosa, Thali, Paneer Angara, Momos, Falooda)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px 12px 46px',
                borderRadius: '999px',
                border: '1.5px solid rgba(198, 137, 40, 0.3)',
                fontSize: '0.94rem',
                outline: 'none',
                backgroundColor: '#FFFFFF',
                color: '#231815',
                boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
              }}
            />
          </div>

          {/* Cuisine Categories Scrollbar */}
          <div
            style={{
              display: 'flex',
              gap: '8px',
              overflowX: 'auto',
              paddingBottom: '10px',
              justifyContent: 'flex-start',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {KITCHEN_CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    flexShrink: 0,
                    padding: '8px 18px',
                    borderRadius: '999px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.86rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: isSelected ? '1.5px solid #154D36' : '1px solid rgba(99, 12, 30, 0.1)',
                    backgroundColor: isSelected ? '#154D36' : '#FFFFFF',
                    color: isSelected ? '#FAF7F2' : '#3A2E2A',
                    transition: 'all 0.2s ease',
                    boxShadow: isSelected ? '0 4px 14px rgba(21, 77, 54, 0.25)' : 'none',
                  }}
                >
                  <span style={{ marginRight: '6px' }}>{cat.icon}</span>
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {filteredMenu.map((dish, idx) => {
            const isAdded = !!addedItems[dish.id];
            const parcelExtra = orderType === 'parcel' ? 10 : 0;
            const finalPrice = Math.round((dish.price + parcelExtra) * currencyRate);

            return (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{ duration: 0.45, delay: (idx % 6) * 0.05, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{
                  y: -7,
                  scale: 1.018,
                  boxShadow: '0 20px 35px -10px rgba(99, 12, 30, 0.15), 0 0 16px rgba(198, 137, 40, 0.2)',
                  borderColor: 'rgba(198, 137, 40, 0.65)',
                }}
                className="kitchen-dish-card"
                style={{
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FFFDF9 100%)',
                  borderRadius: '18px',
                  border: '1px solid rgba(99, 12, 30, 0.1)',
                  padding: '16px',
                  display: 'flex',
                  gap: '16px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'border-color 0.3s ease, background 0.3s ease',
                }}
              >
                {/* Top Subtle Gold Accent Line */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'linear-gradient(90deg, transparent, rgba(198, 137, 40, 0.5), transparent)',
                  }}
                />

                {/* Image */}
                <div
                  style={{
                    width: '108px',
                    height: '108px',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    flexShrink: 0,
                    position: 'relative',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  }}
                >
                  <img
                    src={dish.image}
                    alt={dish.name}
                    loading="lazy"
                    className="dish-thumbnail"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  />
                  <div style={{ position: 'absolute', bottom: '6px', left: '6px' }}>
                    <span className="veg-badge" style={{ width: '15px', height: '15px' }}></span>
                  </div>
                </div>

                {/* Dish Details */}
                <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  
                  {dish.isSignature && (
                    <span
                      style={{
                        fontSize: '0.66rem',
                        fontWeight: 800,
                        color: '#C68928',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <Sparkles size={11} /> Chef Signature
                    </span>
                  )}

                  <h4
                    style={{
                      fontSize: '0.98rem',
                      fontWeight: 700,
                      color: '#231815',
                      lineHeight: 1.25,
                      marginBottom: '4px',
                    }}
                  >
                    {dish.name}
                  </h4>

                  <p
                    style={{
                      fontSize: '0.78rem',
                      color: '#6C5E57',
                      lineHeight: 1.4,
                      marginBottom: '8px',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {dish.description}
                  </p>

                  {/* Micro Tags (Serves, Spice) */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.72rem', color: '#7E6E67', marginBottom: '8px' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                      <Users size={12} /> {dish.serves}
                    </span>
                    <span>•</span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', color: '#8A152E' }}>
                      <Flame size={12} /> {dish.spicy}
                    </span>
                  </div>

                  {/* Price & Add Button */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                    <div>
                      <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#154D36' }}>
                        {currencySymbol}{finalPrice}
                      </span>
                    </div>

                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleAddItem(dish)}
                      style={{
                        border: 'none',
                        borderRadius: '999px',
                        backgroundColor: isAdded ? '#154D36' : '#FAF3E3',
                        color: isAdded ? '#FFFFFF' : '#630C1E',
                        fontWeight: 700,
                        fontSize: '0.8rem',
                        padding: '6px 14px',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        transition: 'all 0.2s ease',
                        border: '1px solid rgba(198, 137, 40, 0.4)',
                      }}
                    >
                      {isAdded ? (
                        <>
                          <Check size={14} /> Added
                        </>
                      ) : (
                        <>
                          <Plus size={14} /> Add
                        </>
                      )}
                    </motion.button>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Empty Search Result State */}
        {filteredMenu.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: '#6C5E57' }}>
            <p style={{ fontSize: '1.2rem', fontWeight: 600, color: '#630C1E', marginBottom: '8px' }}>
              No dishes found matching "{searchTerm}"
            </p>
            <p style={{ fontSize: '0.9rem' }}>Try searching for Dosa, Samosa, Thali, Paneer, or Biryani.</p>
            <button
              onClick={() => { setSearchTerm(''); setActiveCategory('all'); }}
              className="btn-secondary"
              style={{ marginTop: '16px' }}
            >
              Clear Search & Show All
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
