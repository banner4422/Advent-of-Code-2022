import { readFileSync } from "fs";

interface Move {
    a: string;
    b: string;
}

const moves: { [key: string]: string } = {
    'X': 'A',
    'Y': 'B',
    'Z': 'C',
}

const ownMovesScore: { [key: string]: number } = {
    'A': 1,
    'B': 2,
    'C': 3,
}

const scores: { [key: string]: { [key: string]: number} } = {
    'A': {
        'B': 6,
        'C': 0,
    },
    'B': {
        'A': 0,
        'C': 6,
    },
    'C': {
        'A': 6,
        'B': 0,
    }
}

const outcomesPart2: { [key: string]: { [key: string]: string} } = {
    'A': {
        'A': 'C',
        'B': 'A',
        'C': 'B',
    },
    'C': {
        'A': 'B',
        'B': 'C',
        'C': 'A',
    },
}

const sum = (input: Move[]): number => {
    return input.reduce((sum, move) => {
        const pointsForSelection = ownMovesScore[move.b];
        const pointsForResult = move.a === move.b ? 3 : scores[move.a][move.b];

        return sum + pointsForSelection + pointsForResult;
    }, 0);
}

const inputPartOne: Move[] = readFileSync("src/day2/day2.txt", { encoding: "utf-8" }).trim().split("\n")
    .map(line => {
        return {
            a: line.split(' ')[0],
            b: moves[line.split(' ')[1]],
        }
});

const inputPartTwo: Move[] = inputPartOne.map(move => {
    return {
        ...move,
        b: (move.b === 'B') ? move.a : outcomesPart2[move.b][move.a]
    };
});

console.log('Part 1 equals ', sum(inputPartOne));
console.log('Part 2 equals ', sum(inputPartTwo));
