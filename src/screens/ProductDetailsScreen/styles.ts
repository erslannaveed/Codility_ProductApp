import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingVertical: 20,
    position: 'relative',
  },
  productImage: {
    width: width * 1,
    height: width * 1,
    resizeMode: 'contain',
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  productBrand: {
    fontSize: 18,
    color: '#666',
    fontWeight: '500',
  },
  ratingStockContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  ratingContainer: {
    flex: 1,
  },
  rating: {
    fontSize: 20,
    color: '#FF9500',
    fontWeight: 'bold',
  },
  ratingText: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  stockContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  stock: {
    fontSize: 16,
    fontWeight: '600',
  },
  inStock: {
    color: '#34C759',
  },
  outOfStock: {
    color: '#FF3B30',
  },
  priceContainer: {
    marginBottom: 20,
  },
  price: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  priceLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  category: {
    fontSize: 16,
    color: '#666',
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    alignSelf: 'flex-start',
  },
  descriptionContainer: {
    marginBottom: 20,
  },
  descriptionLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  featuresContainer: {
    marginBottom: 30,
  },
  featuresLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  featureBullet: {
    fontSize: 16,
    color: '#007AFF',
    marginRight: 8,
    marginTop: 2,
  },
  featureText: {
    flex: 1,
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 8,
  },
  favoriteButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});
