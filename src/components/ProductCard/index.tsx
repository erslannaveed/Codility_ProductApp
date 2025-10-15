import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Product } from '../../types';
import { FavoriteButton } from '../index';
import  styles  from './styles';

interface ProductCardProps {
  product: Product;
  onPress: (product: Product) => void;
  isFavorite?: boolean;
  onToggleFavorite?: (productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onPress, 
  isFavorite = false, 
  onToggleFavorite 
}) => {
  const handleFavoritePress = () => {
    onToggleFavorite?.(product.id);
  };


  console.log(product.image);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(product)}
      activeOpacity={0.7}
    >
      <View style={styles.imageContainer}>
        <Image source={product.image} style={styles.image} />
        {onToggleFavorite && (
          <FavoriteButton
            isFavorite={isFavorite}
            onPress={handleFavoritePress}
            size="small"
            style={styles.favoriteButton}
          />
        )}
      </View>
      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={2}>
          {product.name}
        </Text>
        <Text style={styles.brand}>{product.brand}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <View style={styles.footer}>
          <Text style={styles.rating}>⭐ {product.rating}</Text>
          <Text style={[
            styles.stock,
            product.stock > 0 ? styles.inStock : styles.outOfStock
          ]}>
            {product.stock > 0 ? `${product.stock} left` : 'Out of stock'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
