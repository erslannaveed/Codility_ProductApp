import React from 'react';
import { TouchableOpacity, Text, ViewStyle } from 'react-native';
import { COLORS } from '../../utils/constants';
import  styles  from './styles'

interface FavoriteButtonProps {
  isFavorite: boolean;
  onPress: () => void;
  size?: 'small' | 'medium' | 'large';
  style?: ViewStyle;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  isFavorite,
  onPress,
  size = 'medium',
  style,
}) => {
  const iconSize = size === 'small' ? 16 : size === 'large' ? 28 : 20;
  
  return (
    <TouchableOpacity
      style={[
        styles.container,
        styles[`${size}Container`],
        isFavorite && styles.favoriteContainer,
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {isFavorite ? (
        <Text style={[styles.icon, { fontSize: iconSize }]}>❤️</Text>
      ) : (
        <Text style={[styles.icon, { fontSize: iconSize }]}>🤍</Text>
      )}
    </TouchableOpacity>
  );
};

export default FavoriteButton;
