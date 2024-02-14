import { commands } from '../commands'
import { CommandLink } from './CommandLink'

export function Help() {
  return (
    <>
      <div>Available commands:</div>
      {Object.keys(commands).map(c => (
        <div key={c}>
          • <CommandLink command={c as keyof typeof commands}>{c}</CommandLink>
        </div>
      ))}
    </>
  )
}
