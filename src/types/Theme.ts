/**
 * Theme type.
 */
export type Theme = {
  primary: string
  secondary: string
  success: string
  error: string
  black: string
  blackLight: string
  blackBlue: string
  white: string
  background: string
  text: string
  textGray: string
  textWhite: string
}

/**
 * ThemeKey type.
 */
export type ThemeKey = keyof Theme
