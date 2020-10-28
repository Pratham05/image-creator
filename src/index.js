import React from 'react';
import ReactDOM from 'react-dom';
// Include Styles for the entire app
import './sass/main.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ImageProvider} from './image-context';

// The access to the context provider has been provided to the entire app
ReactDOM.render(
  <React.StrictMode>
    <ImageProvider>
      <App />
    </ImageProvider> 
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
