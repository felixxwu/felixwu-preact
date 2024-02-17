import { WorkExperience } from './components/experience'
import { Help } from './components/Help'
import { Home } from './components/Home'
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
  home: { component: Home },
  experience: { component: WorkExperience },
  twosimple: { component: TwoSimple },
  login: {
    component: Login,
    onExecute(user) {
      if (user) {
        currentUser.old = currentUser.value
        currentUser.value = user
      }
    },
  },
  // browser: {
  //   component: () => <></>,
  //   onExecute() {
  //     browser.value = true
  //   },
  // },
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
}
