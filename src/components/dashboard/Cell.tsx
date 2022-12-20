import React from 'react'
import { Wrapper } from './cellStyle'

interface Props {
  value: string
  x: number
  y: number
  onClick: () => void
}

const Cell = (props: Props) => {
  const onClickCell = () => {
    if (props.value === ' ') props.onClick()
  }
  return (
    <Wrapper onClick={onClickCell} color={props.value === 'X' ? 'blue' : 'red'}>
      {props.value}
    </Wrapper>
  )
}

export default Cell
