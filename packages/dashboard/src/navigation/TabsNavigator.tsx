import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeNavigator from './HomeNavigator';
import CalendarNavigator from './CalendarNavigator';
import StatisticsNavigator from './StatisticsNavigator';
import AccountNavigator from './AccountNavigator';
import IncidentNavigator from './IncidentNavigator';

export type TabsParamList = {
  HomeNavigator: undefined;
  CalendarNavigator: undefined;
  StatisticsNavigator: undefined;
  AccountNavigator: undefined;
};

const Tabs = createMaterialBottomTabNavigator<TabsParamList>();

const TabsNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: 'home',
        }}
      />
      <Tabs.Screen
        name="CalendarNavigator"
        component={CalendarNavigator}
        options={{
          tabBarLabel: 'Room',
          tabBarIcon: 'door-open',
        }}
      />
      <Tabs.Screen
        name="IncidentNavigator"
        component={IncidentNavigator}
        options={{
          tabBarLabel: 'Incident',
          tabBarIcon: 'chart-box',
        }}
      />
      <Tabs.Screen
        name="StatisticsNavigator"
        component={StatisticsNavigator}
        options={{
          tabBarLabel: 'Customer',
          tabBarIcon: 'account-group',
        }}
      />
      <Tabs.Screen
        name="AccountNavigator"
        component={AccountNavigator}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: 'account',
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabsNavigator;
