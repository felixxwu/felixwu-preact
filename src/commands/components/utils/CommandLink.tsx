import { ComponentChildren } from 'preact'
import { typeCommand } from '../../../utils/typeCommand'
import { commandsConfig } from '../../commands'
import styled from 'styled-components'

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

  return <Container onClick={handleClick}>{children}</Container>
}

const Container = styled.span`
  color: hsl(215deg 100% 80%);
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
