import { assetUrl } from '../utils/assetUrl';

// Static verified product dataset for Murari Sweets & Savouries
export const CATEGORIES = [
  { id: 'all', name: 'All Specialties', icon: '✦' },
  { id: 'bestsellers', name: 'Best Sellers', icon: '★' },
  { id: 'sweets', name: 'Pure Ghee Sweets', icon: '❖' },
  { id: 'savouries', name: 'Traditional Savouries', icon: '⚜' },
  { id: 'masterpieces', name: 'Signature Masterpieces', icon: '◆' },
  { id: 'gifting', name: 'Royal Gift Boxes', icon: '✧' },
  { id: 'express', name: '₹99 Fresh Bestsellers', icon: '✹' },
];

const RAW_PRODUCTS = [
  // 1. Royal Kaju Katli (From /items/sweet-1.jpg)
  {
    id: 'royal-kaju-katli',
    name: 'Murari Royal Kaju Katli',
    category: 'sweets',
    isBestSeller: true,
    isMasterpiece: false,
    badge: '100% PURE GOAN CASHEW',
    tag: 'Best Seller',
    rating: 4.96,
    reviewsCount: 342,
    basePrice: 280,
    weights: [
      { label: '200 G', multiplier: 1, price: 280 },
      { label: '400 G', multiplier: 1.9, price: 530 },
      { label: '800 G', multiplier: 3.6, price: 990 },
    ],
    image: '/items/sweet-1.jpg',
    description: 'Diamond-shaped silver-kissed sweet crafted exclusively from selected high-grade Goan cashew nuts with zero added starch and pure natural sweetness.',
    ingredients: ['Grade W210 Cashews', 'Refined Cane Sugar', 'Pure Silver Leaf (Vark)', 'Cardamom Essence'],
    shelfLife: '25 Days',
    isVeg: true,
  },

  // 2. Royal Malai Cham Cham (From /items/sweet-2.jpg)
  {
    id: 'shahi-cham-cham',
    name: 'Royal Malai Cham Cham',
    category: 'sweets',
    isBestSeller: true,
    isMasterpiece: false,
    badge: 'FRESH CHHENA & MAWA',
    tag: 'Daily Fresh Batch',
    rating: 4.91,
    reviewsCount: 168,
    basePrice: 160,
    weights: [
      { label: '250 G', multiplier: 1, price: 160 },
      { label: '500 G', multiplier: 1.85, price: 295 },
      { label: '1 KG', multiplier: 3.5, price: 560 },
    ],
    image: '/items/sweet-2.jpg',
    description: 'Delicate oval dumplings of fresh cow milk chhena poached in light cardamom syrup, rolled in rich mawa dust and garnished with Iranian pistachios.',
    ingredients: ['Fresh Cow Milk Chhena', 'Organic Cane Sugar', 'Roasted Khoya Mawa', 'Green Pistachios', 'Cardamom'],
    shelfLife: '7 Days',
    isVeg: true,
  },

  // 3. Royal Shahi Kala Jamun (From /items/sweet-3.jpg)
  {
    id: 'royal-shahi-kala-jamun',
    name: 'Royal Shahi Kala Jamun',
    category: 'sweets',
    isBestSeller: true,
    isMasterpiece: true,
    badge: 'SLOW COOKED IN DESI GHEE',
    tag: 'Imperial Sweet',
    rating: 4.94,
    reviewsCount: 220,
    basePrice: 170,
    weights: [
      { label: '250 G', multiplier: 1, price: 170 },
      { label: '500 G', multiplier: 1.85, price: 315 },
      { label: '1 KG', multiplier: 3.5, price: 590 },
    ],
    image: '/items/sweet-3.jpg',
    description: 'Deep carmelized dark gulab jamuns slow-fried to an imperial velvet finish in pure desi ghee, filled with saffron-soaked dry fruit kernels.',
    ingredients: ['Pure Buffalo Mawa', 'Cow Ghee', 'Kashmir Saffron', 'Pistachios', 'Almonds', 'Cardamom Syrup'],
    shelfLife: '12 Days',
    isVeg: true,
  },

  // 4. Rose Petal Chenna Rasgulla (From /items/sweet-4.jpg)
  {
    id: 'bengali-chenna-rasgulla',
    name: 'Rose Petal Spongy Chenna Rasgulla',
    category: 'sweets',
    isBestSeller: true,
    isMasterpiece: false,
    badge: 'MELT-IN-MOUTH SPONGY',
    tag: 'Bestseller',
    rating: 4.89,
    reviewsCount: 195,
    basePrice: 140,
    weights: [
      { label: '250 G (6 Pcs)', multiplier: 1, price: 140 },
      { label: '500 G (12 Pcs)', multiplier: 1.85, price: 260 },
      { label: '1 KG (24 Pcs)', multiplier: 3.5, price: 490 },
    ],
    image: '/items/sweet-4.jpg',
    description: 'Feather-light spongy chhena spheres soaked in delicate rose-scented syrup, adorned with fresh rose petals. Extremely juicy and refreshing.',
    ingredients: ['Fresh Cow Milk Curd Chhena', 'Light Sugar Syrup', 'Rose Petal Infusion', 'Cardamom Essence'],
    shelfLife: '5 Days',
    isVeg: true,
  },

  // 5. Shahi Badam Halwa Burfi (From /items/sweet-5.jpg)
  {
    id: 'badam-halwa-burfi',
    name: 'Shahi Badam Halwa Burfi',
    category: 'sweets',
    isBestSeller: true,
    isMasterpiece: false,
    badge: 'ROASTED ALMONDS & PURE GHEE',
    tag: 'Traditional Delicacy',
    rating: 4.88,
    reviewsCount: 140,
    basePrice: 190,
    weights: [
      { label: '200 G', multiplier: 1, price: 190 },
      { label: '400 G', multiplier: 1.85, price: 350 },
      { label: '800 G', multiplier: 3.5, price: 660 },
    ],
    image: '/items/sweet-5.jpg',
    description: 'Rich slow-roasted grain halwa burfi fudge cooked in pure bilona ghee, loaded with crunchy slivered California almonds on top.',
    ingredients: ['Pure Desi Cow Ghee', 'Wheat Malt & Lentil Base', 'California Almonds', 'Organic Cane Sugar', 'Cardamom'],
    shelfLife: '20 Days',
    isVeg: true,
  },

  // 6. Imperial Stuffed Parwal Sweet (From /items/sweet-6.jpg)
  {
    id: 'stuffed-parwal-mithai',
    name: 'Imperial Stuffed Parwal Sweet',
    category: 'masterpieces',
    isBestSeller: true,
    isMasterpiece: true,
    badge: 'ROYAL HERITAGE MASTERPIECE',
    tag: 'Signature Creation',
    originalPrice: 340,
    basePrice: 310,
    saveAmount: 30,
    rating: 4.97,
    reviewsCount: 184,
    weights: [
      { label: '250 G', multiplier: 1, price: 310 },
      { label: '500 G', multiplier: 1.85, price: 570 },
      { label: '1 KG', multiplier: 3.5, price: 1080 },
    ],
    image: '/items/sweet-6.jpg',
    description: 'A prized imperial confection of tender candied pointed gourd stuffed with saffron-infused pistachio mawa and adorned with silver vark leaf.',
    ingredients: ['Candied Tender Parwal', 'Rich Reduced Mawa (Khoya)', 'Iranian Pistachios', 'Saffron', 'Silver Foil (Vark)'],
    shelfLife: '10 Days',
    isVeg: true,
  },

  // 7. Traditional Spiced Chegodilu (From /items/Savouries-1.jpg)
  {
    id: 'spiced-chegodilu',
    name: 'Traditional Spiced Chegodilu (Ring Murukku)',
    category: 'savouries',
    isBestSeller: true,
    isMasterpiece: false,
    badge: 'COLD-PRESSED GROUNDNUT OIL',
    tag: 'Crispy Favorite',
    rating: 4.87,
    reviewsCount: 156,
    basePrice: 110,
    weights: [
      { label: '150 G', multiplier: 1, price: 110 },
      { label: '250 G', multiplier: 1.6, price: 175 },
      { label: '500 G', multiplier: 3, price: 330 },
    ],
    image: '/items/Savouries-1.jpg',
    description: 'Crisp, crunchy golden rings prepared with roasted rice flour, sesame seeds, cumin, and hint of red chilli in wood-pressed native oil.',
    ingredients: ['Stone Ground Rice Flour', 'White Sesame Seeds', 'Cumin Seeds', 'Asafoetida', 'Cold-Pressed Groundnut Oil'],
    shelfLife: '45 Days',
    isVeg: true,
  },

  // 8. Murari Golden Paniyaram Bites (From /items/Savouries-2.jpg)
  {
    id: 'hot-golden-paniyaram',
    name: 'Murari Golden Paniyaram Bites',
    category: 'savouries',
    isBestSeller: false,
    isMasterpiece: false,
    badge: 'DAILY FRESH BITES',
    tag: 'Teatime Special',
    rating: 4.82,
    reviewsCount: 88,
    basePrice: 99,
    weights: [
      { label: '150 G', multiplier: 1, price: 99 },
      { label: '300 G', multiplier: 1.8, price: 178 },
      { label: '600 G', multiplier: 3.2, price: 316 },
    ],
    image: '/items/Savouries-2.jpg',
    description: 'Crispy golden outer crust with a soft, pillowy spiced center, tempered with fresh green chillies, curry leaves, and ginger.',
    ingredients: ['Fermented Lentil & Rice Batter', 'Fresh Curry Leaves', 'Ginger', 'Green Chillies', 'Native Oil'],
    shelfLife: '3 Days',
    isVeg: true,
  },

  // 9. Grand Savoury Feast Platter (From /items/Savouries-5.jpg)
  {
    id: 'grand-savoury-feast',
    name: 'Grand Savoury Feast & Teatime Platter',
    category: 'savouries',
    isBestSeller: true,
    isMasterpiece: true,
    badge: 'ASSORTED CRUNCH & BITES',
    tag: 'Party Special',
    rating: 4.95,
    reviewsCount: 176,
    basePrice: 240,
    weights: [
      { label: '350 G (Serves 2-3)', multiplier: 1, price: 240 },
      { label: '700 G (Serves 5-6)', multiplier: 1.85, price: 440 },
      { label: '1.2 KG (Grand Party)', multiplier: 3, price: 720 },
    ],
    image: '/items/Savouries-5.jpg',
    description: 'An abundant royal platter of freshly made samosas, savoury rolls, khasta kachoris, puff pastries, and spicy dipping chutneys.',
    ingredients: ['Mini Potato Samosas', 'Moong Dal Kachoris', 'Crispy Spring Rolls', 'Mint Chutney', 'Imli Saunth'],
    shelfLife: '2 Days',
    isVeg: true,
  },

  // 10. The Executive Gourmet Hamper Trunk (From /items/gift-1.jpg)
  {
    id: 'executive-gourmet-trunk',
    name: 'The Executive Gourmet Hamper Trunk',
    category: 'gifting',
    isBestSeller: true,
    isMasterpiece: true,
    badge: 'LUXURY TRUNK PACKAGING',
    tag: 'Corporate Choice',
    rating: 4.96,
    reviewsCount: 112,
    basePrice: 1450,
    weights: [
      { label: 'Standard Trunk (1 KG)', multiplier: 1, price: 1450 },
      { label: 'Grand Trunk (1.8 KG)', multiplier: 1.7, price: 2450 },
      { label: 'Presidential (2.8 KG)', multiplier: 2.5, price: 3600 },
    ],
    image: '/items/gift-1.jpg',
    description: 'A leatherette keepsake trunk packed with artisanal dry fruit preserves, roasted nuts, royal sweets, imported condiments, and scented candles.',
    ingredients: ['Assorted Signature Sweets', 'Roasted Afghani Almonds & Cashews', 'Gourmet Preserves', 'Brass Tea Sifter'],
    shelfLife: '30 Days',
    isVeg: true,
  },

  // 11. Utsav Macrame Festive Sweet Hamper (From /items/gift-2.jpg)
  {
    id: 'utsav-macrame-basket',
    name: 'Utsav Macrame Festive Sweet Hamper',
    category: 'gifting',
    isBestSeller: true,
    isMasterpiece: true,
    badge: 'HANDWOVEN MACRAME BASKET',
    tag: 'Festive Delight',
    rating: 4.98,
    reviewsCount: 164,
    basePrice: 1250,
    weights: [
      { label: 'Classic Basket (800 G)', multiplier: 1, price: 1250 },
      { label: 'Royal Basket (1.4 KG)', multiplier: 1.7, price: 2150 },
      { label: 'Imperial Basket (2.2 KG)', multiplier: 2.5, price: 3100 },
    ],
    image: '/items/gift-2.jpg',
    description: 'Handwoven macrame basket adorned with silk flowers and brass diyas, packed with Murari Kaju Katli, Cham Cham, and spiced dry fruits.',
    ingredients: ['Kaju Katli Box', 'Pure Ghee Sweets', 'California Almond Kernels', 'Brass Handcrafted Diyas'],
    shelfLife: '25 Days',
    isVeg: true,
  },

  // 12. Celebration Treats & Munchies Gift Box (From /items/gift-3.jpg)
  {
    id: 'celebration-snack-pack',
    name: 'Celebration Treats & Munchies Gift Box',
    category: 'gifting',
    isBestSeller: false,
    isMasterpiece: false,
    badge: 'CELEBRATION PACK',
    tag: 'Youth & Family',
    rating: 4.84,
    reviewsCount: 72,
    basePrice: 650,
    weights: [
      { label: 'Standard Box (600 G)', multiplier: 1, price: 650 },
      { label: 'Jumbo Box (1.2 KG)', multiplier: 1.8, price: 1170 },
    ],
    image: '/items/gift-3.jpg',
    description: 'Vibrant celebration hamper filled with crunch snacks, sweet bites, chocolates, and premium beverages for family gatherings.',
    ingredients: ['Assorted Savouries', 'Chocolates & Wafers', 'Teatime Crunch Bites'],
    shelfLife: '30 Days',
    isVeg: true,
  },

  // 13. Royal Celebration Sweet Gift Bouquet (From /items/gift-4.jpg)
  {
    id: 'festive-treat-bouquet',
    name: 'Royal Celebration Sweet Gift Bouquet',
    category: 'gifting',
    isBestSeller: false,
    isMasterpiece: true,
    badge: 'BOUQUET PRESENTATION',
    tag: 'Special Occasion',
    rating: 4.91,
    reviewsCount: 58,
    basePrice: 850,
    weights: [
      { label: 'Bouquet Pack (500 G)', multiplier: 1, price: 850 },
      { label: 'Grand Bouquet (1 KG)', multiplier: 1.75, price: 1480 },
    ],
    image: '/items/gift-4.jpg',
    description: 'Stylishly arranged floral basket packed with gift vouchers, artisanal mithai bites, and decorative accents for memorable gifting.',
    ingredients: ['Artisanal Sweet Squares', 'Festive Greeting Card', 'Decorative Keepsake Planter'],
    shelfLife: '20 Days',
    isVeg: true,
  },

  // 14. Maharaja Wedding Trousseau Sweet Hamper (From /items/gift-5.jpg)
  {
    id: 'royal-wedding-trousseau',
    name: 'Maharaja Wedding Trousseau Sweet Hamper',
    category: 'gifting',
    isBestSeller: true,
    isMasterpiece: true,
    badge: 'ROYAL GOLD BASKET',
    tag: 'Wedding Special',
    rating: 4.99,
    reviewsCount: 215,
    basePrice: 2200,
    weights: [
      { label: 'Heritage Hamper (1.5 KG)', multiplier: 1, price: 2200 },
      { label: 'Maharaja Hamper (2.8 KG)', multiplier: 1.75, price: 3850 },
    ],
    image: '/items/gift-5.jpg',
    description: 'Grand wicker basket draped in royal gold tissue and floral crest, filled with Besan Ladoo, Calcutta Chevda, roasted almonds, and luxury sweets.',
    ingredients: ['Pure Ghee Besan Ladoo', 'Calcutta Chevda Savoury', 'Premium Almonds', 'Dry Fruit Delicacies'],
    shelfLife: '30 Days',
    isVeg: true,
  },

  // 15. ₹99 Express Bite Box
  {
    id: 'express-snack-pack',
    name: 'Murari Teatime Crunch Box',
    category: 'express',
    isBestSeller: false,
    isMasterpiece: false,
    badge: '₹99 STORE',
    tag: 'Daily Fresh',
    basePrice: 99,
    weights: [
      { label: '100 G', multiplier: 1, price: 99 },
    ],
    image: '/items/Savouries-2.jpg',
    description: 'Perfect bite-sized sampler of our daily fresh savouries and mini bites. Ideal for travel and sudden tea cravings.',
    ingredients: ['Spiced Chegodilu', 'Golden Bites', 'Roasted Peanuts'],
    shelfLife: '20 Days',
    isVeg: true,
  }
];

