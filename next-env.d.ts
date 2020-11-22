/// <reference types="next" />
/// <reference types="next/types/global" />

import 'styled-components'
import { Theme } from './src/types/Theme'

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
