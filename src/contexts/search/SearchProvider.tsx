import React, { useState } from 'react'
import { SearchContext } from './SearchContext'

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [maxPages, setMaxPages] = useState(0)

  return (
    <SearchContext.Provider
      value={{ query, setQuery, page, setPage, maxPages, setMaxPages }}
    >
      {children}
    </SearchContext.Provider>
  )
}
