import { borderRadius1, color1, color2 } from '../utils/consts'
import { keysPressed } from '../utils/signals'
import { v } from '../utils/cssvars'
import { styled } from 'goober'

export function Key({ name, style }: { name?: string; style?: { [k: string]: any } }) {
  const pressed = name ? keysPressed.value.includes(name) : false
  return <Container style={{ ...style, backgroundColor: pressed ? color2 : color1 }} />
}

const Container = styled('div')`
  width: calc(${v('laptopWidth')} / 19);
  height: calc(${v('laptopWidth')} / 19);
  border-radius: ${borderRadius1}px;
  transition: ${v('transition')}, background-color 0;
`
