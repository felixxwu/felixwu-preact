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
} from '../utils/consts'
import { v } from '../utils/cssvars'
import { JSX } from 'preact/jsx-runtime'
import { angle, mouseDown, mouseDownY, transition } from '../utils/signals'
import { styled } from 'goober'

export function Lid({ children }: { children: JSX.Element }) {
  const handleClick = () => {
    transition.value = 1
    angle.value = angle.value === keyboardAngle ? maxLidAngle : keyboardAngle
  }

  return (
    <>
      <Back />
      <Top />
      <Front id='screen-container'>{children}</Front>
      <TransformationLayer>
        <Control
          onClick={handleClick}
          onPointerDown={(e: PointerEvent) => {
            mouseDown.value = true
            mouseDownY.value = e.pageY
          }}
        />
      </TransformationLayer>
    </>
  )
}

const rotation = `rotateX(calc(${v('angle')} * 1deg))`

const TransformationLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: ${rotation} translateY(${v('laptopHeight')}) rotateX(calc(${v('angle')} * -1deg));
  transition: ${v('transition')};
`

const Control = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  filter: drop-shadow(${boxShadow});
  border: 5px solid ${color6};
  cursor: pointer;
  opacity: 0.5;
  translate: -50% -50%;
  animation: breathe 3s infinite;

  &:hover {
    opacity: 1;
  }

  @keyframes breathe {
    0% {
      transform: scale(0.9);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(0.9);
    }
  }
`

const Back = styled.div`
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

const Top = styled.div`
  position: absolute;
  width: calc(${v('laptopWidth')} - 2px);
  height: calc(${v('thickness')} / 2);
  background-color: ${color4};
  transform: ${rotation} translateY(${v('laptopHeight')})
    translateZ(calc(1px + ${v('thickness')} / 4)) rotateX(90deg);
  transition: ${v('transition')};
  border-radius: ${borderRadius1}px;
`

const Front = styled.div`
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
