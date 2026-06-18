import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import AppStack from './src/navigations/AppStack';

const App = () => {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
};

export default App;
