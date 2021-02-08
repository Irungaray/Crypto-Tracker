import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles/CoinMarketItem';

const CoinDetailScreen = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>{item.name}</Text>
      <Text style={styles.priceText}>{item.price_usd}</Text>
    </View>
  );
};

export default CoinDetailScreen;
