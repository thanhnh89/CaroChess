import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #c4c4c4;
`

export const ButtonCreateBoard = styled.button`
  margin: 2em;
  padding: 1em;
  border: 1px solid gray;
  width: fit-content;
  border-radius: 0.4em;
  cursor: pointer;
`
export const Title = styled.div`
  font-size: 2em;
  align-self: center;
  font-weight: bold;
  margin-top: 1em;
  margin-bottom: 1em;
`
export const RedText = styled.span`
  color: red;
  width: 2em;
  font-weight: bold;
  margin-top: 1em;
  margin-bottom: 1em;
`
