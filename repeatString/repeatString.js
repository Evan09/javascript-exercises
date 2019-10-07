const repeatString = function(string, numberOfRepeats) {
    repeatedString = "";

    if (numberOfRepeats == 0) {
        return repeatedString;
    } else if (numberOfRepeats < 0) {
        return "ERROR";
    }

    return repeatedString = string.repeat(numberOfRepeats);
}

module.exports = repeatString
