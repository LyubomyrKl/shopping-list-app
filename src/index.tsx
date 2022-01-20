import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './app/App';
import { setupStore } from './app/store/store';
import { Provider } from 'react-redux';


ReactDOM.render(
 ( <React.StrictMode>
  <Provider store={setupStore()} >
    <App />
  </Provider>
</React.StrictMode>),
  document.getElementById('root') || document.createElement('div') // for testing purposes
);

