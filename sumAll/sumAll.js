const sumAll = function(min, max) {
    let sum = 0;
    let temp = 0;

    if (typeof min != "number" || typeof max != "number") {
        return "ERROR";
    }

    if (min < 0 || max < 0) {
        return "ERROR";
    }

    if (min > max) {  
        temp = min;    
        min = max;     
        max = temp;    
    }

    for (;min < max + 1; ++min) {
        sum += min;
    }

    return sum;
}

module.exports = sumAll
