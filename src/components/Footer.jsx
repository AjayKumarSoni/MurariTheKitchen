import React from 'react';
import { Phone, MessageCircle, Clock, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { BRAND_CONTACT } from '../data/stores';
import { assetUrl } from '../utils/assetUrl';

export default function Footer({ onNavigate }) {
  return (
    <footer id="contact" style={{ backgroundColor: '#0B2E1E', color: '#FAF7F2', position: 'relative' }}>
      
      {/* 1. Top Express Delivery Notice Banner */}
      <div
        style={{
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '18px 0',
          backgroundColor: '#082417',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '1.4rem' }}>🛵</span>
            <div>
              <p style={{ fontSize: '0.82rem', fontWeight: 700, color: '#E7AB48', textTransform: 'uppercase', letterSpacing: '0.08em', margin: 0 }}>
                Raigarh City Fast Delivery (Express 45 Mins)
              </p>
              <p style={{ fontSize: '0.88rem', color: '#FAF7F2', margin: 0 }}>
                Hot meals, pure cow ghee sweets, and crunchy savouries delivered fresh across Raigarh City.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${BRAND_CONTACT.whatsapp}?text=Hello%20Murari%20Team%2C%20I%20want%20to%20order%20in%20Raigarh.`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#E7AB48',
              color: '#0B2E1E',
              padding: '9px 20px',
              borderRadius: '999px',
              fontSize: '0.86rem',
              fontWeight: 700,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 4px 15px rgba(231, 171, 72, 0.3)',
              transition: 'all 0.2s ease',
            }}
          >
            <MessageCircle size={15} />
            <span>Order on WhatsApp (078059 39822)</span>
          </a>
        </div>
      </div>

      {/* 2. Main Premium Aligned Footer Columns */}
      <div className="container" style={{ padding: '64px 24px 44px' }}>
        {/* Main Footer Content */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '36px',
            marginBottom: '44px',
          }}
        >
          {/* Brand Info */}
          <div style={{ flex: '1 1 230px', maxWidth: '300px' }}>
            <img
              src={assetUrl('/murari-logo-clean.png')}
              alt="Murari Brand"
              style={{
                height: '58px',
                width: 'auto',
                filter: 'brightness(0) invert(1) drop-shadow(0 2px 10px rgba(0,0,0,0.3))',
                marginBottom: '14px',
                display: 'block',
              }}
            />
            <p style={{ fontSize: '0.86rem', color: 'rgba(250, 247, 242, 0.8)', lineHeight: 1.55, marginBottom: '16px' }}>
              Handcrafting royal Indian sweets and pure delicacies with 100% pure desi cow ghee and authentic recipes since 1974.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(231, 171, 72, 0.12)', border: '1px solid rgba(231, 171, 72, 0.25)', padding: '5px 12px', borderRadius: '999px' }}>
              <span className="veg-badge" style={{ backgroundColor: '#FFFFFF' }}></span>
              <span style={{ fontSize: '0.74rem', color: '#E7AB48', fontWeight: 700, letterSpacing: '0.06em' }}>100% Pure Vegetarian</span>
            </div>
          </div>

          {/* SHOP Column */}
          <div style={{ flex: '0 1 125px' }}>
            <h4 style={{ color: '#E7AB48', fontSize: '0.86rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '14px' }}>
              Shop
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '0.85rem', padding: 0, margin: 0 }}>
              <li><a href="#sweets" onClick={(e) => { e.preventDefault(); onNavigate('#sweets'); }} style={{ color: 'rgba(250, 247, 242, 0.85)', textDecoration: 'none' }}>Best Sellers</a></li>
              <li><a href="#sweets" onClick={(e) => { e.preventDefault(); onNavigate('#sweets'); }} style={{ color: 'rgba(250, 247, 242, 0.85)', textDecoration: 'none' }}>Pure Ghee Sweets</a></li>
              <li><a href="#savouries" onClick={(e) => { e.preventDefault(); onNavigate('#savouries'); }} style={{ color: 'rgba(250, 247, 242, 0.85)', textDecoration: 'none' }}>Savouries & Namkeen</a></li>
              <li><a href="#kitchen" onClick={(e) => { e.preventDefault(); onNavigate('#kitchen'); }} style={{ color: 'rgba(250, 247, 242, 0.85)', textDecoration: 'none' }}>The Kitchen Menu</a></li>
              <li><a href="#gifting" onClick={(e) => { e.preventDefault(); onNavigate('#gifting'); }} style={{ color: 'rgba(250, 247, 242, 0.85)', textDecoration: 'none' }}>Royal Gift Boxes</a></li>
            </ul>
          </div>

          {/* BRAND Column */}
          <div style={{ flex: '0 1 125px' }}>
            <h4 style={{ color: '#E7AB48', fontSize: '0.86rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '14px' }}>
              Brand
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '0.85rem', padding: 0, margin: 0 }}>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); onNavigate('#about'); }} style={{ color: 'rgba(250, 247, 242, 0.85)', textDecoration: 'none' }}>About Our Story</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); onNavigate('#about'); }} style={{ color: 'rgba(250, 247, 242, 0.85)', textDecoration: 'none' }}>The Bilona Promise</a></li>
              <li><a href="#outlets" onClick={(e) => { e.preventDefault(); onNavigate('#outlets'); }} style={{ color: 'rgba(250, 247, 242, 0.85)', textDecoration: 'none' }}>Our Store Outlets</a></li>
              <li><a href="#outlets" onClick={(e) => { e.preventDefault(); onNavigate('#outlets'); }} style={{ color: 'rgba(250, 247, 242, 0.85)', textDecoration: 'none' }}>Restaurant Dining</a></li>
            </ul>
          </div>

          {/* QUICK LINKS Column */}
          <div style={{ flex: '0 1 130px' }}>
            <h4 style={{ color: '#E7AB48', fontSize: '0.86rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '14px' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '0.85rem', padding: 0, margin: 0 }}>
              <li><a href="#outlets" onClick={(e) => { e.preventDefault(); onNavigate('#outlets'); }} style={{ color: 'rgba(250, 247, 242, 0.85)', textDecoration: 'none' }}>Store Locations</a></li>
              <li><a href="#gifting" onClick={(e) => { e.preventDefault(); onNavigate('#gifting'); }} style={{ color: 'rgba(250, 247, 242, 0.85)', textDecoration: 'none' }}>Bulk & Gifting</a></li>
              <li><a href="#kitchen" onClick={(e) => { e.preventDefault(); onNavigate('#kitchen'); }} style={{ color: 'rgba(250, 247, 242, 0.85)', textDecoration: 'none' }}>Dine-In & Takeaway</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate('#contact'); }} style={{ color: 'rgba(250, 247, 242, 0.85)', textDecoration: 'none' }}>Raigarh Help</a></li>
            </ul>
          </div>

          {/* "We're always here to help you" - Sleek Wide Landscape Card (Width badha kr, height kum krke) */}
          <div
            style={{
              flex: '1 1 280px',
              maxWidth: '490px',
              width: '100%',
              background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(198, 137, 40, 0.08) 100%)',
              borderRadius: '20px',
              padding: '18px 22px',
              border: '1.5px solid rgba(231, 171, 72, 0.35)',
              boxShadow: '0 14px 32px rgba(0, 0, 0, 0.22)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top Gilded Accent Line */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, transparent, #F3C363, transparent)',
              }}
            />

            {/* Top Row: Tag + Subtitle */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span style={{ fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#F3C363' }}>
                ✦ Raigarh Concierge
              </span>
              <span style={{ fontSize: '0.72rem', color: '#A3C8B7', fontWeight: 600 }}>
                Instant Support
              </span>
            </div>

            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '14px', lineHeight: 1.2 }}>
              We're always here to help you
            </h4>

            {/* Action Buttons: Phone & WhatsApp Side-by-Side (Compact Height) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px', marginBottom: '12px' }}>
              <a
                href={`tel:${BRAND_CONTACT.phoneRaw}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  padding: '9px 12px',
                  borderRadius: '10px',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                <Phone size={13} style={{ color: '#E7AB48' }} />
                <span>{BRAND_CONTACT.phone}</span>
              </a>

              <a
                href={`https://wa.me/${BRAND_CONTACT.whatsapp}?text=Hello%20Murari%20Team%2C%20I%20need%20assistance.`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  backgroundColor: '#1E6F4B',
                  padding: '9px 12px',
                  borderRadius: '10px',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontSize: '0.84rem',
                  fontWeight: 700,
                  boxShadow: '0 4px 12px rgba(30, 111, 75, 0.3)',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                <MessageCircle size={14} />
                <span>WhatsApp Chat</span>
              </a>
            </div>

            {/* Timings & Locations: Compact Row */}
            <div
              style={{
                paddingTop: '10px',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                gap: '6px 14px',
                fontSize: '0.76rem',
                color: '#D4E2DC',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={12} style={{ color: '#E7AB48', flexShrink: 0 }} />
                <span>9:00 AM – 10:30 PM (Daily)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MapPin size={12} style={{ color: '#E7AB48', flexShrink: 0 }} />
                <span>Dhimrapur Rd & Hatri Chowk</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Bottom Bar: Social Icons & Copyright */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            paddingTop: '26px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.84rem',
            color: 'rgba(250, 247, 242, 0.72)',
          }}
        >
          {/* Social Icons & Currency */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <div style={{ display: 'flex', gap: '14px' }}>
              <a href="https://instagram.com/murarithekitchen" target="_blank" rel="noopener noreferrer" style={{ color: '#FAF7F2', display: 'flex', transition: 'color 0.2s' }} aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#FAF7F2', display: 'flex', transition: 'color 0.2s' }} aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: '#FAF7F2', display: 'flex', transition: 'color 0.2s' }} aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><polygon points="10 15 15 12 10 9 10 15"/></svg>
              </a>
            </div>
            <span style={{ opacity: 0.4 }}>|</span>
            <span style={{ fontSize: '0.82rem', color: '#E7AB48', fontWeight: 700 }}>₹ INR Currency</span>
          </div>

          {/* Copyright & Certified Note */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px', flexWrap: 'wrap' }}>
            <span>© {new Date().getFullYear()} MURARI Sweets & The Kitchen. All Rights Reserved.</span>
            <span>•</span>
            <span>Raigarh, Chhattisgarh</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
