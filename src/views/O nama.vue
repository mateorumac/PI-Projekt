<template>
    <div id="app">
      <div class="container2">
        <div class="row">
          
          <div class="column left">
            <!-- Add your main content here -->
            <img src="salon2.jpg" alt="salon" style="width: 80%; margin-left:-5%">
            <p class="about">Naš salon opremljen je po visokim standardima, 
              pružajući klijentima ugodnu i toplu atmosferu. 
            <br> Svi naši klijenti dobiju najbolju profesionalnu uslugu 
            za što se brine naš stručni i talentirani tim.</p> 
 <img src="salon3.jpg" alt="salon" style="width: 80%;">
    
          </div>

          <div class="column right">
            <p class="about">Salon ljepote Ana nalazi se u Puli. <br>
                Našim klijentima nudimo usluge njege lica, masaže, 
                depilacije, njege ruku, oblikovanja tijela, a imamo i odjel prodaje 
                preparativne i dekorativne kozmetike.</p>
            <img src="salon1.jpg" alt="salon" style="width: 80%;">
            <p class="about"> <br> Naš uspjeh dugujemo konstantnom poboljšavanju 
            vlastitih usluga i ono najvažnije, iznimnom zadovoljstvu naših klijenata.</p>
            <p class="about"> RADNO VRIJEME: <br><br>
             PON I ČET - 13:00-20:00 <br> UTO , SRI , PET 09:00-16:00 <br> SUB - PO DOGOVORU </p>
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
      }

      .column left, right img {
  max-width: 60%;
  height: auto;
}
    </style>



