import { SubmittedCommand } from './components/SubmittedCommand'
import { historyLimit } from '../utils/consts'
import { commandHistory, commandPos, currentUser, inputText, screenContent } from '../utils/signals'
import { commands } from './commands'

export function submitCommand() {
  const inputCommand = inputText.value.trim()
  inputText.value = ''

  setTimeout(() => {
    const screen = document.getElementById('screen-container')
    if (screen) {
      setTimeout(() => {
        screen.scrollTop =
          (document.getElementById('input')?.offsetTop ?? 0) -
          screen.clientHeight +
          (document.getElementById('input')?.clientHeight ?? 0) +
          1
      })
    }
  })

  for (const c of Object.keys(commands)) {
    if (
      inputCommand.startsWith(c) &&
      (inputCommand.length === c.length || inputCommand[c.length] === ' ') &&
      (commands[c].admin ? currentUser.value === 'admin' : true)
    ) {
      acceptCommand(c, inputCommand.slice(c.length + 1))
      return
    }
  }

  acceptCommand('unknown', inputCommand)
}

function acceptCommand(commandName: string, args: string) {
  const cappedContent = screenContent.value.slice(
    Math.max(0, screenContent.value.length - historyLimit)
  )

  const submittedCommandName = commandName === 'unknown' ? args : `${commandName} ${args}`
  const command = commands[commandName]

  commandHistory.unshift(submittedCommandName)

  screenContent.value = [
    ...cappedContent,
    <SubmittedCommand command={submittedCommandName} />,
    commands[commandName].component(args),
  ]

  command.onExecute?.(args)

  commandPos.value = -1
}
