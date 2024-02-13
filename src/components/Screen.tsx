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
      {screenContent.value}
      <Input id='input' type='text' oninput={handleInput} value={prompt + inputText.value} />
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
