import { css } from '@emotion/css'
import { styled } from './utils/StyledComponent'
import { v } from './utils/cssvars'
import { Keyboard } from './Keyboard'
import { Lid } from './Lid'
import { perspective } from './utils/consts'
import { JSX } from 'preact/jsx-runtime'

export function Laptop({ children }: { children: JSX.Element }) {
  return (
    <Container>
      <Keyboard />
      <Lid children={children} />
    </Container>
  )
}

const Container = styled(
  'div',
  css`
    position: absolute;
    width: 100vw;
    height: 100svh;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(calc((${v('angle')} * 1.5px) - 50px));
    perspective: ${perspective}px;
    transition: 1s;
  `
)