<template>
    <div id="app">
      <div class="container2">
        <div class="row">
          
          <div class="column left">
            <img src="salon2.jpg" alt="salon">
            <p class="about">Naš salon opremljen je po visokim standardima, <br> 
              pružajući klijentima ugodnu i toplu atmosferu. <br>
             Svi naši klijenti dobiju najbolju profesionalnu uslugu, <br> 
            za što se brine naš stručni i talentirani tim.</p> 
 <img src="salon3.jpg" alt="salon" style="width: 80%;">
    
          </div>

          <div class="column right">
            <p class="about">Salon ljepote Ana nalazi se u Puli. <br>
                Našim klijentima nudimo usluge njege lica, <br> masaže, 
                depilacije, njege ruku, oblikovanja tijela, a imamo <br> i odjel prodaje 
                preparativne i dekorativne kozmetike.</p>
            <img src="salon1.jpg" alt="salon" style="width: 80%;">
            <p class="about"> <br> Naš uspjeh dugujemo konstantnom <br> poboljšavanju 
            vlastitih usluga i ono najvažnije, <br> iznimnom zadovoljstvu naših klijenata.</p>
            <p class="about"> RADNO VRIJEME: <br><br>
             PON I ČET - 13:00-20:00 <br> UTO , SRI , PET - 09:00-16:00 <br> SUB - PO DOGOVORU </p>
          </div>
        </div>
      </div>     
    </div>
    </template>
<style>
      @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
      * {
        box-sizing: border-box;
        
      }
      .container2 {
        max-width: 100%;
        margin: 0 auto;
      }
    
      .row::after {
        content: "";
        clear: both;
        display: table;
      }
      .column {
        float: left;
        width: 50%;
        padding: 10px;
      }
      
      @media (max-width: 600px) {
        
        .left,
        .right {
          width: 100%;
        }
      }

      .about{
        margin:5%;
        padding-top: 5%;
        font-family: 'Open Sans', sans-serif;
        font-size: 25px;
      }

      .left img {
  max-width: 80%;
  height: auto;
  padding-left: 7%;
  padding-top: 5%;
  padding-bottom: 5%;
  margin-left:-5%
}

      .right img {
  max-width: 80%;
  height: auto;
  padding-top: 5%;
  padding-bottom: 5%;
}
    </style>



