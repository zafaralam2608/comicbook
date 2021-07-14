import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Application from './main/components/Application';
import store from './main/store';

render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('root'),
);
