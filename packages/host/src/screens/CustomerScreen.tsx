import {Federated} from '@callstack/repack/client';
import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import Placeholder from '../components/Placeholder';

const Customer = React.lazy(() => Federated.importModule('customer', './App'));

const CustomerScreen = () => {
  return (
    <ErrorBoundary name="CustomerScreen">
      <React.Suspense
        fallback={<Placeholder label="Customer" icon="account-group" />}>
        <Customer />
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default CustomerScreen;
