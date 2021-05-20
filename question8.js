const autoComplete = (userInput, usernames) => {
    usernames.sort();
    var common = new Array();
    for (let i = 0; i < usernames.length; i++) {
        for (let j = 0; j < usernames[i].length; j++) {
            if (userInput.charAt(0).toLowerCase() == usernames[i].charAt(j).toLowerCase()) {
                if (isCommon(userInput, usernames[i], 1, j + 1)) {
                    common.push(usernames[i]);
                    break;
                }
            }

        }
    }
    return common;
}

const isCommon = (userInput, usernames, inputIndex, usernameIndex) => {
    var counter = 0;
    for (let i = 1; i < userInput.length; i++) {
        if (userInput.charAt(i).toLowerCase() == usernames.charAt(usernameIndex).toLowerCase()) {
            counter++;
            usernameIndex++
        }
    }

    if (counter == (userInput.length - 1)) {
        return true;
    }
    return false;
}

console.log(autoComplete("sal", ["Saleem", "Salim", "Salih", "fadi", "hassan", "hadi", "zhadi", "shadi"]));