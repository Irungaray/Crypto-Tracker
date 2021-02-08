import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
} from 'react-native';

import styles from './styles/CoinsItem';

const CoinsItem = ({ item, onPress }) => {
  const getImgArrow = () => {
    if (item.percent_change_1h > 0) {
      return require('../../assets/up.png');
    } else {
      return require('../../assets/down.png');
    }
  };

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.symbolText}>{item.name}</Text>
        <Text style={styles.nameText}>{item.symbol}</Text>
        <Text style={styles.priceText}>$ {item.price_usd}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.percentText}>% {item.percent_change_1h}</Text>

        <Image style={styles.imgIcon} source={getImgArrow()} />
      </View>
    </Pressable>
  );
};

export default CoinsItem;
