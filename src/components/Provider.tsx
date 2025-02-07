import { vars } from '../utils/cssvars'
import { useEffect } from 'preact/hooks'
import {
  angle,
  commandHistory,
  commandPos,
  inputText,
  keysPressed,
  laptopWidth,
  mouseDown,
  transition,
} from '../utils/signals'
import { keyboardAngle, maxLidAngle } from '../utils/consts'
import { submitCommand } from '../commands/submitCommand'
import { ComponentChildren } from 'preact'
import { startup } from '../utils/startup'
import { commands } from '../commands/commands.tsx'

export function Provider({ children }: { children: ComponentChildren }) {
  const styles = Object.keys(vars)
    .map(key => ({
      [`--${key}`]: `${vars[key as keyof typeof vars].signal.value}${
        vars[key as keyof typeof vars].unit
      }`,
    }))
    .reduce((acc, curr) => ({ ...acc, ...curr }), {})

  const onResize = () => {
    const widthFromHeight = window.innerHeight
    const widthFromWidth = window.innerWidth - 50
    laptopWidth.value = Math.min(widthFromHeight, widthFromWidth)
  }

  onResize()

  useEffect(() => {
    startup().then()

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
      keysPressed.value = [...keysPressed.value, e.key]

      if (e.key === 'Enter') {
        submitCommand()
      }

      if (e.key === 'Tab') {
        e.preventDefault()
        for (const command in commands) {
          if (command.startsWith(inputText.value)) {
            inputText.value = command
            return
          }
        }
      }

      if (e.key === 'ArrowUp') {
        commandPos.value = Math.min(commandPos.value + 1, commandHistory.length - 1)
        inputText.value = commandHistory[commandPos.value] ?? ''
      }

      if (e.key === 'ArrowDown') {
        commandPos.value = Math.max(commandPos.value - 1, -1)
        inputText.value = commandHistory[commandPos.value] ?? ''
      }
    }

    window.onkeyup = (e: KeyboardEvent) => {
      keysPressed.value = keysPressed.value.filter(k => k !== e.key)
    }

    window.onblur = () => {
      keysPressed.value = []
    }
  }, [])

  return <div style={styles}>{children}</div>
}
