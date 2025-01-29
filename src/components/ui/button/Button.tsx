import { StyledButton } from './Button.styled'

interface Props {
  onClick?: () => void
  text: string
  disabled?: boolean
  type?: string
}

const Button = ({ text, onClick, disabled }: Props) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {text}
    </StyledButton>
  )
}

export default Button
