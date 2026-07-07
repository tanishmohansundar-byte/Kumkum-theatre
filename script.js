/* ==========================================
      KUMKUM CINEMAS PREMIUM BOOKING
              SCRIPT PART 1
========================================== */


// ================= MOVIE DATABASE =================


const movies = [

{
name:"MARUTHUVAR",
rating:"6.8/10",
genre:"Drama",
poster:"https://via.placeholder.com/300x400?text=MARUTHUVAR"
},

{
name:"HIT",
rating:"3.8/10",
genre:"Thriller",
poster:"https://via.placeholder.com/300x400?text=HIT"
},

{
name:"DOOR",
rating:"7.8/10",
genre:"Horror",
poster:"https://via.placeholder.com/300x400?text=DOOR"
},

{
name:"DOOR 2",
rating:"8.0/10",
genre:"Horror",
poster:"https://via.placeholder.com/300x400?text=DOOR+2"
},

{
name:"SPY",
rating:"9.6/10",
genre:"Action",
poster:"https://via.placeholder.com/300x400?text=SPY"
},

{
name:"BISTER",
rating:"9.2/10",
genre:"Drama",
poster:"https://via.placeholder.com/300x400?text=BISTER"
},

{
name:"THOZHAM",
rating:"8.4/10",
genre:"Drama",
poster:"https://via.placeholder.com/300x400?text=THOZHAM"
},

{
name:"HOSPA",
rating:"8.9/10",
genre:"Action",
poster:"https://via.placeholder.com/300x400?text=HOSPA"
},

{
name:"AIM",
rating:"9.6/10",
genre:"Sci-Fi",
poster:"https://via.placeholder.com/300x400?text=AIM"
},

{
name:"ONE LIFE",
rating:"8.6/10",
genre:"Drama",
poster:"https://via.placeholder.com/300x400?text=ONE+LIFE"
},

{
name:"HARBOUR",
rating:"9.8/10",
genre:"Action",
poster:"https://via.placeholder.com/300x400?text=HARBOUR"
},

{
name:"AUTOKARAN",
rating:"9.5/10",
genre:"Action",
poster:"https://via.placeholder.com/300x400?text=AUTOKARAN"
},

{
name:"USPA",
rating:"5.3/10",
genre:"Drama",
poster:"https://via.placeholder.com/300x400?text=USPA"
},

{
name:"USPA 2",
rating:"5.2/10",
genre:"Drama",
poster:"https://via.placeholder.com/300x400?text=USPA+2"
},

{
name:"USPA 3",
rating:"6.1/10",
genre:"Drama",
poster:"https://via.placeholder.com/300x400?text=USPA+3"
},


{
name:"HOSARANGA",
rating:"5.8/10",
genre:"Action",
poster:"https://via.placeholder.com/300x400?text=HOSARANGA"
},

{
name:"HOSARANGA 2",
rating:"6.0/10",
genre:"Action",
poster:"https://via.placeholder.com/300x400?text=HOSARANGA+2"
},


{
name:"MUJAHIDEEN",
rating:"9.1/10",
genre:"Action Drama",
poster:"https://via.placeholder.com/300x400?text=MUJAHIDEEN"
},


{
name:"THALAIVA",
rating:"7.6/10",
genre:"Action",
poster:"https://via.placeholder.com/300x400?text=THALAIVA"
},


{
name:"ALLA RETURNS",
rating:"7.8/10",
genre:"Comedy",
poster:"https://via.placeholder.com/300x400?text=ALLA+RETURNS"
},


{
name:"FERNANDEZ",
rating:"9.0/10",
genre:"Thriller",
poster:"https://via.placeholder.com/300x400?text=FERNANDEZ"
},


{
name:"VANAKKAM MADURAI",
rating:"8.6/10",
genre:"Drama",
poster:"https://via.placeholder.com/300x400?text=VANAKKAM+MADURAI"
},


{
name:"DEVIL",
rating:"8.9/10",
genre:"Action",
poster:"https://via.placeholder.com/300x400?text=DEVIL"
},


{
name:"JAI BHIM",
rating:"9.4/10",
genre:"Court Drama",
poster:"https://via.placeholder.com/300x400?text=JAI+BHIM"
},


{
name:"NAIDUS PADAM",
rating:"8.7/10",
genre:"Drama",
poster:"https://via.placeholder.com/300x400?text=NAIDUS+PADAM"
},


{
name:"NAWAJ",
rating:"9.3/10",
genre:"Drama",
poster:"https://via.placeholder.com/300x400?text=NAWAJ"
},


{
name:"SHRAMANA",
rating:"9.2/10",
genre:"Action",
poster:"https://via.placeholder.com/300x400?text=SHRAMANA"
},


{
name:"KOPLAM",
rating:"9.4/10",
genre:"Thriller",
poster:"https://via.placeholder.com/300x400?text=KOPLAM"
},


{
name:"POOJAI",
rating:"9.0/10",
genre:"Action",
poster:"https://via.placeholder.com/300x400?text=POOJAI"
},


{
name:"ULJADDI",
rating:"7.0/10",
genre:"Drama",
poster:"https://via.placeholder.com/300x400?text=ULJADDI"
},


{
name:"NAGARJUNA: EDHU NAGARJUNA VA",
rating:"9.5/10",
genre:"Drama",
poster:"https://via.placeholder.com/300x400?text=NAGARJUNA"
}

];





