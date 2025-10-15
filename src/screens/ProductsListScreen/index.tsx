import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  RefreshControl,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, Product } from '../../types';
import { RootState, AppDispatch } from '../../store';
import { fetchProducts, searchProducts, fetchProductsByCategory, toggleFavorite } from '../../store/productSlice';
import { ProductCard, SearchBar, CategoryFilter, LoadingSpinner, EmptyState } from '../../components';
import  styles  from './styles';

type ProductsListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ProductsList'>;

interface Props {
  navigation: ProductsListScreenNavigationProp;
}

const ProductsListScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error, favorites } = useSelector((state: RootState) => state.product);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ['All', 'Favorites', 'Smartphones', 'Laptops', 'Audio', 'Tablets'];

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      Alert.alert('Error', error);
    }
  }, [error]);

  const handleRefresh = async () => {
    setRefreshing(true);
    if (selectedCategory && selectedCategory !== 'All') {
      await dispatch(fetchProductsByCategory(selectedCategory));
    } else if (searchQuery.trim()) {
      await dispatch(searchProducts(searchQuery));
    } else {
      await dispatch(fetchProducts());
    }
    setRefreshing(false);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      dispatch(searchProducts(query));
    } else if (selectedCategory && selectedCategory !== 'All') {
      dispatch(fetchProductsByCategory(selectedCategory));
    } else {
      dispatch(fetchProducts());
    }
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    if (category === 'All') {
      dispatch(fetchProducts());
    } else if (category === 'Favorites') {
    
    } else {
      dispatch(fetchProductsByCategory(category));
    }
  };

  const handleToggleFavorite = (productId: string) => {
    dispatch(toggleFavorite(productId));
  };

  const renderProductItem = ({ item }: { item: Product }) => (
    <ProductCard
      product={item}
      onPress={(product) => navigation.navigate('ProductDetails', { productId: product.id })}
      isFavorite={favorites?.includes(item.id) || false}
      onToggleFavorite={handleToggleFavorite}
    />
  );

  const renderCategoryFilter = () => (
    <CategoryFilter
      categories={categories}
      selectedCategory={selectedCategory}
      onCategorySelect={handleCategoryFilter}
    />
  );

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'Favorites' 
    ? products.filter(product => favorites?.includes(product.id) || false)
    : products;

  if (loading && !refreshing) {
    return <LoadingSpinner text="Loading products..." fullScreen />;
  }

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <SearchBar
        value={searchQuery}
        onChangeText={handleSearch}
        placeholder="Search products..."
      />

      {/* Category Filters */}
      {renderCategoryFilter()}

      {/* Products List */}
      <FlatList
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.productsList}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        showsVerticalScrollIndicator={false}
      />

      {filteredProducts.length === 0 && !loading && (
        <EmptyState
          title={selectedCategory === 'Favorites' ? "No favorites yet" : "No products found"}
          message={selectedCategory === 'Favorites' 
            ? "Add some products to your favorites to see them here" 
            : "Try adjusting your search or filter criteria"
          }
          icon={selectedCategory === 'Favorites' ? "❤️" : "🔍"}
        />
      )}
    </View>
  );
};

export default ProductsListScreen;
