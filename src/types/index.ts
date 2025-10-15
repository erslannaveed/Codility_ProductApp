export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: any;
  category: string;
  rating: number;
  stock: number;
  brand: string;
  features: string[];
}

export interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
  selectedProduct: Product | null;
  favorites: string[]; // Array of product IDs that are favorited
}

export interface RootState {
  product: ProductState;
}

export type RootStackParamList = {
  ProductsList: undefined;
  ProductDetails: { productId: string };
};
