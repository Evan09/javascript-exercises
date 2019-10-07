const ftoc = function(fahrenheit) {
  let celcius = Math.round((fahrenheit - 32) * (5/9) * 10) / 10;
  return celcius;

}

const ctof = function(celcius) {
  let fahrenheit = Math.round(((celcius * 9/5) + 32) * 10) / 10;
  return fahrenheit;

}

module.exports = {
  ftoc,
  ctof
}
