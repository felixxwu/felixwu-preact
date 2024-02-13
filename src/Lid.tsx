import { styled } from './utils/StyledComponent'
import { css } from '@emotion/css'
import {
  borderRadius1,
  boxShadow,
  color1,
  color2,
  color3,
  color4,
  color6,
  keyboardAngle,
  maxLidAngle,
  perspective,
} from './utils/consts'
import { v } from './utils/cssvars'
import { JSX } from 'preact/jsx-runtime'
import { angle, mouseDown, mouseDownY, transition } from './utils/signals'

export function Lid({ children }: { children: JSX.Element }) {
  const handleClick = () => {
    transition.value = 1
    angle.value = angle.value === keyboardAngle ? maxLidAngle : keyboardAngle
  }

  return (
    <>
      <Back />
      <Top />
      <Front>{children}</Front>
      <Control
        onclick={handleClick}
        onpointerdown={(e: PointerEvent) => {
          mouseDown.value = true
          mouseDownY.value = e.pageY
        }}
      />
    </>
  )
}

const rotation = `rotateX(calc(${v('angle')} * 1deg))`

const Control = styled(
  'div',
  css`
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    filter: drop-shadow(${boxShadow});
    border: 5px solid ${color6};
    cursor: pointer;
    transform: ${rotation} translateY(${v('laptopHeight')}) rotateX(calc(${v('angle')} * -1deg));
    transition: ${v('transition')};
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }
  `
)

const Back = styled(
  'div',
  css`
    position: absolute;
    width: ${v('laptopWidth')};
    height: ${v('laptopHeight')};
    background-color: ${color3};
    transform: ${rotation} translateY(calc(${v('laptopHeight')} / 2))
      translateZ(calc(${v('thickness')} / 2));
    perspective: ${perspective}px;
    border-radius: ${borderRadius1}px;
    transition: ${v('transition')};
  `
)

const Top = styled(
  'div',
  css`
    position: absolute;
    width: ${v('laptopWidth')};
    height: calc(${v('thickness')} / 2);
    background-color: ${color4};
    transform: ${rotation} translateY(${v('laptopHeight')}) translateZ(calc(${v('thickness')} / 4))
      rotateX(90deg);
    transition: ${v('transition')};
    border-radius: ${borderRadius1}px;
  `
)

const Front = styled(
  'div',
  css`
    position: absolute;
    width: ${v('laptopWidth')};
    height: ${v('laptopHeight')};
    background-color: ${color1};
    transform: ${rotation} translateY(calc(${v('laptopHeight')} / 2)) rotateX(180deg);
    opacity: calc((${v('angle')} - 90));
    transition: ${v('transition')};
    border-radius: ${borderRadius1}px;
    border: 15px solid ${color2};
    overflow-y: auto;
  `
)
