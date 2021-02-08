import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles/FavoritesEmptyState';

const FavoritesEmptyState = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No Favorites</Text>
    </View>
  );
};

export default FavoritesEmptyState;
