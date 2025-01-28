import { forwardRef, InputHTMLAttributes } from 'react'
import { StyledInput } from './Input.styled'

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return <StyledInput {...props} ref={ref} />
})

export default Input
