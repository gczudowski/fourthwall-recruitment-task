import styled from 'styled-components'
import { media } from '../../config/media'

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 24px 16px;
  width: initial;

  ${media.desktop`
    width: 900px;
    margin: auto
  `}
`

export const PageTitle = styled.h1`
  text-align: center;
  padding: 0 0 30px;
  font-size: 24px;
`

export const PageHeader = styled.header`
  display: flex;
  flex-direction: column;
`
