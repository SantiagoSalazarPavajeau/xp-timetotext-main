'use strict'

function time2text (time) {
    let [hourString, secondsString] = time.split(':')

    let hour = parseInt(hourString)
    let seconds = parseInt(secondsString)

    switch(hour){
        case 1:
    }
    
    if(hourString === '00' && secondsString === '00'){
        console.log("midnight")
        return "midnight"
    }else if(hour === 12 && secondsString === '00'){
        console.log("noon")
        return "noon"
    }else if(hour < 12){
        console.log(hour, seconds, "in the morning")
        return `${hour}, ${seconds} in the morning`
    }else if (  hour < 18 ){
        console.log(hour, seconds, "in the afternoon")
        return `${hour}, ${seconds} in the afternoon`
    }else if ( hour >= 18){
        console.log(hour, seconds, "in the evening")
        return `${hour}, ${seconds} in the evening`
    }

}

module.exports = time2text
