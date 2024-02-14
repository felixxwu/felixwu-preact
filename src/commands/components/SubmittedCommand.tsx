import { css } from '@emotion/css'
import { styled } from '../../utils/StyledComponent'
import { prompt } from '../../utils/consts'

export function SubmittedCommand({ command }: { command: string }) {
  return (
    <Container>
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
