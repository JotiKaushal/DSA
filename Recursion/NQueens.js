// // const solvNQueens = (n) => {
// //   const board = Array(n)
// //     .fill(0)
// //     .map((_) => Array(n).fill("."));

// //   function put(row) {
// //     if (row === 4) return true;

// //     for (let col = 0; col < n; col++) {
// //       if (isSafe(row, col)) {
// //         board[row][col] = "Q";
// //         if (put(row + 1)) return true;
// //         board[row][col] = ".";
// //       }
// //     }
// //     return false;
// //   }
  
// // function isSafe(row, col){
// //     for(let i = row-1;i>=0;i--){//check all previous rows
// //         if(board[i][col]==='Q') return false;
// //     }

// //     for(let i = row-1, j=col-1;i>=0 && j>=0; i--, j--){
// //         if(board[i][j]==='Q') return false;
// //     }

// //     for(let i = row-1, j=col+1;i>=0 && j<board.length;i--,j++){
// //         if(board[i][j]==='Q') return false;
// //     }
// //     return true;
// // }

// //   put(0);
// //   return board;
// // };


// // console.log(solvNQueens(4));

// var solveNQueens = function(n) {
//     let res = [];
//     let board = Array(n)
//     .fill(0)
//     .map((_) => Array(n).fill("."));

//     function nQueen(board, row){
//         if(row===board.length){
//             res.push([]);
//             for(let i = 0;i<board.length;i++){
//                 res[res.length-1].push(board[i].join(''));
//             }
//             return;
//         }

//         for(let i = 0;i<board.length;i++){
//             if(isSafe(board, row, i)){
//                 board[row][i] = 'Q';
//                 nQueen(board, row+1);
//                 board[row][i] = '.';
//             }
//         }
//     }

//     function isSafe(board, row, col){
//         for(let i = row-1;i>=0;i--){
//             if(board[i][col]==='Q') return false;
//         }

//         for(let i = row-1, j=col-1;i>=0 && j>=0; i--, j--){
//             if(board[i][j]==='Q') return false;
//         }

//         for(let i = row-1, j=col+1;i>=0 && j<board.length;i--,j++){
//             if(board[i][j]==='Q') return false;
//         }
//         return true;
//     }

//     nQueen(board, 0);
//     return res;
// };

// console.log(solveNQueens(4));

//https://www.youtube.com/watch?v=OYQMjTCSgDM


const solvenQueens =(n)=>{
    if(n === 1 ) return [['Q']]

    let col = new Set();
    let posDia = new Set();
    let negDia = new Set();

    let res = [];

    let board = Array(n).fill(0).map(_ => Array(n).fill('.'));

    const isValid = (r,c) => !(col.has(c) || negDia.has(r-c) || posDia.has(r+c));


    const addQueen = (r, c) => {
        col.add(c);
        posDia.add(r+c);
        negDia.add(r-c);
        board[r][c] = 'Q';
    }

    const removeQueen = (r,c) => {
        col.delete(c);
        posDia.delete(r+c);
        negDia.delete(r-c);
        board[r][c] = '.';
    }

    //recursive backtracking fun

    function recurse(row){
        if(row === n) res.push([...board].map(row => row.join(",")))

            for(let col = 0; col < n; col++){
                if(isValid(row, col)){
                    addQueen(row, col);

                    //recurse
                    recurse(row+1);

                    //backtracking
                    removeQueen(row, col);
                }
            }
    }

    recurse(0);

    return res;
}

//tc: o(n!)
//sc: o(n^2)