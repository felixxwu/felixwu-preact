import { inputText } from './signals'

export async function typeCommand(command: string) {
  let i = 0
  while (i < command.length) {
    inputText.value = command.slice(0, i + 1)
    await new Promise(r => setTimeout(r, 100))
    i++
  }
}
