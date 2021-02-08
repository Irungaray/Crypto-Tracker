import React, { Component } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import CoinsItem from './CoinsItem';
import CoinsSearch from './CoinsSearch';

import Http from '../../libs/http';

import styles from './styles/CoinsScreen';

class CoinsScreen extends Component {
  state = {
    coins: [],
    allCoins: [],
    loading: false,
  };

  componentDidMount = async () => {
    this.getCoins();
  };

  getCoins = async () => {
    this.setState({ loading: true });

    const response = await Http.instance.get(
      'https://api.coinlore.net/api/tickers/',
    );

    console.log('Api response:', response);

    this.setState({
      coins: response.data,
      allCoins: response.data,
      loading: false
    });
  }

  handleSearch = (query) => {
    const { allCoins } = this.state;

    const coinsFiltered = allCoins.filter((coin) => {
      return coin.name.toLowerCase().includes(query.toLowerCase()) || coin.symbol.toLowerCase().includes(query.toLowerCase())
    });

    this.setState({ coins: coinsFiltered });
  }

  handlePress = (coin) => {
    console.log('Go to details', this.props);

    this.props.navigation.navigate('CoinDetail', { coin });
  };

  render() {
    const { coins, loading } = this.state;

    return (
      <View style={styles.container}>

        <CoinsSearch onChange={this.handleSearch} />

        {loading ? (
          <ActivityIndicator style={styles.loader} color="#ffff" size="large" />
        ) : null}

        {/* Flatlist offers much better performance */}
        <FlatList
          data={coins}
          renderItem={({ item }) => (
            <CoinsItem item={item} onPress={() => this.handlePress(item)} />
          )}
        />
      </View>
    );
  }
}

export default CoinsScreen;