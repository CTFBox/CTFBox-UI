import styled from 'styled-components'
import { rgba } from 'polished'
import { useThemeKey } from '../helpers/useThemeKey'

export const Button = styled.div`
  text-align: center;

  min-width: 100px;

  color: ${useThemeKey('primary')};
  padding: 12px;

  ${useThemeKey('rounded')};
  outline: none;

  cursor: pointer;

  transition: all 160ms ease;

  :hover {
    background: ${(t) => rgba(useThemeKey('primary')(t), 0.2)};
  }
`
