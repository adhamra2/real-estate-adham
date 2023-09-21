const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 80)
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle ('bx-x');
    navbar.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove ('bx-x');
    navbar.classList.remove('open');
};

// --------------------------------------------------------------------------------

function searchCar() {

    const input = document.getElementById('filter').value.toUpperCase();

    const cardContainer = document.getElementById('card-lists');
    console.log(cardContainer);

    const cards = cardContainer.getElementsByClassName('box');
    console.log(cards)


    for(let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector(".card-body h3.card-title");
        console.log(title)

        if(title.innerText.toUpperCase().indexOf(input) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }

}