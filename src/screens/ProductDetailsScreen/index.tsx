import React, { useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Alert,
  Dimensions,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import { RootState, AppDispatch } from '../../store';
import { fetchProductById, clearError, toggleFavorite } from '../../store/productSlice';
import { LoadingSpinner, Button, FavoriteButton } from '../../components';
import  styles  from './styles';

type ProductDetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ProductDetails'>;
type ProductDetailsScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetails'>;

interface Props {
  navigation: ProductDetailsScreenNavigationProp;
  route: ProductDetailsScreenRouteProp;
}

const { width } = Dimensions.get('window');

const ProductDetailsScreen: React.FC<Props> = ({ navigation, route }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { selectedProduct, loading, error, favorites } = useSelector((state: RootState) => state.product);
  const { productId } = route.params;

  useEffect(() => {
    dispatch(fetchProductById(productId));
    
    return () => {
      dispatch(clearError());
    };
  }, [dispatch, productId]);

  useEffect(() => {
    if (error) {
      Alert.alert('Error', error, [
        { text: 'OK', onPress: () => navigation.goBack() }
      ]);
    }
  }, [error, navigation]);

  const handleAddToCart = () => {
    Alert.alert('Success', 'Product added to cart!');
  };

  const handleBuyNow = () => {
    Alert.alert('Buy Now', 'Redirecting to checkout...');
  };

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(productId));
  };

  if (loading) {
    return <LoadingSpinner text="Loading product details..." fullScreen />;
  }

  if (!selectedProduct) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Product not found</Text>
        <Button
          title="Go Back"
          onPress={() => navigation.goBack()}
          variant="primary"
        />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Product Image */}
      <View style={styles.imageContainer}>
        <Image source={selectedProduct.image} style={styles.productImage} />
        <FavoriteButton
          isFavorite={favorites?.includes(productId) || false}
          onPress={handleToggleFavorite}
          size="large"
          style={styles.favoriteButton}
        />
      </View>

      {/* Product Info */}
      <View style={styles.contentContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.productName}>{selectedProduct.name}</Text>
          <Text style={styles.productBrand}>{selectedProduct.brand}</Text>
        </View>

        {/* Rating and Stock */}
        <View style={styles.ratingStockContainer}>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>⭐ {selectedProduct.rating}</Text>
            <Text style={styles.ratingText}>Rating</Text>
          </View>
          <View style={styles.stockContainer}>
            <Text style={[
              styles.stock,
              selectedProduct.stock > 0 ? styles.inStock : styles.outOfStock
            ]}>
              {selectedProduct.stock > 0 ? `${selectedProduct.stock} in stock` : 'Out of stock'}
            </Text>
          </View>
        </View>

        {/* Price */}
        <View style={styles.priceContainer}>
          <Text style={styles.price}>RS{selectedProduct.price}</Text>
          <Text style={styles.priceLabel}>Price</Text>
        </View>

        {/* Category */}
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryLabel}>Category</Text>
          <Text style={styles.category}>{selectedProduct.category}</Text>
        </View>

        {/* Description */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionLabel}>Description</Text>
          <Text style={styles.description}>{selectedProduct.description}</Text>
        </View>

        {/* Features */}
        <View style={styles.featuresContainer}>
          <Text style={styles.featuresLabel}>Key Features</Text>
          {selectedProduct.features.map((feature, index) => (
            <View key={index} style={styles.featureItem}>
              <Text style={styles.featureBullet}>•</Text>
              <Text style={styles.featureText}>{feature}</Text>
            </View>
          ))}
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtonsContainer}>
          <Button
            title="Add to Cart"
            onPress={handleAddToCart}
            variant="outline"
            disabled={selectedProduct.stock === 0}
            style={styles.actionButton}
          />
          
          <Button
            title="Buy Now"
            onPress={handleBuyNow}
            variant="primary"
            disabled={selectedProduct.stock === 0}
            style={styles.actionButton}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetailsScreen;
