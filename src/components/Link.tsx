import NextLink from 'next/link'
import styled from 'styled-components'

/**
 * LinkProps type.
 */
export type LinkProps = {
  to: string

  newTab?: boolean
}

const LinkAnchor = styled.a`
  color: inherit;
  text-decoration: none;
`

/**
 * Link component.
 */
export const Link: React.FC<LinkProps> = (props) => {
  return (
    <>
      <NextLink href={props.to}>
        <LinkAnchor href={props.to} {...(props.newTab && { target: '_blank' })}>
          {props.children}
        </LinkAnchor>
      </NextLink>
    </>
  )
}
