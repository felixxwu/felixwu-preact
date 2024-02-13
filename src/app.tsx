import { styled } from './utils/StyledComponent'
import { css } from '@emotion/css'
import { laptopWidth } from './utils/signals'
import { Provider } from './Provider'
import { Laptop } from './Laptop'
import { color1 } from './utils/consts'
import { Screen } from './Screen'

export function App() {
  return (
    <Provider>
      {laptopWidth.value < 700 ? (
        <MobileContainer>
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

const LaptopContainer = styled(
  'div',
  css`
    position: absolute;
    width: 100vw;
    height: 100svh;
    display: flex;
    justify-content: center;
    align-items: center;
  `
)

const MobileContainer = styled(
  'div',
  css`
    width: 100vw;
    height: 100svh;
    overflow-y: auto;
    background-color: ${color1};
  `
)
