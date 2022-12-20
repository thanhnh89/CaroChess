import styled from 'styled-components'

export const Wrapper = styled.div<any>`
  width: 2em;
  height: 2em;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  font-weight: bold;
  color: ${(props) => props.color};
`
