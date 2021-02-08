import React, { Component } from 'react'
import { View } from 'react-native';

import FavoritesEmptyState from './FavoritesEmptyState';

import styles from './styles/FavoritesScreen';

class FavoritesScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <FavoritesEmptyState />
      </View>
    );
  }
}

export default FavoritesScreen;