import React, { useState } from 'react'
import {
  Wrapper,
  DarkBackground,
  Row,
  Title,
  FieldName,
  ButtonCreate,
  InputNumber,
  ButtonClose,
  Message,
} from './popupCreateBoardStyle'

interface Props {
  onClose?: () => void
  onCreate?: (x: number, y: number) => void
  winner: string | null
}

const PopupCreateBoard = (props: Props) => {
  const [row, setRow] = useState(
    Number(localStorage.getItem('suggestRow') || '10'),
  )
  const [column, setColumn] = useState(
    Number(localStorage.getItem('suggestColumn') || '10'),
  )

  const onChangeColumn = (event: any) => {
    setColumn(Number(event.target.value))
    localStorage.setItem('suggestColumn', event.target.value)
  }

  const onChangeRow = (event: any) => {
    setRow(Number(event.target.value))
    localStorage.setItem('suggestRow', event.target.value)
  }

  const onCreateBoard = () => {
    if (props.onClose) props.onClose()
    if (props.onCreate) props.onCreate(column, row)
  }

  const message = props.winner ? `Winner is  ${props.winner}` : 'Board is full'

  return (
    <DarkBackground>
      <Wrapper>
        <Message>{message}</Message>
        <Title>Create New Board</Title>
        <ButtonClose onClick={props.onClose}>X</ButtonClose>
        <Row>
          <FieldName>Columns:</FieldName>
          <InputNumber type="number" value={column} onChange={onChangeColumn} />
        </Row>
        <Row>
          <FieldName>Rows:</FieldName>
          <InputNumber type="number" value={row} onChange={onChangeRow} />
        </Row>
        <ButtonCreate onClick={onCreateBoard}>Create</ButtonCreate>
      </Wrapper>
    </DarkBackground>
  )
}

export default PopupCreateBoard
