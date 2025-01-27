import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const styled = { createGlobalStyle }

export const GlobalStyle = styled.createGlobalStyle`
  ${reset}
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    color: black;
    font-size: 16px;
  }
`
