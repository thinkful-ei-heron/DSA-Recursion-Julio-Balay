//#1
function countSheep(num) {
  if (num === 0) {
    return console.log('All sheep jumped over the fence');
  } else {
    console.log(num + ': Another sheep jumps over the fence');
    return countSheep(num - 1);
  }
}
countSheep(3);
// #3
function powerCalculator(num, exp) {
  if (exp < 0) {
    return 'exponent must be >= 0';
  } else if (exp === 0) {
    return 1;
  } else {
    return num * powerCalculator(num, exp - 1);
  }
}
console.log(powerCalculator(10, 2));
// #3
function reverseString(str) {
  if (!str.length) {
    return '';
  }
  const newChar = str.slice(str.length - 1);
  return newChar + reverseString(str.slice(0, -1));
}
console.log(reverseString('hello'));
// #4
function triangle(n) {
  if (n === 1) {
    return 1;
  }
  return n + triangle(n - 1);
}
console.log(triangle(6));
// #5
function stringSplitter(str, seperator) {
  let determinate = str.indexOf(seperator);
  if (determinate === -1) {
    return [str];
  } else
    return [
      str.slice(0, determinate),
      ...stringSplitter(str.slice(determinate + 1), seperator),
    ];
}
console.log(stringSplitter('02/20/2020', '/'));
// #5
function fibonacciCalculator(num) {
  if (num <= 1) {
    return 1;
  }
  return fibonacciCalculator(num - 1) + fibonacciCalculator(num - 2);
}
console.log(fibonacciCalculator(4));
// #6
function factorial(num) {
  if (num <= 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

console.log(factorial(5));

let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e'],
];

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e'],
];
// #7
function mazeNav(maze, position = [0, 0], moves = '') {
  let currentPosition = maze[position[0]][position[1]];
  console.log(currentPosition);
  let limits = [maze[0].length, maze.length];
  if (
    position[0] < limits[1] ||
    position[0] > limits[1] ||
    position[1] < limits[0] ||
    position[1] > limits[0] ||
    currentPosition === '*'
  )
    return;
  if (currentPosition === 'e') {
    return moves;
  } else {
    maze.forEach((y, yIndex) => {
      y.forEach((x, xIndex) => {
        maze[x][y] = '*';
        mazeNav(maze, [xIndex, yIndex], '');
      });
    });
  }
}
// #8
function anagramGenerator(str) {
  if (str.length === 1) return [str];
  let all = [];
  for (let i = 0; i < str.length; i++) {
    const currentLetter = str[i];
    const remainingLetters = str.slice(0, i) + str.slice(i + 1);
    const permsOfRemainingLetters = anagramGenerator(remainingLetters);
    permsOfRemainingLetters.forEach(subPerm => {
      all.push(currentLetter + subPerm);
    });
  }
  return all;
}
console.log(anagramGenerator('east'));

let chart = {
  Zuckerberg: {
    Schroepfer: {
      Bosworth: { Steve: {}, Kyle: {}, Andra: {} },
      Zhao: { Richie: {}, Sofia: {}, Jen: {} },
    },
    Schrage: {
      VanDyck: { Sabrina: {}, Michelle: {}, Josh: {} },
      Swain: { Blanch: {}, Tom: {}, Joe: {} },
    },
    Sandberg: {
      Goler: { Eddie: {}, Julie: {}, Annie: {} },
      Hernandez: { Rowi: {}, Inga: {}, Morgan: {} },
      Moissinac: { Amy: {}, Chuck: {}, Vinni: {} },
      Kelley: { Eric: {}, Ana: {}, Wes: {} },
    },
  },
};
// #9
function orgChart(chart, depth = 0) {
  const indent = ' '.repeat(depth * 2);
  const keys = Object.keys(chart);
  keys.forEach(key => {
    console.log(indent + key);
    orgChart(chart[key], depth + 1);
  });
}

console.log(orgChart(chart));
