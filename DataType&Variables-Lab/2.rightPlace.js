function rightPlace(word, symbol, word2) {

    let newWord = word.replace('_', symbol);
    
    if(newWord == word2) {
        console.log("Matched")
    } else {
        console.log("Not Matched")
    }

}

rightPlace('Str_ng', 'I', 'Strong');