import { SubmittedCommand } from './components/SubmittedCommand'
import { UnknownCommand } from './components/UnknownCommand'
import { historyLimit, screenPadding } from '../utils/consts'
import { inputText, screenContent } from '../utils/signals'
import { commands, hiddenCommands } from './commands'

export function submitCommand() {
  const command = inputText.value.trim()
  inputText.value = ''

  setTimeout(() => {
    const screen = document.getElementById('screen-container')
    if (screen) {
      setTimeout(() => {
        const submittedCommands = [...document.querySelectorAll('.submitted')] as HTMLElement[]
        screen.scrollTop = submittedCommands.slice(-1)[0].offsetTop - screenPadding
      })
    }
  })

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
      commands[command as keyof typeof commands](),
    ]
    return
  }

  if (Object.keys(hiddenCommands).includes(command)) {
    screenContent.value = [
      ...cappedContent,
      <SubmittedCommand command={command} />,
      hiddenCommands[command as keyof typeof hiddenCommands](),
    ]
    return
  }

  // unknown command
  screenContent.value = [
    ...cappedContent,
    <SubmittedCommand command={command} />,
    <UnknownCommand command={command} />,
  ]
}