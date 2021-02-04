import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CoinsItem = ({ item }) => {
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16
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
    fontSize: 15
  }
})

export default CoinsItem;