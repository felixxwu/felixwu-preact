import { WorkExperience } from './components/experience'
import { Help } from './components/Help'
import { Start } from './components/Start'
import { TwoSimple } from './components/experience/TwoSimple'
import { currentUser, dead, screenContent } from '../utils/signals'
import { Login } from './components/Login'
import { UnknownCommand } from './components/UnknownCommand'
import { JSX } from 'preact/jsx-runtime'

type Commands = {
  [key: string]: {
    component: (args: string) => JSX.Element
    hidden?: boolean
    admin?: boolean
    onExecute?: (args: string) => void
  }
}

export const commands: Commands = {
  start: { component: Start },
  experience: { component: WorkExperience },
  twosimple: { component: TwoSimple },
  clear: {
    component: () => <></>,
    onExecute() {
      screenContent.value = []
    },
  },
  login: {
    component: Login,
    onExecute(user) {
      if (user) {
        currentUser.old = currentUser.value
        currentUser.value = user
      }
    },
  },
  help: { component: Help },
  '?': { component: Help },

  'rm -rf /': {
    component: () => <></>,
    onExecute() {
      dead.value = true
    },
    admin: true,
  },

  '': {
    component: () => <></>,
    hidden: true,
  },
  unknown: { component: UnknownCommand, hidden: true },
}
