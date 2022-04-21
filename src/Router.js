import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Categories from './pages/Categories';
import Meals from './pages/Meals';
import Detail from './pages/Detail/Detail';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Category' component={Categories} options={{
          headerStyle: { backgroundColor: 'white' },
          headerTitleStyle: { color: 'orange' },
          headerTitleAlign: 'center'
        }} />
        <Stack.Screen name='Meals' component={Meals} options={{
          headerStyle: { backgroundColor: 'white' },
          headerTitleStyle: { color: 'orange' },
          headerTitleAlign: 'center',
          headerTintColor: 'orange'
        }} />

        <Stack.Screen name="Detail" component={Detail}
         options={{
          headerStyle: { backgroundColor: 'white' },
          headerTitleStyle: { color: 'orange' },
          headerTitleAlign: 'center',
          headerTintColor: 'orange'
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