// ================= SHOW TIMINGS =================


const shows = {

"MARUTHUVAR":[
["12:00 PM","STANDARD"],
["3:00 PM","IMAX"],
["6:00 PM","LUXE"],
["9:00 PM","4DX"]
],


"HIT":[
["11:00 AM","STANDARD"],
["2:30 PM","ICE"],
["6:30 PM","IMAX"],
["10:00 PM","LUXE"]
],


"SPY":[
["12:30 PM","IMAX"],
["3:30 PM","LUXE"],
["7:00 PM","4DX"],
["10:30 PM","ICE"]
],


"NAGARJUNA: EDHU NAGARJUNA VA":[
["11:30 AM","LUXE"],
["3:30 PM","IMAX"],
["7:30 PM","ICE"],
["10:45 PM","STANDARD"]
]

};





// ================= BOOKING DATA =================


let booking = {

movie:"",
time:"",
screen:"",
seats:[],
snacks:{},
total:0

};






// ================= LOAD MOVIES =================


function loadMovies(){


let list=document.getElementById("movie-list");


if(!list) return;



list.innerHTML="";


movies.forEach(movie=>{


list.innerHTML += `


<div class="movie-card">


<img src="${movie.poster}">


<h2>${movie.name}</h2>


<div class="rating">

⭐ ${movie.rating}

</div>


<p>${movie.genre}</p>



<button class="premium-btn"
onclick="selectMovie('${movie.name}')">

BOOK NOW

</button>


</div>


`;

});


}




loadMovies();





// ================= SELECT MOVIE =================


function selectMovie(movie){


booking.movie=movie;


showSelection(movie);


}





function showSelection(movie){


let app=document.getElementById("app");


app.innerHTML=`

<h2>Select Show Time</h2>

<h3>${movie}</h3>


<div class="show-container">


${

(shows[movie] || [

["12:00 PM","STANDARD"],
["3:00 PM","STANDARD"],
["6:00 PM","STANDARD"],
["9:00 PM","STANDARD"]

])


.map(show=>`


<button class="premium-btn"

onclick="selectShow('${show[0]}','${show[1]}')">


${show[0]}

<br>

${show[1]}


</button>


`).join("")

}


</div>


`;



}
// ==========================================
//        KUMKUM CINEMAS SCRIPT PART 2
//       SEATS + SNACKS + QR TICKET
// ==========================================



// ================= SELECT SHOW =================


