import { Employment } from './components/employment'
import { Help } from './components/Help'
import { Start } from './components/Start'
import { TwoSimple } from './components/employment/TwoSimple'
import { dead } from '../utils/signals'

export const commands = {
  start: Start,
  employment: Employment,
  twosimple: TwoSimple,
  clear: () => <></>,
  help: Help,
  '?': Help,
}

export const hiddenCommands = {
  'rm -rf /': () => {
    dead.value = true
    return <></>
  },
}
