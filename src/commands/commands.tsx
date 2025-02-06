import { WorkExperience } from './components/experience'
import { Help } from './components/Help'
import { Home } from './components/Home'
import { TwoSimple } from './components/experience/TwoSimple'
import { angle, currentUser, dead, screenContent, transition } from '../utils/signals'
import { Login } from './components/Login'
import { UnknownCommand } from './components/UnknownCommand'
import { JSX } from 'preact/jsx-runtime'
import { AspectFS } from './components/experience/AspectFS'
import { UoE } from './components/experience/UoE'
import { keyboardAngle } from '../utils/consts.ts'

type Commands = {
  [key: string]: {
    component: (args: string) => JSX.Element
    hidden?: boolean
    admin?: boolean
    onExecute?: (args: string) => void
  }
}

export const commandsConfig = {
  home: { component: Home },
  experience: { component: WorkExperience },
  twosimple: { component: TwoSimple },
  aspectfs: { component: AspectFS },
  uoe: { component: UoE },
  login: {
    component: Login,
    onExecute(user) {
      if (user) {
        currentUser.old = currentUser.value
        currentUser.value = user
      }
    },
  },
  closelid: {
    component: () => <></>,
    onExecute() {
      transition.value = 1
      angle.value = keyboardAngle
    },
  },
  clear: {
    component: () => <></>,
    onExecute() {
      screenContent.value = []
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
} satisfies Commands

export const commands = commandsConfig as Commands
