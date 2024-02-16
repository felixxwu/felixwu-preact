import { styled } from '../../../utils/StyledComponent'
import { css } from '@emotion/css'
import { ComponentChildren } from 'preact'
import { typeCommand } from '../../../utils/typeCommand'

export function CommandLink({
  command,
  children,
}: {
  command: string
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
