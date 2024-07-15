import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import NavBar from '../components/NavBar';
import CustomerScreen from '../screens/CustomerScreen';

export type AccountStackParamList = {
  Customer: undefined;
};

const Home = createNativeStackNavigator<AccountStackParamList>();

const CustomerNavigator = () => {
  return (
    <Home.Navigator
      screenOptions={{
        header: NavBar,
      }}>
      <Home.Screen name="Customer" component={CustomerScreen} />
    </Home.Navigator>
  );
};

export default CustomerNavigator;
