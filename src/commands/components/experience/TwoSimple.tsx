import { ExternalLink } from '../utils/ExternalLink'
import { EmploymentFooter } from '../utils/Footers'
import { Headline } from '../utils/Headline'

export function TwoSimple() {
  return (
    <>
      <Headline>2Simple (2020 - 2022)</Headline>
      <div>
        2Simple has given me the opportunity to take ownership of a number of projects over the
        years. The following are the three main projects that I took over or created:
      </div>
      <ul>
        <li>
          Implemented major updates to all areas of the app “2Publish” - the 3rd most used web app
          on the platform with over 1M hits/mo. The redesigned interface and additional
          functionality allowed users to work with the app more effectively and intuitively. User
          feedback was very positive and support cases were fewer than expected, given the size of
          the update.
          <br />
          <ExternalLink url='https://youtu.be/Y9_OBHo_DDI'>
            https://youtu.be/Y9_OBHo_DDI
          </ExternalLink>
        </li>
        <br />
        <li>
          Created a new app “PDF Annotator” for the platform, used by many teachers to create
          activity sheets and online homework assignments.
          <br />
          <ExternalLink url='https://youtu.be/lfBECXSy9x8'>
            https://youtu.be/lfBECXSy9x8
          </ExternalLink>
        </li>
        <br />
        <li>
          Implemented a redesigned interface for the app “2Create A Story” - the 7th most used web
          app on the platform with 500k hits/mo. The long-overdue modernisation was well received by
          customers.
          <br />
          <ExternalLink url='https://youtu.be/9MISivYB2RE'>
            https://youtu.be/9MISivYB2RE
          </ExternalLink>
        </li>
      </ul>
      <div>Tech stack: VueJS, TS, Jest, jQuery, Sass, Backbone, and Node.</div>
      <br />
      <div>Links:</div>
      <ul>
        <li>
          <ExternalLink url='https://2simple.com/'>https://2simple.com/</ExternalLink>
        </li>
        <li>
          <ExternalLink url='https://linkedin.com/company/2simple/'>
            https://linkedin.com/company/2simple/
          </ExternalLink>
        </li>
      </ul>
      <EmploymentFooter />
    </>
  )
}
