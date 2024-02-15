import { CommandLink } from './utils/CommandLink'

export function UnknownCommand({ command }: { command: string }) {
  return (
    <div>
      "{command}" is an unrecognised command. Type <CommandLink command='help'>"help"</CommandLink>
      or <CommandLink command='?'>"?"</CommandLink> to see the list of available commands.
    </div>
  )
}
