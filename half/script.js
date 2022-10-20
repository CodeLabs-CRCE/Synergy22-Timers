var timeLeft = 0;
function startTimer(){
    timeLeft = 30;
}

var elem = document.getElementById('timer');
    setInterval(countdown, 1000);

    function countdown() {
        elem.innerText = timeLeft;
        if(timeLeft>=1)
        {
            timeLeft--;
        }

    }