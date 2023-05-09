function stringLength(string){
    if(string.length < 1){
        throw new Error('The string has no characters');
    }else if (string.length > 10){
        throw new Error('The string has a lot of characters boss');
    }
    return string.length;
}

const reversedString =(string) => {
    return string.split('').reverse().join('')
}

module.exports = stringLength, reversedString;