import { vars } from '../utils/cssvars'
import { useEffect } from 'preact/hooks'
import { angle, keysPressed, laptopWidth, mouseDown, transition } from '../utils/signals'
import { keyboardAngle, maxLidAngle } from '../utils/consts'
import { submitCommand } from '../commands/processCommand'
import { ComponentChildren } from 'preact'
import { startup } from '../utils/startup'
import { styled } from '../utils/StyledComponent'
import { css } from '@emotion/css'
import { lexend } from '../fonts/lexend'
import { montserrat } from '../fonts/montserrat'

export function Provider({ children }: { children: ComponentChildren }) {
  const styles = Object.keys(vars)
    .map(key => ({
      [`--${key}`]: `${vars[key as keyof typeof vars].signal.value}${
        vars[key as keyof typeof vars].unit
      }`,
    }))
    .reduce((acc, curr) => ({ ...acc, ...curr }), {})

  const onResize = () => {
    if (window.innerWidth < 1050) {
      laptopWidth.value = window.innerWidth - 50
    } else {
      laptopWidth.value = 1000
    }
  }

  onResize()

  useEffect(() => {
    startup()

    window.onresize = onResize

    window.onpointerup = () => {
      mouseDown.value = false
      transition.value = 1
    }

    window.document.body.onpointermove = (e: MouseEvent) => {
      if (mouseDown.value) {
        transition.value = 0
        angle.value = Math.max(
          keyboardAngle,
          Math.min(angle.value - e.movementY * 0.3, maxLidAngle + 50)
        )
      }
    }

    window.onkeydown = (e: KeyboardEvent) => {
      document.getElementById('input')?.focus()
      if (['Tab'].includes(e.key)) return
      keysPressed.value = [...keysPressed.value, e.key]

      if (e.key === 'Enter') {
        submitCommand()
      }
    }

    window.onkeyup = (e: KeyboardEvent) => {
      keysPressed.value = keysPressed.value.filter(k => k !== e.key)
    }
  }, [])

  return <Container style={styles}>{children}</Container>
}

const Container = styled(
  'div',
  css`
    @font-face {
      font-family: 'Lexend Deca';
      src: url(data:font/woff2;charset=utf-8;base64,${lexend}) format('woff2');
    }

    @font-face {
      font-family: 'Montserrat';
      src: url(data:font/woff2;charset=utf-8;base64,${montserrat}) format('woff2');
    }
  `
)
