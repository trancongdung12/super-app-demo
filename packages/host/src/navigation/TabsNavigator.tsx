import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import AccountNavigator from './AccountNavigator';
import CalendarNavigator from './CalendarNavigator';
import CustomerNavigator from './CustomerNavigator';
import HomeNavigator from './HomeNavigator';
import InboxNavigator from './InboxNavigator';

export type TabsParamList = {
  HomeNavigator: undefined;
  CalendarNavigator: undefined;
  AccountNavigator: undefined;
  CustomerNavigator: undefined;
  InboxNavigator: undefined;
};

const Tabs = createMaterialBottomTabNavigator<TabsParamList>();

const TabsNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{
          title: 'Home',
          tabBarIcon: 'home',
        }}
      />
      <Tabs.Screen
        name="CalendarNavigator"
        component={CalendarNavigator}
        options={{
          title: 'Calendar',
          tabBarIcon: 'calendar-month',
        }}
      />
      <Tabs.Screen
        name="InboxNavigator"
        component={InboxNavigator}
        options={{
          title: 'Inbox',
          tabBarIcon: 'message-badge',
        }}
      />
      <Tabs.Screen
        name="CustomerNavigator"
        component={CustomerNavigator}
        options={{
          title: 'Customer',
          tabBarIcon: 'account-group',
        }}
      />
      <Tabs.Screen
        name="AccountNavigator"
        component={AccountNavigator}
        options={{
          title: 'Setting',
          tabBarIcon: 'cog',
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabsNavigator;
