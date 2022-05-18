let skyLayer = document.querySelector('.sky')
let cloudsLayer = document.querySelector('.clouds')
let birdsLayer = document.querySelector('.birds')

let backLayer = document.querySelector('.mountain-behind')
let middleLayer = document.querySelector('.mountain-middle')
let frontLayer = document.querySelector('.front-view')

let titleText = document.querySelector('.title')


setTimeout(() => {
    cloudsLayer.style.animation = "move-1 40s linear infinite"
    
}, 52000);

window.addEventListener('scroll', function () {
    skyLayer.style.top = window.scrollY * 0.3 + "px";
    
    // cloudsLayer.style.left = (parseInt (cloudsLeft) + window.scrollY) * 0.5 + "px";
    cloudsLayer.style.left = window.scrollY * 0.5 + "px";

    birdsLayer.style.left = window.scrollY * 0.5 + "px";

    backLayer.style.top = window.scrollY * 0.3 + "px";
    middleLayer.style.top = window.scrollY * 0.3 + "px";
    frontLayer.style.top = window.scrollY * 0 + "px";

    titleText.style.marginTop = window.scrollY * 1.2 + "px";
})