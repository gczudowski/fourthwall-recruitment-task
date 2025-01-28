import React, { useCallback, useEffect, useRef, useState } from 'react'
import { StyledInput } from './Input.styled'

interface Props {
  onInputChange?: (query: string) => void
  initialValue?: string
}

const Input = ({ onInputChange, initialValue }: Props) => {
  const [inputValue, setInputValue] = useState(initialValue || '')
  const debounceTimeout = useRef<number | undefined>()

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value
      setInputValue(inputValue)
    },
    [setInputValue]
  )

  useEffect(() => {
    if (!onInputChange) return

    debounceTimeout.current = setTimeout(() => {
      onInputChange(inputValue)
    }, 500)

    return () => clearTimeout(debounceTimeout.current)
  }, [inputValue, onInputChange])

  return (
    <StyledInput type="text" value={inputValue} onChange={handleInputChange} />
  )
}

export default Input
