import { generateSudoku, generateSudokuWithLevel  } from './sudokuGenerator'

describe('sudokuGen', () => {
    it('shoud return true if generate a sudoku', () => {
        
        
        expect(generateSudoku()).toBeTruthy()
    })
    it("validate if the sudoku is generate with level",()=>{
        console.log(generateSudokuWithLevel(1));
        
        expect(generateSudokuWithLevel(1)).toBeTruthy()
    })
})
