import styled from 'styled-components'
import { Navbar } from '../components/Navbar'

const Main = styled.main`
  display: flex;
  flex: 1;

  height: calc(100vh - 64px);
`

const Container = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
`

/**
 * Main layout.
 */
export const MainLayout: React.FC = (props) => {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <Main>
        <Container>{props.children}</Container>
      </Main>
    </>
  )
}
