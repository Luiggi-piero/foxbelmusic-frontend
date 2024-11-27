import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import './axiosConfig.js'; // al importar este archivo ejecutamos la configuracion de axios con la ruta base
import { SearchProvider } from './hooks/useSearch.tsx'
import { AuthProvider } from './hooks/useAuth.tsx'
import './interceptors/authInterceptor.ts'
import { FavoritesProvider } from './hooks/useFavorites.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <FavoritesProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </FavoritesProvider>
      </SearchProvider>
    </BrowserRouter>
  </StrictMode>,
)
