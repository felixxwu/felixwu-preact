import { JSX } from 'preact/jsx-runtime'
import { vars } from './utils/cssvars'
import { useEffect } from 'preact/hooks'
import { laptopWidth } from './utils/signals'

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
    window.onresize = onResize
  }, [])

  return <div style={styles}>{children}</div>
}
