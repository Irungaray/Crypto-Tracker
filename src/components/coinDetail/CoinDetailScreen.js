import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SectionList,
  FlatList,
  ActivityIndicator,
  Pressable
} from 'react-native';

import CoinMarketItem from './CoinMarketItem';

import Http from '../../libs/http';
import Storage from '../../libs/storage';

import styles from './styles/CoinDetailScreen';

class CoinDetailScreen extends Component {
  state = {
    coin: {},
    markets: [],
    isFavorite: false,
    loading: false
  };

  getSymbolIcon = (coinNameId) => {
    if (coinNameId) {
      return `https://c1.coinlore.com/img/16x16/${coinNameId}.png`;
    }
  };

  toggleFavorite = () => {
    if (this.state.isFavorite) {
      this.removeFavorite();
    } else {
      this.addFavorite();
    }
  }

  addFavorite = async () => {
    const coin = JSON.stringify(this.state.coin);
    const key = `favorite-${this.state.coin.id}`;

    const stored = await Storage.instance.store(key, coin);

    console.log("stored", stored);


    if(stored) {
      this.setState({ isFavorite: true });
    }
  }

  removeFavorite = async () => {
    const key = `favorite-${this.state.coin.id}`;

    await Storage.instance.remove(key);

    this.setState({ isFavorite: false });
  }

  getFavorite = async () => {
    try {
      const key = `favorite-${this.state.coin.id}`;

      const favStr = await Storage.instance.get(key);

      console.log("fav:", favStr);

      if(favStr != null) {
        this.setState({ isFavorite: true })
      }
    } catch (err) {
      console.log("getFavorite err:", err)
    }

  }

  getSections = (coin) => {
    const data = [
      {
        title: 'Market Cap',
        data: [coin.market_cap_usd],
      },
      {
        title: 'Volume - 24h',
        data: [coin.volume24],
      },
      {
        title: 'Changes - 24h',
        data: [coin.percent_change_24h],
      },
    ];

    return data;
  };

  getMarkets = async (coinId) => {
    this.setState({ loading: true });

    const url = `https://api.coinlore.net/api/coin/markets/?id=${coinId}`;

    const markets = await Http.instance.get(url);

    this.setState({ markets, loading: false });
  };

  componentDidMount() {
    const { coin } = this.props.route.params;

    this.props.navigation.setOptions({ title: coin.symbol });

    this.getMarkets(coin.id);

    this.setState({ coin }, () => {
      this.getFavorite();
    });
  }

  render() {
    const { coin, markets, isFavorite, loading } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.subHeader}>
          <View style={styles.row}>
            <Image
              style={styles.iconImg}
              source={{ uri: this.getSymbolIcon(coin.nameid) }}
            />

            <Text style={styles.titleText}>{coin.name}</Text>
          </View>

          <Pressable
            onPress={this.toggleFavorite}
            style={[
              styles.btnFavorite,
              isFavorite ?
                styles.btnFavoriteRemove :
                styles.btnFavoriteAdd
            ]}
          >
            <Text style={styles.btnFavoriteText}>
              { isFavorite ?  "Remove" : "Add"}
            </Text>
          </Pressable>
        </View>

        <SectionList
          style={styles.section}
          sections={this.getSections(coin)}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <View style={styles.sectionItem}>
              <Text style={styles.itemText}>{item}</Text>
            </View>
          )}
          renderSectionHeader={({ section }) => (
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionText}>{section.title}</Text>
            </View>
          )}
        />

        <Text style={styles.marketsTitle}>Markets</Text>

        {loading ? (
          <ActivityIndicator style={styles.loader} color="#ffff" size="large" />
        ) : null}

        <FlatList
          style={styles.list}
          horizontal={true}
          keyExtractor={(item) => `${item.base}-${item.name}-${item.quote}`}          data={markets}
          renderItem={({ item }) =>
            <CoinMarketItem item={item} />
          }
        />
      </View>
    );
  }
}

export default CoinDetailScreen;
