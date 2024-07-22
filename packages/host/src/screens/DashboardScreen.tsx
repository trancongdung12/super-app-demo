import {Federated} from '@callstack/repack/client';
import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import SplashScreen from '../components/SplashScreen';

const Dashboard = React.lazy(() =>
  Federated.importModule('dashboard', './App'),
);

const DashboardScreen = () => {
  return (
    <ErrorBoundary name="DashboardScreen">
      <React.Suspense
        fallback={
          <SplashScreen title="Dashboard application is loading. Please wait..." />
        }>
        <Dashboard />
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default DashboardScreen;
