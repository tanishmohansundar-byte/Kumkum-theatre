const movies = [

{name:"MARUTHUVAR", rating:6.8},
{name:"HIT", rating:3.8},
{name:"DOOR", rating:7.8},
{name:"DOOR 2", rating:8.0},
{name:"SPY", rating:9.6},
{name:"BISTER", rating:9.2},
{name:"THOZHAM", rating:8.4},
{name:"HOSPA", rating:8.9},
{name:"AIM", rating:9.6},
{name:"ONE LIFE", rating:8.6},
{name:"HARBOUR", rating:9.8},
{name:"AUTOKARAN", rating:9.5},
{name:"USPA", rating:5.3},
{name:"USPA 2", rating:5.2},
{name:"USPA 3", rating:6.1},
{name:"HOSARANGA", rating:5.8},
{name:"HOSARANGA 2", rating:6.0},
{name:"MUJAHIDEEN", rating:9.1},
{name:"THALAIVA", rating:7.6},
{name:"ALLA RETURNS", rating:7.8},
{name:"FERNANDEZ", rating:9.0},
{name:"VANAKKAM MADURAI", rating:8.6},
{name:"DEVIL", rating:8.9},
{name:"JAI BHIM", rating:9.4},
{name:"NAIDUS PADAM", rating:8.7},
{name:"NAWAJ", rating:9.3},
{name:"SHRAMANA", rating:9.2},
{name:"KOPLAM", rating:9.4},
{name:"POOJAI", rating:9.0},
{name:"ULJADDI", rating:7.0},
{name:"NAGARJUNA: EDHU NAGARJUNA VA", rating:9.5}

];



const shows = {

"MARUTHUVAR":[
["12:00 PM","STANDARD"],
["3:00 PM","IMAX"],
["6:00 PM","LUXE"],
["9:00 PM","4DX"]
],

"HIT":[
["11:00 AM","STANDARD"],
["2:30 PM","LUXE"],
["6:30 PM","IMAX"],
["10:00 PM","ICE"]
],

"SPY":[
["10:00 AM","ICE"],
["1:00 PM","IMAX"],
["5:00 PM","3D"],
["9:00 PM","STANDARD"]
],

"JAI BHIM":[
["12:30 PM","STANDARD"],
["3:30 PM","IMAX"],
["7:00 PM","4DX"],
["10:30 PM","LUXE"]
]

};



let booking = {

movie:"",
rating:"",
date:"",
people:0,
time:"",
screen:"",
seats:[],
total:0

};




// PAGE SWITCH

function openPage(page){

document.querySelectorAll(".page")
.forEach(p=>p.classList.remove("active"));

document.getElementById(page)
.classList.add("active");

}




// MOVIES PAGE

function showMovies(){

let container=document.getElementById("movieContainer");

container.innerHTML="";


movies.forEach(movie=>{

container.innerHTML += `

<div class="movie-card"
onclick='selectMovie(${JSON.stringify(movie.name)},${movie.rating})'>

🎬

<h2>${movie.name}</h2>

<div class="rating">
⭐ ${movie.rating}/10
</div>

<p>
Premium Cinema Experience
</p>

</div>

`;

});


openPage("movies");

}




// SELECT MOVIE

function selectMovie(name,rating){

booking.movie=name;

booking.rating=rating;


openPage("details");

}





// DATE + PEOPLE

function continueToShows(){


let date=document.getElementById("showDate").value;


if(date===""){

alert("Select date first");

return;

}


booking.date=date;


booking.people=
Number(
document.getElementById("peopleCount").value
);


loadShows();


}






// SHOWS

function loadShows(){


let title=document.getElementById("selectedMovieTitle");

title.innerHTML=booking.movie;



let box=document.getElementById("showContainer");

box.innerHTML="";



let movieShows =
shows[booking.movie] || [

["12:00 PM","STANDARD"],
["3:00 PM","STANDARD"],
["6:00 PM","LUXE"],
["9:00 PM","IMAX"]

];



movieShows.forEach(show=>{


box.innerHTML += `

<div class="show-card"
onclick="selectShow('${show[0]}','${show[1]}')">


⏰ ${show[0]}

<br>

🎥 ${show[1]}


</div>

`;

});


openPage("shows");


}







// SEATS


function selectShow(time,screen){


booking.time=time;

booking.screen=screen;

booking.seats=[];


createSeats();


openPage("seats");


}





function createSeats(){


let vip=document.getElementById("vipSeats");
let premium=document.getElementById("premiumSeats");
let regular=document.getElementById("regularSeats");


vip.innerHTML="";
premium.innerHTML="";
regular.innerHTML="";



makeSeat(vip,"V",10,500);

makeSeat(premium,"P",20,350);

makeSeat(regular,"R",40,200);


}



function makeSeat(area,row,total,price){


for(let i=1;i<=total;i++){


area.innerHTML += `

<div class="seat"
onclick="selectSeat(this,'${row}${i}',${price})">

${row}${i}

</div>

`;

}

}





function selectSeat(element,id,price){


if(element.classList.contains("selected")){


element.classList.remove("selected");


booking.seats =
booking.seats.filter(
s=>s.id!==id
);


}

else{


if(booking.seats.length>=booking.people){

alert(
`Only ${booking.people} seats allowed`
);

return;

}


element.classList.add("selected");


booking.seats.push({

id:id,
price:price

});


}


document.getElementById("seatInfo").innerHTML=

`Selected ${booking.seats.length}/${booking.people} seats`;

}






// SNACKS


function openSnacks(){


if(booking.seats.length!==booking.people){

alert("Select correct number of seats");

return;

}


openPage("snacks");


}







// CONFIRM


function confirmBooking(){


let total=0;


booking.seats.forEach(seat=>{

total+=seat.price;

});


total +=
Number(document.getElementById("popcorn").value)*120;


total +=
Number(document.getElementById("cola").value)*80;


total +=
Number(document.getElementById("fries").value)*150;


total +=
Number(document.getElementById("icecream").value)*100;



booking.total=total;



showTicket();


}







// TICKET


function showTicket(){


openPage("ticket");



document.getElementById("ticketDetails").innerHTML=`

<b>Movie:</b> ${booking.movie}

<br>

⭐ Rating: ${booking.rating}/10

<br>

📅 Date: ${booking.date}

<br>

👥 People: ${booking.people}

<br>

⏰ Show: ${booking.time}

<br>

🎥 Screen: ${booking.screen}

<br>

💺 Seats: ${booking.seats.map(s=>s.id).join(", ")}

<br>

💰 Total: ₹${booking.total}

`;



new QRious({

element:document.getElementById("qr"),

value:
`
Kumkum Theatre

Movie:${booking.movie}

Date:${booking.date}

Seats:${booking.seats.map(s=>s.id)}

Amount:${booking.total}

`,

size:220

});


}
