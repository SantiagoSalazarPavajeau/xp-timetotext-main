"use strict";

function time2text(time) {
  let [hourString, secondsString] = time.split(":");

  let hour = parseInt(hourString);
  let seconds = parseInt(secondsString);

  let hourConvert = hourConversionHelper(hour);

  if (hourString === "00" && secondsString === "00") {
    console.log("midnight");
    return "midnight";
  } else if (hour === 12 && secondsString === "00") {
    console.log("noon");
    return "noon";
  } else if (hour < 12) {
    console.log(hour, seconds, "in the morning");
    return `${hour}, ${seconds} in the morning`;
  } else if (hour < 18) {
    console.log(hour, seconds, "in the afternoon");
    return `${hour}, ${seconds} in the afternoon`;
  } else if (hour >= 18) {
    console.log(hourConvert, seconds, "in the evening");
    return `${hourConvert}, ${seconds} in the evening`;
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
      return "thirteen";
    case 14:
      return "fourteen";
    case 15:
      return "fifteen";
    case 16:
      return "sixteen";
    case 17:
      return "seventeen";
    case 18:
      return "eighteen";
    case 19:
      return "nineteen";
    case 20:
      return "twenty";
    case 21:
      return "twenty-one";
    case 22:
      return "twenty-two";
    case 23:
      return "twenty-three";
    default:
      return hour;
  }
}

module.exports = time2text;
