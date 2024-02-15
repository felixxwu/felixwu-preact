import { css } from '@emotion/css'
import { styled } from '../../../utils/StyledComponent'
import { ComponentChildren } from 'preact'

export function Headline({ children }: { children: ComponentChildren }) {
  return <Container>{children}</Container>
}

const Container = styled(
  'h1',
  css`
    font-size: 50px;
    font-weight: 500;
    letter-spacing: -2px;
    text-transform: uppercase;
  `
)
