import { CommandLink } from './CommandLink'

export function Start() {
  return (
    <>
      <h1>Felix Wu</h1>
      <div>Software Engineer at ShipServ</div>
      <br />
      <div>
        Type <CommandLink command='help'>"help"</CommandLink>
        or <CommandLink command='?'>"?"</CommandLink> for a list of available commands.
      </div>
    </>
  )
}
