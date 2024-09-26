export const isValidNumber = number =>
  number &&
  (number.slice(0, 6) === "+37529" ||
    number.slice(0, 6) === "+37544" ||
    number.slice(0, 6) === "+37533" ||
    number.slice(0, 6) === "+37525") &&
  number.slice(6) >= 1000000;
