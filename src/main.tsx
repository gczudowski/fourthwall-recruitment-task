import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter as Router } from 'react-router-dom'
import { QUERY_CLIENT_CONFIG } from './config/apiConfig'
import { AppProviders } from './contexts/index'

const queryClient = new QueryClient(QUERY_CLIENT_CONFIG)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <AppProviders>
          <App />
        </AppProviders>
      </Router>
    </QueryClientProvider>
  </StrictMode>
)
