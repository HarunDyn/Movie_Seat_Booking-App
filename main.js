const movie = document.querySelector("#movie");
const container = document.querySelector(".container");
const seat = document.querySelectorAll(".row .seat");
const inputBuy = document.getElementById("buy");
const buttonBuy = document.querySelector(".buy button");
const containerRow = document.querySelectorAll(".row");




const ui = new UI();
const storage = new Storage();

// Event
container.addEventListener("click", selectSeat);
movie.addEventListener("change", calculatePrice);
buttonBuy.addEventListener("click", addToStorage);
window.addEventListener("DOMContentLoaded", () => {
    addItemsFromStorageToUI();
})




// Function

function calculatePrice() {
    let moviePrice = movie.options[movie.selectedIndex].value;
    let movieName = movie.options[movie.selectedIndex].innerText.split("(")[0];
    let countSelected = document.querySelectorAll(".row .seat.selected");
    let total = countSelected.length * Number(moviePrice);
    ui.addMovieAndPriceToUI(countSelected.length, movieName, total)


}

function selectSeat(e) {
    if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
        e.target.classList.toggle("selected");

        calculatePrice()


    }
}

function addToStorage() {
    let indexTicket = [];
    containerRow.forEach((items, index) => {
        [...items.children].forEach((item, indis) => {
            if (item.classList.contains("selected")) {
                item.classList.replace("selected", "occupied")
                indexTicket.push(`[${index},${indis}]`)
            };
        });
    })

    let ticketOwner = inputBuy.value;
    console.log(ticketOwner, indexTicket)

    storage.addTicketsToStorage(ticketOwner, indexTicket);

    inputBuy.value = "";
    ui.addMovieAndPriceToUI(null, null, null)
}


function addItemsFromStorageToUI() {
    let allValueStorage = "";
    Object.values(localStorage).forEach((item) => {
        allValueStorage += item;
    });

    containerRow.forEach((items, index) => {
        [...items.children].forEach((item, indis) => {
            if (allValueStorage.includes([index, indis])) {
                item.classList.add("occupied");
            };
        });
    });
}