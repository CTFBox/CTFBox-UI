import styled from 'styled-components'
import { useThemeKey } from '../helpers/useThemeKey'
import { ThemeKey } from '../types/Theme'

/**
 * TextProps type.
 */
export type TextProps = {
  color: ThemeKey
}

/**
 * Text component.
 */
export const Text = styled.span<TextProps>`
  color: ${(p) => useThemeKey(p.color)(p)};
`
