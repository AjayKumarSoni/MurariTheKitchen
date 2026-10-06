import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ShieldCheck, CreditCard, Smartphone, Banknote, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CheckoutModal({ isOpen, onClose, totalAmount, cartItems, onOrderSuccess, currency = 'INR' }) {
  const [step, setStep] = useState('form'); // 'form' | 'success'
  const [formData, setFormData] = useState({
    name: 'Ananya Sharma',
    phone: '078059 39822',
    email: 'guest.order@murari.com',
    address: 'Near Shanti Auto Honda, Dhimrapur Road',
    city: 'Raigarh',
    pincode: '496001',
    paymentMethod: 'upi',
  });
  const [orderId, setOrderId] = useState('');

  const currencyRate = currency === 'USD' ? 0.012 : currency === 'GBP' ? 0.0095 : 1;
  const currencySymbol = currency === 'USD' ? '$' : currency === 'GBP' ? '£' : '₹';
  const displayTotal = Math.round(totalAmount * currencyRate);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const newId = `MURARI-ORD-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(newId);
    setStep('success');

    // Trigger celebratory confetti fireworks!
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C68928', '#630C1E', '#154D36', '#FAF7F2'],
      });
    } catch (err) {
      // Confetti fallback
    }

    onOrderSuccess();
  };

  const handleResetAndClose = () => {
    setStep('form');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        backgroundColor: 'rgba(18, 5, 8, 0.75)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      onClick={handleResetAndClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          width: '100%',
          maxWidth: '560px',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
          position: 'relative',
        }}
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#6C5E57',
            padding: '4px',
            zIndex: 10,
          }}
        >
          <X size={20} />
        </button>

        {step === 'form' ? (
          <div style={{ padding: '36px' }}>
            
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <span className="section-tag">Express Checkout</span>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: '#630C1E' }}>
                Complete Your Order
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#6C5E57' }}>
                Total Payable: <strong style={{ color: '#154D36', fontSize: '1.1rem' }}>{currencySymbol}{displayTotal}</strong>
              </p>
            </div>

            <form onSubmit={handlePlaceOrder} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              {/* Name & Phone */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#3A2E2A', display: 'block', marginBottom: '4px' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      border: '1.5px solid #D6CDC7',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#3A2E2A', display: 'block', marginBottom: '4px' }}>
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      border: '1.5px solid #D6CDC7',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#3A2E2A', display: 'block', marginBottom: '4px' }}>
                  Delivery Address *
                </label>
                <textarea
                  required
                  rows="2"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: '1.5px solid #D6CDC7',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'none',
                  }}
                />
              </div>

              {/* City & Pincode */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#3A2E2A', display: 'block', marginBottom: '4px' }}>
                    City / Town *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      border: '1.5px solid #D6CDC7',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#3A2E2A', display: 'block', marginBottom: '4px' }}>
                    Pincode *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      border: '1.5px solid #D6CDC7',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              {/* Payment Methods */}
              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#3A2E2A', display: 'block', marginBottom: '8px' }}>
                  Select Payment Method
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  
                  <div
                    onClick={() => setFormData({ ...formData, paymentMethod: 'upi' })}
                    style={{
                      border: formData.paymentMethod === 'upi' ? '2px solid #154D36' : '1px solid #D6CDC7',
                      borderRadius: '10px',
                      padding: '12px',
                      cursor: 'pointer',
                      backgroundColor: formData.paymentMethod === 'upi' ? '#F4FBF7' : '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <Smartphone size={18} style={{ color: '#154D36' }} />
                    <span style={{ fontSize: '0.84rem', fontWeight: 700 }}>Instant UPI / QR</span>
                  </div>

                  <div
                    onClick={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                    style={{
                      border: formData.paymentMethod === 'cod' ? '2px solid #154D36' : '1px solid #D6CDC7',
                      borderRadius: '10px',
                      padding: '12px',
                      cursor: 'pointer',
                      backgroundColor: formData.paymentMethod === 'cod' ? '#F4FBF7' : '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <Banknote size={18} style={{ color: '#154D36' }} />
                    <span style={{ fontSize: '0.84rem', fontWeight: 700 }}>Partial COD</span>
                  </div>

                </div>
              </div>

              {/* Order Button */}
              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', padding: '14px', fontSize: '1rem', marginTop: '10px' }}
              >
                <span>Confirm & Place Order ({currencySymbol}{displayTotal})</span>
                <ArrowRight size={18} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '0.74rem', color: '#7E6E67' }}>
                <ShieldCheck size={14} style={{ color: '#154D36' }} />
                <span>100% Purity & On-Time Arrival Guarantee</span>
              </div>
            </form>
          </div>
        ) : (
          /* Order Confirmation Success Screen */
          <div style={{ padding: '48px 36px', textAlign: 'center' }}>
            <div
              style={{
                width: '76px',
                height: '76px',
                borderRadius: '50%',
                backgroundColor: '#154D36',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                boxShadow: '0 10px 30px rgba(21, 77, 54, 0.3)',
              }}
            >
              <CheckCircle size={44} />
            </div>

            <span className="section-tag" style={{ color: '#154D36' }}>Order Confirmed</span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.4rem', color: '#630C1E', marginBottom: '8px' }}>
              Dhanyawaad, {formData.name.split(' ')[0]}!
            </h3>
            <p style={{ fontSize: '0.94rem', color: '#5C4F48', marginBottom: '24px' }}>
              Your royal box of sweets has been queued at our halwai kitchen.
            </p>

            {/* Receipt Summary Card */}
            <div
              style={{
                backgroundColor: '#FAF7F2',
                border: '1px solid rgba(198, 137, 40, 0.3)',
                borderRadius: '16px',
                padding: '20px',
                textAlign: 'left',
                marginBottom: '28px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.85rem' }}>
                <span style={{ color: '#7E6E67' }}>Order Reference:</span>
                <strong style={{ color: '#630C1E' }}>{orderId}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.85rem' }}>
                <span style={{ color: '#7E6E67' }}>Estimated Dispatch:</span>
                <strong style={{ color: '#154D36' }}>Today by 11:30 AM</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.85rem' }}>
                <span style={{ color: '#7E6E67' }}>Shipping To:</span>
                <span style={{ color: '#231815', fontWeight: 600 }}>{formData.city} ({formData.pincode})</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '8px', borderTop: '1px solid #E8DECF', fontSize: '1rem', fontWeight: 800 }}>
                <span>Paid via {formData.paymentMethod.toUpperCase()}:</span>
                <span style={{ color: '#630C1E' }}>{currencySymbol}{displayTotal}</span>
              </div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="btn-primary"
              style={{ width: '100%', padding: '14px' }}
            >
              Continue Exploring Murari
            </button>
          </div>
        )}

      </motion.div>
    </div>
  );
}
