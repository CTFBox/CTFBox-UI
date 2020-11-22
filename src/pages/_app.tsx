import { AppProps } from 'next/app'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Theme } from '../types/Theme'

export default function App({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  const [theme] = useState<Theme>({
    primary: '#FFC683',
    secondary: '#83C3FF',
    success: '#A7E891',
    error: '#FF8383',
    black: '#000000',
    blackLight: '#202020',
    blackBlue: '#14171B',
    white: '#FFFFFF',
    background: '#F5F5F5',
    text: '#202020',
    textGray: '#B0B0B0',
    textWhite: '#FFFFFF',
  })

  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>

      <style global jsx>{`
        html,
        body {
          background: ${theme.background};
          padding: 0;
          margin: 0;
        }
      `}</style>
    </>
  )
}
