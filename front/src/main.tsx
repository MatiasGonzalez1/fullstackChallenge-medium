import React from 'react'
import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline';
import App from './App.tsx'
import './index.css'
import {BrowserRouter as Router} from 'react-router-dom';




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
    <CssBaseline />
    <App />
    </Router>

  </React.StrictMode>,
)
