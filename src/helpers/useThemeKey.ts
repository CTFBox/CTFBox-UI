import { Theme, ThemeKey } from '../types/Theme'

/**
 * returns a function that returns theme value by given key.
 */
export const useThemeKey = <T extends ThemeKey>(key: T) => (p: {
  theme: Theme
}): Theme[T] => p.theme[key]
