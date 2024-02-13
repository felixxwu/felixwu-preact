import { SubmittedCommand } from './SubmittedCommand'
import { UnknownCommand } from './UnknownCommand'
import { historyLimit } from '../utils/consts'
import { inputText, screenContent } from '../utils/signals'
import { commands } from '../utils/commands'

export function processCommand() {
  const command = inputText.value.trim() as keyof typeof commands
  if (!command) return

  if (command === 'clear') {
    screenContent.value = []
    inputText.value = ''
    return
  }

  const cappedContent = screenContent.value.slice(
    Math.max(0, screenContent.value.length - historyLimit)
  )
  if (Object.keys(commands).includes(command)) {
    screenContent.value = [
      ...cappedContent,
      <SubmittedCommand command={command} />,
      commands[command](),
    ]
  } else {
    screenContent.value = [
      ...cappedContent,
      <SubmittedCommand command={command} />,
      <UnknownCommand command={command} />,
    ]
  }
  inputText.value = ''
}
