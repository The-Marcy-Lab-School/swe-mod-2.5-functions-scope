const step1 = (temp) => {
  const timesNineFifths = temp * (9 / 5);
  return step2(timesNineFifths)
}

const step2 = (temp) => {
  return temp + 32;
}

const convertCelsiusToFahrenheit = (c) => {
  return step1(c);
}

console.log(convertCelsiusToFahrenheit(100)); // should be 212