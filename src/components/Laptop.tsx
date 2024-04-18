import { v } from '../utils/cssvars'
import { Body } from './Body'
import { Lid } from './Lid'
import { color3, color4, perspective } from '../utils/consts'
import { JSX } from 'preact/jsx-runtime'
import { styled } from 'goober'

export function Laptop({ children }: { children: JSX.Element }) {
  return (
    <Container>
      <Body />
      <Lid children={children} />
    </Container>
  )
}

const Container = styled('div')`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(calc((${v('angle')} * 1.5px) - 50px));
  perspective: ${perspective}px;
  transition: ${v('transition')};

  & ::-webkit-scrollbar {
    width: 10px;
  }
  & ::-webkit-scrollbar-track {
    background: transparent;
  }
  & ::-webkit-scrollbar-thumb {
    background: ${color3};
    border-radius: 10px;
  }
  & ::-webkit-scrollbar-thumb:hover {
    background: ${color4};
  }
`
