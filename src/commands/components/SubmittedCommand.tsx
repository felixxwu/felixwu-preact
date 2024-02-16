import { adminColor, prompt, userColor } from '../../utils/consts'
import { currentUser } from '../../utils/signals'

export function SubmittedCommand({ command }: { command: string }) {
  const oldUser = currentUser.old
  currentUser.old = currentUser.value
  return (
    <div
      className='submitted'
      style={{
        color: oldUser === 'admin' ? adminColor : userColor,
      }}
    >
      {oldUser}
      {prompt}
      {command}
    </div>
  )
}
