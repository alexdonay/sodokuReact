export function transposeMatrix(matrix: number[][]): number[][] {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    const transposedMatrix: number[][] = [];
    for (let col = 0; col < numCols; col++) {
        transposedMatrix[col] = []; // Inicialize cada coluna da matriz transposta
        for (let row = 0; row < numRows; row++) {
            transposedMatrix[col][row] = matrix[row][col];
        }
    }
    return transposedMatrix;
}
export function validateUnicValueLine(array: number[]): boolean {
    let collumLenght = array.length;
    for (let collum = 0; collum < collumLenght; collum++) {
        let valueSearch = array[collum];
        for (let i = collum + 1; i < collumLenght; i++) {
            if (valueSearch === array[i]) return false
        }
    }
    return true
}
function genRandomNumber(numbers: number[]): number {
    // Clone o array para não modificar o original
    const clonedList = [...numbers];

    while (clonedList.length > 0) {
        const randomIndex = Math.floor(Math.random() * clonedList.length);
        const randomNumber = clonedList[randomIndex];
        return randomNumber;
    }

    // Se o array estiver vazio, retorne 0 ou outra condição apropriada
    return 0; // Isso ocorrerá apenas se o array `numbers` estiver vazio
}
function validateColumn(column: number[]): boolean {
    return validateUnicValueLine(column)

}
function validateRow(array: number[][], collum: number): boolean {
    let arrayTrampose: number[][] = transposeMatrix(array);
    return validateUnicValueLine(arrayTrampose[collum])
}
function getQuadrant(array: number[][], row: number, collum: number): number[] {
    let quadrant: number[] = [];
    let startRow = row - row % 3;
    let startCollum = collum - collum % 3;
    for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCollum; j < startCollum + 3; j++) {
            quadrant.push(array[i][j])
        }
    }
    return quadrant
}
function validateQuadrant(array: number[][], row: number, collum: number): boolean {
    return validateUnicValueLine(getQuadrant(array, row, collum))
}
export function genValidSudokuBoard() {
    let board: number[][] = [];
    for (let i = 0; i < 9; i++) {
        board[i] = [];
        for (let j = 0; j < 9; j++) {
            board[i][j] = 0;
        }
    }
    let validNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < 9; i++) {
        for (let y = 0; y < 9; y++) {
            const randomNumber = genRandomNumber(validNumbers);
            let index = validNumbers.indexOf(randomNumber);
            validNumbers.splice
            board[i][y] = randomNumber;
            
        }
        validNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
    console.log(board);
    
    return board;
}