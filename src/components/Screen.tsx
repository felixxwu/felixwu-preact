import { css } from '@emotion/css'
import { styled } from '../utils/StyledComponent'
import { inputText, screenContent } from '../utils/signals'
import { prompt } from '../utils/consts'
import { useState } from 'preact/hooks'

export function Screen() {
  const [updateKey, setUpdateKey] = useState(0)

  const screen = document.getElementById('screen-container')
  if (screen) {
    setTimeout(() => {
      screen.scrollTop = 1e10
    })
  }

  const handleInput = (e: Event) => {
    inputText.value = (e.target as HTMLInputElement).value.slice(prompt.length) ?? ''
    setUpdateKey(updateKey + 1)
  }

  return (
    <Container>
      {screenContent.value.map((content, i) => (
        <div key={i}>{content}</div>
      ))}
      <GhostInput>
        {prompt + inputText.value}
        <Cursor />
      </GhostInput>
      <Input
        id='input'
        type='text'
        oninput={handleInput}
        value={prompt + inputText.value}
        ariaLabel='input'
      />
    </Container>
  )
}

const Container = styled(
  'div',
  css`
    padding: 10px;
    color: white;
  `
)

const GhostInput = styled(
  'div',
  css`
    position: absolute;
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
  `
)
