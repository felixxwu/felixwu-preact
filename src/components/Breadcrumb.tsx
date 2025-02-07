import { styled } from 'goober'
import { ChevronRight, Folder, Home } from './Icons.tsx'
import { CommandLink } from '../commands/components/utils/CommandLink.tsx'
import { linkColor } from '../utils/consts.ts'
import { commandsConfig } from '../commands/commands.tsx'

export type BreadcrumbLinks = {
  label: string
  command: keyof typeof commandsConfig
}[]

export const Breadcrumb = ({ links = [] }: { links?: BreadcrumbLinks }) => {
  return (
    <Container>
      <HomeContainer>
        <Home size={16} color={linkColor} />
      </HomeContainer>
      <CommandLink command='home'>Home</CommandLink>
      {links.map(link => (
        <>
          <ChevronRightContainer>
            <ChevronRight size={16} color={linkColor} />
          </ChevronRightContainer>
          <Folder size={14} color={linkColor} />
          <CommandLink command={link.command}>{link.label}</CommandLink>
        </>
      ))}
    </Container>
  )
}

const Container = styled('div')`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 30px;
`

const HomeContainer = styled('div')`
  transform: translateY(0px);
`

const ChevronRightContainer = styled('div')`
  transform: translateY(3px);
`
