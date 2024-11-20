import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@material-tailwind/react";
import { DestinationProvider } from './context/DestinationContext';
import { TravelProvider } from './context/TravelContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DestinationProvider>
      <TravelProvider>
      <App />
      </TravelProvider>
    </DestinationProvider>
  </React.StrictMode>
);

reportWebVitals();
