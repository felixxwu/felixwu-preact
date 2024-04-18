import { ComponentChildren } from 'preact'
import { styled } from 'goober'

export function Headline({ children }: { children: ComponentChildren }) {
  return <Container>{children}</Container>
}

const Container = styled.h1`
  font-size: 30px;
  font-weight: 500;
  letter-spacing: -2px;
  text-transform: uppercase;
`
