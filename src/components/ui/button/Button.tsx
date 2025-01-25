interface Props {
  onClick?: () => void
  text: string
  disabled?: boolean
}

const Button = ({ text, onClick, disabled }: Props) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {text}
    </button>
  )
}

export default Button
