import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BoardsContextProvider } from './context/board';
import App from './App';

import { AuthContextProvider } from './context/auth';

import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <AuthContextProvider>
          <BoardsContextProvider>
            <App />
          </BoardsContextProvider>
        </AuthContextProvider>
      </Router>
  </React.StrictMode>
);

