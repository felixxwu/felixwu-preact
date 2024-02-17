import { css } from '@emotion/css'
import { styled } from '../utils/StyledComponent'
import { browser, currentUser, dead, inputText, screenContent } from '../utils/signals'
import { adminColor, mobileWidth, prompt, screenPadding, userColor } from '../utils/consts'
import { useState } from 'preact/hooks'
import { v } from '../utils/cssvars'
import { Browser } from './Browser'

export function Screen() {
  const [updateKey, setUpdateKey] = useState(0)

  if (dead.value) return null

  if (browser.value) return <Browser />

  const handleInput = (e: Event) => {
    inputText.value =
      (e.target as HTMLInputElement).value.slice(currentUser.value.length + prompt.length) ?? ''
    setUpdateKey(updateKey + 1)
  }

  return (
    <Container>
      {screenContent.value.map((content, i) => (
        <div key={i}>{content}</div>
      ))}
      <GhostInput>
        {currentUser.value + prompt + inputText.value}
        <Cursor
          style={{ backgroundColor: currentUser.value === 'admin' ? adminColor : userColor }}
        />
      </GhostInput>
      <Input
        id='input'
        type='text'
        oninput={handleInput}
        value={currentUser.value + prompt + inputText.value}
        ariaLabel='input'
        autocomplete={'off'}
        style={{ color: currentUser.value === 'admin' ? adminColor : userColor }}
      />
    </Container>
  )
}

const Container = styled(
  'div',
  css`
    padding: ${screenPadding}px;
    color: white;
    padding-bottom: calc(${v('laptopHeight')} - 60px);

    @media screen and (max-width: ${mobileWidth}px) {
      padding-bottom: calc(100svh - 30px);
    }

    & * {
      user-select: text;
    }
  `
)

const GhostInput = styled(
  'div',
  css`
    position: relative;
    height: 0;
    color: transparent;
    display: flex;
    white-space: pre;
  `
)

const Cursor = styled(
  'div',
  css`
    margin-left: 1px;
    margin-top: 2px;
    width: 7px;
    height: 16px;
    animation: blink 1s infinite;
    @keyframes blink {
      0% {
        opacity: 0;
      }
      49% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      99% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  `
)

const Input = styled(
  'input',
  css`
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
    font-size: 16px;
    padding: 0;
    caret-color: transparent;
  `
)
