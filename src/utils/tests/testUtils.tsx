import { BrowserRouter as Router } from 'react-router-dom'
import { render, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SearchProvider } from '../../contexts/search/SearchProvider'

const queryClient = new QueryClient()

export const renderWithProviders = (component: React.ReactNode) => {
  return render(
    <Router>
      <QueryClientProvider client={queryClient}>
        <SearchProvider>{component}</SearchProvider>
      </QueryClientProvider>
    </Router>
  )
}

export const waitForRerender = async () => {
  try {
    await waitFor(() => Promise.reject(), { timeout: 1000 })
  } catch {
    /* empty */
  }
}
