import { css } from '@emotion/css'
import { styled } from '../../../utils/StyledComponent'
import { ComponentChildren } from 'preact'

export function Grey({ children }: { children: ComponentChildren }) {
  return <Container>{children}</Container>
}

const Container = styled(
  'span',
  css`
    color: hsl(0deg 0% 60%);
  `
)
