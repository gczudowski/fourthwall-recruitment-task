import { StyledButton } from './Button.styled'

interface Props {
  onClick?: () => void
  text: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({ text, onClick, disabled, type = 'button' }: Props) => {
  return (
    <>
      <StyledButton type={type} onClick={onClick} disabled={disabled}>
        {text}
      </StyledButton>
    </>
  )
}

export default Button
