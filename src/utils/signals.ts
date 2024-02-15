import { computed, signal } from '@preact/signals'
import { keyboardAngle } from './consts'
import { JSX } from 'preact/jsx-runtime'

export const angle = signal(keyboardAngle)
export const laptopWidth = signal(window.innerWidth)
export const laptopHeight = computed(() => laptopWidth.value / 1.5)
export const thickness = computed(() => laptopWidth.value / 40)
export const mouseDown = signal(false)
export const mouseDownY = signal(0)
export const transition = signal(1)
export const keysPressed = signal<string[]>([])
export const inputText = signal('')
export const screenContent = signal<JSX.Element[]>([])
export const dead = signal(false)
