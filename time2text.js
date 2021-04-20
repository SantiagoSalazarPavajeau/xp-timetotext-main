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
  }else if (minutesString === "05"){
    if(hour > 18){
      console.log("five past", hourConvert, "in the evening");
      return `five past ${hourConvert} in the evening`;
    }else if(hour > 12){// afternoon and quarter past
      console.log("five past", hourConvert,  "in the afternoon");
      return `five past ${hourConvert} in the afternoon`;
    }else if(hour < 12){ // morning and quarter past
      console.log("five past", hourConvert,  "in the morning");
      return `five past ${hourConvert} in the morning`;
    }
} else if (minutesString === "10"){
    if(hour > 18){
      console.log("ten past", hourConvert, "in the evening");
      return `ten past ${hourConvert} in the evening`;
    }else if(hour > 12){// afternoon and quarter past
      console.log("ten past", hourConvert,  "in the afternoon");
      return `ten past ${hourConvert} in the afternoon`;
    }else if(hour < 12){ // morning and quarter past
      console.log("ten past", hourConvert,  "in the morning");
      return `ten past ${hourConvert} in the morning`;
    }
} else if (minutesString === "15"){
    if(hour > 18){
      console.log("quarter past", hourConvert, "in the evening");
      return `quarter past ${hourConvert} in the evening`;
    }else if(hour > 12){// afternoon and quarter past
      console.log("quarter past", hourConvert,  "in the afternoon");
      return `quarter past ${hourConvert} in the afternoon`;
    }else if(hour < 12){ // morning and quarter past
      console.log("quarter past", hourConvert,  "in the morning");
      return `quarter past ${hourConvert} in the morning`;
    }
}else if (minutesString === "20"){
    if(hour > 18){
      console.log("twenty past", hourConvert, "in the evening");
      return `twenty past ${hourConvert} in the evening`;
    }else if(hour > 12){// afternoon and quarter past
      console.log("twenty past", hourConvert,  "in the afternoon");
      return `twenty past ${hourConvert} in the afternoon`;
    }else if(hour < 12){ // morning and quarter past
      console.log("twenty past", hourConvert,  "in the morning");
      return `twenty past ${hourConvert} in the morning`;
    }
} else if (minutesString === "30"){
    if(hour > 18){
      console.log("half past", hourConvert, "in the evening");
      return `half past ${hourConvert} in the evening`;
    }else if(hour === 12){// afternoon and quarter past
        console.log("half past noon");
        return `half past noon`;
      }else if(hour > 12){// afternoon and quarter past
      console.log("half past", hourConvert,  "in the afternoon");
      return `half past ${hourConvert} in the afternoon`;
    }else if(hour < 12){ // morning and quarter past
      console.log("half past", hourConvert,  "in the morning");
      return `half past ${hourConvert} in the morning`;
    }
}else if (minutesString === "40"){
    if(hour === 11){// afternoon and quarter past
        console.log("twenty to noon");
        return `twenty to noon`;
    }else if(hour > 18){
      console.log("twenty to", hourConversionHelper(hour +1), "in the evening");
      return `twenty to ${hourConversionHelper(hour +1) } in the evening`;
    }else if(hour > 12){// afternoon and quarter past
      console.log("twenty to", hourConversionHelper(hour +1),  "in the afternoon");
      return `twenty to ${hourConversionHelper(hour +1)} in the afternoon`;
    }else if(hour < 12){ // morning and quarter past
      console.log("twenty to", hourConversionHelper(hour +1),  "in the morning");
      return `twenty to ${hourConversionHelper(hour +1)} in the morning`;
    }
}else if (minutesString === "45"){
    if(hour === 11){// afternoon and quarter past
        console.log("quarter to midnight");
        return `quarter to midnight`;
    }else if(hour > 18){
      console.log("quarter to", hourConversionHelper(hour +1), "in the evening");
      return `quarter to ${hourConversionHelper(hour +1) } in the evening`;
    }else if(hour > 12){// afternoon and quarter past
      console.log("quarter to", hourConversionHelper(hour +1),  "in the afternoon");
      return `quarter to ${hourConversionHelper(hour +1)} in the afternoon`;
    }else if(hour < 12){ // morning and quarter past
      console.log("quarter to", hourConversionHelper(hour +1),  "in the morning");
      return `quarter to ${hourConversionHelper(hour +1)} in the morning`;
    }
}else if (minutesString === "50"){
    if(hour > 18){
      console.log("ten to", hourConversionHelper(hour +1), "in the evening");
      return `ten to ${hourConversionHelper(hour +1) } in the evening`;
    }else if(hour > 12){// afternoon and quarter past
      console.log("ten to", hourConversionHelper(hour +1),  "in the afternoon");
      return `ten to ${hourConversionHelper(hour +1)} in the afternoon`;
    }else if(hour < 12){ // morning and quarter past
      console.log("ten to", hourConversionHelper(hour +1),  "in the morning");
      return `ten to ${hourConversionHelper(hour +1)} in the morning`;
    }
}else if (minutesString === "55"){
    if( hour === 11){
        console.log("five to noon")
        return "five to noon"
    }else if(hour > 18){
      console.log("five to", hourConversionHelper(hour +1), "in the evening");
      return `five to ${hourConversionHelper(hour +1) } in the evening`;
    }else if(hour > 12){// afternoon and quarter past
      console.log("five to", hourConversionHelper(hour +1),  "in the afternoon");
      return `five to ${hourConversionHelper(hour +1)} in the afternoon`;
    }else if(hour < 12){ // morning and quarter past
      console.log("five to", hourConversionHelper(hour +1),  "in the morning");
      return `five to ${hourConversionHelper(hour +1)} in the morning`;
    }
}else if (hour < 12) {
    console.log(hourConvert, minuteConvert, "in the morning");
    return `${hourConvert} ${minuteConvert} in the morning`;
  } else if (hour < 18) {

    console.log(hourConvert, minuteConvert, "in the afternoon");
    return `${hourConvert} ${minuteConvert} in the afternoon`;
  } else if (hour >= 18) {
    console.log(hourConvert, minuteConvert, "in the evening");
    return `${hourConvert} ${minuteConvert} in the evening`;
  } 
}