export const PRODUCTS = RAW_PRODUCTS.map((prod) => ({
  ...prod,
  image: assetUrl(prod.image),
}));

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Balakrishna Hebbar',
    rating: 5,
    location: 'Raigarh, Chhattisgarh',
    comment: 'Tasty and flavor full. The Kaju Katli and Cham Cham are pure perfection. The aroma of pure desi ghee took me straight back to festive mornings.',
    verified: true,
    product: 'Murari Royal Kaju Katli'
  },
  {
    id: 2,
    name: 'Neha Agrawal',
    rating: 5,
    location: 'Raigarh, Chhattisgarh',
    comment: 'The Parwal sweet and Kala Jamun were phenomenal! So happy to have such high quality sweets right here in Raigarh. Packaging is truly 5-star.',
    verified: true,
    product: 'Imperial Stuffed Parwal Sweet'
  },
  {
    id: 3,
    name: 'Karthikeyan S',
    rating: 5,
    location: 'Raigarh City',
    comment: 'The Chegodilu rings and savoury platters are unmatched. Crispy, zero excess oil, and genuine spices. Murari is our permanent celebration partner.',
    verified: true,
    product: 'Traditional Spiced Chegodilu'
  },
  {
    id: 4,
    name: 'Sunita Sharma',
    rating: 5,
    location: 'Raigarh, Chhattisgarh',
    comment: 'Ordered 50 Maharaja wedding hampers for our daughter’s reception. Every single guest called to praise the presentation and taste. Absolutely regal!',
    verified: true,
    product: 'Maharaja Wedding Trousseau Sweet Hamper'
  }
];
