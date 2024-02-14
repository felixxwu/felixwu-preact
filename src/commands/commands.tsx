import { CommandLink } from './components/CommandLink'
import { Help } from './components/Help'
import { Start } from './components/Start'

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

export const hiddenCommands = {
  hidden: () => <div>Hidden command</div>,
}
