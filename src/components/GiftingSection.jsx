import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Check, Send, Sparkles, X } from 'lucide-react';
import { assetUrl } from '../utils/assetUrl';

export default function GiftingSection({ onAddToCart, currency = 'INR' }) {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', occasion: 'Wedding', quantity: '50' });

  const giftBoxes = [
    {
      id: 'gift-maharaja',
      title: 'Maharaja Wedding Trousseau Hamper',
      price: 2200,
      description: 'Grand wicker basket packed with Besan Ladoo, Calcutta Chevda, roasted almonds, and luxury sweets.',
      image: assetUrl('/items/gift-5.jpg'),
      badge: 'ROYAL WEDDING SPECIAL',
    },
    {
      id: 'gift-utsav',
      title: 'Utsav Macrame Festive Sweet Hamper',
      price: 1250,
      description: 'Handcrafted macrame basket with Murari Kaju Katli, Cham Cham, and roasted dry fruits.',
      image: assetUrl('/items/gift-2.jpg'),
      badge: 'FESTIVE BESTSELLER',
    },
    {
      id: 'gift-corporate',
      title: 'The Executive Gourmet Hamper Trunk',
      price: 1450,
      description: 'Keepsake luxury trunk packed with roasted Afghani nuts, pure sweets, and celebratory treats.',
      image: assetUrl('/items/gift-1.jpg'),
      badge: 'CORPORATE CHOICE',
    },
    {
      id: 'gift-bouquet',
      title: 'Royal Celebration Sweet Gift Bouquet',
      price: 850,
      description: 'Artistically arranged floral gift basket packed with artisanal mithai bites and festive accents.',
      image: assetUrl('/items/gift-4.jpg'),
      badge: 'SPECIAL OCCASION',
    },
    {
      id: 'gift-treats',
      title: 'Celebration Treats & Munchies Gift Box',
      price: 650,
      description: 'Vibrant celebration hamper filled with crunch snacks, sweet bites, and family party delicacies.',
      image: assetUrl('/items/gift-3.jpg'),
      badge: 'FAMILY FAVORITE',
    },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setInquiryModalOpen(false);
      setFormData({ name: '', phone: '', email: '', occasion: 'Wedding', quantity: '50' });
    }, 2400);
  };

  return (
    <section id="gifting" style={{ padding: '80px 0', backgroundColor: '#FDFBF7', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <span className="section-tag">Royal Celebrations</span>
          <h2 className="section-title">The Murari Gifting Suite</h2>
          <p className="section-subtitle">
            Beautiful gift hampers and festive sweet boxes for weddings, festivals, and special occasions.
          </p>
        </motion.div>

        {/* Gift Boxes Showcase */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '40px',
          }}
        >
          {giftBoxes.map((box, idx) => (
            <motion.div
              key={box.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(64, 6, 18, 0.12)' }}
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                border: '1.5px solid rgba(198, 137, 40, 0.25)',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(64, 6, 18, 0.06)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ height: '220px', position: 'relative', overflow: 'hidden' }}>
                <img
                  src={box.image}
                  alt={box.title}
                  onError={(e) => {
                    if (e.target.src.endsWith('.jpg')) {
                      e.target.src = e.target.src.replace('.jpg', '.jfif');
                    }
                  }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    backgroundColor: '#630C1E',
                    color: '#F3C363',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    padding: '4px 10px',
                    borderRadius: '999px',
                  }}
                >
                  {box.badge}
                </span>
              </div>

              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', color: '#630C1E', marginBottom: '8px' }}>
                  {box.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#5C4F48', lineHeight: 1.5, marginBottom: '20px' }}>
                  {box.description}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                  <div>
                    <span style={{ fontSize: '0.78rem', color: '#7E6E67', display: 'block' }}>Starts from</span>
                    <span style={{ fontSize: '1.3rem', fontWeight: 800, color: '#231815' }}>₹{box.price}</span>
                  </div>

                  <button
                    onClick={() => {
                      onAddToCart({
                        id: box.id,
                        name: box.title,
                        price: box.price,
                        selectedWeight: 'Gift Presentation Box',
                        image: box.image,
                        category: 'gifting',
                        isVeg: true,
                      });
                    }}
                    className="btn-gold"
                    style={{ fontSize: '0.86rem', padding: '8px 18px' }}
                  >
                    Add Gift Box
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Gifting Inquiry Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, #400612 0%, #630C1E 100%)',
            borderRadius: '24px',
            padding: 'clamp(24px, 4vw, 36px) clamp(20px, 4vw, 40px)',
            color: '#FAF7F2',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            boxShadow: '0 20px 50px rgba(64, 6, 18, 0.25)',
            border: '1px solid rgba(198, 137, 40, 0.4)',
          }}
        >
          <div style={{ maxWidth: '600px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#F3C363', marginBottom: '8px' }}>
              <Sparkles size={16} />
              <span style={{ fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Weddings & Corporate Bulk Orders
              </span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: '#FFFFFF', marginBottom: '8px' }}>
              Custom Box Branding & Bespoke Sweets Curation
            </h3>
            <p style={{ fontSize: '0.94rem', color: 'rgba(250, 247, 242, 0.85)', lineHeight: 1.6 }}>
              Planning an auspicious wedding celebration or corporate festive gifting? Our gifting concierges will customize box dimensions, embossed family monograms, and curated mithai menus.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setInquiryModalOpen(true)}
            className="btn-gold"
            style={{ fontSize: '1rem', padding: '14px 30px' }}
          >
            <Gift size={18} />
            <span>Request Custom Quote</span>
          </motion.button>
        </div>

      </div>

      {/* Gifting Inquiry Modal */}
      <AnimatePresence>
        {inquiryModalOpen && (
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
            onClick={() => setInquiryModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                padding: '36px',
                width: '100%',
                maxWidth: '520px',
                boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
                position: 'relative',
              }}
            >
              <button
                onClick={() => setInquiryModalOpen(false)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#6C5E57',
                }}
              >
                <X size={20} />
              </button>

              <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                <span className="section-tag">Bespoke Concierge</span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: '#630C1E' }}>
                  Custom Gifting Inquiry
                </h3>
                <p style={{ fontSize: '0.86rem', color: '#6C5E57' }}>
                  Fill in your requirements. Our gifting manager will contact you within 2 hours with samples and pricing.
                </p>
              </div>

              {formSubmitted ? (
                <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      backgroundColor: '#154D36',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px',
                    }}
                  >
                    <Check size={28} />
                  </div>
                  <h4 style={{ fontSize: '1.25rem', color: '#154D36', marginBottom: '8px' }}>
                    Inquiry Received!
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: '#5C4F48' }}>
                    Thank you. Our master gifting consultant will connect via WhatsApp/Phone shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 700, color: '#3A2E2A', display: 'block', marginBottom: '4px' }}>
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patel"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        border: '1.5px solid #D6CDC7',
                        fontSize: '0.92rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <label style={{ fontSize: '0.82rem', fontWeight: 700, color: '#3A2E2A', display: 'block', marginBottom: '4px' }}>
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          borderRadius: '8px',
                          border: '1.5px solid #D6CDC7',
                          fontSize: '0.92rem',
                          outline: 'none',
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.82rem', fontWeight: 700, color: '#3A2E2A', display: 'block', marginBottom: '4px' }}>
                        Occasion
                      </label>
                      <select
                        value={formData.occasion}
                        onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          borderRadius: '8px',
                          border: '1.5px solid #D6CDC7',
                          fontSize: '0.92rem',
                          outline: 'none',
                          backgroundColor: '#FFFFFF',
                        }}
                      >
                        <option value="Wedding">Wedding Trousseau</option>
                        <option value="Corporate">Corporate Gifting</option>
                        <option value="Diwali">Diwali / Festive Hamper</option>
                        <option value="Personal">Anniversary / Birthday</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 700, color: '#3A2E2A', display: 'block', marginBottom: '4px' }}>
                      Estimated Number of Boxes
                    </label>
                    <input
                      type="number"
                      min="10"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        border: '1.5px solid #D6CDC7',
                        fontSize: '0.92rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ marginTop: '10px', padding: '13px', width: '100%' }}
                  >
                    <Send size={16} />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
