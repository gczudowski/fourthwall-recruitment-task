import { createContext } from 'react'

interface SearchContextProps {
  query: string
  setQuery: React.Dispatch<React.SetStateAction<string>>
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  maxPages: number
  setMaxPages: React.Dispatch<React.SetStateAction<number>>
}

export const SearchContext = createContext<SearchContextProps | undefined>(
  undefined
)
