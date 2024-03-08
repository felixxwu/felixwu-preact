import { styled } from '../../../utils/StyledComponent'
import { css } from '@emotion/css'
import { ComponentChildren } from 'preact'
import { typeCommand } from '../../../utils/typeCommand'
import { commandsConfig } from '../../commands'

export function CommandLink({
  command,
  children,
}: {
  command: keyof typeof commandsConfig
  children: ComponentChildren
}) {
  const handleClick = async () => {
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
