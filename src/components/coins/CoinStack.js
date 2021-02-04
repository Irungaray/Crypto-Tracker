import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CoinsScreen from './CoinsScreen';

const Stack = createStackNavigator();

const CoinStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BitCoins" component={CoinsScreen} />
    </Stack.Navigator>
  );
}

export default CoinStack;