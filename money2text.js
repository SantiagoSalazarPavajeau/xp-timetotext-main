"use strict";

function money2text(time) {
  let [dollar, cents] = time.split(".");
  let firstNumber = firstNumberToText(dollar[0]);
  let unit = convertUnit(dollar);
  let centsConversion;

  if(cents >= 20){
    centsConversion = convertTwentyToNinety(cents) + " " + firstNumberToText(cents[1]) + " cents"
  }else if(cents > 1){
    centsConversion = convertTenTo19(cents) + "cents"
  }else{
      centsConversion = "dollars"
  }


  console.log(time)
  console.log(firstNumber, unit, centsConversion)
  if( dollar > 1000){
    return firstNumber + " " + unit + " dollars and " + centsConversion
  }else if( dollar >= 100){
    return firstNumber + " " + unit + " " + centsConversion
  }else if ( dollar < 99) {
    console.log(unit + " " + firstNumber + " " + centsConversion)
    return unit + " " + firstNumber + " " + "dollars and" + " " + centsConversion
  } 
}

function convertUnit(dollar) {
    switch (dollar.length) {
      case 2:
          if(dollar[0] >= 2){
              return convertTwentyToNinety(dollar)
          }else if (dollar[0] === 1){
              return convertTenTo19(dollar)
          }
      case 3:
        return "hundred and " + convertTwentyToNinety(dollar.substring(1, dollar.length)) + " " + firstNumberToText(dollar[2]);
      case 4:
        return "thousand";
      default:
        return dollar;
    }
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

function convertTenTo19(dollar){
    switch(dollar){
        case "10":
            return "ten"
        case "11":
            return "eleven"
        case "12":
            return "twelve"
        case "13":
            return "thirteen"
        case "14":
            return "fourteen"
        case "15":
            return "fifteen"
        case "16":
            return "sixteen"
        case "17":
            return "seventeen"
        case "18":
            return "eighteen"
        case "19":
            return "nineteen"
    }
}



module.exports = money2text;
