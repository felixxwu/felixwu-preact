import { css } from '@emotion/css'
import { styled } from './utils/StyledComponent'
import { v } from './utils/cssvars'
import { borderRadius2, color1, color4 } from './utils/consts'
import { Key } from './Key'

export function Keyboard() {
  return (
    <Container>
      <Keybed>
        <KeyRow>
          <Key name='`' />
          <Key name='1' />
          <Key name='2' />
          <Key name='3' />
          <Key name='4' />
          <Key name='5' />
          <Key name='6' />
          <Key name='7' />
          <Key name='8' />
          <Key name='9' />
          <Key name='0' />
          <Key name='-' />
          <Key name='=' />
          <Key name='Backspace' style={{ width: `calc(${v('laptopWidth')} / 10)` }} />
        </KeyRow>
        <KeyRow>
          <Key style={{ width: `calc(${v('laptopWidth')} / 13)` }} />
          <Key name='q' />
          <Key name='w' />
          <Key name='e' />
          <Key name='r' />
          <Key name='t' />
          <Key name='y' />
          <Key name='u' />
          <Key name='i' />
          <Key name='o' />
          <Key name='p' />
          <Key name='[' />
          <Key name=']' />
          <Key name='\' style={{ width: `calc(${v('laptopWidth')} / 13)` }} />
        </KeyRow>
        <KeyRow>
          <Key name='CapsLock' style={{ width: `calc(${v('laptopWidth')} / 10)` }} />
          <Key name='a' />
          <Key name='s' />
          <Key name='d' />
          <Key name='f' />
          <Key name='g' />
          <Key name='h' />
          <Key name='j' />
          <Key name='k' />
          <Key name='l' />
          <Key name=';' />
          <Key name="'" />
          <Key name='Enter' style={{ width: `calc(${v('laptopWidth')} / 9)` }} />
        </KeyRow>
        <KeyRow>
          <Key name='Shift' style={{ width: `calc(${v('laptopWidth')} / 8)` }} />
          <Key name='z' />
          <Key name='x' />
          <Key name='c' />
          <Key name='v' />
          <Key name='b' />
          <Key name='n' />
          <Key name='m' />
          <Key name=',' />
          <Key name='.' />
          <Key name='/' />
          <Key name='Shift' style={{ width: `calc(${v('laptopWidth')} / 7)` }} />
        </KeyRow>
        <KeyRow>
          <Key />
          <Key name='Control' />
          <Key name='Alt' />
          <Key name='Meta' />
          <Key name=' ' style={{ width: `calc(${v('laptopWidth')} / 3.05)` }} />
          <Key name='Meta' />
          <Key name='Alt' />
          <Key name='ArrowLeft' />
          <DoubleKey>
            <Key name='ArrowUp' style={{ height: `calc(${v('laptopWidth')} / 42)` }} />
            <Key name='ArrowDown' style={{ height: `calc(${v('laptopWidth')} / 42)` }} />
          </DoubleKey>
          <Key name='ArrowRight' />
        </KeyRow>
      </Keybed>
      <Touchpad />
    </Container>
  )
}

const Container = styled(
  'div',
  css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  `
)

const Keybed = styled(
  'div',
  css`
    position: absolute;
    width: calc(${v('laptopWidth')} / 1.15);
    height: calc(${v('laptopHeight')} / 1.8);
    background-color: ${color1}A;
    border-radius: ${borderRadius2}px;
    transform: translateY(calc(${v('laptopHeight')} / -8));
    transition: ${v('transition')};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: calc(${v('laptopHeight')} / 50);
    transition: ${v('transition')};
    flex-direction: column;
  `
)

const KeyRow = styled(
  'div',
  css`
    display: flex;
    justify-content: center;
    width: 100%;
    gap: calc(${v('laptopWidth')} / 200);
    transition: ${v('transition')};
  `
)

const DoubleKey = styled(
  'div',
  css`
    display: flex;
    flex-direction: column;
    gap: calc(${v('laptopWidth')} / 200);
    transition: ${v('transition')};
  `
)

const Touchpad = styled(
  'div',
  css`
    position: absolute;
    width: calc(${v('laptopWidth')} / 4);
    height: calc(${v('laptopHeight')} / 3.5);
    background-color: ${color4};
    border-radius: ${borderRadius2}px;
    transform: translateY(calc(${v('laptopHeight')} / 3.1));
    transition: ${v('transition')};
  `
)
