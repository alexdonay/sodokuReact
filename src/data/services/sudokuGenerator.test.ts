import { generateSudoku,  } from './sudokuGenerator'

describe('sudokuGen', () => {
    it('shoud return true if generate a sudoku', () => {
        console.log(generateSudoku());
        
        expect(generateSudoku()).toBeTruthy()
    })
    it("validate if the sudoku is generate with level",()=>{
        
        
    })
})
