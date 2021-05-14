const averageBooks = (numberOfBoxes, stages) => {
    var books = Array.apply(null, Array(numberOfBoxes)).map(Number.prototype.valueOf, 0);
    let sumOfBook = 0;
    for (let i = 0; i < stages.length; i++) {
        AddToBox(books, stages[i][0], stages[i][1], stages[i][2]);
        sumOfBook += sumOfBooks((stages[i][1] - stages[i][0] + 1), stages[i][2]);
    }
    return sumOfBook / numberOfBoxes;
}

const AddToBox = (books, indexStart, indexFinish, numberOfBook) => {
    let s = indexStart - 1;
    let f = indexFinish - 1;
    for (let i = indexStart - 1; i <= indexFinish - 1; i++) {
        books[i] += numberOfBook;
    }
    return
}

const sumOfBooks = (numberOfBoxes, numberOfBooks) => {
    return numberOfBooks * numberOfBoxes;
}

console.log(averageBooks(3, [[1, 2, 3], [1, 3, 7]])); // output: 7