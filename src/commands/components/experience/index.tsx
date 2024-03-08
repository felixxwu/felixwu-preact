import { backLabel } from '../../../utils/consts'
import { CommandLink } from '../utils/CommandLink'
import { Grey } from '../utils/Grey'
import { Headline } from '../utils/Headline'

export function WorkExperience() {
  return (
    <>
      <CommandLink command='home'>{backLabel}</CommandLink>
      <Headline>Work Experience</Headline>
      <div>ShipServ, 2022 - Now (WIP)</div>
      <div>Frontend developer </div>
      <div>
        <Grey>[NextJS, TS, GraphQL]</Grey>
      </div>
      <br />
      <CommandLink command='twosimple'>2Simple, 2020 - 2022</CommandLink>
      <div>
        Frontend Developer - Took ownership over some large apps on the platform with positive
        feedback on releases
      </div>
      <div>
        <Grey>[VueJS, TS, jQuery, Node]</Grey>
      </div>
      <br />
      <CommandLink command='aspectfs'>Aspect FS, 2020</CommandLink>
      <div>
        Freelance Software Developer - Created a platform to optimise face-to-face fundraising
        campaigns.
      </div>
      <div>
        <Grey>[React, TS, Firebase, Jest]</Grey>
      </div>
      <br />
      <CommandLink command='uoe'>UoE School of Engineering, 2019</CommandLink>
      <div>
        IT Team Intern - Created a Vue component used for many database management related internal
        applications.
      </div>
      <div>
        <Grey>[VueJS, REST]</Grey>
      </div>
      <br />
    </>
  )
}
