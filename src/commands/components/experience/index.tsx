import { backLabel } from '../../../utils/consts'
import { CommandLink } from '../utils/CommandLink'
import { Headline } from '../utils/Headline'

export function WorkExperience() {
  return (
    <>
      <CommandLink command='home'>{backLabel}</CommandLink>
      <Headline>Work Experience</Headline>
      <div>ShipServ, 2022 - Now (WIP)</div>
      <div>Frontend developer [NextJS, TS, GraphQL]</div>
      <br />
      <CommandLink command='twosimple'>2Simple, 2020 - 2022</CommandLink>
      <div>Frontend Developer [VueJS, TS, jQuery, Node]</div>
      <br />
      <div>Aspect FS, 2020 (WIP)</div>
      <div>
        Freelance Software Developer - Created a platform to optimise face-to-face fundraising
        campaigns. [React, TS, Firebase, Jest]
      </div>
      <br />
      <div>UoE School of Engineering, 2019 (WIP)</div>
      <div>
        IT Team Intern - Created a Vue component used for many database management related internal
        applications. [VueJS, REST]
      </div>
      <br />
    </>
  )
}
