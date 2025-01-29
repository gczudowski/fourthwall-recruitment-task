import { StyledLabel } from './Label.styled'

interface Props {
  text: string
  htmlFor: string
}

const Label = ({ text, htmlFor }: Props) => {
  return <StyledLabel htmlFor={htmlFor}>{text}</StyledLabel>
}

export default Label
