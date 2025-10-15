import React from 'react';
import { View, Text } from 'react-native';
import { COLORS } from '../../utils/constants';
import  styles  from './styles';

interface EmptyStateProps {
  title?: string;
  message?: string;
  icon?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No items found',
  message = 'Try adjusting your search or filter criteria',
  icon = '📭',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

export default EmptyState;
