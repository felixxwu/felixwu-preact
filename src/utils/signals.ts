import { computed, signal } from '@preact/signals'
import { keyboardAngle } from './consts'

export const angle = signal(keyboardAngle)
export const laptopWidth = signal(1000)
export const laptopHeight = computed(() => laptopWidth.value / 1.5)
export const thickness = computed(() => laptopWidth.value / 40)
export const mouseDown = signal(false)
export const mouseDownY = signal(0)
export const transition = signal(1)
export const keysPressed = signal<string[]>([])
