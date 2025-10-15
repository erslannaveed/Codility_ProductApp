import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductState } from '../types';
import { productService } from '../services/productService';

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
  selectedProduct: null,
  favorites: [],
};

// Async thunks
export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const products = await productService.getProducts();
      return products;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to fetch products');
    }
  }
);

export const fetchProductById = createAsyncThunk(
  'product/fetchProductById',
  async (productId: string, { rejectWithValue }) => {
    try {
      const product = await productService.getProductById(productId);
      if (!product) {
        throw new Error('Product not found');
      }
      return product;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to fetch product');
    }
  }
);

export const searchProducts = createAsyncThunk(
  'product/searchProducts',
  async (query: string, { rejectWithValue }) => {
    try {
      const products = await productService.searchProducts(query);
      return products;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to search products');
    }
  }
);

export const fetchProductsByCategory = createAsyncThunk(
  'product/fetchProductsByCategory',
  async (category: string, { rejectWithValue }) => {
    try {
      const products = await productService.getProductsByCategory(category);
      return products;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to fetch products by category');
    }
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setSelectedProduct: (state, action: PayloadAction<Product | null>) => {
      state.selectedProduct = action.payload;
    },
    clearProducts: (state) => {
      state.products = [];
    },
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      if (!state.favorites) {
        state.favorites = [];
      }
      const index = state.favorites.indexOf(productId);
      if (index > -1) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(productId);
      }
    },
    addToFavorites: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      if (!state.favorites) {
        state.favorites = [];
      }
      if (!state.favorites.includes(productId)) {
        state.favorites.push(productId);
      }
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      if (!state.favorites) {
        state.favorites = [];
      }
      state.favorites = state.favorites.filter(id => id !== productId);
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch products
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Fetch product by ID
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload;
        state.error = null;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Search products
      .addCase(searchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.error = null;
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Fetch products by category
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.error = null;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { 
  clearError, 
  setSelectedProduct, 
  clearProducts, 
  toggleFavorite, 
  addToFavorites, 
  removeFromFavorites 
} = productSlice.actions;
export default productSlice.reducer;
