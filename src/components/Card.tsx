import styled from 'styled-components'
import { useThemeKey } from '../helpers/useThemeKey'

export const Card = styled.div`
  background: ${useThemeKey('white')};
  ${useThemeKey('shadow')};

  ${useThemeKey('rounded')};
`

export const CardTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 500;

  padding: 16px;
`

export const CardText = styled.div`
  font-size: 1rem;

  padding: 16px;
`
