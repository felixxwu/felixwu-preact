import './styles.css'
import './lexend.css'
import { laptopWidth } from './utils/signals'
import { Provider } from './components/Provider'
import { Laptop } from './components/Laptop'
import { color1, mobileWidth } from './utils/consts'
import { Screen } from './components/Screen'
import { styled } from 'goober'

export function App() {
  return (
    <Provider>
      {laptopWidth.value < mobileWidth ? (
        <MobileContainer id='screen-container'>
          <Screen />
        </MobileContainer>
      ) : (
        <LaptopContainer>
          <Laptop children={<Screen />} />
        </LaptopContainer>
      )}
    </Provider>
  )
}

const LaptopContainer = styled('div')`
  position: absolute;
  width: 100vw;
  height: 100svh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MobileContainer = styled('div')`
  width: 100vw;
  height: 100svh;
  overflow-y: auto;
  background-color: ${color1};
`
