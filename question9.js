var keyRows = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
];

const canTyped = (words) => {
    let result = new Array();
    for (let i = 0; i < words.length; i++) {
        if (inOneRow(words[i].toLowerCase())) {
            result.push(words[i]);
        }
    }
    return result;
}

const inOneRow = (word) => {
    if (!inFirstRow(word) && !inSecondRow(word) && !inThirdRow(word)) {
        return false;
    }
    return true;

}

const inFirstRow = (word) => {
    for (let i = 0; i < word.length; i++) {
        if (!keyRows[0].includes(word.charAt(i))) {
            return false;
        }
    }
    return true;
}

const inSecondRow = (word) => {
    for (let i = 0; i < word.length; i++) {
        if (!keyRows[1].includes(word.charAt(i))) {
            return false;
        }
    }
    return true;
}

const inThirdRow = (word) => {
    for (let i = 0; i < word.length; i++) {
        if (!keyRows[2].includes(word.charAt(i))) {
            return false;
        }
    }
    return true;
}

console.log(canTyped(["Fadi", "Top", " ", "mvc", "Hello", "Alaska", "Dad", "Peace", "bvcnv", "fshask", "hgaha"]));

