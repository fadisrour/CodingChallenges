const reverse = (words) => {
    var reversed = new Array();

    for (let j = words.length - 1; j >= 0; j--) {
        var temporary = new Array();

        while (words.charAt(j) != ' ' && j >= 0) {
            temporary.unshift(words.charAt(j))
            j--
        }

        ArrayReserved(reversed, temporary);

    }

    return reversedWord(reversed);
}


const ArrayReserved = (reversed, temporary) => {
    for (let i = 0; i < temporary.length; i++) {
        reversed.push(temporary[i]);
    }
    reversed.push(' ')
}

const reversedWord = (reversed) => {
    let m="";
    for (let i = 0; i < reversed.length; i++) {
        m+=reversed[i];
    }
    return m;
}


console.log(reverse("Hello Fadi mohamd Srour")); // output: 7