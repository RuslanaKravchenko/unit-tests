import React from 'react';
import { Provider } from 'react-redux';
import MainPage from './components/MainPage/MainPage';
import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <MainPage />
  </Provider>
);

export default App;
