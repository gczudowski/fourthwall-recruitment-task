import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { SearchProvider } from './contexts/search/SearchProvider.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter as Router } from 'react-router-dom'
import { QUERY_CLIENT_CONFIG } from './config/queryClientConfig.ts'

const queryClient = new QueryClient(QUERY_CLIENT_CONFIG)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <SearchProvider>
          <App />
        </SearchProvider>
      </Router>
    </QueryClientProvider>
  </StrictMode>
)
