

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

//===================================================================================
// JavaScript to show and hide the modal
const modal = document.getElementById("car-modal");
const openModalButton = document.getElementById("open-modal-btn");
const closeModalButton = document.getElementById("close-modal");
const carForm = document.getElementById("car-form");
const cardLists = document.getElementById("card-lists");

// Function to open the modal
openModalButton.addEventListener("click", function () {
  modal.style.display = "block";
});

// Function to close the modal
closeModalButton.addEventListener("click", function () {
  modal.style.display = "none";
});

// Function to create a card when the form is submitted
carForm.addEventListener("submit", function (e) {
  e.preventDefault();

// ... (previous JavaScript code)

// Function to create a card when the form is submitted
carForm.addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Get input values
    const carImage = document.getElementById("car-image").value;
    const carTitle = document.getElementById("car-title").value;
    const carInfo = document.getElementById("car-info").value;
    const carSeats = document.getElementById("car-seats").value;
  
    // Create a new card element
    const newCard = document.createElement("div");
    newCard.classList.add("box"); // Add the "box" class
  
    newCard.innerHTML = `
    <div id='box' class="box">
            
    <div class="box-img">
        <img src="${carImage}" alt="${carTitle}">
    </div>
    <div class="card-body">
    <p class="Car-info">${carInfo}</p>
    <p class="Car-Seats">${carSeats}</p>
    <p class="Car-Seats">${carSeats}</p>
    <h3 class="card-title">${carTitle}</h3>
    <h2>$12,000 | $399 <span>/Day</span></h2>
    <a href="#" class="btn" data-car-name="${carTitle}" data-per-day-price="$399">Rent Now</a>
   </div>
  </div>
    `;
  
    // Append the new card to the card list
    cardLists.appendChild(newCard);
  
    // Clear the form inputs
    carForm.reset();
  
    // Close the modal
    modal.style.display = "none";
  });
});


