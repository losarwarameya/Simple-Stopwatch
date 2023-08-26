// variables
let timer = document.querySelector(".display-timer")
const play = document.querySelector(".play-btn");
const reset = document.querySelector(".reset-btn");

let playing=0;

let sec=0;
let min=0;
let hrs=0;

let leadingSec=0;
let leadingMin=0;
let leadingHrs=0;

let intervalId=null;

function displayTimer(){
    if(sec<10){
        leadingSec=0+sec.toString();
    }else{
        leadingSec=sec;
    }
    if(min<10){
        leadingMin=0+min.toString();
    }else{
        leadingMin=min;
    }
    if(hrs<10){
        leadingHrs=0+hrs.toString();
    }else{
        leadingHrs=hrs;
    }

    timer.innerHTML=leadingHrs+":"+leadingMin+":"+leadingSec;
}

function stopwatch(){

    sec++;
    if(sec/60===1){
        sec=0;
        min++;
        if(min/60===1){
            min=0;
            hrs++;
        }
    }

    
    displayTimer();

}

play.addEventListener("click", ()=>{

    if (play.classList.contains("fa-play")) {
        intervalId=setInterval(stopwatch,1000);
    }else{
        clearInterval(intervalId);
    }
    play.classList.toggle("fa-play");
    play.classList.toggle("fa-pause");
    
})

reset.addEventListener("click", ()=>{
    clearInterval(intervalId);
    sec=0;
    min=0;
    hrs=0;
    leadingHrs=0;
    leadingSec=0;
    leadingMin=0;
    displayTimer();
    if(play.classList.contains("fa-pause")){
        play.classList.toggle("fa-pause");
        play.classList.toggle("fa-play");
    }
})