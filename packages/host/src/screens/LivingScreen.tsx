import {Federated} from '@callstack/repack/client';
import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import Placeholder from '../components/Placeholder';

const Living = React.lazy(() => Federated.importModule('living', './App'));

const LivingScreen = () => {
  return (
    <ErrorBoundary name="LivingScreen">
      <React.Suspense
        fallback={<Placeholder label="Welcome to living " icon="newspaper" />}>
        <Living />
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default LivingScreen;
