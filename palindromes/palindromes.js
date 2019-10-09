const palindromes = function(string) {
    Astring = string.toLowerCase().replace(/[^A-Za-z]/g, "");
    return (Astring.split("").reverse().join() == Astring)
}

module.exports = palindromes
