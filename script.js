/* ==================================
   KUMKUM THEATRE PREMIUM STYLE
================================== */


*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Segoe UI',sans-serif;
}


body{

    background:
    radial-gradient(circle at top,#4b3200,#050505 60%);

    color:white;

    min-height:100vh;

}



.app{

    width:100%;

}




.page{

    display:none;

    min-height:100vh;

    padding:40px 20px;

    text-align:center;

    animation:fade .5s ease;

}



.page.active{

    display:block;

}



@keyframes fade{

from{

opacity:0;

transform:translateY(25px);

}


to{

opacity:1;

transform:translateY(0);

}

}





/* =====================
        HOME
===================== */


.hero{

height:90vh;

display:flex;

flex-direction:column;

justify-content:center;

align-items:center;

}



.logo{

font-size:65px;

font-weight:900;

letter-spacing:8px;

color:#ffd700;

text-shadow:

0 0 20px gold,

0 0 50px orange;

}



.logo small{

display:block;

font-size:18px;

letter-spacing:15px;

color:white;

}



.hero h1{

font-size:45px;

margin-top:40px;

}



.hero p{

font-size:20px;

color:#ddd;

margin:20px;

}






/* =====================
        BUTTON
===================== */


.premium-btn{

margin:25px;

padding:15px 45px;

border:none;

border-radius:40px;

background:

linear-gradient(
45deg,
#ffd700,
#ff9800
);

font-size:18px;

font-weight:bold;

cursor:pointer;

color:black;

box-shadow:

0 0 25px gold;

transition:.3s;

}



.premium-btn:hover{

transform:scale(1.1);

}







/* =====================
        MOVIES
===================== */


.movie-grid{

display:grid;

grid-template-columns:

repeat(auto-fit,minmax(220px,1fr));

gap:25px;

max-width:1100px;

margin:auto;

}



.movie-card{

height:300px;

padding:25px;

border-radius:25px;


background:

linear-gradient(

145deg,

rgba(255,215,0,.25),

rgba(255,255,255,.05)

);


border:

1px solid rgba(255,215,0,.5);


backdrop-filter:blur(15px);


display:flex;

flex-direction:column;

justify-content:center;

align-items:center;


cursor:pointer;

transition:.4s;

}



.movie-card:hover{

transform:

translateY(-15px)

scale(1.05);


box-shadow:

0 0 35px gold;

}



.movie-card h2{

color:#ffd700;

margin:15px;

}




.rating{


background:

linear-gradient(
45deg,
gold,
orange
);


padding:8px 18px;

border-radius:20px;

font-weight:bold;

color:black;

box-shadow:

0 0 15px gold;

}






/* =====================
    DATE & PEOPLE
===================== */


.booking-box{


max-width:400px;

margin:50px auto;

padding:40px;


background:

rgba(255,255,255,.08);


border:

1px solid gold;


border-radius:25px;


backdrop-filter:blur(15px);


}



.booking-box label{

display:block;

font-size:20px;

margin:20px;

color:#ffd700;

}



.booking-box input,

.booking-box select{


padding:15px;

width:80%;

border-radius:15px;

border:none;

font-size:16px;

}





/* =====================
        SHOWS
===================== */


.show-grid{

display:flex;

flex-wrap:wrap;

justify-content:center;

gap:25px;

}



.show-card{


padding:25px 40px;


background:#111;


border:

1px solid gold;


border-radius:20px;


cursor:pointer;

transition:.3s;


}



.show-card:hover{


background:#ffd700;

color:black;


transform:scale(1.08);


}





/* =====================
        SEATS
===================== */


.cinema-screen{


width:70%;


margin:30px auto;


padding:15px;


background:white;


color:black;


border-radius:50%;


box-shadow:

0 0 40px white;


}



.seat-title{

color:#ffd700;

margin:25px;

}



.seat-area{


display:flex;


justify-content:center;


flex-wrap:wrap;


gap:12px;


max-width:900px;


margin:auto;


}



.seat{


width:45px;

height:40px;


background:#222;


border:1px solid #777;


border-radius:10px;


display:flex;

align-items:center;

justify-content:center;


cursor:pointer;


transition:.3s;


}



.seat:hover{

transform:scale(1.15);

}



.seat.selected{


background:#00c853;


box-shadow:

0 0 20px green;


}




/* =====================
        SNACKS
===================== */


.snack-grid{


display:grid;


grid-template-columns:

repeat(auto-fit,minmax(220px,1fr));


gap:25px;


max-width:900px;


margin:auto;


}



.snack-card{


padding:30px;


font-size:45px;


background:#111;


border:1px solid gold;


border-radius:25px;


}



.snack-card h3{

font-size:20px;

margin:15px;

}



.snack-card input{


width:80px;

padding:10px;

border-radius:10px;


}






/* =====================
        TICKET
===================== */


.ticket-card{


background:white;


color:black;


max-width:500px;


margin:auto;


padding:40px;


border-radius:30px;


box-shadow:

0 0 50px gold;


}



.ticket-card h1{

color:#111;

}



.ticket-card h2{

color:green;

margin:20px;

}



#ticketDetails{


font-size:18px;

line-height:2;

}





/* =====================
        MOBILE
===================== */


@media(max-width:600px){


.logo{

font-size:40px;

}


.hero h1{

font-size:30px;

}


h1{

font-size:30px;

}


.seat{

width:35px;

height:35px;

}


}
