import { SubmittedCommand } from './components/SubmittedCommand'
import { UnknownCommand } from './components/UnknownCommand'
import { historyLimit, screenPadding } from '../utils/consts'
import { inputText, screenContent } from '../utils/signals'
import { commands, hiddenCommands } from './commands'

export function submitCommand() {
  const inputCommand = inputText.value.trim()
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

  if (inputCommand === 'clear') {
    screenContent.value = []
    return
  }

  if ((inputCommand as any) === '') {
    screenContent.value = [...cappedContent, <SubmittedCommand command={inputCommand} />]
    return
  }

  for (const c of Object.keys(commands)) {
    if (
      inputCommand.startsWith(c) &&
      (inputCommand.length === c.length || inputCommand[c.length] === ' ')
    ) {
      screenContent.value = [
        ...cappedContent,
        <SubmittedCommand command={inputCommand} />,
        commands[c as keyof typeof commands](inputCommand.slice(c.length + 1)),
      ]
      return
    }
  }

  if (Object.keys(hiddenCommands).includes(inputCommand)) {
    screenContent.value = [
      ...cappedContent,
      <SubmittedCommand command={inputCommand} />,
      hiddenCommands[inputCommand as keyof typeof hiddenCommands](),
    ]
    return
  }

  // unknown command
  screenContent.value = [
    ...cappedContent,
    <SubmittedCommand command={inputCommand} />,
    <UnknownCommand command={inputCommand} />,
  ]
}
