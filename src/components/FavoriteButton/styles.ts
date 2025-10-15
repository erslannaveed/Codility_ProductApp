import { StyleSheet } from 'react-native';
import { COLORS, SPACING } from '../../utils/constants';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.surface,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  favoriteContainer: {
    backgroundColor: '#FFE5E5',
    borderColor: '#FF6B6B',
  },
  smallContainer: {
    width: 32,
    height: 32,
  },
  mediumContainer: {
    width: 40,
    height: 40,
  },
  largeContainer: {
    width: 48,
    height: 48,
  },
  icon: {
    textAlign: 'center',
  },
});
