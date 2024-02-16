import { css } from '@emotion/css'
import { styled } from '../../utils/StyledComponent'
import { prompt } from '../../utils/consts'
import { currentUser } from '../../utils/signals'

export function SubmittedCommand({ command }: { command: string }) {
  const oldUser = currentUser.old
  currentUser.old = currentUser.value
  return (
    <Container className='submitted'>
      {oldUser}
      {prompt}
      {command}
    </Container>
  )
}

const Container = styled(
  'div',
  css`
    color: yellow;
  `
)
