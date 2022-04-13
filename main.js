const a = document.getElementsByClassName(".link")

function info() {

    document.body.classList.toggle("info")

}

const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox)

const images = document.querySelector(".img");
images.addEventListener("click", () => {
    lightbox.classList.add("active")

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
})

lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active")
})




