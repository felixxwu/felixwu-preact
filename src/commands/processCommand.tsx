import { SubmittedCommand } from './SubmittedCommand'
import { UnknownCommand } from './UnknownCommand'
import { historyLimit } from '../utils/consts'
import { inputText, screenContent } from '../utils/signals'
import { commands } from '../utils/commands'

export function submitCommand() {
  const command = inputText.value.trim() as keyof typeof commands
  inputText.value = ''

  const cappedContent = screenContent.value.slice(
    Math.max(0, screenContent.value.length - historyLimit)
  )

  if (command === 'clear') {
    screenContent.value = []
    return
  }

  if ((command as any) === '') {
    screenContent.value = [...cappedContent, <SubmittedCommand command={command} />]
    return
  }

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
}
