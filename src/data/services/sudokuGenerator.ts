import { isValueInRow, isValueInColumn, isValueInSquare, gridIsNotNull } from './sudokuValidator'
function shuffle(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
function createGrid(): number[][] {
    const grid: number[][] = [];
    for (let i = 0; i < 9; i++) {
        const line: number[] = [];
        for (let y = 0; y < 9; y++) {
            line.push(0);
        }
        grid.push(line);
    }
    return grid;
}
export function fillGrid(grid: number[][]): boolean {
    for (let i = 0; i < 81; i++) {
        const row = Math.floor(i / 9);
        const col = i % 9;
        if (grid[row][col] === 0) {
            const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            shuffle(numberList);
            let solutionFound = false; // Adicione uma variável para controlar se uma solução foi encontrada
            for (const value of numberList) {
                if (!isValueInRow(grid, value, row) && !isValueInColumn(grid, value, col) && !isValueInSquare(grid, value, row, col)) {
                    grid[row][col] = value;
                    if (!gridIsNotNull(grid) || fillGrid(grid)) {
                        solutionFound = true;
                        break;
                    }
                }
            }
            if (!solutionFound) {
                grid[row][col] = 0;
                return false;
            }
        }
    }
    return true;
}
export function generateSudoku(): number[][] {
    const grid = createGrid();
    fillGrid(grid);
    return grid;
}
export function generateSudokuWithLevel(level: number): number[][] {
    if (level < 1 || level > 81) {
        throw new Error('O nível deve estar entre 1 e 81');
    }

    const grid = generateSudoku();

    const positionsToRemove: number[][] = [];

    while (positionsToRemove.length < level) {
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);
        const position = [row, col];

        if (!positionsToRemove.some(([r, c]) => r === row && c === col)) {
            positionsToRemove.push(position);
            grid[row][col] = 0;
        }
    }

    return grid;
}