import { forwardRef, InputHTMLAttributes } from 'react'
import { StyledInput } from './Input.styled'

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & { id: string }
>(({ id, ...props }, ref) => {
  return (
    <>
      <StyledInput {...props} id={id} ref={ref} />
    </>
  )
})

export default Input
