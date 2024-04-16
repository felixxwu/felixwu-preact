import { ComponentChildren } from 'preact'
import styled from 'styled-components'

export function ExternalLink({ url, children }: { url: string; children: ComponentChildren }) {
  return (
    <Container href={url} target='_blank'>
      {children}
    </Container>
  )
}

const Container = styled.a`
  color: hsl(215deg 100% 80%);
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
