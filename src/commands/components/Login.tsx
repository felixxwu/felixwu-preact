import { currentUser } from '../../utils/signals'

export function Login(user: string) {
  if (user) {
    currentUser.old = currentUser.value
    currentUser.value = user
    return <></>
  } else {
    return <div>Usage: login &lt;user&gt;</div>
  }
}
