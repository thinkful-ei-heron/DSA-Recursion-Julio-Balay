// function countSheep(num) {
//   if (num === 0) {
//     return console.log('All sheep jumped over the fence');
//   } else {
//     console.log(num + ': Another sheep jumps over the fence');
//     return countSheep(num - 1);
//   }
// }
// countSheep(3);

// function powerCalculator(num, exp) {
//   if (exp < 0) {
//     return 'exponent must be >= 0';
//   } else if (exp === 0) {
//     return 1;
//   } else {
//     return num * powerCalculator(num, exp - 1);
//   }
// }
// console.log(powerCalculator(10, 2));

// function reverseString(str) {
//   if (!str.length) {
//     return '';
//   }
//   const newChar = str.slice(str.length - 1);
//   return newChar + reverseString(str.slice(0, -1));
// }
// console.log(reverseString('hello'));

// function calcTriangularNum(input = 1, current = [], delta = 2) {
//   if (input < 0) {
//     return;
//   }
//   if (current.length === input) {
//     return;
//   }
//   let arr = [...arr, input + delta];
//   return;
// }
// console.log(calcTriangularNum(3));

// function triangle(n) {
//   if (n === 1) {
//     return 1;
//   }
//   return n + triangle(n - 1);
// }
// console.log(triangle(6));

// 4 + triangle(3) => 10 = triangle(4)
// 3 + triangle(2) => 6 = triangle(3)
// 2 + triangle(1) => 3 = triangle(2)

// function stringSplitter(str, seperator) {
//   let determinate = str.indexOf(seperator);
//   if (determinate === -1) {
//     return [str];
//   } else
//     return [
//       str.slice(0, determinate),
//       ...stringSplitter(str.slice(determinate + 1), seperator),
//     ];
// }
// console.log(stringSplitter('02/20/2020', '/'));

// function fibonacciCalculator(num) {
//   if (num <= 1) {
//     return 1;
//   }
//   return fibonacciCalculator(num - 1) + fibonacciCalculator(num - 2);
// }
// console.log(fibonacciCalculator(4));

// function factorial(num) {
//   if (num <= 1) {
//     return 1;
//   }
//   return num * factorial(num - 1);
// }

// console.log(factorial(5));

// let mySmallMaze = [
//   [' ', ' ', ' '],
//   [' ', '*', ' '],
//   [' ', ' ', 'e'],
// ];

// let maze = [
//   [' ', ' ', ' ', '*', ' ', ' ', ' '],
//   ['*', '*', ' ', '*', ' ', '*', ' '],
//   [' ', ' ', ' ', ' ', ' ', ' ', ' '],
//   [' ', '*', '*', '*', '*', '*', ' '],
//   [' ', ' ', ' ', ' ', ' ', ' ', 'e'],
// ];

// const findBlocks = function(maze) {
//   let rows = maze.length;
//   let columns = maze[0].length;
//   const blocks = [];
//   const path = ['0, 0'];
//   let directions = '';

//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < columns; j++) {
//       if (maze[i][j] === '*') blocks.push(`${i}, ${j}`);
//     }
//   }
//   console.log(blocks, 'blocks');
//   return findPath(rows, columns, blocks, path, directions, 0, 0);
// };
// const findPath = function(rows, columns, blocks, path, directions, row, col) {
//   let nextRow = row;
//   let nextCol = col;

//   //if at the end, stop
//   if (`${nextRow},${nextCol}` === `${rows - 1},${columns - 1}`) {
//     console.log(directions, 'directions');
//     return directions;
//   }

//   const blocksCheck = function(str) {
//     return blocks.includes(str);
//   };

//   const pathCheck = function(str) {
//     return path.includes(str);
//   };

