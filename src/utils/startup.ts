import { processCommand } from '../commands/processCommand'
import { maxLidAngle } from './consts'
import { angle, inputText } from './signals'

export const startup = async () => {
  await new Promise(r => setTimeout(r))
  angle.value = maxLidAngle
  await new Promise(r => setTimeout(r, 1500))
  inputText.value = 's'
  await new Promise(r => setTimeout(r, 100))
  inputText.value = 'st'
  await new Promise(r => setTimeout(r, 100))
  inputText.value = 'sta'
  await new Promise(r => setTimeout(r, 100))
  inputText.value = 'star'
  await new Promise(r => setTimeout(r, 100))
  inputText.value = 'start'
  await new Promise(r => setTimeout(r, 100))
  processCommand()
}
