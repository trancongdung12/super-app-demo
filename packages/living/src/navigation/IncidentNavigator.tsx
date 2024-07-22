import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavBar from '../components/NavBar';
import IncidentScreen from '../screens/IncidentScreen';

export type IncidentStackParamList = {
  Incident: undefined;
};

const Incident = createNativeStackNavigator<IncidentStackParamList>();

const IncidentNavigator = () => {
  return (
    <Incident.Navigator
      screenOptions={{
        header: NavBar,
      }}>
      <Incident.Screen name="Incident" component={IncidentScreen} />
    </Incident.Navigator>
  );
};

export default IncidentNavigator;
