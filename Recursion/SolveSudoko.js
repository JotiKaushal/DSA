// Approach
// Why It Works:
// The algorithm systematically tries all possible numbers in each empty cell, ensuring the board remains valid. By backtracking, it can explore all potential solutions, guaranteeing it will find one if it exists. The result is achieved by expanding and contracting the search window (each cell) until the board is solved.

// isValid:

// Checks if placing value in board[row][column] is valid.
// Ensures value is not already present in the current row, column, or 3x3 sub-grid.
// dfs:

// Recursively attempts to place numbers 1-9 in each empty cell.
// If a valid number is found, it moves to the next cell.
// If the board is solved (row === 9), it returns true.
// If an invalid state is reached, it backtracks by resetting the cell to '.'.
// Complexity
// Time complexity:
// O(n^2), where n is the board length

// Space complexity:
// O(n^2) because of the recursion stack



var solveSudoku = function (board) {
  dfs(board, 0, 0)
  return board;
};

let isValid = (board, row, column, value) => {
  let n = board.length;

  if (board[row].includes(value)) return false;

  for (let i = 0; i < n; i++) {
    if (board[i][column] === value) return false;
  }

  let [top, left] = [Math.floor(row / 3) * 3, Math.floor(column / 3) * 3];

  for (let i = top; i < top + 3; i++) {
    for (let j = left; j < left + 3; j++) {
      if (board[i][j] === value) return false;
    }
  }

  return true;
}

let dfs = (board, row, column) => {
  if (row === 9) return true;
  if (column === 9) return dfs(board, row + 1, 0);
  if (board[row][column] !== '.') return dfs(board, row, column + 1);

  for (let i = 1; i < 10; i++) {
    if (isValid(board, row, column, i.toString())) {
      board[row][column] = i.toString();
      if (dfs(board, row, column + 1)) return true;
      board[row][column] = '.';
    }
  }

  return false;
}

console.log(solveSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]));
