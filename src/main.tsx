import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import BookSearchAPI from "./BookSearchAPI.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <BookSearchAPI />
  </StrictMode>,
)
