/**
 * React Native App
 * Everything starts from the Entry-point
 */

import Navigator from './navigation';
import {persistor, store} from './store';
import React, {useEffect} from 'react';
import {ActivityIndicator, LogBox, SafeAreaView} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import {Provider, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';

const RootNavigation: React.FC = () => {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <PaperProvider>
      <Navigator />
    </PaperProvider>
  );
};

const EntryPoint: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
};
export default EntryPoint;
