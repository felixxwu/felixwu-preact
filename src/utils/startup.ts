import { maxLidAngle } from './consts'
import { angle } from './signals'
import { typeCommand } from './typeCommand'

export const startup = async () => {
  await new Promise(r => setTimeout(r))
  angle.value = maxLidAngle
  await new Promise(r => setTimeout(r, 1500))
  await typeCommand('start')
}
