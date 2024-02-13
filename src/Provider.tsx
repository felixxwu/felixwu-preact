import { JSX } from 'preact/jsx-runtime'
import { vars } from './utils/cssvars'
import { useEffect } from 'preact/hooks'
import { angle, laptopWidth, mouseDown, transition } from './utils/signals'
import { keyboardAngle, maxLidAngle } from './utils/consts'

export function Provider({ children }: { children: JSX.Element }) {
  const styles = Object.keys(vars)
    .map(key => ({
      [`--${key}`]: `${vars[key as keyof typeof vars].signal.value}${
        vars[key as keyof typeof vars].unit
      }`,
    }))
    .reduce((acc, curr) => ({ ...acc, ...curr }), {})

  const onResize = () => {
    if (window.innerWidth < 1500) {
      laptopWidth.value = window.innerWidth - 500
    }
  }

  onResize()

  useEffect(() => {
    setTimeout(() => {
      angle.value = maxLidAngle
    }, 100)
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
  }, [])

  return <div style={styles}>{children}</div>
}
