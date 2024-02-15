import { CommandLink } from '../utils/CommandLink'
import { HomeFooter } from '../utils/Footers'
import { Headline } from '../utils/Headline'

export function Employment() {
  return (
    <>
      <Headline>Employment</Headline>
      <div>ShipServ</div>
      <div>Frontend developer (2022 - Now) [NextJS, TS, GraphQL]</div>
      <br />
      <CommandLink command='twosimple'>2Simple</CommandLink>
      <div>Frontend Developer (2020 - 2022) [VueJS, TS, jQuery, Node]</div>
      <br />
      <div>Aspect FS</div>
      <div>
        Freelance Software Developer (2020) - Created a platform to optimise face-to-face
        fundraising campaigns. [React, TS, Firebase, Jest]
      </div>
      <br />
      <div>UoE School of Engineering</div>
      <div>
        IT Team Intern (2019) - Created a Vue component used for many database management related
        internal applications. [VueJS, REST]
      </div>
      <HomeFooter />
    </>
  )
}
