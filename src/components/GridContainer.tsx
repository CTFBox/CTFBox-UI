import styled from 'styled-components'

/**
 * GridContainer component.
 */
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 24px;
  row-gap: 32px;
`
