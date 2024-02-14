import { CommandLink } from '../commands/CommandLink'
import { Help } from '../commands/Help'
import { Start } from '../commands/Start'

export const commands = {
  start: Start,
  echo: () => (
    <div>
      Hello world{' '}
      <CommandLink command='start' clearBefore>
        "start"
      </CommandLink>
    </div>
  ),
  clear: () => <></>,
  help: Help,
  '?': Help,
}
