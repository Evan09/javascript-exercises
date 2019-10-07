const fibonacci = function(num) {
    if (typeof num == "string") {
        num = parseInt(num, 10);
    }

    if (num < 0) {
        return "OOPS";
    }

    if (num < 2) {
        return num;
    }

    return fibonacci(num - 1) + fibonacci(num - 2);
}

module.exports = fibonacci
