import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from "./store"


const root = ReactDOM.createRoot(document.getElementById('root')); //by using Provider store is initialesed
root.render(
  <React.StrictMode>
  <Provider store={store}>
  <App />

  </Provider>
    
  </React.StrictMode>
);


reportWebVitals();
