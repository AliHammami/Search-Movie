/**
 * NPM import
 */
import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

/**
 * Local import
 */
// Composant
import App from 'src/components/App';


/**
 * Code
 */
const rootComponent = (
  <Provider>
    <App />
  </Provider>
);

render(rootComponent, document.getElementById('root'));
