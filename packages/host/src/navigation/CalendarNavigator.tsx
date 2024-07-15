import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import NavBar from '../components/NavBar';
import CalendarScreen from '../screens/CalendarScreen';

export type CalendarStackParamList = {
  Calendar: undefined;
};

const Home = createNativeStackNavigator<CalendarStackParamList>();

const CalendarNavigator = () => {
  return (
    <Home.Navigator
      screenOptions={{
        header: NavBar,
      }}>
      <Home.Screen name="Calendar" component={CalendarScreen} />
    </Home.Navigator>
  );
};

export default CalendarNavigator;
