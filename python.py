from random import shuffle

grid = []
for i in range(9):
    line = []
    for y in range(9):
        line.append(0)
    grid.append(line)

def drawGrid(grid):
    for i in range(len(grid)):
        print(grid[i])

def checkGrid(grid):
    for row in range(0, 9):
        for col in range(0, 9):
            if grid[row][col] == 0:
                return False
    return True       

def checkCol(grid, value, col):
    for i in range(9):
        if grid[i][col] == value:
            return False
    return True

def checkSquare(grid, row, col, value):
    square1 = []
    squareNumber = (row//3)*3 + col//3
    for i in range(9):
        for y in range(9):
            if squareNumber == (i//3)*3 + y//3:
                square1.append(grid[i][y])
    return not value in (square1)

def fillGrid(grid):
    for i in range(81):
        row = i // 9
        col = i % 9
        if grid[row][col] == 0:
            numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            shuffle(numberList)
            for value in numberList:
                if (not (value in grid[row])) and checkCol(grid, value, col) and checkSquare(grid, row, col, value):
                    grid[row][col] = value
                    if checkGrid(grid) or fillGrid(grid):
                        return True
            break
    grid[row][col] = 0

fillGrid(grid)
drawGrid(grid)