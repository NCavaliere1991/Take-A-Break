
const startingMinutes = 5;
let time = startingMinutes * 60;

const timer = document.getElementById("timer");
countdown();


var myInterval = setInterval(countdown, 1000);
function countdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    timer.innerHTML = `${minutes}:${seconds}`;
    time--;
    if (time < 0) {
        time = 0;
        clearInterval(myInterval);
        var title = document.getElementById("title");
        title.innerHTML = "Not Ready to go Back?";
    }
}

function addFive() {
    time += (5 * 60);
    title.innerHTML = "Want to Take a Break? You Deserve It"
    if (timer.innerHTML === "0:00") {
        myInterval = setInterval(countdown, 1000);
        countdown();
    }
}

function donate() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
