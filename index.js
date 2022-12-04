let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homePoint = 0
let guestPoint = 0


function homeone() {
    console.log("clicked")
    homePoint += 1
    homeScore.textContent = homePoint
}

function hometwo() {
    console.log("clicked")
    homePoint += 2
    homeScore.textContent = homePoint
}

function homethree() {
    console.log("clicked")
    homePoint += 3
    homeScore.textContent = homePoint
}

function guestone() {
    console.log("clicked")
    guestPoint += 1
    guestScore.textContent = guestPoint
}

function guesttwo() {
    console.log("clicked")
    guestPoint += 2
    guestScore.textContent = guestPoint
}

function guestthree() {
    console.log("clicked")
    guestPoint += 3
    guestScore.textContent = guestPoint
}

function newgame() {
    console.log("clicked")
    homePoint = 0
    homeScore.textContent = homePoint
    guestPoint = 0
    guestScore.textContent = guestPoint
}