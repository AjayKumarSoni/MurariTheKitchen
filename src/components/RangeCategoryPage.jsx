import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Search, Sparkles, Filter, Check, ShoppingBag, Utensils, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../data/products';
import { KITCHEN_MENU, KITCHEN_CATEGORIES } from '../data/kitchenMenu';
import { assetUrl } from '../utils/assetUrl';

export default function RangeCategoryPage({
  initialCategoryId = 'sweets',
  onBackToHome,
  onAddToCart,
  onQuickView,
  currency = 'INR',
}) {
  const [activeCategory, setActiveCategory] = useState(initialCategoryId);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubFilter, setSelectedSubFilter] = useState('all');
  const [kitchenOrderType, setKitchenOrderType] = useState('dine-in'); // for kitchen items
  const [addedKitchenIds, setAddedKitchenIds] = useState({});
  const topScrollRef = useRef(null);

  useEffect(() => {
    setActiveCategory(initialCategoryId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [initialCategoryId]);

  const rangeCategories = [
    {
      id: 'sweets',
      name: 'Pure Ghee Sweets',
      count: '8 Products',
      subtitle: 'Slow-simmered in pure Vedic Bilona Cow Ghee',
      image: assetUrl('/items/new_sweet_5.jpg'),
      tag: '100% PURE DESI GHEE',
    },
    {
      id: 'gifting',
      name: 'Sweets Gifting',
      count: '8 Products',
      subtitle: 'Handcrafted luxury festive boxes & sweet hampers',
      image: assetUrl('/items/new_sweet_2.png'),
      tag: 'ROYAL HAMPERS',
    },
    {
      id: 'savouries',
      name: 'Traditional Savouries',
      count: '5 Products',
      subtitle: 'Cold-pressed native groundnut oil crispy namkeens',
      image: assetUrl('/items/new_savouries_1.jpg'),
      tag: 'COLD PRESSED OIL',
    },
    {
      id: 'kitchen',
      name: 'The Kitchen Dining',
      count: '14 Products',
      subtitle: 'Grand multi-cuisine delicacies, dosas & royal thalis',
      image: assetUrl('/kitchen/murari_royal_thali.jpg'),
      tag: 'MULTI-CUISINE PURE VEG',
    },
    {
      id: 'express',
      name: '₹99 Fresh Bestsellers',
      count: '4 Products',
      subtitle: 'Everyday fresh snack and sweet portions at ₹99',
      image: assetUrl('/items/new_savouries_2.jpg'),
      tag: 'DAILY FRESH VALUE',
    },
    {
      id: 'dryfruits',
      name: 'Royal Dry Fruits & Hampers',
      count: '5 Products',
      subtitle: 'Premium hand-sorted dry fruit gifting collections',
      image: assetUrl('/items/new_sweet_3.png'),
      tag: 'GOAN CASHEWS & ALMONDS',
    },
    {
      id: 'milk-delights',
      name: 'Bengali & Milk Sweets',
      count: '6 Products',
      subtitle: 'Fresh cow milk chhena cham cham, rasgulla & peda',
      image: assetUrl('/items/sweet-2.jpg'),
      tag: 'FRESH CHHENA & MAWA',
    },
  ];

  const currentRange = rangeCategories.find((r) => r.id === activeCategory) || rangeCategories[0];

  const scrollTopBar = (dir) => {
    if (topScrollRef.current) {
      topScrollRef.current.scrollBy({ left: dir === 'left' ? -260 : 260, behavior: 'smooth' });
    }
  };

  // Get products based on activeCategory
  const getCategoryItems = () => {
    if (activeCategory === 'kitchen') {
      return KITCHEN_MENU;
    }
    if (activeCategory === 'sweets') {
      return PRODUCTS.filter((p) => p.category === 'sweets');
    }
    if (activeCategory === 'savouries') {
      return PRODUCTS.filter((p) => p.category === 'savouries');
    }
    if (activeCategory === 'gifting') {
      return PRODUCTS.filter((p) => p.category === 'gifting' || p.id.includes('box') || p.id.includes('hamper'));
    }
    if (activeCategory === 'express') {
      return PRODUCTS.filter((p) => p.category === 'express' || p.basePrice <= 160);
    }
    if (activeCategory === 'dryfruits') {
      return PRODUCTS.filter((p) => p.category === 'gifting');
    }
    if (activeCategory === 'milk-delights') {
      return PRODUCTS.filter(
        (p) =>
          p.category === 'sweets' &&
          (p.name.toLowerCase().includes('cham') ||
            p.name.toLowerCase().includes('rasgulla') ||
            p.name.toLowerCase().includes('peda') ||
            p.name.toLowerCase().includes('malai') ||
            p.name.toLowerCase().includes('jamun'))
      );
    }
    return PRODUCTS;
  };

  const rawItems = getCategoryItems();

  // Apply search & subfilter
  const filteredItems = rawItems.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    if (selectedSubFilter === 'bestsellers') {
      return item.isBestSeller || item.isSignature;
    }
    if (selectedSubFilter === 'under200') {
      const price = item.basePrice || item.price || 0;
      return price <= 200;
    }
    return true;
  });

  const handleAddKitchenDish = (dish) => {
    const extra = kitchenOrderType === 'parcel' ? 10 : 0;
    const finalPrice = dish.price + extra;

    onAddToCart({
      id: dish.id,
      name: `${dish.name} (${kitchenOrderType === 'parcel' ? 'Takeaway Parcel' : 'Dine-In'})`,
      price: finalPrice,
      selectedWeight: kitchenOrderType === 'parcel' ? 'Parcel Packaging' : 'Dine-in Fresh',
      image: dish.image,
      category: 'kitchen',
      isVeg: true,
    });

    setAddedKitchenIds((prev) => ({ ...prev, [dish.id]: true }));
    setTimeout(() => {
      setAddedKitchenIds((prev) => ({ ...prev, [dish.id]: false }));
    }, 1200);
  };

  const currencyRate = currency === 'USD' ? 0.012 : currency === 'GBP' ? 0.0095 : 1;
  const currencySymbol = currency === 'USD' ? '$' : currency === 'GBP' ? '£' : '₹';

  return (
    <div style={{ backgroundColor: '#FAF7F2', minHeight: '100vh', paddingBottom: '80px' }}>
      
      {/* 1. Sticky Top Breadcrumb & Back Bar */}
      <div
        style={{
          position: 'sticky',
          top: '70px',
          zIndex: 40,
          backgroundColor: 'rgba(255, 253, 249, 0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(99, 12, 30, 0.12)',
          boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
          padding: '12px 0',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <button
              onClick={onBackToHome}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#FFFFFF',
                border: '1.5px solid rgba(99, 12, 30, 0.2)',
                color: '#630C1E',
                padding: '7px 16px',
                borderRadius: '999px',
                fontSize: '0.86rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#630C1E';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.color = '#630C1E';
              }}
            >
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </button>

            {/* Breadcrumb */}
            <div style={{ fontSize: '0.86rem', color: '#6C5E57', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ cursor: 'pointer', textDecoration: 'underline' }} onClick={onBackToHome}>Home</span>
              <span>›</span>
              <span style={{ color: '#630C1E', fontWeight: 700 }}>{currentRange.name}</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                fontSize: '0.76rem',
                fontWeight: 800,
                backgroundColor: '#154D36',
                color: '#FFFFFF',
                padding: '4px 10px',
                borderRadius: '999px',
                letterSpacing: '0.06em',
              }}
            >
              {filteredItems.length} ITEMS AVAILABLE
            </span>
          </div>

        </div>
      </div>

      <div className="container" style={{ paddingTop: '28px' }}>
        
        {/* 2. Top "Shop Our Range" Horizontal Selector (Reference Image 1) */}
        <div style={{ marginBottom: '32px' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.8rem',
                  fontWeight: 600,
                  color: '#2A1F1D',
                  margin: 0,
                }}
              >
                Shop Our Range
              </h3>
              <p style={{ margin: '4px 0 0', fontSize: '0.88rem', color: '#6C5E57' }}>
                Select a collection below to view all items and add them to your box
              </p>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() => scrollTopBar('left')}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  border: '1px solid rgba(99, 12, 30, 0.2)',
                  backgroundColor: '#FFFFFF',
                  color: '#630C1E',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scrollTopBar('right')}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  border: '1px solid rgba(99, 12, 30, 0.2)',
                  backgroundColor: '#FFFFFF',
                  color: '#630C1E',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Horizontal Slider of Range Cards */}
          <div
            ref={topScrollRef}
            className="range-top-scroll"
            style={{
              display: 'flex',
              gap: '16px',
              overflowX: 'auto',
              paddingBottom: '14px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {rangeCategories.map((cat) => {
              const isActive = cat.id === activeCategory;
              return (
                <motion.div
                  key={cat.id}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setSelectedSubFilter('all');
                    setSearchQuery('');
                  }}
                  style={{
                    flex: '0 0 190px',
                    backgroundColor: isActive ? '#FFFDF8' : '#FFFFFF',
                    border: isActive ? '2px solid #C68928' : '1px solid rgba(99, 12, 30, 0.12)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    boxShadow: isActive ? '0 10px 24px rgba(198, 137, 40, 0.25)' : '0 4px 12px rgba(0,0,0,0.03)',
                    transition: 'all 0.25s ease',
                    position: 'relative',
                  }}
                >
                  {/* Selected Indicator Pill */}
                  {isActive && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '8px',
                        right: '8px',
                        backgroundColor: '#630C1E',
                        color: '#F3C363',
                        fontSize: '0.62rem',
                        fontWeight: 800,
                        padding: '2px 8px',
                        borderRadius: '999px',
                        zIndex: 2,
                        letterSpacing: '0.04em',
                      }}
                    >
                      ACTIVE
                    </div>
                  )}

                  {/* Portrait Image */}
                  <div style={{ height: '180px', overflow: 'hidden', backgroundColor: '#F0ECE4' }}>
                    <img
                      src={cat.image}
                      alt={cat.name}
                      onError={(e) => {
                        if (!e.target.dataset.triedJfif && e.target.src.endsWith('.jpg')) {
                          e.target.dataset.triedJfif = 'true';
                          e.target.src = e.target.src.replace('.jpg', '.jfif');
                        } else if (!e.target.dataset.triedFallback) {
                          e.target.dataset.triedFallback = 'true';
                          e.target.src = assetUrl('/items/sweet-1.jpg');
                        }
                      }}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transform: isActive ? 'scale(1.05)' : 'scale(1)',
                        transition: 'transform 0.4s ease',
                      }}
                    />
                  </div>

                  {/* Title & Count */}
                  <div style={{ padding: '12px 10px', textAlign: 'center' }}>
                    <h4
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.05rem',
                        fontWeight: 700,
                        color: isActive ? '#630C1E' : '#2A1F1D',
                        margin: '0 0 2px',
                        lineHeight: 1.2,
                      }}
                    >
                      {cat.name}
                    </h4>
                    <span style={{ fontSize: '0.8rem', color: '#706059', fontWeight: 600 }}>
                      {cat.count}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* 3. Category Banner & Controls */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            border: '1px solid rgba(198, 137, 40, 0.25)',
            padding: '24px 28px',
            boxShadow: '0 8px 24px rgba(64, 6, 18, 0.04)',
            marginBottom: '32px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span
                  style={{
                    backgroundColor: '#630C1E',
                    color: '#FAF4EB',
                    fontSize: '0.68rem',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    textTransform: 'uppercase',
                  }}
                >
                  {currentRange.tag}
                </span>
                <span style={{ fontSize: '0.84rem', color: '#C68928', fontWeight: 700 }}>✦ 70+ YEARS LEGACY</span>
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2rem, 3.2vw, 2.6rem)',
                  fontWeight: 600,
                  color: '#630C1E',
                  margin: 0,
                  lineHeight: 1.15,
                }}
              >
                {currentRange.name}
              </h2>
              <p style={{ margin: '6px 0 0', color: '#5C4F48', fontSize: '0.96rem' }}>
                {currentRange.subtitle}
              </p>
            </div>

            {/* Kitchen Dine-In vs Parcel Switcher (if Kitchen Category) */}
            {activeCategory === 'kitchen' && (
              <div
                style={{
                  display: 'flex',
                  backgroundColor: '#FAF5EE',
                  padding: '4px',
                  borderRadius: '999px',
                  border: '1px solid rgba(99, 12, 30, 0.15)',
                }}
              >
                <button
                  onClick={() => setKitchenOrderType('dine-in')}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '999px',
                    border: 'none',
                    backgroundColor: kitchenOrderType === 'dine-in' ? '#154D36' : 'transparent',
                    color: kitchenOrderType === 'dine-in' ? '#FFFFFF' : '#3A2E2A',
                    fontWeight: 700,
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                  }}
                >
                  🍽️ Fresh Dine-In
                </button>
                <button
                  onClick={() => setKitchenOrderType('parcel')}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '999px',
                    border: 'none',
                    backgroundColor: kitchenOrderType === 'parcel' ? '#630C1E' : 'transparent',
                    color: kitchenOrderType === 'parcel' ? '#FFFFFF' : '#3A2E2A',
                    fontWeight: 700,
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                  }}
                >
                  📦 Takeaway Parcel (+₹10)
                </button>
              </div>
            )}

          </div>

          {/* Search & Sub-Filter Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '14px',
              marginTop: '20px',
              paddingTop: '16px',
              borderTop: '1px solid rgba(99, 12, 30, 0.08)',
              flexWrap: 'wrap',
            }}
          >
            {/* Search Box */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#FAF5EE',
                border: '1px solid rgba(99, 12, 30, 0.12)',
                borderRadius: '999px',
                padding: '6px 14px',
                flexGrow: 1,
                maxWidth: '360px',
              }}
            >
              <Search size={16} color="#706059" />
              <input
                type="text"
                placeholder={`Search in ${currentRange.name}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  border: 'none',
                  background: 'none',
                  outline: 'none',
                  fontSize: '0.86rem',
                  fontFamily: 'var(--font-sans)',
                  width: '100%',
                  color: '#2A1F1D',
                }}
              />
            </div>

            {/* Quick Filters */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {[
                { id: 'all', label: 'All Items' },
                { id: 'bestsellers', label: '★ Best Sellers' },
                { id: 'under200', label: 'Under ₹200' },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setSelectedSubFilter(f.id)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '999px',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: selectedSubFilter === f.id ? '1px solid #630C1E' : '1px solid rgba(99, 12, 30, 0.12)',
                    backgroundColor: selectedSubFilter === f.id ? '#630C1E' : '#FFFFFF',
                    color: selectedSubFilter === f.id ? '#FAF4EB' : '#5C4F48',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>

          </div>

        </div>

        {/* 4. Products / Dishes Grid ("uske under list ka item show krega") */}
        {filteredItems.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '60px 20px',
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              border: '1px dashed rgba(99, 12, 30, 0.2)',
            }}
          >
            <p style={{ fontSize: '1.2rem', color: '#630C1E', fontWeight: 700 }}>No items match your search</p>
            <p style={{ color: '#6C5E57', fontSize: '0.9rem', marginBottom: '16px' }}>Try clearing the search query or selecting All Items</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedSubFilter('all');
              }}
              style={{
                backgroundColor: '#630C1E',
                color: '#FFFFFF',
                border: 'none',
                padding: '8px 20px',
                borderRadius: '999px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div>
            {activeCategory === 'kitchen' ? (
              // Kitchen Dishes Grid
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: '24px',
                }}
              >
                {filteredItems.map((dish) => {
                  const isAdded = addedKitchenIds[dish.id];
                  const finalPrice = Math.round((dish.price + (kitchenOrderType === 'parcel' ? 10 : 0)) * currencyRate);

                  return (
                    <motion.div
                      key={dish.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -6, boxShadow: '0 16px 32px rgba(64, 6, 18, 0.1)' }}
                      style={{
                        backgroundColor: '#FFFFFF',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: '1px solid rgba(99, 12, 30, 0.1)',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                      }}
                    >
                      {/* Dish Photo */}
                      <div style={{ height: '190px', position: 'relative', overflow: 'hidden' }}>
                        <img
                          src={dish.image}
                          alt={dish.name}
                          onError={(e) => {
                            if (!e.target.dataset.triedFallback) {
                              e.target.dataset.triedFallback = 'true';
                              e.target.src = assetUrl('/kitchen/murari_royal_thali.jpg');
                            }
                          }}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <div
                          style={{
                            position: 'absolute',
                            top: '10px',
                            left: '10px',
                            display: 'flex',
                            gap: '6px',
                          }}
                        >
                          <span
                            style={{
                              backgroundColor: '#154D36',
                              color: '#FFFFFF',
                              fontSize: '0.68rem',
                              fontWeight: 800,
                              padding: '2px 8px',
                              borderRadius: '4px',
                            }}
                          >
                            100% PURE VEG
                          </span>
                          {dish.spicy && (
                            <span
                              style={{
                                backgroundColor: 'rgba(0,0,0,0.65)',
                                color: '#FFFFFF',
                                fontSize: '0.68rem',
                                fontWeight: 700,
                                padding: '2px 8px',
                                borderRadius: '4px',
                              }}
                            >
                              {dish.spicy}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div style={{ padding: '18px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                        <h4
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '1.1rem',
                            fontWeight: 700,
                            color: '#2A1F1D',
                            margin: '0 0 6px',
                          }}
                        >
                          {dish.name}
                        </h4>

                        <p
                          style={{
                            fontSize: '0.84rem',
                            color: '#6C5E57',
                            lineHeight: 1.5,
                            margin: '0 0 16px',
                            flexGrow: 1,
                          }}
                        >
                          {dish.description}
                        </p>

                        {/* Price & Add Button */}
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingTop: '12px',
                            borderTop: '1px solid rgba(99, 12, 30, 0.08)',
                          }}
                        >
                          <div>
                            <span style={{ fontSize: '1.28rem', fontWeight: 800, color: '#630C1E' }}>
                              {currencySymbol}{finalPrice}
                            </span>
                            {kitchenOrderType === 'parcel' && (
                              <span style={{ fontSize: '0.72rem', color: '#154D36', display: 'block', fontWeight: 600 }}>
                                (Includes ₹10 Parcel)
                              </span>
                            )}
                          </div>

                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleAddKitchenDish(dish)}
                            style={{
                              backgroundColor: isAdded ? '#154D36' : '#630C1E',
                              color: '#FFFFFF',
                              border: 'none',
                              padding: '8px 18px',
                              borderRadius: '999px',
                              fontWeight: 700,
                              fontSize: '0.86rem',
                              cursor: 'pointer',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              boxShadow: '0 4px 12px rgba(99, 12, 30, 0.2)',
                            }}
                          >
                            {isAdded ? (
                              <>
                                <Check size={15} /> Added
                              </>
                            ) : (
                              <>
                                <ShoppingBag size={15} /> Add to Box
                              </>
                            )}
                          </motion.button>
                        </div>

                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              // Sweets / Savouries / Gifting Grid using ProductCard
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: '24px',
                }}
              >
                {filteredItems.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                    onQuickView={onQuickView}
                    currency={currency}
                  />
                ))}
              </div>
            )}
          </div>
        )}

      </div>

      <style>{`
        .range-top-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