function selectShow(time,screen){


booking.time=time;

booking.screen=screen;

booking.seats=[];


seatSelection();


}






// ================= SEAT SELECTION =================


function seatSelection(){


let app=document.getElementById("app");


let rows=["A","B","C","D","E","F"];



app.innerHTML=`

<h2>
Choose Your Seats
</h2>


<h3>
${booking.screen} | ${booking.time}
</h3>



<div class="screen">

SCREEN

</div>



<div class="seat-layout">


${rows.map((row,index)=>{


return `


<div class="seat-row">


${

Array.from({length:10},(_,i)=>{


let seat=row+(i+1);


let type="";


let price=250;



if(index===0){

type="vip";

price=600;

}


else if(index===1){

type="recliner";

price=450;

}


else{

price=250;

}




return `


<div class="seat ${type}"

onclick="toggleSeat(this,'${seat}',${price})">


${seat}

</div>


`;



}).join("")

}


</div>


`;


}).join("")}



</div>



<div>


<p>

👑 VIP : ₹600

</p>


<p>

💜 Recliner : ₹450

</p>


<p>

Normal : ₹250

</p>


</div>



<button class="premium-btn"

onclick="snackSelection()">

CONTINUE

</button>


`;



}









// ================= TOGGLE SEATS =================


function toggleSeat(element,id,price){



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









// ================= SNACK PAGE =================


function snackSelection(){


let app=document.getElementById("app");


let snacks=[

["Popcorn",150],
["Coca Cola",100],
["Pepsi",100],
["Nachos",180],
["French Fries",150],
["Magnum Ice Cream",200],
["Burger Combo",300]

];



app.innerHTML=`

<h2>
Premium Food & Beverages
</h2>



<div class="snack-container">


${snacks.map(item=>`


<div class="snack-card">


<h3>

${item[0]}

</h3>


<p>

₹${item[1]}

</p>


<input 

type="number"

min="0"

value="0"

id="${item[0]}"

data-price="${item[1]}"


>


</div>


`).join("")}


</div>



<button class="premium-btn"

onclick="confirmBooking()">

PAY & CONFIRM

</button>


`;



}









// ================= CONFIRM BOOKING =================


function confirmBooking(){



let snackNames=[

"Popcorn",
"Coca Cola",
"Pepsi",
"Nachos",
"French Fries",
"Magnum Ice Cream",
"Burger Combo"

];



let snackTotal=0;



booking.snacks={};



snackNames.forEach(snack=>{


let box=document.getElementById(snack);


let quantity=
Number(box.value);



if(quantity>0){


let price=
Number(box.dataset.price);



booking.snacks[snack]=quantity;


snackTotal += quantity*price;



}


});





let seatTotal=

booking.seats.reduce(

(total,seat)=>

total+seat.price

,0);



booking.total=

seatTotal+snackTotal;




generateTicket();



}









// ================= FINAL TICKET =================


function generateTicket(){



let ticketData=

`

KUMKUM CINEMAS

Movie:
${booking.movie}

Show:
${booking.time}

Screen:
${booking.screen}

Seats:
${booking.seats.map(s=>s.id)}

Amount:
₹${booking.total}

`;





let app=document.getElementById("app");



app.innerHTML=`

<div class="ticket">


<h1>

🎟 BOOKING CONFIRMED

</h1>


<h2>

KUMKUM CINEMAS

</h2>



<hr>


<p>

🎬 Movie:

${booking.movie}

</p>



<p>

🕒 Show:

${booking.time}

</p>



<p>

🏛 Screen:

${booking.screen}

</p>



<p>

💺 Seats:

${booking.seats.map(s=>s.id).join(", ")}

</p>



<h2>

Total Amount

₹${booking.total}

</h2>



<canvas id="qr"></canvas>



<br>



<button class="premium-btn"

onclick="location.reload()">

BOOK ANOTHER MOVIE

</button>



</div>


`;





new QRious({

element:
document.getElementById("qr"),

value:
ticketData,

size:220


});



}