//   // North
//   if (
//     blocksCheck(`${nextRow - 1},${nextCol}`) === false &&
//     pathCheck(`${nextRow - 1},${nextCol}`) === false &&
//     !(nextRow - 1 < 0)
//   ) {
//     directions += 'U';
//     nextRow = nextRow - 1;
//     path.push(`${nextRow},${nextCol}`);
//   } else if (
//     //South
//     blocksCheck(`${nextRow + 1},${nextCol}`) === false &&
//     pathCheck(`${nextRow + 1},${nextCol}`) === false &&
//     !(nextRow + 1 > rows - 1)
//   ) {
//     directions += 'D';
//     nextRow = nextRow + 1;
//     path.push(`${nextRow},${nextCol}`);
//   } else if (
//     //West
//     blocksCheck(`${nextRow}, ${nextCol - 1}`) === false &&
//     pathCheck(`${nextRow},${nextCol - 1}`) === false &&
//     !(nextCol - 1 < 0)
//   ) {
//     directions += 'L';
//     nextCol = nextCol - 1;
//     path.push(`${nextRow},${nextCol}`);
//   }
//   //East
//   else if (
//     blocksCheck(`${nextRow},${nextCol + 1}`) === false &&
//     pathCheck(`${nextRow},${nextCol + 1}`) === false &&
//     !(nextCol + 1 > columns)
//   ) {
//     directions += 'R';
//     nextCol = nextCol + 1;
//     path.push(`${nextRow},${nextCol}`);
//   }
//   return findPath(rows, columns, blocks, path, directions, nextRow, nextCol);
// };

// console.log(findBlocks(maze));

// function mazeNav(maze, position = [0, 0], moves = '') {
//   let currentPosition = maze[position[0]][position[1]];
//   console.log(currentPosition);
//   let limits = [maze[0].length, maze.length];
//   if (
//     position[0] < limits[1] ||
//     position[0] > limits[1] ||
//     position[1] < limits[0] ||
//     position[1] > limits[0] ||
//     currentPosition === '*'
//   )
//     return;
//   if (currentPosition === 'e') {
//     return moves;
//   } else {
//     maze.forEach((y, yIndex) => {
//       y.forEach((x, xIndex) => {
//         maze[x][y] = '*';
//         mazeNav(maze, [xIndex, yIndex], '');
//       });
//     });
//   }
// }

// console.log(mazeNav(mySmallMaze, [0, 0], ''));

// console.log(
//   mySmallMaze.map(arr =>
//     arr.map((thing, index) => {
//       if (thing === ' ') {
//         return index;
//       } else {
//         return 'x';
//       }
//     })
//   )
// );

// function anagramGenerator(str) {
//   if (str.length === 1) return [str];
//   let all = [];
//   for (let i = 0; i < str.length; i++) {
//     const currentLetter = str[i]; // e
//     const remainingLetters = str.slice(0, i) + str.slice(i + 1); // ast
//     const permsOfRemainingLetters = anagramGenerator(remainingLetters); //anagramGenerator('ast')
//     permsOfRemainingLetters.forEach(subPerm => {
//       all.push(currentLetter + subPerm);
//     });
//   }
//   return all;
// }
// console.log(anagramGenerator('east'));

// function binaryNumGen(num) {
//   if (num === 0) {
//     return;
//   }
// }

let org = {
  Zuckerberg: {
    Schroepfer: {
        Bosworth: [
            'Steve',
            'Kyle',
            'Andra'
        ],
        Zhao: [
            'Richie',
            'Sofia',
            'Jen'
        ]
    },
    Schrage: {
        VanDyck : [
            'Sabrina',
            'Michelle',
            'Josh'
          ],
        Swain: [
            'Blanch',
            'Tom',
            'Joe'
        ]
    },
    Sandberg: {
        Goler:[
            'Eddie',
            'Julie',
            'Annie'
        ],
       Hernandez : [
            'Rowi',
            'Inga',
            'Morgan'
       ],
       Moissinac : [
            'Amy',
            'Chuck',
            'Vinni'
       ],
       Kelley: [
            'Eric',
            'Ana',
            'Wes'
       ]
    }
  }
}

function orgChart()
