import styled from 'styled-components'
import { ComponentChildren } from 'preact'

export function Grey({ children }: { children: ComponentChildren }) {
  return <Container>{children}</Container>
}

const Container = styled.span`
  color: hsl(0deg 0% 60%);
`
