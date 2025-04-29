
//#region caroussel
var allCarousselNodes = document.querySelectorAll(".scroll-media");
var allCaroussel = [...allCarousselNodes]

allCaroussel.forEach(caroussel => {
    //copies elements
    const carousselChildren = [...caroussel.children]

    carousselChildren.slice(-3).reverse().forEach(el => {
        caroussel.insertAdjacentHTML("afterbegin", el.outerHTML)
    })

    for (let i = 0; i < 2; i++) {
        carousselChildren.slice(0, 3).forEach(el => {
            caroussel.insertAdjacentHTML("beforeend", el.outerHTML)
        })
    }

    // Scroll listener
    caroussel.addEventListener("scroll", function () {
        if(this.scrollLeft === 0){
            this.scrollLeft = this.scrollWidth - (2*this.offsetWidth)
        }
        else if(Math.ceil(this.scrollLeft) === this.scrollWidth - this.offsetWidth){
            this.scrollLeft = this.offsetWidth
        }
    })
})
//#endregion

//#region OnScroll
let didScroll = false;

window.onscroll = () => didScroll = true;

setInterval(() => {
    if ( didScroll ) {
        didScroll = false;
        document.getElementById("noise").style.opacity = "100%"
    }else{
        document.getElementById("noise").style.opacity = "10%"
    }
}, 50);
//#endregion

//#region scrollDependantAttributes
const scrollWatcher = document.getElementById("radioNeedle")
const scrollWheel = document.getElementById("radioWheel")
const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight

window.addEventListener("scroll", () => {
    let scrollTop  = document.documentElement.scrollTop
    let scrolled = (scrollTop / scrollHeight) * 100
    let scrolledAngle = (scrollTop / scrollHeight) * 360
    scrollWatcher.style.left = `${scrolled}%`
    scrollWheel.style.rotate = `${scrolledAngle}deg`
})
//#endregion

//#region projectLinks
const screenWidth = window.screen.width
const screenHeight = window.screen.height
//update the other links by creating other dicts (that thing relays on element on specific position so not so responsive :(  for the moment)

var playLinkDict = {
    "TWS": "",
    "JW": "https://elliot-nedellec.itch.io/just-waves",
    "SD": "https://elliot-nedellec.itch.io/its-a-sharky-day",
    "IAQ": "https://elliot-nedellec.itch.io/ia-quoi",
    "BA": "https://dock-nel.itch.io/blownaway",
    "KTF": "https://ren-sunshine-boy.itch.io/kill-the-francis",
    "BG": "https://patxixi.itch.io/bubble-gnome",
    "FK": "",
    "4hRun": "https://elliot-nedellec.itch.io/4h-runner",
    "SRP": ""
}

var itchLinkDict = {
    "TWS": "",
    "JW": "https://elliot-nedellec.itch.io/just-waves",
    "SD": "https://elliot-nedellec.itch.io/its-a-sharky-day",
    "IAQ": "https://elliot-nedellec.itch.io/ia-quoi",
    "BA": "https://dock-nel.itch.io/blownaway",
    "KTF": "https://ren-sunshine-boy.itch.io/kill-the-francis",
    "BG": "https://patxixi.itch.io/bubble-gnome",
    "FK": "",
    "4hRun": "https://elliot-nedellec.itch.io/4h-runner",
    "SRP": ""
}

var gitLinkDict = {
    "TWS": "",
    "JW": "https://bitbucket.org/nedelliot84/justwaves/src/master/",
    "SD": "https://bitbucket.org/nedelliot84/its-a-sharky-day/src/master/",
    "IAQ": "https://github.com/ElliotNed/SGJ25",
    "BA": "https://github.com/Okiosk/GGJ-2025",
    "KTF": "",
    "BG": "",
    "FK": "",
    "4hRun": "",
    "SRP": "https://github.com/ElliotNed/ScriptablePipeline"
}

var playLink = document.getElementById("playLink")
var itchLink = document.getElementById("itchLink")
var gitLink = document.getElementById("gitLink")

setInterval(() => {
    /*console.log(itchLinkDict[document.elementFromPoint(screenWidth/2, screenHeight/2).id])*/
    var itchHref = itchLinkDict[document.elementFromPoint(screenWidth/2, screenHeight/2).id]
    var gitHref = gitLinkDict[document.elementFromPoint(screenWidth/2, screenHeight/2).id]
    var playHref = playLinkDict[document.elementFromPoint(screenWidth/2, screenHeight/2).id]

    if(itchHref != "") {
        itchLink.style.pointerEvents = "auto"
        document.getElementsByClassName("unavailable").item(0).style.display = "none"
        itchLink.setAttribute("href", itchHref)
    }
    else {
        document.getElementsByClassName("unavailable").item(0).style.display = "block"
        itchLink.style.pointerEvents = "none"
    }

    if(gitHref != "") {
        gitLink.style.pointerEvents = "auto"
        document.getElementsByClassName("unavailable").item(1).style.display = "none"
        gitLink.setAttribute("href", gitHref)
    }
    else {
        document.getElementsByClassName("unavailable").item(1).style.display = "block"
        gitLink.style.pointerEvents = "none"
    }

    if(playHref != "") {
        playLink.style.pointerEvents = "auto"
        document.getElementsByClassName("unavailable").item(2).style.display = "none"
        playLink.setAttribute("href", playHref)
    }
    else {
        document.getElementsByClassName("unavailable").item(2).style.display = "block"
        playLink.style.pointerEvents = "none"
    }
        
}, 50);
//#endregion

//#region showProject
function showProject(id, showBool)
{
    var moveTo
    if (showBool) {moveTo="14"} else{moveTo="-100"}

    if(id === document.elementFromPoint(screenWidth/2, screenHeight/2).id && showBool){
        document.getElementById(id+"_full").style.top = moveTo+"%"
        console.log("show  "+id+"_full")
    }
    else{
        document.getElementById(id+"_full").style.top = "-100%"
        console.log("hide  "+id+"_full")
    }
}
//#endregion
