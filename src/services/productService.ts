import { Product } from '../types';
import ImagesPaths from '../assets/Paths';
// Mock product data
import mockProducts from '../utils/mockData';

// Simulate API delay
const delay = (ms: number) => new Promise((resolve:any) => setTimeout(resolve, ms));

export const productService = {
  // Get all products
  async getProducts(): Promise<Product[]> {
    await delay(1000); // Simulate network delay
    return [...mockProducts];
  },

  // Get product by ID
  async getProductById(id: string): Promise<Product | null> {
    await delay(500); // Simulate network delay
    return mockProducts.find(product => product.id === id) || null;
  },

  // Search products by name or category
  async searchProducts(query: string): Promise<Product[]> {
    await delay(800); // Simulate network delay
    const lowercaseQuery = query.toLowerCase();
    return mockProducts.filter(product => 
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery)
    );
  },

  // Get products by category
  async getProductsByCategory(category: string): Promise<Product[]> {
    await delay(600); // Simulate network delay
    return mockProducts.filter(product => 
      product.category.toLowerCase() === category.toLowerCase()
    );
  }
};
