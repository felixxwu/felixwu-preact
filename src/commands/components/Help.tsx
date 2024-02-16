import { currentUser } from '../../utils/signals'
import { commands } from '../commands'
import { CommandLink } from './utils/CommandLink'

export function Help(_: string) {
  const filteredCommands = Object.entries(commands)
    .filter(([, { hidden, admin }]) => !hidden && (currentUser.value === 'admin' || !admin))
    .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {})

  return (
    <>
      <br />
      <div>Available commands:</div>
      <ul>
        {Object.keys(filteredCommands).map(c => (
          <li key={c}>
            <CommandLink command={c}>{c}</CommandLink>
          </li>
        ))}
      </ul>
    </>
  )
}
