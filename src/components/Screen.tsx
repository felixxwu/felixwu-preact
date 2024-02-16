import { css } from '@emotion/css'
import { styled } from '../utils/StyledComponent'
import { currentUser, dead, inputText, screenContent } from '../utils/signals'
import { mobileWidth, prompt, screenPadding } from '../utils/consts'
import { useState } from 'preact/hooks'
import { v } from '../utils/cssvars'

export function Screen() {
  const [updateKey, setUpdateKey] = useState(0)

  if (dead.value) return null

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
        <Cursor />
      </GhostInput>
      <Input
        id='input'
        type='text'
        oninput={handleInput}
        value={currentUser.value + prompt + inputText.value}
        ariaLabel='input'
        autocomplete={'off'}
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
    background-color: yellow;
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
    color: yellow;
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
    font-size: 16px;
    padding: 0;
    caret-color: transparent;
  `
)
