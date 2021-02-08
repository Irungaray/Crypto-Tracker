import React, { Component } from 'react'
import { View, FlatList } from 'react-native';

import FavoritesEmptyState from './FavoritesEmptyState';
import CoinsItem from '../coins/CoinsItem';

import Storage from '../../libs/storage';

import styles from './styles/FavoritesScreen';

class FavoritesScreen extends Component {

  state= {
    favorites: []
  }

  getFavorites= async () => {
    try {
      const allKeys = await Storage.instance.getAllKeys();

      const keys = allKeys.filter((key) => key.includes("favorite-"));

      const favs = await Storage.instance.getAll(keys);

      const favorites = favs.map((fav) => JSON.parse(fav[1]))
      console.log("favs:", favorites)

      this.setState({ favorites });

      // // Unfiltered Keys
      // console.log("keys:", allKeys);
      // // Filtered Keys
      // console.log("keys:", keys);

    } catch (err) {
      console.log("getFavorites on FavoritesScreen err:", err);
    }
  }

  handlePress = (coin) => {
    this.props.navigation.navigate("CoinDetail", { coin });
  }

  componentDidMount() {
    this.props.navigation.addListener("focus", this.getFavorites);
  }

  componentWillUnmount() {
    this.props.navigation.removeListener("focus", this.getFavorites);
  }

  render() {

    const { favorites } = this.state;

    return (
      <View style={styles.container}>
        {
          favorites.length == 0 ?
            <FavoritesEmptyState />
          : null
        }

        {
          favorites.length > 0 ?
            <FlatList
              data={favorites}
              renderItem={({ item }) =>
                <CoinsItem
                  item={item}
                  onPress={() => this.handlePress(item)}
                />
              }
            />
          : null
        }
      </View>
    );
  }
}

export default FavoritesScreen;