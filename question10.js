const path = (grid) => {

    if (isNegative(grid)) {
        return "must filled with non-negative numbers"
    }

    for (let i = 0; i < grid.length - 1; i++) {
        grid[i + 1][0] = grid[i][0] + grid[i + 1][0];
    }

    for (let j = 0; j < grid[0].length - 1; j++) {
        grid[0][j + 1] = grid[0][j] + grid[0][j + 1];
    }

    findMinimum(grid);

    return grid[grid.length - 1][grid[0].length - 1];
}


const findMinimum = grid => {
    for (let i = 1; i < grid.length; i++) {
        for (let j = 1; j < grid[0].length; j++) {
            grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
        }
    }
}

const isNegative = grid => {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] < 0) {
                return true
            }
        }
    }
    return false
}

console.log(path([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));
console.log(path([[1, 2, 3], [4, 5, 6]]));
console.log(path([[1, 3, 1], [1, -5, 1], [4, 2, 1]]));