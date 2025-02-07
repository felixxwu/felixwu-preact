import { ExternalLink } from '../utils/ExternalLink'
import { Grey } from '../utils/Grey'
import { Headline } from '../utils/Headline'
import { Breadcrumb } from '../../../components/Breadcrumb.tsx'
import { breadcrumbLinks } from './index.tsx'

export function AspectFS() {
  return (
    <>
      <Breadcrumb links={breadcrumbLinks} />
      <Headline>AspectFS (2020)</Headline>
      <div>
        <Grey>Technologies: React, TypeScript, Firebase, Jest</Grey>
      </div>
      <br />
      <div>
        Aspect FS is a face-to-face fundraising agency that offer a variety of services for
        charities and their campaigns.
      </div>
      <br />
      <div>
        As well as redesigning their landing page, I created a platform to optimise their
        fundraising operations. Running costs were significantly cut compared to the previous system
        by integrating more cost-effective API services, while retaining and extending
        functionality.
      </div>
      <br />
      <div>
        Typical usage and screenshots of the system can be seen on the help page:{' '}
        <ExternalLink url='https://aspectfs.co.uk/help'>aspectfs.co.uk/help</ExternalLink>
      </div>
      <div>
        Landing page: <ExternalLink url='https://aspectfs.co.uk/'>aspectfs.co.uk</ExternalLink>
      </div>
      <br />
    </>
  )
}
