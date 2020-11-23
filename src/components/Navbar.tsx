import styled from 'styled-components'
import { useThemeKey } from '../helpers/useThemeKey'
import { Link } from './Link'

const NavbarImage = styled.img`
  width: 40px;
`

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;

  width: 100%;
  height: 64px;

  color: ${useThemeKey('textWhite')};
  background: ${useThemeKey('blackBlue')};

  padding: 0 16px;
`

const NavbarTitle = styled.div`
  color: ${useThemeKey('textWhite')};
  font-family: bananaslip;
  font-size: 1.2rem;

  margin: 0 16px;
`

const CTFText = styled.span`
  color: ${useThemeKey('primary')};
`

/**
 * Navbar component.
 */
export const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavbarImage src="/ctfbox.svg" alt="logo" />
      <NavbarTitle>
        <Link to="/">
          <CTFText>CTF</CTFText>
          Box
        </Link>
      </NavbarTitle>
    </NavbarContainer>
  )
}
