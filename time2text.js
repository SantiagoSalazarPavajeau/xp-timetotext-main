"use strict";

function time2text(time) {
  let [hourString, minutesString] = time.split(":");

  let hour = parseInt(hourString);
  let hourConvert = numberConversionHelper(hour);
  let minuteConvert = minuteConversionHelper(minutesString);

  if ((hourString === "00" || hourString === "24") && minutesString === "00") {
    return "midnight";
  } else if (hour === 12 && minutesString === "00") {
    return "noon";
  } else if (minutesString === "05") {
    if (hour === 12) {
      return "five past noon";
    } else if (hourString === "00") {
      return "five past midnight";
    } else if (hour > 17) {
      return `five past ${hourConvert} in the evening`;
    } else if (hour > 12) {
      // afternoon and quarter past
      return `five past ${hourConvert} in the afternoon`;
    } else if (hour < 12) {
      // morning and quarter past
      return `five past ${hourConvert} in the morning`;
    }
  } else if (minutesString === "10" || minutesString === "20") {
    if (hourString === "00") {
      return `${minuteConvert} past midnight`;
    } else if (hour === 12) {
      return `${minuteConvert} past noon`;
    } else if (hour >= 18) {
      return `${minuteConvert} past ${hourConvert} in the evening`;
    } else if (hour > 12) {
      // afternoon and quarter past
      return `${minuteConvert} past ${hourConvert} in the afternoon`;
    } else if (hour < 12) {
      // morning and quarter past
      return `${minuteConvert} past ${hourConvert} in the morning`;
    }
  } else if (minutesString === "15") {
    if (hour === 12) {
      return "quarter past noon";
    } else if (hourString === "00") {
      return "quarter past midnight";
    } else if (hour > 17) {
      return `quarter past ${hourConvert} in the evening`;
    } else if (hour > 12) {
      // afternoon and quarter past
      return `quarter past ${hourConvert} in the afternoon`;
    } else if (hour < 12) {
      // morning and quarter past
      return `quarter past ${hourConvert} in the morning`;
    }
  } else if (minutesString === "30") {
    if (hour >= 18) {
      return `half past ${hourConvert} in the evening`;
    } else if (hourString === "00") {
      return "half past midnight";
    } else if (hour === 12) {
      // afternoon and quarter past
      return `half past noon`;
    } else if (hour > 12) {
      // afternoon and quarter past
      return `half past ${hourConvert} in the afternoon`;
    } else if (hour < 12) {
      // morning and quarter past
      return `half past ${hourConvert} in the morning`;
    }
  } else if (minutesString === "40") {
    if (hour === 11) {
      // afternoon and quarter past
      return `twenty to noon`;
    } else if (hour === 23) {
      return "twenty to midnight";
    } else if (hour >= 17) {
      return `twenty to ${numberConversionHelper(hour + 1)} in the evening`;
    } else if (hour >= 12) {
      // afternoon and quarter past
      return `twenty to ${numberConversionHelper(hour + 1)} in the afternoon`;
    } else if (hour < 12) {
      // morning and quarter past
      return `twenty to ${numberConversionHelper(hour + 1)} in the morning`;
    }
  } else if (minutesString === "45") {
    if (hour === 23) {
      // afternoon and quarter past
      return `quarter to midnight`;
    } else if (hour === 11) {
      return "quarter to noon";
    } else if (hour >= 17) {
      return `quarter to ${numberConversionHelper(hour + 1)} in the evening`;
    } else if (hour >= 12) {
      // afternoon and quarter past
      return `quarter to ${numberConversionHelper(hour + 1)} in the afternoon`;
    } else if (hour < 12) {
      // morning and quarter past
      return `quarter to ${numberConversionHelper(hour + 1)} in the morning`;
    }
  } else if (minutesString === "50") {
    if (hour === 11) {
      return "ten to noon";
    } else if (hour === 23) {
      return "ten to midnight";
    } else if (hour >= 17) {
      return `ten to ${numberConversionHelper(hour + 1)} in the evening`;
    } else if (hour >= 12) {
      // afternoon and quarter past
      return `ten to ${numberConversionHelper(hour + 1)} in the afternoon`;
    } else if (hour < 12) {
      // morning and quarter past
      return `ten to ${numberConversionHelper(hour + 1)} in the morning`;
    }
  } else if (minutesString === "55") {
    if (hour === 11) {
      return "five to noon";
    } else if (hour === 23) {
      return "five to midnight";
    } else if (hour >= 17) {
      return `five to ${numberConversionHelper(hour + 1)} in the evening`;
    } else if (hour >= 12) {
      // afternoon and quarter past
      return `five to ${numberConversionHelper(hour + 1)} in the afternoon`;
    } else if (hour < 12) {
      // morning and quarter past
      return `five to ${numberConversionHelper(hour + 1)} in the morning`;
    }
  } else if (hour < 12) {
    return `${hourConvert} ${minuteConvert} in the morning`;
  } else if (hour < 18) {
    return `${hourConvert} ${minuteConvert} in the afternoon`;
  } else if (hour >= 18) {
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

    switch (minutes[0]) {
      case "2":
        if(minutes[1]!= 0){
          return "twenty" + "-" + numberConversionHelper(parseInt(minutes[1]));
        }else{
          return "twenty"
        }
      case "3":
        return "thirty" + "-" + numberConversionHelper(parseInt(minutes[1]));
      case "4":
        return "fourty" + "-" + numberConversionHelper(parseInt(minutes[1]));
      case "5":
        return "fifty" + "-" + numberConversionHelper(parseInt(minutes[1]));
    }
  }
}



function numberConversionHelper(hour) {
  switch (hour) {
    case 0: 
      case 12:
        case 24:
      return "twelve";
    case 1:
      case 13:
      return "one";
    case 2:
      case 14:
      return "two";
    case 3:
      case 15:
      return "three";
    case 4:
      case 16:
      return "four";
    case 5:
      case 17:
      return "five";
    case 6:
      case 18:
      return "six";
    case 7:
      case 19:
      return "seven";
    case 8:
      case 20:
      return "eight";
    case 9:
      case 21: 
      return "nine";
    case 10:
      case 22:
      return "ten";
    case 11:
      case 23:
      return "eleven";
    default:
      return hour;
  }
}

module.exports = time2text;
