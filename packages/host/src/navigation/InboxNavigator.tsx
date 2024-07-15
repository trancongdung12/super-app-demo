import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import NavBar from '../components/NavBar';
import InboxScreen from '../screens/InboxScreen';

export type AccountStackParamList = {
  Inbox: undefined;
};

const Home = createNativeStackNavigator<AccountStackParamList>();

const InboxNavigator = () => {
  return (
    <Home.Navigator
      screenOptions={{
        header: NavBar,
      }}>
      <Home.Screen name="Inbox" component={InboxScreen} />
    </Home.Navigator>
  );
};

export default InboxNavigator;
