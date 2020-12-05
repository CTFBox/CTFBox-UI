import styled from 'styled-components'

/**
 * GridContainer component.
 */
export const GridContainer = styled.div`
  display: grid;

  @media screen and (min-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
  column-gap: 24px;
  row-gap: 32px;
`
