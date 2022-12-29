console.log('tic tac toe, three in a row...')

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const board = ["", "", "", "", "", "", "", "", ""]
const playerX = true
const winningCombos = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
]
const player = playerX ? "X" : "0"

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

printBoard(board)

readline.question(`${player}'s turn! pick a spot...`, spot => {
  console.log(`${player} picked ${spot}!`);
  checkIfAvailable(spot - 1, board, player) // (int, array, string)
})

const checkIfAvailable = (spot, board, player) => {
  let boardCopy = board
  let win = false
  if (boardCopy[spot] === "") {
    boardCopy[spot] = player
    win = checkIfWin(boardCopy)
    draw = checkIfDraw(boardCopy)
    if (draw) {
      printBoard(boardCopy)
      console.log('draw! no one wins')
      wannaPlayAgain()
    } else {
      if (!win) {
        nextMove(boardCopy, player)
      } else {
        printBoard(boardCopy)
        console.log(`${player} wins!`)
        wannaPlayAgain()
      }
    }
  } else {
    retryMove(board, player, spot)
  }
}



const checkIfDraw = (board) => {
  let draw = false
  if (!board.includes("")) {
    draw = true
  }
  return draw
}

const checkIfWin = (board) => {
  let win = false
  winningCombos.forEach(combo => {
    if (board[combo[0] - 1] === "X") {
      if (board[combo[1] - 1] === "X") {
        if (board[combo[2] - 1] === "X") {
          // console.log('X wins!')
          win = true
        }
      }
    }
    if (board[combo[0] - 1] === "O") {
      if (board[combo[1] - 1] === "O") {
        if (board[combo[2] - 1] === "O") {
          // console.log('O wins!')
          win = true
        }
      }
    }
  })
  return win
}

const wannaPlayAgain = () => {
  readline.question(`wanna play again? (y/n)`, answer => {
    if (answer === "y") {
      console.log('starting new game...')
      const board = ["", "", "", "", "", "", "", "", ""]
      const playerX = true
      printBoard(board)
      const player = playerX ? "X" : "0"
      readline.question(`${player}'s turn! pick a spot...`, spot => {
        console.log(`${player} picked ${spot}!`);
        checkIfAvailable(spot - 1, board, player)
      });
    } else {
      console.log('goodbye!')
      readline.close();
    }
  })
}


const retryMove = (board, player, spot) => {
  printBoard(board)
  readline.question(`${spot + 1} is already taken... ${player}, pick a different spot!\n...`, spot => {
    console.log(`${player} picked ${spot}!`);
    checkIfAvailable(spot - 1, board, player)
  }
  )
}

const nextMove = (board, player) =>{
  printBoard(board)
  let newPlayer
  if (player === "X") {
    newPlayer = "O"
    let spot
    if (board[0] === "X" && board[4] !== "O") {
      spot = 5
    } else {
      spot = Math.floor(Math.random() * 9) + 1
    }
    checkIfAvailable(spot - 1, board, newPlayer)
  } else {
    newPlayer = "X"
    readline.question(`${newPlayer}'s turn!\npick a spot to place your ${newPlayer}...`, spot => {
      console.log(`${newPlayer} picked ${spot}!`);
      checkIfAvailable(spot - 1, board, newPlayer)
    }
    )
  }


}


