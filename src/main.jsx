import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import AnalyticsTracker from "./components/Analytic.jsx"
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <HashRouter basename={'/'}>
      <AnalyticsTracker />
      <App />
    </HashRouter>
  </React.StrictMode>
);
