
function encryptText(text) {
    var numberOfWords = text.split(" ");
    var outputArray = new Array(numberOfWords.length - 1);
    for (let i = 0; i < numberOfWords.length; i++) {
        var wordSize = numberOfWords[i].length;
        if (wordSize % 3 == 0) {
            outputArray[i] = 0;
        }
        else {
            outputArray[i] = 1;
        }
    }
    let result = "";
    for (let i = 0; i < numberOfWords.length; i++)
        result += outputArray[i];
    return result;
}

console.log( encryptText("How are you?") ); 
console.log( encryptText("The quick brown fox jumps over the lazy dog") ); 