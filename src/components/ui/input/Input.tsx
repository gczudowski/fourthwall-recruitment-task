import React, { useEffect, useRef, useState } from 'react'
import { StyledInput } from './Input.styled'

interface Props {
  onInputChange: (query: string) => void
}

const Input = ({ onInputChange }: Props) => {
  const [inputValue, setInputValue] = useState('')
  const debounceTimeout = useRef<number | undefined>()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value
    setInputValue(inputValue)
  }

  useEffect(() => {
    if (!onInputChange) return

    debounceTimeout.current = setTimeout(() => {
      onInputChange(inputValue)
    }, 500)

    return () => clearTimeout(debounceTimeout.current)
  }, [onInputChange, inputValue])

  return (
    <StyledInput type="text" value={inputValue} onChange={handleInputChange} />
  )
}

export default Input
