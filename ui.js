function UI() {

}

UI.prototype.addMovieAndPriceToUI = (countSelected, movieName, Price) => {
    let count = document.querySelector("#count");
    let film = document.querySelector("#film");
    let total = document.querySelector("#total");
    count.innerText = countSelected;
    film.innerText = movieName;
    total.innerText = Price;

}




// UI.prototype.alertMessage = (message, type) => {
//     const cardBody = document.getElementsByClassName("card-body")[0];
//     cardBody.lastElementChild.innerHTML += `<div class="alert alert-${type}" role="alert">${message}</div>`
//     setTimeout(() => {
//         cardBody.lastElementChild.innerHTML = "";
//     }, 1000);
// }