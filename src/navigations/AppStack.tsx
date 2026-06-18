import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/home/HomeScreen';
import AddProductScreen from '../screens/add/AddProductScreen';
import GetProductScreen from '../screens/get/GetProductScreen';
import MainScreen from '../screens/main/MainScreen';
import UpdateProductScreen from '../screens/update/UpdateProductScreen';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Main" component={MainScreen} />

        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="Get" component={GetProductScreen} />

        <Stack.Screen name="Add" component={AddProductScreen} />

        <Stack.Screen name="Update" component={UpdateProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
