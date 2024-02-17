import { CommandLink } from './CommandLink'
import { HR } from './HR'

export function EmploymentFooter() {
  return (
    <>
      <HR />
      <div>Navigation:</div>
      <ul>
        <li>
          <CommandLink command='experience'>Work Experience</CommandLink>
        </li>
        <li>
          <CommandLink command='home'>Home</CommandLink>
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
          <CommandLink command='home'>Home</CommandLink>
        </li>
      </ul>
    </>
  )
}
