function Storage() {

}



Storage.prototype.addTicketsToStorage = (ticketOwner, indexTicket) => {
    localStorage.setItem(ticketOwner, indexTicket)

}