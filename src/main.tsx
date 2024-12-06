import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.tsx'
import { useAuthProvider } from './auth/hooks/auth-provider.tsx'
import { Provider } from './components/ui/provider.tsx'
const { AuthProvider } = useAuthProvider()
createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <Provider>
      <AuthProvider>

        <App />

      </AuthProvider>
    </Provider>
  </StrictMode>,
)
