import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { NuiProvider } from 'fivem-nui-react-lib';
import MenuProvider from './context/MenuProvider';

ReactDOM.render(
  <React.StrictMode>
    <MenuProvider>
      <NuiProvider resource="select">
        <App />
      </NuiProvider>
    </MenuProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
