import React from 'react'
import Cell from './Cell'
import { Wrapper, Row } from './boardStyle'

interface Props {
  board: any[]
  column: number
  row: number
  onClickCell: (x: number, y: number) => void
}

const Board = (props: Props) => {
  const renderRow = (rowIndex: number) => {
    const row = []
    for (let i = 0; i < props.column; i += 1) {
      const cell = (
        <Cell
          value={props.board[rowIndex][i]}
          x={i}
          y={rowIndex}
          onClick={() => props.onClickCell(i, rowIndex)}
          key={`${i}-${rowIndex}`}
        />
      )
      row.push(cell)
    }
    return row
  }
  return (
    <Wrapper>
      {props.board.map((item: any, index: number) => (
        <Row key={index}>{renderRow(index)}</Row>
      ))}
    </Wrapper>
  )
}

export default Board
