"use strict";

function money2text(time) {
  let [dollar, cents] = time.split(".");
  let firstNumber = firstNumberToText(dollar[0]);
  let unit = convertUnit(dollar);

  
}

function firstNumberToText(number) {
  switch (number) {
    case "1":
      return "one";
    case "2":
      return "two";
    case "3":
      return "three";
    case "4":
      return "four";
    case "5":
      return "five";
    case "6":
      return "six";
    case "7":
      return "seven";
    case "8":
      return "eight";
    case "9":
      return "nine";
  }
}

function convertTwentyToNinety(dollar) {
    if (dollar[0] === "2") {
        return "twenty"
    } else if (dollar[0] === "3") {
        return "thirty"
    } else if (dollar[0] === "4") {
        return "fourty"
    } else if (dollar[0] === "5") {
        return "fifty"
    } else if (dollar[0] === "6") {
        return "sixty"
    } else if (dollar[0] === "7") {
        return "seventy"
    } else if (dollar[0] === "8") {
        return "eighty"
    } else if (dollar[0] === "9") {
        return "ninety"
    }
}

function convertUnit(dollar) {
  switch (dollar.length) {
    case 2:
        return convertTwentyToNinety(dollar)
    case 3:
      return "hundred";
    case 4:
      return "thousand";
    default:
      return dollar;
  }
}

module.exports = money2text;
