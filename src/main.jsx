import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'; // ← add this import

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* ← wrap App with BrowserRouter */}
    <App />
     </BrowserRouter>
  </StrictMode>,
)
