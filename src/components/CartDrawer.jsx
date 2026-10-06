import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag, ShieldCheck } from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQty,
  onRemoveItem,
  onProceedToCheckout,
  currency = 'INR'
}) {
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState('');

  const currencyRate = currency === 'USD' ? 0.012 : currency === 'GBP' ? 0.0095 : 1;
  const currencySymbol = currency === 'USD' ? '$' : currency === 'GBP' ? '£' : '₹';

  // Subtotal calculation
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  
  // Free delivery threshold ₹499 for Raigarh City
  const freeDeliveryThreshold = 499;
  const freeDeliveryDiff = Math.max(0, freeDeliveryThreshold - subtotal);
  const freeDeliveryProgress = Math.min(100, (subtotal / freeDeliveryThreshold) * 100);
  const deliveryFee = subtotal === 0 || subtotal >= freeDeliveryThreshold ? 0 : 40;

  // Coupon handling
  const handleApplyCoupon = (e) => {
    e.preventDefault();
    setCouponError('');
    setCouponSuccess('');
    const code = couponCode.trim().toUpperCase();

    if (code === 'MURARI10') {
      const discountVal = Math.round(subtotal * 0.1);
      setAppliedDiscount(discountVal);
      setCouponSuccess('Royal discount applied: 10% OFF!');
    } else if (code === 'UTSAV' || code === 'DIWALI') {
      const discountVal = Math.min(subtotal, 150);
      setAppliedDiscount(discountVal);
      setCouponSuccess('Festival blessing coupon applied: ₹150 OFF!');
    } else {
      setCouponError('Invalid coupon. Try using "MURARI10" for 10% off.');
    }
  };

  const finalTotal = Math.max(0, subtotal - appliedDiscount + deliveryFee);

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999 }}>
          
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(18, 5, 8, 0.6)',
              backdropFilter: 'blur(6px)',
            }}
          />

          {/* Drawer Right Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: '440px',
              backgroundColor: '#FFFFFF',
              boxShadow: '-10px 0 40px rgba(0,0,0,0.2)',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 1,
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: '20px 24px',
                borderBottom: '1px solid rgba(99, 12, 30, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#FAF7F2',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ShoppingBag size={20} style={{ color: '#630C1E' }} />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: '#630C1E', margin: 0 }}>
                  Your Murari Cart ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
                </h3>
              </div>

              <button
                onClick={onClose}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#6C5E57',
                  padding: '4px',
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Free Delivery Tracker Bar */}
            <div style={{ padding: '14px 24px', backgroundColor: '#F5ECE1', borderBottom: '1px solid rgba(198, 137, 40, 0.2)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 600, color: '#630C1E', marginBottom: '6px' }}>
                {freeDeliveryDiff === 0 ? (
                  <span style={{ color: '#154D36', fontWeight: 700 }}>🎉 Congratulations! You unlocked FREE Delivery across Raigarh City!</span>
                ) : (
                  <span>Add {currencySymbol}{Math.round(freeDeliveryDiff * currencyRate)} more for <strong>FREE Delivery in Raigarh</strong></span>
                )}
                <span>{Math.round(freeDeliveryProgress)}%</span>
              </div>
              <div style={{ width: '100%', height: '6px', backgroundColor: '#E4D5C3', borderRadius: '999px', overflow: 'hidden' }}>
                <div
                  style={{
                    width: `${freeDeliveryProgress}%`,
                    height: '100%',
                    backgroundColor: freeDeliveryDiff === 0 ? '#154D36' : '#C68928',
                    borderRadius: '999px',
                    transition: 'width 0.4s ease',
                  }}
                />
              </div>
            </div>

            {/* Items List */}
            <div style={{ flexGrow: 1, overflowY: 'auto', padding: '20px 24px' }}>
              {cartItems.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 10px', color: '#7E6E67' }}>
                  <div
                    style={{
                      width: '70px',
                      height: '70px',
                      borderRadius: '50%',
                      backgroundColor: '#FAF5EE',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px',
                      color: '#C68928',
                    }}
                  >
                    <ShoppingBag size={32} />
                  </div>
                  <h4 style={{ fontSize: '1.2rem', color: '#630C1E', marginBottom: '6px' }}>Your Cart is Empty</h4>
                  <p style={{ fontSize: '0.88rem', marginBottom: '20px' }}>
                    Explore our pure ghee Mysore Pak, artisanal biscuits, or fresh kitchen meals.
                  </p>
                  <button onClick={onClose} className="btn-primary" style={{ fontSize: '0.88rem', padding: '10px 22px' }}>
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {cartItems.map((item) => (
                    <div
                      key={`${item.id}-${item.selectedWeight}`}
                      style={{
                        display: 'flex',
                        gap: '14px',
                        paddingBottom: '16px',
                        borderBottom: '1px solid rgba(0,0,0,0.06)',
                        alignItems: 'center',
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: '65px',
                          height: '65px',
                          borderRadius: '10px',
                          objectFit: 'cover',
                          border: '1px solid #FAF7F2',
                        }}
                      />

                      <div style={{ flexGrow: 1 }}>
                        <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#231815', lineHeight: 1.25, marginBottom: '3px' }}>
                          {item.name}
                        </h4>
                        <span
                          style={{
                            fontSize: '0.74rem',
                            color: '#630C1E',
                            fontWeight: 600,
                            backgroundColor: '#FAF3E3',
                            padding: '2px 6px',
                            borderRadius: '4px',
                            display: 'inline-block',
                            marginBottom: '6px',
                          }}
                        >
                          {item.selectedWeight}
                        </span>

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span style={{ fontWeight: 800, color: '#231815', fontSize: '0.96rem' }}>
                            {currencySymbol}{Math.round(item.price * currencyRate)}
                          </span>

                          {/* Stepper Controls */}
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              border: '1px solid #D6CDC7',
                              borderRadius: '6px',
                              backgroundColor: '#FAF7F2',
                            }}
                          >
                            <button
                              onClick={() => onUpdateQty(item.id, item.selectedWeight, item.quantity - 1)}
                              style={{
                                border: 'none',
                                background: 'none',
                                padding: '4px 8px',
                                cursor: 'pointer',
                                color: '#5C4F48',
                              }}
                            >
                              <Minus size={13} />
                            </button>
                            <span style={{ fontSize: '0.85rem', fontWeight: 700, padding: '0 4px', minWidth: '18px', textAlign: 'center' }}>
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQty(item.id, item.selectedWeight, item.quantity + 1)}
                              style={{
                                border: 'none',
                                background: 'none',
                                padding: '4px 8px',
                                cursor: 'pointer',
                                color: '#5C4F48',
                              }}
                            >
                              <Plus size={13} />
                            </button>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id, item.selectedWeight)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#A89F9A',
                          cursor: 'pointer',
                          padding: '6px',
                        }}
                        title="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Bill Details & Checkout */}
            {cartItems.length > 0 && (
              <div
                style={{
                  borderTop: '1px solid rgba(99, 12, 30, 0.1)',
                  padding: '20px 24px',
                  backgroundColor: '#FAF7F2',
                }}
              >
                {/* Coupon Code Input */}
                <form onSubmit={handleApplyCoupon} style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                  <input
                    type="text"
                    placeholder="Enter Coupon (e.g. MURARI10)"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    style={{
                      padding: '8px 12px',
                      borderRadius: '6px',
                      border: '1px solid #D6CDC7',
                      fontSize: '0.84rem',
                      flexGrow: 1,
                      outline: 'none',
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      backgroundColor: '#630C1E',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '8px 14px',
                      fontWeight: 700,
                      fontSize: '0.8rem',
                      cursor: 'pointer',
                    }}
                  >
                    Apply
                  </button>
                </form>
                {couponSuccess && <p style={{ fontSize: '0.76rem', color: '#154D36', fontWeight: 700, marginBottom: '8px' }}>✓ {couponSuccess}</p>}
                {couponError && <p style={{ fontSize: '0.76rem', color: '#B42318', fontWeight: 600, marginBottom: '8px' }}>{couponError}</p>}

                {/* Subtotals */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.86rem', color: '#5C4F48', marginBottom: '14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Subtotal</span>
                    <span>{currencySymbol}{Math.round(subtotal * currencyRate)}</span>
                  </div>

                  {appliedDiscount > 0 && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#154D36', fontWeight: 700 }}>
                      <span>Discount</span>
                      <span>-{currencySymbol}{Math.round(appliedDiscount * currencyRate)}</span>
                    </div>
                  )}

                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Shipping</span>
                    <span>{deliveryFee === 0 ? <strong style={{ color: '#154D36' }}>FREE</strong> : `${currencySymbol}${Math.round(deliveryFee * currencyRate)}`}</span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '8px', borderTop: '1px solid #E8DECF', fontSize: '1.1rem', fontWeight: 800, color: '#231815' }}>
                    <span>Total Amount</span>
                    <span style={{ color: '#630C1E' }}>{currencySymbol}{Math.round(finalTotal * currencyRate)}</span>
                  </div>
                </div>

                {/* Checkout Trigger */}
                <button
                  onClick={() => {
                    onProceedToCheckout(finalTotal);
                  }}
                  className="btn-primary"
                  style={{ width: '100%', padding: '14px', fontSize: '0.98rem' }}
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight size={17} />
                </button>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginTop: '10px', fontSize: '0.72rem', color: '#7E6E67' }}>
                  <ShieldCheck size={14} style={{ color: '#154D36' }} />
                  <span>Secure 256-Bit Encrypted Indian Sweets Checkout</span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
