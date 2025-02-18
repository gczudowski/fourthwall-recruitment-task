import { BrowserRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'
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
