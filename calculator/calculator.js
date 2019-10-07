function add (a, b) {
	return a + b;
	
}

function subtract (a, b) {
	return a - b
}

function sum (arr) {
	let sum = 0;
	
	arr.forEach((item) => {
		sum += item;
	});
	return sum;

}

function multiply (arr) {
	let sum = arr.reduce((total, nextVal) => total * nextVal);
	return arr.length ? sum : 0;
	
}

function power(num, pwr) {
	return Math.pow(num, pwr);
}

function factorial(num) {
	let result = num;

	if (num < 0) {
		return -1;
	}
	if (num == 0 || num == 1) {
		return 1;
	}

	while (num > 1) {
		num--;
		result *= num;
	}
	return result;

}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}