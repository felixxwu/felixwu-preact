import styled from 'styled-components'

export function Browser() {
  return (
    <Container>
      <BrowserTopBar>I am browser</BrowserTopBar>
      <IFrame src='https://www.google.com/webhp?igu=1'></IFrame>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const IFrame = styled.iframe`
  width: 100%;
  height: calc(100% - 30px);
  border: none;
  transform: scale(1);
`

const BrowserTopBar = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  background-color: #f1f1f1;
`
