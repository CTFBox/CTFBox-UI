import { AppProps } from 'next/app'

export default function App({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  return (
    <>
      <Component {...pageProps} />

      <style global jsx>{`
        html,
        body {
          padding: 0;
          margin: 0;
        }
      `}</style>
    </>
  )
}
