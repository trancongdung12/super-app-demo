import React from 'react';
import {Federated} from '@callstack/repack/client';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './navigation/MainNavigator';
import SplashScreen from './components/SplashScreen';
import ErrorBoundary from './components/ErrorBoundary';

const AuthProvider = React.lazy(() =>
  Federated.importModule('auth', './AuthProvider'),
);
const SignInScreen = React.lazy(() =>
  Federated.importModule('auth', './SignInScreen'),
);

const App = () => {
  // return (
  //   <ErrorBoundary name="AuthProvider">
  //     <React.Suspense fallback={<SplashScreen />}>
  //       <AuthProvider>
  //         {(authData: {isSignout: boolean; isLoading: boolean}) => {
  //           if (authData.isLoading) {
  //             return <SplashScreen />;
  //           }

  //           if (authData.isSignout) {
  //             return (
  //               <React.Suspense fallback={<SplashScreen />}>
  //                 <SignInScreen />
  //               </React.Suspense>
  //             );
  //           }

  //           return (
  //             <NavigationContainer>
  //               <MainNavigator />
  //             </NavigationContainer>
  //           );
  //         }}
  //       </AuthProvider>
  //     </React.Suspense>
  //   </ErrorBoundary>
  // );
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
