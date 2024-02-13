import { angle, laptopHeight, laptopWidth, thickness, transition } from './signals'

export const vars = {
  angle: { signal: angle, unit: '' },
  laptopWidth: { signal: laptopWidth, unit: 'px' },
  laptopHeight: { signal: laptopHeight, unit: 'px' },
  thickness: { signal: thickness, unit: 'px' },
  transition: { signal: transition, unit: 's' },
} as const

export function v(name: keyof typeof vars) {
  return `var(--${name})`
}
