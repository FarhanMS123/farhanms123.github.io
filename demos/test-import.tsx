import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './test-textarea-menu.page'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
