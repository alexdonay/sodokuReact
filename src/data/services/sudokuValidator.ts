export function isValueInRow(grid: number[][], value: number, row: number): boolean {
    return (grid[row].includes(value))

}
export function isValueInColumn(grid: number[][], value: number, col: number): boolean {
    for (let i = 0; i < 9; i++) {
        if (grid[i][col] === value) {
            return true;
        }
    }
    return false;
}

export function isValueInSquare(grid: number[][], value: number, row: number, col: number) {
    const square: number[] = [];
    const squareNumber = Math.floor(row / 3) * 3 + Math.floor(col / 3);
    for (let i = 0; i < 9; i++) {
        for (let y = 0; y < 9; y++) {
            if (squareNumber === Math.floor(i / 3) * 3 + Math.floor(y / 3)) {
                square.push(grid[i][y]);
            }
        }
    }
    return square.includes(value);
}

export function gridIsNotNull(grid: number[][]): boolean {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (grid[row][col] === 0) {
                return true;
            }
        }
    }
    return false;

}

export function isValidSudoku(grid: number[][]): boolean {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            let rowArray = getRowArray(grid, row);
            let columnArray = getColumnArray(grid, col);
            let gridArray = getSquareArray(grid, col, row);
            let valueTest = grid[row][col];
            if (HasDuplicates(rowArray) || HasDuplicates(columnArray) || valueTest == 0 || HasDuplicates(gridArray)) {
                return false;
            }
        }
    }
    return true;
}

export function HasDuplicates(arr: number[]): boolean {
   const uniqueSet = new Set(arr);
    return uniqueSet.size !== arr.length;
}

export function getRowArray(arr: number[][], row: number): number[] {
    return arr[row];
}

export function getColumnArray(arr: number[][], col: number): number[] {
    let column: number[] = [];
    for (let i = 0; i < 9; i++) {
        column.push(arr[i][col]);
    }
    return column;

}

export function getSquareArray(arr: number[][], col: number, row: number): number[] {
    let square: number[] = [];
    const squareNumber = Math.floor(row / 3) * 3 + Math.floor(col / 3);
    for (let i = 0; i < 9; i++) {
        for (let y = 0; y < 9; y++) {
            if (squareNumber === Math.floor(i / 3) * 3 + Math.floor(y / 3)) {
                square.push(arr[i][y]);
            }
        }
    }
    return square
}