function minuteConversionHelper(minutes) {
  if (minutes <= 19) {
    switch (minutes) {
      case "00":
          return "o'clock";
      case "01":
        return "oh one";
      case "02":
        return "oh two";
      case "03":
        return "oh three";
      case "04":
        return "oh four";
      case "05":
        return "oh five";
      case "06":
        return "oh six";
      case "07":
        return "oh seven";
      case "08":
        return "oh eight";
      case "09":
        return "oh nine";
      case "10":
        return "ten";
      case "11":
        return "eleven";
      case "12":
        return "twelve";
      case "13":
        return "thirteen";
      case "14":
        return "fourteen";
      case "15":
        return "fifteen";
      case "16":
        return "sixteen";
      case "17":
        return "seventeen";
      case "18":
        return "eighteen";
      case "19":
        return "nineteen";
    }
  } else if (minutes > 19) {
    let secondMinuteNumber = minutes[1];

    switch (minutes[0]) {
      case "2":
        return "twenty" + secondMinuteConversionHelper(minutes[1]);
      case "3":
        return "thirty" + secondMinuteConversionHelper(minutes[1]);
      case "4":
        return "fourty" + secondMinuteConversionHelper(minutes[1]);
      case "5":
        return "fifty" + secondMinuteConversionHelper(minutes[1]);
    }

  }
}

function secondMinuteConversionHelper(minuteNumber) {  
  switch (minuteNumber) {
    case "0":
      return ""
    case "1":
      return "-one";
    case "2":
      return "-two";
    case "3":
      return "-three";
    case "4":
      return "-four";
    case "5":
      return "-five";
    case "6":
      return "-six";
    case "7":
      return "-seven";
    case "8":
      return "-eight";
    case "9":
      return "-nine";
  }
}

function hourConversionHelper(hour) {
  switch (hour) {
    case 0:
      return "twelve";
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
