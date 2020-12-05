import styled from 'styled-components'
import { useThemeKey } from '../helpers/useThemeKey'

export const Divider = styled.hr`
  max-width: 100%;
  height: 0;
  max-height: 0;

  margin: 0;

  border: solid;
  border-width: thin 0 0;
  border-color: ${useThemeKey('lightGray')};
`
