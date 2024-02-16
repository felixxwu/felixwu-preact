import { CommandLink } from './utils/CommandLink'
import { ExternalLink } from './utils/ExternalLink'
import { Table } from './utils/Table'
import { Headline } from './utils/Headline'
import { HR } from './utils/HR'

export function Start(_: string) {
  return (
    <>
      <Headline>Felix Wu</Headline>
      <span>
        Frontend developer at <ExternalLink url='https://www.shipserv.com/'>ShipServ</ExternalLink>.
      </span>
      <br />
      <br />
      <Table
        data={[
          [
            'Email:',
            <ExternalLink url='mailto:felixxwu@gmail.com'>felixxwu@gmail.com</ExternalLink>,
          ],
          ['CV:', <ExternalLink url='https://felixwu.me/cv.pdf'>felixwu.me/cv.pdf</ExternalLink>],
          [
            'GitHub:',
            <ExternalLink url='https://github.com/felixxwu'>github.com/felixxwu</ExternalLink>,
          ],
          [
            'LinkedIn:',
            <ExternalLink url='https://linkedin.com/in/felixxwu'>
              linkedin.com/in/felixxwu
            </ExternalLink>,
          ],
        ]}
      />
      <br />
      <div>Navigation:</div>
      <ul>
        <li>
          <CommandLink command='experience'>Work Experience</CommandLink>
        </li>
        <li>Personal Projects (WIP)</li>
        <li>Education (WIP)</li>
        <li>Technical Skills (WIP)</li>
      </ul>
      <HR />
      <div>
        Type <CommandLink command='help'>"help"</CommandLink>
        or <CommandLink command='?'>"?"</CommandLink> for a list of available commands.
      </div>
      <br />
    </>
  )
}
