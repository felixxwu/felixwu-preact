import { commands } from '../commands'
import { CommandLink } from './utils/CommandLink'

export function Help(_: string) {
  return (
    <>
      <br />
      <div>Available commands:</div>
      <ul>
        {Object.keys(commands).map(c => (
          <li key={c}>
            <CommandLink command={c as keyof typeof commands}>{c}</CommandLink>
          </li>
        ))}
      </ul>
    </>
  )
}
