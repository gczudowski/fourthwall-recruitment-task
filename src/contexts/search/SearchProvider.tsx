import React, { useState } from 'react'
import { SearchContext } from './SearchContext'
import { useSearchParams } from 'react-router-dom'
// import { useSearchParams } from 'react-router-dom'

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('query') || '')
  const [page, setPage] = useState(parseInt(searchParams.get('page') || '1'))
  const [maxPages, setMaxPages] = useState(0)

  return (
    <SearchContext.Provider
      value={{ query, setQuery, page, setPage, maxPages, setMaxPages }}
    >
      {children}
    </SearchContext.Provider>
  )
}
