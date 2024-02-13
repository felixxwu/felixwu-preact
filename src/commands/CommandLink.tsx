import { styled } from '../utils/StyledComponent'
import { css } from '@emotion/css'
import { inputText } from '../utils/signals'
import { processCommand } from './processCommand'
import { ComponentChildren } from 'preact'

export function CommandLink({
  command,
  children,
}: {
  command: string
  children: ComponentChildren
}) {
  const handleClick = () => {
    inputText.value = command
    processCommand()
  }

  return <Container onclick={handleClick}>{children}</Container>
}

const Container = styled(
  'span',
  css`
    color: hsl(215deg 100% 80%);
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  `
)
