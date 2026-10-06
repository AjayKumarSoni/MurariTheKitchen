import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Check, Send, Sparkles, X, ArrowRight } from 'lucide-react';
import { assetUrl } from '../utils/assetUrl';

export default function GiftingSection({ onOpenRange }) {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', occasion: 'Wedding', quantity: '50' });

  const giftBoxes = [
    {
      id: 'gift-peach-royal',
      title: 'Peach Floral Heritage Mithai Box',
      description: 'Embossed peach keepsake box filled with silver vark kaju katli, pistachio rolls, and royal mawa delicacies.',
      image: assetUrl('/items/new_sweet_2.png'),
      badge: 'ROYAL HERITAGE SPECIAL',
    },
    {
      id: 'gift-teal-jali',
      title: 'Teal & Gold Jali Festive Mithai Box',
      description: 'Traditional Mughal jali patterned presentation box packed with pure bilona ghee confections and dry fruits.',
      image: assetUrl('/items/new_sweet_3.png'),
      badge: 'FESTIVE BESTSELLER',
    },
    {
      id: 'gift-utsav',
      title: 'Utsav Macrame Festive Sweet Hamper',
      description: 'Handcrafted macrame basket with Murari Kaju Katli, Cham Cham, and roasted dry fruits.',
      image: assetUrl('/items/gift-2.jpg'),
      badge: 'HANDCRAFTED BASKET',
    },
    {
      id: 'gift-corporate',
      title: 'The Executive Gourmet Hamper Trunk',
      description: 'Keepsake luxury trunk packed with roasted Afghani nuts, pure sweets, and celebratory treats.',
      image: assetUrl('/items/gift-1.jpg'),
      badge: 'CORPORATE CHOICE',
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
          style={{ textAlign: 'center', marginBottom: '44px' }}
        >
          <span className="section-tag">Royal Celebrations</span>
          <h2 className="section-title">The Murari Gifting Suite</h2>
          <p className="section-subtitle">
            Beautiful gift hampers and festive sweet boxes for weddings, festivals, and special occasions.
          </p>
        </motion.div>

        {/* 4 Stylish Gift Boxes Showcase (Only images, No Buy Buttons) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            marginBottom: '32px',
          }}
        >
          {giftBoxes.map((box, idx) => (
            <motion.div
              key={box.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              onClick={() => onOpenRange && onOpenRange('gifting')}
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                border: '1.5px solid rgba(198, 137, 40, 0.25)',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(64, 6, 18, 0.05)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Box Image */}
              <div style={{ height: '240px', position: 'relative', overflow: 'hidden', backgroundColor: '#F3EFEA' }}>
                <img
                  src={box.image}
                  alt={box.title}
                  onError={(e) => {
                    if (!e.target.dataset.triedJfif && e.target.src.endsWith('.jpg')) {
                      e.target.dataset.triedJfif = 'true';
                      e.target.src = e.target.src.replace('.jpg', '.jfif');
                    } else if (!e.target.dataset.triedFallback) {
                      e.target.dataset.triedFallback = 'true';
                      e.target.src = assetUrl('/items/new_sweet_2.png');
                    }
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: '#630C1E',
                    color: '#F3C363',
                    fontSize: '0.68rem',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    padding: '4px 10px',
                    borderRadius: '999px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                  }}
                >
                  {box.badge}
                </span>
              </div>

              {/* Title & Description */}
              <div style={{ padding: '20px 18px', textAlign: 'center', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: '#630C1E',
                    margin: '0 0 6px',
                    lineHeight: 1.25,
                  }}
                >
                  {box.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.86rem',
                    color: '#5C4F48',
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {box.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button to Buy in Shop Our Range */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onOpenRange && onOpenRange('gifting')}
            style={{
              backgroundColor: '#630C1E',
              color: '#FFFFFF',
              border: 'none',
              padding: '12px 32px',
              borderRadius: '999px',
              fontSize: '0.94rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 6px 20px rgba(99, 12, 30, 0.25)',
            }}
          >
            <span>Explore & Order Gift Hampers in Shop Range</span>
            <ArrowRight size={16} />
          </motion.button>
        </div>

        {/* Custom Gifting Inquiry Banner (For weddings / corporate custom quotes) */}
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

      {/* Inquiry Modal */}
      <AnimatePresence>
        {inquiryModalOpen && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(8px)',
              zIndex: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              style={{
                backgroundColor: '#FFFDF9',
                borderRadius: '24px',
                padding: '36px',
                maxWidth: '500px',
                width: '100%',
                position: 'relative',
                border: '2px solid #C68928',
                boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
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
                  color: '#630C1E',
                }}
              >
                <X size={24} />
              </button>

              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: '#630C1E', marginBottom: '8px' }}>
                Bespoke Gifting Concierge
              </h3>
              <p style={{ color: '#6C5E57', fontSize: '0.9rem', marginBottom: '24px' }}>
                Share your event details and our specialist will connect within 2 hours.
              </p>

              {formSubmitted ? (
                <div style={{ textAlign: 'center', padding: '30px 0' }}>
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(21, 77, 54, 0.1)',
                      color: '#154D36',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px',
                    }}
                  >
                    <Check size={32} />
                  </div>
                  <h4 style={{ color: '#154D36', fontSize: '1.3rem', marginBottom: '8px' }}>Inquiry Received!</h4>
                  <p style={{ color: '#6C5E57', fontSize: '0.9rem' }}>
                    Thank you, {formData.name}. Our gifting manager will contact you shortly on {formData.phone}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#4A3D36', marginBottom: '6px' }}>
                      Your Full Name
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        border: '1px solid rgba(99, 12, 30, 0.2)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.95rem',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#4A3D36', marginBottom: '6px' }}>
                        Mobile Phone
                      </label>
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '10px',
                          border: '1px solid rgba(99, 12, 30, 0.2)',
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.95rem',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#4A3D36', marginBottom: '6px' }}>
                        Approx Quantity
                      </label>
                      <input
                        required
                        type="number"
                        min="10"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '10px',
                          border: '1px solid rgba(99, 12, 30, 0.2)',
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.95rem',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#4A3D36', marginBottom: '6px' }}>
                      Occasion
                    </label>
                    <select
                      value={formData.occasion}
                      onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        border: '1px solid rgba(99, 12, 30, 0.2)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.95rem',
                        boxSizing: 'border-box',
                      }}
                    >
                      <option value="Wedding">Wedding Invitation & Trousseau</option>
                      <option value="Diwali">Diwali Corporate Gifting</option>
                      <option value="Corporate">Corporate Anniversary / Milestone</option>
                      <option value="Family">Birth Announcement / Housewarming</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{
                      marginTop: '8px',
                      padding: '14px',
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      fontSize: '1rem',
                    }}
                  >
                    <Send size={16} />
                    <span>Send Custom Inquiry</span>
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
