import { WorkExperience } from './components/experience'
import { Help } from './components/Help'
import { Start } from './components/Start'
import { TwoSimple } from './components/experience/TwoSimple'
import { dead } from '../utils/signals'

export const commands = {
  start: Start,
  experience: WorkExperience,
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
