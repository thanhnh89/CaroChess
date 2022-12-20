import { useState } from 'react'

enum CELL {
  x = 'X',
  o = 'O',
  white = ' ',
}

const createNewBoard = (columns: number, rows: number) => {
  const board = []
  for (let i = 0; i < rows; i += 1) {
    const row = []
    for (let j = 0; j < columns; j += 1) {
      row.push(CELL.white)
    }
    board.push(row)
  }
  return board
}

const checkFull = (board: any[]) => {
  for (const row of board) {
    for (const element of row) {
      if (element === CELL.white) return false
    }
  }
  return true
}

const validatePosition = (
  board: any[],
  rowIndex: number,
  columnIndex: number,
) => {
  const rowNumber = board.length
  const columnNumber = rowNumber ? board[0].length : 0
  if (rowIndex < 0 || rowIndex >= rowNumber) return false
  if (columnIndex < 0 || columnIndex >= columnNumber) return false
  return true
}

const countDirection = (
  board: any[],
  row: number,
  column: number,
  offsetRow: number,
  offsetColumn: number,
) => {
  const value = board[row][column]
  let rowIndex = row
  let columnIndex = column
  let count = 0
  while (true) {
    rowIndex += offsetRow
    columnIndex += offsetColumn
    if (validatePosition(board, rowIndex, columnIndex) === false) break
    if (board[rowIndex][columnIndex] === value) count += 1
  }
  return count
}

const checkRow = (board: any[], row: number, column: number) => {
  let count = 1
  // check right
  count += countDirection(board, row, column, 0, 1)
  // check left
  count += countDirection(board, row, column, 0, -1)
  return count >= 5 ? board[row][column] : null
}

const checkColumn = (board: any[], row: number, column: number) => {
  let count = 1
  // check top
  count += countDirection(board, row, column, -1, 0)
  // check down
  count += countDirection(board, row, column, 1, 0)
  return count >= 5 ? board[row][column] : null
}

const checkDegree45 = (board: any[], row: number, column: number) => {
  let count = 1
  // check top right
  count += countDirection(board, row, column, -1, 1)
  // check down left
  count += countDirection(board, row, column, 1, -1)
  return count >= 5 ? board[row][column] : null
}

const checkDegree135 = (board: any[], row: number, column: number) => {
  let count = 1
  // check top left
  count += countDirection(board, row, column, -1, -1)
  // check down right
  count += countDirection(board, row, column, 1, 1)
  return count >= 5 ? board[row][column] : null
}

const useCaro = (columns: number, rows: number) => {
  const [board, setBoard] = useState<any>(createNewBoard(columns, rows))
  const [turn, setTurn] = useState<CELL>(CELL.x)
  const [column, setColumn] = useState<number>(columns)
  const [row, setRow] = useState<number>(rows)

  const createBoard = (x: number, y: number) => {
    setBoard(createNewBoard(x, y))
    setColumn(x)
    setRow(y)
  }

  const nextTurn = () => {
    setTurn(turn === CELL.x ? CELL.o : CELL.x)
  }

  const checkWinner = (rowIndex: number, columnIndex: number) => {
    // console.log('check row = ', checkRow(board, rowIndex, columnIndex))
    // console.log('check column = ', checkColumn(board, rowIndex, columnIndex))
    // console.log('check row = ', checkDegree45(board, rowIndex, columnIndex))
    // console.log('check column = ', checkDegree135(board, rowIndex, columnIndex))
    if (checkRow(board, rowIndex, columnIndex))
      return board[rowIndex][columnIndex]
    if (checkColumn(board, rowIndex, columnIndex))
      return board[rowIndex][columnIndex]
    if (checkDegree45(board, rowIndex, columnIndex))
      return board[rowIndex][columnIndex]
    if (checkDegree135(board, rowIndex, columnIndex))
      return board[rowIndex][columnIndex]
    return null
  }

  const onClickCell = (x: number, y: number) => {
    board[y][x] = turn
    setBoard([...board])
    // nextTurn()
    // checkWinner(y, x)
  }

  const checkFullBoard = () => {
    return checkFull(board)
  }

  return {
    board,
    createBoard,
    turn,
    nextTurn,
    column,
    row,
    onClickCell,
    checkFullBoard,
    checkWinner,
  }
}

export default useCaro
