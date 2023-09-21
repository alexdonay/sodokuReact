import { isValueInRow, isValueInColumn, isValueInSquare, gridIsNotNull, isValidSudoku, HasDuplicates } from './sudokuValidator'

let validSudoku: number[][] = [[2, 9, 6, 4, 5, 8, 7, 1, 3],
[4, 3, 5, 6, 7, 1, 8, 2, 9],
[1, 7, 8, 9, 3, 2, 6, 5, 4],
[6, 8, 2, 1, 9, 4, 3, 7, 5],
[5, 1, 9, 3, 6, 7, 4, 8, 2],
[7, 4, 3, 8, 2, 5, 1, 9, 6],
[8, 6, 1, 5, 4, 9, 2, 3, 7],
[9, 2, 4, 7, 8, 3, 5, 6, 1],
[3, 5, 7, 2, 1, 6, 9, 4, 8]]
let notValidSudoku: number[][] = [[13, 9, 6, 4, 5, 8, 7, 16, 3],
[4, 3, 5, 6, 7, 8, 8, 2, 9],
[8, 7, 8, 9, 3, 2, 6, 5, 4],
[6, 8, 2, 16, 9, 4, 3, 7, 5],
[5, 16, 9, 3, 6, 7, 4, 8, 2],
[7, 4, 3, 8, 2, 5, 16, 9, 6],
[8, 6, 16, 5, 4, 9, 2, 3, 7],
[9, 2, 4, 7, 8, 3, 5, 6, 16],
[3, 5, 7, 2, 16, 6, 9, 4, 8]]
let inCompletedSudoku: number[][] = [[0, 0, 0, 0, 5, 8, 7, 16, 3],
[4, 3, 5, 6, 7, 8, 8, 2, 9],
[8, 7, 8, 9, 3, 2, 6, 5, 4],
[6, 8, 2, 16, 9, 4, 3, 7, 5],
[5, 16, 9, 3, 6, 7, 4, 8, 2],
[7, 4, 3, 8, 2, 5, 16, 9, 6],
[8, 6, 16, 5, 4, 9, 2, 3, 7],
[9, 2, 4, 7, 8, 3, 5, 6, 16],
[3, 5, 7, 2, 16, 6, 9, 4, 8]]

describe('Sudoku validator', () => {
    it('Should return true if the number exist in a row of table', () => {
        expect(isValueInRow(validSudoku, 1, 0)).toBe(true)
        expect(isValueInRow(notValidSudoku, 1, 0)).toBe(false)
    })
    it('Should return true if the number exist in a col of table', () => {
        expect(isValueInColumn(validSudoku, 1, 0)).toBe(true)
        expect(isValueInColumn(notValidSudoku, 1, 0)).toBe(false)
    })
    it('Should return true if the number exist in a box of table', () => {
        expect(isValueInSquare(validSudoku, 1, 0, 0)).toBe(true)
        expect(isValueInSquare(notValidSudoku, 1, 0, 0)).toBe(false)
    })
    
    it('Should return true if exist numbers 0 in grid',()=>{
        expect(gridIsNotNull(inCompletedSudoku)).toBe(true)
        expect(gridIsNotNull(validSudoku)).toBe(false)
    })
     it('should return true if sudoku is valid', () => {
        expect(isValidSudoku(validSudoku)).toBe(true)
        expect(isValidSudoku(notValidSudoku)).toBe(false)
    })
    it('should return true if in array have duplicates numbers', () => {
        expect(HasDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(false)
        expect(HasDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 1])).toBe(true)
    })
})