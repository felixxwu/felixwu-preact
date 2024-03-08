import { backLabel } from '../../../utils/consts'
import { CommandLink } from '../utils/CommandLink'
import { ExternalLink } from '../utils/ExternalLink'
import { Grey } from '../utils/Grey'
import { Headline } from '../utils/Headline'

export function UoE() {
  return (
    <>
      <CommandLink command='experience'>{backLabel}</CommandLink>
      <Headline>UoE School of Engineering (2019)</Headline>
      <div>
        <Grey>Technologies: VueJS, Vuex, JSON API, jsonapi-vuex, pyramid-jsonapi</Grey>
      </div>
      <br />
      <div>
        A 3-month long internship for the School of Engineering at the University of Edinburgh, in
        which I worked with the IT Team to build the foundations of the new user interface for
        various database management related internal applications. The component that I was in
        charge of would be capable of making complex queries, displaying results in a modular and
        configurable way, and editing field values and relationships robustly and intuitively,
        amongst other things. The main challenge was to create this component to be highly
        configurable for a wide variety of applications including a staff and student account and
        relationship management system, a desk allocation system, and a software license tracking
        system. These applications were to be developed by other teams at the School of Engineering
        and so I was working closely with them to fulfill the requirements.
      </div>
      <br />
      <div>
        See these slides for a good visual explaination of the main features:{' '}
        <ExternalLink url='https://docs.google.com/presentation/d/1hC0ARHAVeDWvg32CgGt-9TvGQ4KT9Dvw-lKLDy_WSjg'>
          docs.google.com/presentation/d/1hC0ARHAVeDWvg32CgGt-9TvGQ4KT9Dvw-lKLDy_WSjg
        </ExternalLink>
      </div>
      <br />
      <div>
        GitHub:{' '}
        <ExternalLink url='https://github.com/uoe-eng/SearchListDetail-Component'>
          github.com/uoe-eng/SearchListDetail-Component
        </ExternalLink>
      </div>
      <br />
      <div>Links:</div>
      <ul>
        <li>
          <ExternalLink url='https://jsonapi.org'>jsonapi.org</ExternalLink>
        </li>
        <li>
          <ExternalLink url='https://github.com/colinhiggs/pyramid-jsonapi'>
            github.com/colinhiggs/pyramid-jsonapi
          </ExternalLink>
        </li>
        <li>
          <ExternalLink url='https://github.com/mrichar1/jsonapi-vuex'>
            github.com/mrichar1/jsonapi-vuex
          </ExternalLink>
        </li>
      </ul>
    </>
  )
}
