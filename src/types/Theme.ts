/**
 * Theme type.
 */
export type Theme = {
  /* Colors */
  primary: string
  secondary: string
  success: string
  error: string
  black: string
  blackLight: string
  blackBlue: string
  lightGray: string
  white: string
  background: string
  text: string
  textGray: string
  textWhite: string

  /* Styles */
  shadow: string
  dropShadow: string
  rounded: string
}

/**
 * ThemeKey type.
 */
export type ThemeKey = keyof Theme
