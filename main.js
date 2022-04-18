const a = document.getElementsByClassName(".link")

function info() {

    document.body.classList.toggle("info")

}

const lightbox = document.createElement("div");
const next = document.createElement("div")
next.id = "next"
lightbox.id = "lightbox";
document.body.appendChild(lightbox)
document.body.appendChild(next)

const nextImg = document.createElement("img")
nextImg.src = "next.svg"
nextImg.id = "next_img"

next.appendChild(nextImg)

const images = document.querySelector(".img");
images.addEventListener("click", () => {
    lightbox.classList.add("active")
    next.classList.add("active")

    const lightboxImg = document.createElement("img");
    const arrow = document.createElement("img")

    lightboxImg.src = "doggo.jpg";
    arrow.src = "arrow.png"

    arrow.id = "arrow"
    lightboxImg.id = "lightboxImg";

    lightboxImg.draggable = false;

    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
    }

    lightbox.appendChild(lightboxImg);
    lightbox.appendChild(arrow)

    const buzz = document.createElement("h1")
    lightbox.appendChild(buzz)

    buzz.id = "buzz"

    const buzztest = document.querySelector("#buzz")
    buzztest.innerText = "Si chiama buzz :)"

    /* 
    
    buzztest.addEventListener("click", () => {
        console.log("clicked")
    })

    */
})

lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active")
    next.classList.remove("active")
})

nextImg.addEventListener("click", () => {
    lightboxImg.src = "doggo2.jpg"
    lightboxImg.id = "lightboxImg2"

    const buzztest = document.querySelector("#buzz")
    buzztest.innerText = "È il mio cagnolone"
})






