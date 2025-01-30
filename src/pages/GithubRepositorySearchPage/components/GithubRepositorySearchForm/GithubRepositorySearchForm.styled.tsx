import styled from 'styled-components'
import { media } from '../../../../config/media'

export const SearchFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0 16px;

  ${media.tabletAndDesktop`
    margin: 0 auto;
  `}
`
