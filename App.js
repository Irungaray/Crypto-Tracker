import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CoinStack from './src/components/coins/CoinStack';

import Colors from './src/res/colors';

const Tabs = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          tintColor: "#fefefe",
          style: {
            backgroundColor: Colors.blackPearl
          }
        }}
      >
        <Tabs.Screen
          name="Coins"
          component={CoinStack}
          options={{
            tabBarIcon: ({ size, color }) => {
              return (
                <Image
                  style={{ tintColor: color, width: size, height: size }}
                  source={require('./src/assets/bank.png')}
                />
              )
            }
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
