import React, { Component } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  FlatList,
  ActivityIndicator
} from 'react-native';

import CoinsItem from './CoinsItem';

import Http from '../../libs/http';

class CoinsScreen extends Component {

  state = {
    coins: [],
    loading: false
  }

  componentDidMount = async () => {
    this.setState({ loading: true });

    const response = await Http.instance.get("https://api.coinlore.net/api/tickers/");
    console.log("Api response:", response);

    this.setState({ coins: response.data, loading: false })
  }

  handlePress = () => {
    console.log('Go to details', this.props);

    this.props.navigation.navigate('CoinDetail');
  }

  render() {

    const { coins, loading } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Coins Screen
        </Text>

        { loading ?
          <ActivityIndicator
            style={styles.loader}
            color="#ffff"
            size="large"
          />
          : null
        }

        {/* Flatlist offers much better performance */}
        <FlatList
          data={coins}
          renderItem={({ item }) =>
            <CoinsItem item={item} />
          }
        />

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

  loader: {
    marginTop: 60
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