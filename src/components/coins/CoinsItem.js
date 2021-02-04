import React from 'react';
import { View, Text, StyleSheet, Image, Platform } from 'react-native';

import Colors from '../../res/colors';

const CoinsItem = ({ item }) => {

  const getImgArrow = () => {
    if(item.percent_change_1h > 0) {
      return require("../../assets/up.png");
    } else {
      return require("../../assets/down.png");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.symbolText}>{item.name}</Text>
        <Text style={styles.nameText}>{item.symbol}</Text>
        <Text style={styles.priceText}>$ {item.price_usd}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.percentText}>
          % {item.percent_change_1h}
        </Text>

        <Image style={styles.imgIcon} source={ getImgArrow() } />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    marginLeft: Platform.OS == 'ios' ? 16 : 0,
    borderBottomColor: Colors.zircon,
    borderBottomWidth: 1
  },
  row: {
    flexDirection: "row"
  },
  symbolText: {
    color: "#fff",
    marginRight: 12,
    fontWeight: "bold",
    fontSize: 17
  },
  nameText: {
    color: "#fff",
    marginRight: 16,
    fontSize: 12
  },
  priceText: {
    color: "#fff",
    fontSize: 15
  },
  percentText: {
    color: "#fff",
    marginRight: 8,
    fontSize: 15
  },
  imgIcon: {
    width: 22,
    height: 22
  }
})

export default CoinsItem;