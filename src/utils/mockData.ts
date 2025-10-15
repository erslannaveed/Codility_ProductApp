import { Product } from '../types';
import ImagesPaths from '../assets/Paths';

const mockProducts: Product[] = [
    {
      id: '1',
      name: 'iPhone 15 Pro',
      description: 'The latest iPhone with A17 Pro chip, titanium design, and advanced camera system.',
      price: 999,
      image: ImagesPaths.ProductsCover,
      category: 'Smartphones',
      rating: 4.8,
      stock: 15,
      brand: 'Apple',
      features: ['A17 Pro Chip', 'Titanium Design', '48MP Camera', 'USB-C', 'Action Button']
    },    
    {
      id: '2',
      name: 'Samsung Galaxy S24 Ultra',
      description: 'Premium Android smartphone with S Pen, advanced AI features, and stunning display.',
      price: 1199,
      image: ImagesPaths.ProductsCover,
      category: 'Smartphones',
      rating: 4.7,
      stock: 12,
      brand: 'Samsung',
      features: ['S Pen', '200MP Camera', 'AI Features', 'S24 Ultra Display', 'Long Battery Life']
    },
    {
      id: '3',
      name: 'MacBook Pro 16"',
      description: 'Powerful laptop with M3 Pro chip, Liquid Retina XDR display, and all-day battery life.',
      price: 2499,
      image: ImagesPaths.ProductsCover,
      category: 'Laptops',
      rating: 4.9,
      stock: 8,
      brand: 'Apple',
      features: ['M3 Pro Chip', '16" Display', '22-hour Battery', '1080p Camera', '6-speaker Sound System']
    },
    {
      id: '4',
      name: 'Dell XPS 15',
      description: 'Premium Windows laptop with Intel Core i7, OLED display, and sleek design.',
      price: 1899,
      image: ImagesPaths.ProductsCover,
      category: 'Laptops',
      rating: 4.6,
      stock: 10,
      brand: 'Dell',
      features: ['Intel Core i7', '15.6" OLED Display', '32GB RAM', '1TB SSD', 'Windows 11']
    },
    {
      id: '5',
      name: 'Sony WH-1000XM5',
      description: 'Industry-leading noise canceling wireless headphones with exceptional sound quality.',
      price: 399,
      image: ImagesPaths.ProductsCover,
      category: 'Audio',
      rating: 4.8,
      stock: 25,
      brand: 'Sony',
      features: ['Industry-leading ANC', '30-hour Battery', 'Quick Charge', 'Touch Controls', 'Hi-Res Audio']
    },
    {
      id: '6',
      name: 'iPad Pro 12.9"',
      description: 'Most powerful iPad with M2 chip, Liquid Retina XDR display, and Apple Pencil support.',
      price: 1099,
      image: ImagesPaths.ProductsCover,
      category: 'Tablets',
      rating: 4.7,
      stock: 18,
      brand: 'Apple',
      features: ['M2 Chip', '12.9" Display', 'Apple Pencil', 'Magic Keyboard', 'Face ID']
    },
    {
      id: '7',
      name: 'Samsung Galaxy Tab S9 Ultra',
      description: 'Premium Android tablet with S Pen, large 14.6" display, and powerful performance.',
      price: 1199,
      image: ImagesPaths.ProductsCover,
      category: 'Tablets',
      rating: 4.5,
      stock: 14,
      brand: 'Samsung',
      features: ['14.6" Display', 'S Pen Included', 'Snapdragon 8 Gen 2', '11,200mAh Battery', 'DeX Mode']
    },
    {
      id: '8',
      name: 'AirPods Pro 2nd Gen',
      description: 'Active noise cancellation with spatial audio and personalized spatial audio.',
      price: 249,
      image: ImagesPaths.ProductsCover,
      category: 'Audio',
      rating: 4.6,
      stock: 30,
      brand: 'Apple',
      features: ['Active Noise Cancellation', 'Spatial Audio', 'Adaptive Transparency', 'Personalized Spatial Audio', 'MagSafe Charging']
    }
  ];

export default mockProducts;