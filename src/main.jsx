import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Inicializar AOS
import AOS from 'aos'
AOS.init({
  duration: 1000,
  once: false,
  offset: 100,
  easing: 'ease-in-out'
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)