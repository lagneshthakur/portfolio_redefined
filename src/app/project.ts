export class Project {
    name: string;
    image: string;
    year: number;
    description: string;

  }
export const PROJECTS = [
    {
    'name' : 'Killer Chess',
    'image': './assets/images/projects/killerchess.jpg',
    'year' : 2018,
    'shortDescription': 'A logical chess game built on TypeScript',
    'description': `Killer Chess is a chess game in which all the rules are normal except the players 
    have only Bishop and 1 king as pieces. (Bishop is Camel or Oot)
    
    Each player can have any number of bishops but only 1 king. Bishop cannot jump over other pieces.
    
    Definition of check:
    When the king of a pLayer can be token by a piece of the opponent, one says that the 
    king is in check. For instance, the black pLayer moves his bishop to a position such 
    that it attacks the white king, we say that the black bishop gives check.

    Definition of checkmate:
    When a player is in check, and he cannot make a move such that after the move, the king is not in check, then he is mated.
    The player that is mated lost the game, and the player that mated him won the game.
    `,
    'link': 'https://www.killerchess.lagneshthakur.com',
    'buttonText': 'Kill it!'
    },
    {
    'name' : 'React Calculator',
    'image': './assets/images/projects/reactcalculator.jpg',
    'year' : 2018,
    'shortDescription': 'Calculator to learn basics of ReactJS',
    'description': `This application covers the basics of ReactJS, in the Calculator various concepts of ReactJS are implemented.
    There are reusable components, stateless components, components that take inputs and have a parent-child relationship.
    
    The component life-cycle is implemented for the buttons, one can take reference from it's code to get started with ReactJS.`,
    'link': 'https://www.reactcalc.lagneshthakur.com',
    'buttonText': 'Calculate.'
    },
    {
    'name' : 'Game of Life',
    'image': './assets/images/projects/gameoflife.png',
    'year' : 2016,
    'shortDescription': 'Let the rules decide the Game of Life',
    'description': `The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead, (or populated and unpopulated, respectively).
    Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. 
    At each step in time, the following transitions occur:
        Any live cell with fewer than two live neighbors dies, as if by under population.
        Any live cell with two or three live neighbors lives on to the next generation.
        Any live cell with more than three live neighbors dies, as if by overpopulation.
        Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
    The initial pattern constitutes the seed of the system. 
    The first generation is created by applying the above rules simultaneously to every cell in the seed; births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick.
    Each generation is a pure function of the preceding one. The rules continue to be applied repeatedly to create further generations.`,
    'link': 'https://www.gameoflife.lagneshthakur.com',
    'buttonText': 'Begin!'
    }
];

/*
{
    'name' : 'Killer Chess',
    'image': './assets/images/projects/killerchess.jpg',
    'year' : 2018,
    'description': 'Project description placeholder'
    },
    {
    'name' : 'React Calculator',
    'image': './assets/images/projects/reactcalculator.jpg',
    'year' : 2018,
    'description': 'Project description placeholder'
    },
    {
    'name' : 'Game of Life',
    'image': './assets/images/projects/gameoflife.png',
    'year' : 2016,
    'description': 'Project description placeholder'
    }
*/
