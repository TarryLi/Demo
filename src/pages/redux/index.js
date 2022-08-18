/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import App from './app';
import { store } from './store';

export default () => {
  useEffect(() => {

  }, []);

  return <Provider store={store}>
    <App />
  </Provider>;
};
