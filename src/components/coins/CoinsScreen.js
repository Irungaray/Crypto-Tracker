import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

class CoinsScreen extends Component {

  handlePress = () => {
    console.log('Go to details', this.props);

    this.props.navigation.navigate('CoinDetail');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Coins Screen
        </Text>

        <Pressable onPress={this.handlePress} style={styles.btn}>
          <Text style={styles.btnText}>
            Go to Details
          </Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cointainer: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center"
  },

  titleText: {
    textAlign: "center"
  },

  btn: {
    padding: 8,
    backgroundColor: "black",
    borderRadius: 8,
    margin: 16
  },

  btnText: {
    color: "#fff",
    textAlign: "center"
  }
})

export default CoinsScreen;