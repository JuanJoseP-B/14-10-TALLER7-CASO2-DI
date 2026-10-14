export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface MenuTile {
  id: string;
  label: string;
  iconName: 'cake' | 'crown' | 'dessert' | 'cookie';
  href: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  rating: number;
  reviewCount: number;
  image: string;
  alt: string;
}

export interface StatItem {
  id: string;
  label: string;
  iconName: 'truck' | 'palette' | 'cart' | 'flame';
}

export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
  caption?: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export const NAV_ITEMS: NavItem[] = [
  { id: '1', label: 'Cakes', href: '#menu' },
  { id: '2', label: 'Theme Cakes', href: '#menu' },
  { id: '3', label: 'Desserts', href: '#menu' },
  { id: '4', label: 'Birthday', href: '#bestsellers' },
  { id: '5', label: 'Hampers', href: '#menu' },
  { id: '6', label: 'Anniversary', href: '#bestsellers' },
  { id: '7', label: 'Occasions', href: '#promise' },
  { id: '8', label: 'Occasions', href: '#promise' },
];

export const MENU_TILES: MenuTile[] = [
  { id: 'classic', label: 'CLASSIC', iconName: 'cake', href: '#menu' },
  { id: 'gourmet', label: 'GOURMET', iconName: 'crown', href: '#menu' },
  { id: 'desserts', label: 'DESSERTS', iconName: 'dessert', href: '#menu' },
  { id: 'cookies', label: 'COOKIES', iconName: 'cookie', href: '#menu' },
];

export const BESTSELLER_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Rich Chocolate Truffle Cake',
    price: 500,
    currency: '₹',
    rating: 5,
    reviewCount: 500,
    image: '/images/product-1.jpg',
    alt: 'Rich Chocolate Truffle Cake with chocolate glaze',
  },
  {
    id: 'prod-2',
    name: 'Choco Chip Truffle Cake',
    price: 509,
    currency: '₹',
    rating: 5,
    reviewCount: 500,
    image: '/images/product-2.jpg',
    alt: 'Choco Chip Truffle Cake topped with chocolate chips',
  },
  {
    id: 'prod-3',
    name: 'Tropical Fruit N Almond Cake',
    price: 509,
    currency: '₹',
    rating: 5,
    reviewCount: 500,
    image: '/images/product-3.jpg',
    alt: 'Tropical Fruit N Almond Cake with fresh fruit slices',
  },
  {
    id: 'prod-4',
    name: 'Rich Butterscotch Crunch Cake',
    price: 359,
    currency: '₹',
    rating: 5,
    reviewCount: 500,
    image: '/images/product-4.jpg',
    alt: 'Rich Butterscotch Crunch Cake with caramel brittle',
  },
];

export const PROMISE_STATS: StatItem[] = [
  { id: 'stat-1', label: 'ON-TIME DELIVERY', iconName: 'truck' },
  { id: 'stat-2', label: '5000+ DESIGNS', iconName: 'palette' },
  { id: 'stat-3', label: '2 CR+ ORDERS', iconName: 'cart' },
  { id: 'stat-4', label: 'BAKED FRESH', iconName: 'flame' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    image: '/images/gallery-1.jpg',
    alt: 'Tiered white celebration cake with elegant golden floral decorations',
  },
  {
    id: 'gal-2',
    image: '/images/gallery-2.jpg',
    alt: 'Smiling woman baker holding a birthday chocolate cake with glowing candles',
  },
  {
    id: 'gal-3',
    image: '/images/gallery-3.jpg',
    alt: 'Happy couple celebrating with a handcrafted two-tier cake',
  },
  {
    id: 'gal-4',
    image: '/images/gallery-4.jpg',
    alt: 'Two young friends happily celebrating around an anniversary cake',
  },
  {
    id: 'gal-5',
    image: '/images/gallery-5.jpg',
    alt: 'Two master pastry chefs presenting a large tiered pink celebration cake',
  },
  {
    id: 'gal-6',
    image: '/images/gallery-6.jpg',
    alt: 'Magnificent tiered celebration cake embellished with fresh flowers',
  },
];

export const FOOTER_PRIMARY_LINKS = [
  { label: 'Our Story', href: '#' },
  { label: 'Contact Us', href: '#' },
  { label: 'Locate Us', href: '#' },
  { label: 'Media', href: '#' },
  { label: 'Careers', href: '#' },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'KNOW US',
    links: [
      { label: 'Contact Us', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    title: 'NEED HELP',
    links: [
      { label: 'Cancellation And Refund', href: '#' },
      { label: 'Privacy Policy', href: '#' },
    ],
  },
  {
    title: 'MORE INFO',
    links: [
      { label: 'Terms And Conditions', href: '#' },
      { label: 'Customer Grievance', href: '#' },
    ],
  },
  {
    title: 'MORE INFO',
    links: [
      { label: 'Coupons & Offers', href: '#' },
      { label: 'Download App', href: '#' },
    ],
  },
];
