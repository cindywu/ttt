console.log('tic tac toe, three in a row...')

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const printBoard = (board) => {
  console.log(
    `\n`,
    board[0] === "" ? 1 : board[0], `|`,
    board[1] === "" ? 2 : board[1], `|`,
    board[2] === "" ? 3 : board[2], `\n`,

    board[3] === "" ? 4 : board[3], `|`,
    board[4] === "" ? 5 : board[4], `|`,
    board[5] === "" ? 6 : board[5], `\n`,

    board[6] === "" ? 7 : board[6], `|`,
    board[7] === "" ? 8 : board[7], `|`,
    board[8] === "" ? 9 : board[8], `\n`
  )
}

const board = ["", "", "", "", "", "", "", "", ""]
const playerX = true

printBoard(board)

const player = playerX ? "X" : "0"

readline.question(`${player}'s turn!\npick a spot to place your ${player}...`, spot => {
  console.log(`${player} picked ${spot}!`);
  checkIfAvailable(spot - 1, board, player)
  readline.close();
});

const checkIfAvailable = (spot, board, player) => {
  let boardCopy = board

  boardCopy[spot] = player
  printBoard(boardCopy)

}


