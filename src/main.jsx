// add stuff to package.json if it doesn't show up here

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// get real root element, saying "let's render our app at that root element" (the App.jsx file)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
