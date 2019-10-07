const removeFromArray = function(...args) {
    const arr = args[0];
    const newArr = [];

    arr.forEach((item) => {
        if (!args.includes(item)) {
            newArr.push(item);
        }
    });
    return newArr;
    
}

module.exports = removeFromArray
