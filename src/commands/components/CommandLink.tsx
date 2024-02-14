import { styled } from '../../utils/StyledComponent'
import { css } from '@emotion/css'
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
    }
    await typeCommand(command)
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
