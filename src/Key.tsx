import { css } from '@emotion/css'
import { styled } from './utils/StyledComponent'
import { borderRadius1, color1, color2 } from './utils/consts'
import { keysPressed } from './utils/signals'

export function Key({ name, style }: { name?: string; style?: { [k: string]: any } }) {
  const pressed = name ? keysPressed.value.includes(name) : false
  return <Container style={{ ...style, backgroundColor: pressed ? color2 : color1 }} />
}

const Container = styled(
  'div',
  css`
    width: 38px;
    height: 40px;
    border-radius: ${borderRadius1}px;
  `
)
