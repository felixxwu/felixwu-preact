import { CommandLink } from './CommandLink'
import { HR } from './HR'

export function EmploymentFooter() {
  return (
    <>
      <HR />
      <div>Navigation:</div>
      <ul>
        <li>
          <CommandLink command='employment'>Employment</CommandLink>
        </li>
        <li>
          <CommandLink command='start'>Home</CommandLink>
        </li>
      </ul>
    </>
  )
}

export function HomeFooter() {
  return (
    <>
      <HR />
      <div>Navigation:</div>
      <ul>
        <li>
          <CommandLink command='start'>Home</CommandLink>
        </li>
      </ul>
    </>
  )
}
