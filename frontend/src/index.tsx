import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RootStore, store } from './store/RootStore';
import App from './App';
import 'antd/dist/antd.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RootStore.Provider value={store}>
        <App />
      </RootStore.Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
