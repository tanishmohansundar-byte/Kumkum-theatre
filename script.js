// ======================================
// KUMKUM THEATRE PREMIUM BOOKING SYSTEM
// ======================================


const movies = [

"MARUTHUVAR",
"HIT",
"DOOR",
"DOOR 2",
"SPY",
"BISTER",
"THOZHAM",
"HOSPA",
"AIM",
"ONE LIFE",
"HARBOUR",
"AUTOKARAN",
"USPA",
"USPA 2",
"USPA 3",
"HOSARANGA",
"MAGADI",
"MUJAHIDEEN",
"THALAIVA",
"ALLA RETURNS",
"FERNANDEZ",
"VANAKKAM MADURAI",
"DEVIL",
"JAI BHIM",
"DETECTIVE",
"NAIDUS PADAM"

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
["7:00 PM","LUXE"],
["10:30 PM","4DX"]
]

};



let booking = {

movie:"",
time:"",
screen:"",
seats:[],
total:0

};



// PAGE SWITCH FUNCTION

function openPage(id){

    document.querySelectorAll(".page")
    .forEach(page=>{
        page.classList.remove("active");
    });


    document.getElementById(id)
    .classList.add("active");

}




// MOVIES


function showMovies(){


    let box=document.getElementById("movieContainer");


    box.innerHTML="";


    movies.forEach(movie=>{


        box.innerHTML += `

        <div class="movie-card"
        onclick="selectMovie('${movie}')">

            🎬

            <h2>${movie}</h2>

            <p>Premium Cinema Experience</p>

        </div>

        `;


    });


    openPage("movies");


}




function selectMovie(movie){


    booking.movie=movie;


    document.getElementById("selectedMovieTitle")
    .innerHTML =
    movie;



    let box=document.getElementById("showContainer");


    box.innerHTML="";


    let movieShows =
    shows[movie] || [

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




function selectShow(time,screen){


    booking.time=time;

    booking.screen=screen;


    generateSeats();


    openPage("seats");


}





// SEAT CREATION


function generateSeats(){


let vip=document.getElementById("vipSeats");

let premium=document.getElementById("premiumSeats");

let regular=document.getElementById("regularSeats");



vip.innerHTML="";
premium.innerHTML="";
regular.innerHTML="";



createSeatRows(vip,"V",6,500);

createSeatRows(premium,"P",10,350);

createSeatRows(regular,"R",15,200);


}




function createSeatRows(container,prefix,count,price){


for(let i=1;i<=count;i++){


container.innerHTML += `

<div class="seat"
onclick="chooseSeat(this,'${prefix}${i}',${price})">

${prefix}${i}

</div>

`;


}



}




function chooseSeat(element,id,price){



if(element.classList.contains("selected")){


element.classList.remove("selected");


booking.seats =
booking.seats.filter(
seat=>seat.id!==id
);


}

else{


element.classList.add("selected");


booking.seats.push({

id:id,
price:price

});


}


}







// SNACK PAGE


function openSnacks(){

openPage("snacks");

}







// CONFIRM BOOKING


function confirmBooking(){



let snackTotal=0;



let snacks={

"Popcorn":
document.getElementById("popcorn").value*120,


"Coca Cola":
document.getElementById("cola").value*80,


"French Fries":
document.getElementById("fries").value*150,


"Magnum":
document.getElementById("icecream").value*100


};



for(let item in snacks){

snackTotal+=Number(snacks[item]);

}



let seatTotal=0;


booking.seats.forEach(seat=>{

seatTotal+=seat.price;

});



booking.total=
seatTotal+snackTotal;



showTicket();

}




// TICKET GENERATION


function showTicket(){


openPage("ticket");



document.getElementById("ticketDetails")
.innerHTML=`

<b>Movie:</b>
${booking.movie}

<br>

<b>Show:</b>
${booking.time}

<br>

<b>Screen:</b>
${booking.screen}

<br>

<b>Seats:</b>
${booking.seats.map(s=>s.id).join(", ")}

<br>

<b>Total:</b>
₹${booking.total}

`;




let qrText = `

Kumkum Theatre

Movie:
${booking.movie}

Seats:
${booking.seats.map(s=>s.id)}

Amount:
₹${booking.total}

`;



new QRious({

element:
document.getElementById("qr"),

value:qrText,

size:220

});


}
