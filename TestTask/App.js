import React, {useEffect} from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import { RootNavigation } from './app/navigation';
import { Provider } from 'react-redux';
import store, {persistor} from './app/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
const App = () => {
  

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
};
export default App;
