import { submitCommand } from '../commands/processCommand'
import { inputText, keysPressed } from './signals'

export async function typeCommand(command: string) {
  let i = 0
  while (i < command.length) {
    inputText.value = command.slice(0, i + 1)
    keysPressed.value = [command[i]]
    await new Promise(r => setTimeout(r, 100))
    i++
  }
  keysPressed.value = ['Enter']
  submitCommand()
  await new Promise(r => setTimeout(r, 100))
  keysPressed.value = []
}
