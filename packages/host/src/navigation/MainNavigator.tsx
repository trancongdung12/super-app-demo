import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BookingScreen from '../screens/BookingScreen';
import TabsNavigator from './TabsNavigator';
import ShoppingScreen from '../screens/ShoppingScreen';
import DashboardScreen from '../screens/DashboardScreen';
import {ActivityIndicator, View} from 'react-native';
import LivingScreen from '../screens/LivingScreen';

export type MainStackParamList = {
  Tabs: undefined;
  Booking: undefined;
  Shopping: undefined;
  Living: undefined;
  Dashboard: undefined;
};

const Main = createNativeStackNavigator<MainStackParamList>();

interface Props {
  businessType?: string;
}

const MainNavigator = ({businessType}: Props) => {
  const [initialRouteName, setInitialRouteName] = useState<any>('Tabs');
  const [loading, setLoading] = useState(true);

  const getInitialRouteName = async () => {
    try {
      if (businessType) {
        const screenName = businessType === 'COWORKING' ? 'Tabs' : 'Dashboard';
        setInitialRouteName(screenName);
        setLoading(false);
      }
    } catch (error) {
      setInitialRouteName('Login');
      setLoading(false);
    }
  };

  useEffect(() => {
    getInitialRouteName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [businessType]);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} color={'#000'} />
      </View>
    );
  }

  return (
    <Main.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
      }}>
      <Main.Screen name="Tabs" component={TabsNavigator} />
      <Main.Screen name="Dashboard" component={DashboardScreen} />
      <Main.Screen name="Booking" component={BookingScreen} />
      <Main.Screen name="Shopping" component={ShoppingScreen} />
      <Main.Screen name="Living" component={LivingScreen} />
    </Main.Navigator>
  );
};

export default MainNavigator;
