"use strict";

function time2text(time) {
  let [hourString, minutesString] = time.split(":");

  let hour = parseInt(hourString);
//   let minutes = parseInt(minutesString);

  let hourConvert = hourConversionHelper(hour);
  let minuteConvert = minuteConversionHelper(minutesString);

  if (hourString === "00" && minutesString === "00") {
    console.log("midnight");
    return "midnight";
  } else if (hour === 12 && minutesString === "00") {
    console.log("noon");
    return "noon";
  } else if (hour < 12) {
    console.log(hourConvert, minuteConvert, "in the morning");
    return `${hourConvert}, ${minuteConvert} in the morning`;
  } else if (hour < 18) {
    console.log(hourConvert, minuteConvert, "in the afternoon");
    return `${hourConvert}, ${minuteConvert} in the afternoon`;
  } else if (hour >= 18) {
    console.log(hourConvert, minuteConvert, "in the evening");
    return `${hourConvert}, ${minuteConvert} in the evening`;
  }
}

function minuteConversionHelper(minutes){
    switch(minutes){
        case "01":
            return "oh one"
        case "02":
            return "oh two"
        case "03":
            return "oh three"
        case "04":
            return "oh four"
        case "05":
            return "oh five"
        case "06":
            return "oh six"
        case "07":
            return "oh seven"
        case "08":
            return "oh eight"
        case "09":
            return "oh nine"
        case "10":
            return "ten"
        case "11":
            return "eleven"
        case "12":
            return "twelve";
        case "13":
            return "one";
        case "14":
            return "two";
        case "15":
            return "three";
        case "16":
            return "four";
        case "17":
            return "five";
        case "18":
            return "six";
        case "19":
            return "seven";
    }
}

function hourConversionHelper(hour) {
  switch (hour) {
    case 1:
      return "one";
    case 2:
      return "two";
    case 3:
      return "three";
    case 4:
      return "four";
    case 5:
      return "five";
    case 6:
      return "six";
    case 7:
      return "seven";
    case 8:
      return "eight";
    case 9:
      return "nine";
    case 10:
      return "ten";
    case 11:
      return "eleven";
    case 12:
      return "twelve";
    case 13:
      return "one";
    case 14:
      return "two";
    case 15:
      return "three";
    case 16:
      return "four";
    case 17:
      return "five";
    case 18:
      return "six";
    case 19:
      return "seven";
    case 20:
      return "eight";
    case 21:
      return "nine";
    case 22:
      return "ten";
    case 23:
      return "eleven";
    case 24:
      return "twelve";
    default:
      return hour;
  }
}

module.exports = time2text;
