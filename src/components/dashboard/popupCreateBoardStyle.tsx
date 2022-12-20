import styled from 'styled-components'

export const DarkBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #0000009c;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  width: 15em;
  height: fit-content;
  background: white;
  display: flex;
  flex-direction: column;
  padding: 1em;
  border-radius: 0.3em;
  position: relative;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5em;
`

export const InputNumber = styled.input`
  height: 2em;
  width: 10em;
`

export const Title = styled.div`
  width: fit-content;
  font-size: 1.5em;
  font-weight: bold;
  align-self: center;
`

export const FieldName = styled.div`
  width: fit-content;
`
export const ButtonCreate = styled.button`
  margin-top: 2em;
  width: 12em;
  padding: 1em;
  border: 1px solid gray;
  border-radius: 0.4em;
  cursor: pointer;
  align-self: center;
`

export const ButtonClose = styled.div`
  position: absolute;
  top: 0;
  right: 0.5em;
  cursor: pointer;
  padding: 0.5em;
`
export const Message = styled.div`
  width: fit-content;
  font-size: 1.5em;
  font-weight: bold;
  align-self: center;
  color: orange;
`
