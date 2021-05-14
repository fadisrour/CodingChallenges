const findCommonLettersInWords = (words) => {
    var CommonLetters = new Array();
    for (let i = 0; i < words[0].length; i++) {
        if (isCommon(words[0].charAt(i), words)) {
            CommonLetters.push(words[0].charAt(i));
        }
    }
    CommonLetters = [...new Set(CommonLetters)];
    return CommonLetters;
}

const isCommon = (letter, words) => {
    let counter = 0;
    for (let i = 1; i < words.length; i++) {
        if (findCommon(letter, words[i])) {
            counter++;
        }
    }
    if (counter == words.length - 1)
        return true
    return false
}

const findCommon = (letter, Word) => {
    for (let i = 0; i < Word.length; i++) {
        if (letter == Word.charAt(i)) {
            return true;
        }
    }
    return false;
}

console.log(findCommonLettersInWords(["Saleem", "Soda", "Khaled"])); // output: ['a']
console.log(findCommonLettersInWords(["Pepsi", "Kitkat", "Oreo"])); // output: []
console.log(findCommonLettersInWords(["Saleem", "Sodae", "Khalede"]));
console.log(findCommonLettersInWords(["Saleem", "Sodae", "Khalede", "salma"]));