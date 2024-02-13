import { css } from '@emotion/css'
import { styled } from './utils/StyledComponent'
import { v } from './utils/cssvars'
import {
  borderRadius1,
  borderRadius2,
  color1,
  color3,
  color4,
  color5,
  keyboardAngle,
} from './utils/consts'
import { Keyboard } from './Keyboard'

export function Body() {
  return (
    <>
      <Shadow />
      <Base>
        <Keyboard />
      </Base>
      <Front />
      <Hinge />
      <Lip />
    </>
  )
}

const rotation = `rotateX(calc(${keyboardAngle}deg - (${v(
  'angle'
)} * 1deg - ${keyboardAngle}deg) / -10))`

const Base = styled(
  'div',
  css`
    position: absolute;
    width: ${v('laptopWidth')};
    height: ${v('laptopHeight')};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${color3};
    border-radius: ${borderRadius1}px;
    transform: ${rotation} translateY(calc(${v('laptopHeight')} / 2));
    transition: ${v('transition')};
  `
)

const Shadow = styled(
  'div',
  css`
    position: absolute;
    width: ${v('laptopWidth')};
    height: ${v('laptopHeight')};
    background-color: black;
    border-radius: ${borderRadius1}px;
    transform: ${rotation} translateY(calc(${v('laptopHeight')} / 2))
      translateZ(calc(${v('thickness')} * -4));
    transition: ${v('transition')};
    filter: blur(40px);
    opacity: 0.5;
  `
)

const Front = styled(
  'div',
  css`
    position: absolute;
    width: ${v('laptopWidth')};
    height: ${v('thickness')};
    background-color: ${color4};
    border-radius: ${borderRadius2}px ${borderRadius2}px ${borderRadius1}px ${borderRadius1}px;
    transform: ${rotation} translateY(${v('laptopHeight')})
      translateZ(calc(1px + ${v('thickness')} / -2)) rotateX(90deg);
    transition: ${v('transition')};
  `
)

const Hinge = styled(
  'div',
  css`
    position: absolute;
    width: calc(${v('laptopWidth')} / 1.3);
    height: calc(${v('laptopHeight')} / 15);
    background-color: ${color1};
    border-radius: ${borderRadius1}px;
    transform: ${rotation} translateY(calc(${v('laptopHeight')} / 30));
    transition: ${v('transition')};
  `
)

const Lip = styled(
  'div',
  css`
    position: absolute;
    width: calc(${v('laptopWidth')} / 8);
    height: calc(${v('thickness')} / 2);
    background-color: ${color5};
    transform: ${rotation} translateY(${v('laptopHeight')}) translateZ(calc(${v('thickness')} / -4))
      rotateX(90deg);
    border-radius: ${borderRadius2}px ${borderRadius2}px 0 0;
    transition: ${v('transition')};
  `
)
