// CUSTOM EVENTS

// apne custom/khud se banaye hue events
const yourEvent = new Event("Khana khalo")

document.querySelector("button")
.addEventListener("Khana khalo",function(){
    console.log("Kha Liya")
})
document.querySelector("button").dispatchEvent(yourEvent)       //--------> dispatchEvent ka mtlb event chal gya, ye custom events me lgta h events chalame ke liye

