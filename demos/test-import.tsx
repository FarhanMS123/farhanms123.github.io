import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './simple-app.html.page'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
