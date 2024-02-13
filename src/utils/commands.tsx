import { Help } from '../commands/Help'

export const commands = {
  help: Help,
  '?': Help,
  hello: () => <div>Hello world</div>,
  clear: () => <></>,
}
