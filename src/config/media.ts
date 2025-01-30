import { css } from 'styled-components'

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
}

export const media = {
  mobile: (styles: TemplateStringsArray) => css`
    @media (max-width: ${breakpoints.mobile}) {
      ${styles}
    }
  `,
  tablet: (styles: TemplateStringsArray) => css`
    @media (max-width: ${breakpoints.tablet}) {
      ${styles}
    }
  `,
  tabletAndDesktop: (styles: TemplateStringsArray) => css`
    @media (min-width: ${breakpoints.tablet}) {
      ${styles}
    }
  `,
  desktop: (styles: TemplateStringsArray) => css`
    @media (min-width: ${breakpoints.desktop}) {
      ${styles}
    }
  `,
}
