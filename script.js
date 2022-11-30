const stopWatchTag = document.getElementsByClassName("stopWatch")[0];
// const millisecTag = document.getElementsByClassName("millisec")[0];
const millisecDiv = document.createElement("div");
millisecDiv.classList.add("millisec");
const startButton = document.getElementsByClassName("startButton")[0];
const pauseButton = document.getElementsByClassName("pauseButton")[0];
const continueButton = document.getElementsByClassName("continueButton")[0];
const restartButton = document.getElementsByClassName("restartButton")[0];

let hour = 0 , min = 0 , sec = 0 , millis = 0;

const timeCalc = (time) => {
    if ( time > 9 ) {
        return ""+time.toString();
    } else {
        return "0"+time.toString();
    }
}

const calculating = () => {
    millis+=3;
    if ( millis > 999 ) {
        millis=0;
        sec += 1;
    }
    if ( sec > 59 ) {
        sec = 0;
        min += 1;
    }
    if ( min > 59 ) {
        min = 0;
        hour += 1;
    }
    // console.log ( timeCalc(hour), timeCalc(min) , timeCalc(sec) , millis );
    stopWatchTag.textContent = timeCalc(hour) +":"+ timeCalc(min) +":"+ timeCalc(sec);
    millisecDiv.textContent = (millis < 100 ) ? (millis < 10 ) ? "00"+millis: "0"+millis : millis;
    stopWatchTag.append(millisecDiv);
    
    console.log(millis);
};

let intervalTime;
let delay = 1;
startButton.addEventListener("click", () => {
    if ( intervalTime !== null ) {
        clearInterval(intervalTime);
    }
    intervalTime = setInterval(calculating,delay);
});

pauseButton.addEventListener("click", () => {
    clearInterval(intervalTime);
});

continueButton.addEventListener("click", () => {
    clearInterval(intervalTime);
    intervalTime = setInterval(calculating,delay);
});

restartButton.addEventListener("click", () => {
    clearInterval(intervalTime);
    hour = 0 , min = 0 , sec = 0  , millis = 0;
    intervalTime = setInterval(calculating,delay);
});
