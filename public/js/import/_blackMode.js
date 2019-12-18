export function blackMode (){
    let body = document.getElementsByTagName("body")[0]
let modeBlack = document.getElementsByClassName("mode_black")[0]
let modeWhite = document.getElementsByClassName("mode_white")[0]

modeBlack.addEventListener('click',()=>{
    body.classList.replace("mode_day","mode_night")
})
modeWhite.addEventListener('click',()=>{
    body.classList.replace("mode_night","mode_day")
})
}