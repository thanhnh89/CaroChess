import React, { useState } from 'react'
import useCaro from './useCaro'
import { Wrapper, ButtonCreateBoard, Title, RedText } from './dashboardStyle'
import PopupCreateBoard from '../components/dashboard/PopupCreateBoard'
import PopupFinishBoard from '../components/dashboard/PopupFinishBoard'
import Board from '../components/dashboard/Board'

const Dashboard = () => {
  const {
    board,
    createBoard,
    column,
    row,
    onClickCell,
    turn,
    nextTurn,
    checkWinner,
    checkFullBoard,
  } = useCaro(10, 10)
  const [isShowPopupCreate, setIsShowPopupCreate] = useState(false)
  const [isShowResult, setIsShowResult] = useState(false)
  const [state, setState] = useState<any>({
    isPlaying: true,
    winner: null,
  })

  const onClickCellBoard = (x: number, y: number) => {
    if (state.isPlaying === false) return
    onClickCell(x, y)
    const winner = checkWinner(y, x)
    const isFull = checkFullBoard()
    if (winner === null && isFull === false) nextTurn()
    else {
      setState({
        isPlaying: false,
        winner,
      })
      setIsShowResult(true)
    }
  }

  const onCreateBoard = (x: number, y: number) => {
    createBoard(x, y)
    setState({
      isPlaying: true,
      winner: null,
    })
  }

  return (
    <Wrapper>
      <ButtonCreateBoard
        onClick={() => setIsShowPopupCreate(!isShowPopupCreate)}
      >
        Create Board
      </ButtonCreateBoard>
      {isShowPopupCreate && (
        <PopupCreateBoard
          onClose={() => setIsShowPopupCreate(false)}
          onCreate={(x: number, y: number) => onCreateBoard(x, y)}
        />
      )}
      {isShowResult && (
        <PopupFinishBoard
          winner={state.winner}
          onClose={() => setIsShowResult(false)}
          onCreate={(x: number, y: number) => onCreateBoard(x, y)}
        />
      )}
      <Title>
        Mời bên <RedText>{turn}</RedText> đi
      </Title>
      <Board
        board={board}
        column={column}
        row={row}
        onClickCell={(x: number, y: number) => onClickCellBoard(x, y)}
      />
    </Wrapper>
  )
}

export default Dashboard
