import { styled } from '../../utils/StyledComponent'
import { css } from '@emotion/css'
import { submitCommand } from '../processCommand'
import { ComponentChildren } from 'preact'
import { typeCommand } from '../../utils/typeCommand'
import { commands } from '../commands'

export function CommandLink({
  command,
  clearBefore,
  children,
}: {
  command: keyof typeof commands
  clearBefore?: boolean
  children: ComponentChildren
}) {
  const handleClick = async () => {
    if (clearBefore) {
      await typeCommand('clear')
      submitCommand()
    }
    await typeCommand(command)
    submitCommand()
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
