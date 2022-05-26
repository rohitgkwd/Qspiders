
// Animation    
      
function anm() {
    let payment= document.getElementById('pay-btn')
    payment.style.animationName = "anime1 "
    payment.style.animationDuration = "10s"
    payment.style.animationDelay = "0s"

   }

 // selecting a seat
 let seatchecked = document.querySelector(".seating");
 seatchecked.addEventListener("click", (e) => {
   if (
     e.target.classList.contains("seat") &&
     !e.target.classList.contains("occupied")
   ) {
     e.target.classList.toggle("selected");
   }

   getselectedcount();
 });

 // getting ticket price

 let showtime = document.getElementById("time-dropdown");
 var ticketprice = +showtime.value;

 let priceup = document.getElementById("rupee");
 priceup.innerText = ticketprice;

 // get selectedseats count

 function getselectedcount() {
   let selectedSeats = document.querySelectorAll(".row .seat.selected");

   let selectedseatscount = selectedSeats.length;
   let ordertotal = selectedseatscount * ticketprice;

   count.innerText = "0" + selectedseatscount;
   priceperticket.innerText = ticketprice;
   totalprice.innerText = ordertotal + " rs.";

 }

 //  update ticket price as per showtime

 showtime.addEventListener("change", (e) => {
   ticketprice = +e.target.value;
   priceup.innerHTML = ticketprice;

   getselectedcount();
 });

 // update order total
 let count = document.getElementById("tickets");
 let totalprice = document.getElementById("ordertotal");
 
 let priceperticket = document.getElementById("price");
 priceperticket.innerHTML = ticketprice;

