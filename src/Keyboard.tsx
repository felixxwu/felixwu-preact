import { css } from '@emotion/css'
import { styled } from './utils/StyledComponent'
import { v } from './utils/cssvars'
import { borderRadius2, color2, color4 } from './utils/consts'

export function Keyboard() {
  return (
    <Container>
      <Keybed />
      <Touchpad />
    </Container>
  )
}

const Container = styled(
  'div',
  css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  `
)

const Keybed = styled(
  'div',
  css`
    position: absolute;
    width: calc(${v('laptopWidth')} / 1.15);
    height: calc(${v('laptopHeight')} / 1.8);
    background-color: ${color2};
    border-radius: ${borderRadius2}px;
    transform: translateY(calc(${v('laptopHeight')} / -8));
    transition: ${v('transition')};
  `
)

const Touchpad = styled(
  'div',
  css`
    position: absolute;
    width: calc(${v('laptopWidth')} / 4);
    height: calc(${v('laptopHeight')} / 3.5);
    background-color: ${color4};
    border-radius: ${borderRadius2}px;
    transform: translateY(calc(${v('laptopHeight')} / 3.1));
    transition: ${v('transition')};
  `
)
