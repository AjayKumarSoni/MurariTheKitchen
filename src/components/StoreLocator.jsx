import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation, MessageCircle } from 'lucide-react';
import { STORES } from '../data/stores';

export default function StoreLocator() {
  return (
    <section id="outlets" style={{ padding: '80px 0', backgroundColor: '#FAF7F2' }}>
      <div className="container">
        
        {/* Section Heading matching Reference Image 7 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '44px' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: '#630C1E', fontSize: '1.2rem' }}>❖</span>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.3rem, 4vw, 3.4rem)',
                fontWeight: 600,
                color: '#630C1E',
              }}
            >
              Visit Us
            </h2>
            <span style={{ color: '#630C1E', fontSize: '1.2rem' }}>❖</span>
          </div>
          <p style={{ color: '#6C5E57', fontSize: '1.05rem', marginTop: '6px' }}>
            Experience our warm hospitality, live sweet counters, and fragrance of fresh bilona ghee
          </p>
        </motion.div>

        {/* Stores Grid matching Reference Image 7 Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '40px',
          }}
        >
          {STORES.map((store, idx) => (
            <motion.div
              key={store.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, boxShadow: '0 20px 45px rgba(64, 6, 18, 0.12)' }}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid rgba(99, 12, 30, 0.1)',
                boxShadow: '0 8px 24px rgba(64, 6, 18, 0.05)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Store Exterior Photo */}
              <div style={{ height: '210px', position: 'relative', overflow: 'hidden' }}>
                <img
                  src={store.image}
                  alt={store.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    backgroundColor: '#154D36',
                    color: '#FFFFFF',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: '4px',
                    textTransform: 'uppercase',
                  }}
                >
                  {store.city}
                </span>
              </div>

              {/* Store Details matching Reference Text */}
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: '#231815',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    marginBottom: '10px',
                  }}
                >
                  {store.name}
                </h3>

                <div style={{ marginBottom: '14px' }}>
                  <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#630C1E', marginBottom: '2px' }}>
                    Address :
                  </p>
                  <p style={{ fontSize: '0.88rem', color: '#5C4F48', lineHeight: 1.5 }}>
                    {store.address}
                  </p>
                </div>

                {/* Service Options from User Reference */}
                {store.services && (
                  <div style={{ marginBottom: '14px', backgroundColor: '#FAF5EE', padding: '6px 12px', borderRadius: '8px', border: '1px solid #EFE4D6' }}>
                    <p style={{ fontSize: '0.74rem', color: '#154D36', fontWeight: 700, textTransform: 'uppercase' }}>
                      Service Options:
                    </p>
                    <p style={{ fontSize: '0.82rem', color: '#3A2E2A', fontWeight: 600 }}>
                      {store.services}
                    </p>
                  </div>
                )}

                {/* Badges: Phone and Hours like Reference Image */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '18px' }}>
                  <a
                    href={`tel:${store.phone}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      backgroundColor: '#154D36',
                      color: '#FFFFFF',
                      padding: '7px 12px',
                      borderRadius: '999px',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                    }}
                  >
                    <Phone size={13} />
                    <span>{store.displayPhone}</span>
                  </a>

                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      backgroundColor: '#FAF5EE',
                      border: '1px solid #E8DECF',
                      color: '#3A2E2A',
                      padding: '7px 12px',
                      borderRadius: '999px',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                    }}
                  >
                    <Clock size={13} style={{ color: '#C68928' }} />
                    <span>{store.hours}</span>
                  </div>
                </div>

                {/* Action Buttons: Get Directions & WhatsApp */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '10px', marginTop: 'auto' }}>
                  <a
                    href={store.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: '#F4CB4A',
                      color: '#231815',
                      padding: '12px',
                      borderRadius: '8px',
                      fontWeight: 800,
                      fontSize: '0.92rem',
                      textAlign: 'center',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    }}
                  >
                    <Navigation size={15} />
                    <span>Get Directions</span>
                  </a>

                  <a
                    href={`https://wa.me/${store.whatsapp}?text=Hello%20Murari%2C%20I%20would%20like%20to%20inquire%20about%20sweets%20and%20dining.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: '#25D366',
                      color: '#FFFFFF',
                      width: '46px',
                      height: '46px',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none',
                      boxShadow: '0 2px 8px rgba(37, 211, 102, 0.3)',
                    }}
                    title="Chat on WhatsApp"
                  >
                    <MessageCircle size={20} />
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button matching Reference Image */}
        <div style={{ textAlign: 'center' }}>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Murari+The+Kitchen+Raigarh+Chhattisgarh"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              backgroundColor: '#154D36',
              color: '#FFFFFF',
              fontWeight: 700,
              padding: '12px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '0.94rem',
              boxShadow: '0 4px 15px rgba(21, 77, 54, 0.2)',
            }}
          >
            View Murari Locations in Raigarh on Google Maps →
          </a>
        </div>

      </div>
    </section>
  );
}
