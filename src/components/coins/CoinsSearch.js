import React, { Component } from 'react';
import { TextInput, Platform, View } from 'react-native';

import styles from './styles/CoinsSearch';

class CoinsSearch extends Component {

  state = {
    query: ""
  }

  handleText = (query) => {
    this.setState({ query });

    if (this.props.onChange) {
      this.props.onChange(query);
    }
  }

  render() {

    const { query } = this.state;

    return (
      <View>
        <TextInput
          style={[
            styles.textInput,
            Platform.OS === 'ios' ?
              styles.textInputIOS :
              styles.textInputAndroid
          ]}
          onChangeText={this.handleText}
          value={query}
          placeholder="Search for coins..."
          placeholderTextColor="#fff"
        />
      </View>
    );
  }
}

export default CoinsSearch;
