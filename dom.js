// ACCESSING ELEMENTS
document.querySelector()
document.querySelectorAll()
document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()

// MODIFYING ELEMENTS
var h1 = document.querySelector("h1")
h1.textContent = "Hello"
h1.innerHTML = "<i>world</i>"
h1.style.color = "red"
h1.classList.add("eehhOne")
h1.classList.remove("eehhOne")

// CREATING ELEMENTS
var btn = document.createElement("button")
btn.textContent = "Hey!"
btn.classList.add("batan")
document.querySelector("body").appendChild(btn)

// DELEING ELEMENTS
var img = doc.querySelector("img")
img.src = "https://static.remove.bg/uploader-examples/animal/6_thumbnail.jpg"
document.querySelector("body").appendChild(img)

document.querySelector("body").removeChild(img)


// EVENT HANDLING
var btn = document.querySelector("button")
btn.addEventListener("click", function(){
    btn.textContent = "hehehe!"
    btn.style.color = "red"
})

btn.addEventListener("dblclick",function(){})
btn.addEventListener("mousemove", function(){})
btn.addEventListener("mouseleave", function(){})
btn.addEventListener("submit", function(){})

// EVENT OBJECT
document.querySelector("body")
.addEventListener("mousemove", function(dets){
    console.log(dets.x)
})
