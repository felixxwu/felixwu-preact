import { CommandLink } from '../commands/CommandLink'
import { Help } from '../commands/Help'

export const commands = {
  start: () => (
    <>
      <h1>Felix Wu</h1>
      <div>Software Engineer at ShipServ</div>
      <br />
      <div>
        Type <CommandLink command='help'>"help"</CommandLink>
        or <CommandLink command='?'>"?"</CommandLink> for a list of available commands.
      </div>
    </>
  ),
  echo: () => <div>Hello world</div>,
  clear: () => <></>,
  help: Help,
  '?': Help,
}
