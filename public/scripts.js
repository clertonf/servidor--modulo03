const modalOverlay = document.querySelector(".modal-overlay"); 
// seleciona um objeto do css 
const cards = document.querySelectorAll(".card");

for(let card of cards){
    card.addEventListener("click",function(){
        const videoId = card.getAttribute("id");
        // modalOverlay.classList.add("active");
        // modalOverlay.querySelector("iframe").src = `https:www.youtube.com/embed/${videoId}`;
        window.location.href = `/video?id=${videoId}`

    })
}

// const clodeMotal = document.querySelector(".close-modal").addEventListener("click", function(){
//     modalOverlay.classList.remove("active");
//     modalOverlay.querySelector("iframe").src = "";
// })

// (Movendo o modal com JS, dom)

