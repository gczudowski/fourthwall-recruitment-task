import styled from 'styled-components'

export const StyledButton = styled.button`
  background-color: ${(props) => (props.disabled ? '#f4f6f8' : '#000')};
  color: ${(props) => (props.disabled ? 'silver' : '#fff')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    background-color: ${(props) => (props.disabled ? '#f4f6f8' : '#203a66')};
  }
  &:focus {
    outline: 0;
  }
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 16px;
  background-color: ${(props) => (props.disabled ? '#f4f6f8' : '#1a1a1a')};
`
