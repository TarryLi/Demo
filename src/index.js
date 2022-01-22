import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import stores from '@/stores';
import App from './App';

ReactDOM.render(
  <HashRouter>
    <Provider {...stores}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);
