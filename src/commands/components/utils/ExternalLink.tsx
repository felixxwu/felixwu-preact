import { ComponentChildren } from 'preact'
import { styled } from '../../../utils/StyledComponent'
import { css } from '@emotion/css'

export function ExternalLink({ url, children }: { url: string; children: ComponentChildren }) {
  return (
    <Container href={url} target='_blank'>
      {children}
    </Container>
  )
}

const Container = styled(
  'a',
  css`
    color: hsl(215deg 100% 80%);
    cursor: pointer;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  `
)
