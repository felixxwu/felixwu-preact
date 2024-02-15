import { css } from '@emotion/css'
import { styled } from '../../utils/StyledComponent'
import { CommandLink } from './CommandLink'
import { ExternalLink } from './ExternalLink'

export function Start() {
  return (
    <>
      <Name>Felix Wu</Name>
      <span>
        Frontend developer at <ExternalLink url='https://www.shipserv.com/'>ShipServ</ExternalLink>
      </span>
      <br />
      <br />
      <div>
        Type <CommandLink command='help'>"help"</CommandLink>
        or <CommandLink command='?'>"?"</CommandLink> for a list of available commands.
      </div>
    </>
  )
}

const Name = styled(
  'h1',
  css`
    font-family: 'Montserrat', sans-serif;
    font-size: 50px;
    font-weight: 500;
  `
)
