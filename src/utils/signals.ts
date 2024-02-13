import { computed, signal } from '@preact/signals'
import { keyboardAngle } from './consts'

export const angle = signal(keyboardAngle)
export const laptopWidth = signal(1000)
export const laptopHeight = computed(() => laptopWidth.value / 1.54)
export const thickness = computed(() => laptopWidth.value / 40)
