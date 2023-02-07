<template>  
      <div class="container2">
        <div class="row">         
          <div class="column left">
            <img src="salon2.jpg" alt="salon">
            <p class="about"><i>Naš salon opremljen je po visokim standardima, <br> 
              pružajući klijentima ugodnu i toplu atmosferu. <br>
             Svi naši klijenti dobiju najbolju profesionalnu uslugu, <br> 
            za što se brine naš stručni i talentirani tim. </i></p> 
            <img src="salon3.jpg" alt="salon" style="width: 80%;">    
          </div>
            <div class="column right">
              <p class="about"><i>Salon ljepote Ana nalazi se u Puli. <br>
                Našim klijentima nudimo usluge njege lica, <br> masaže, 
                depilacije, njege ruku i stopala, <br> oblikovanja tijela, šminkanja i brow lifting.</i></p>
              <img src="salon1.jpg" alt="salon" style="width: 80%;">
              <p class="about"> <br><i> Naš uspjeh dugujemo konstantnom <br> poboljšavanju 
              vlastitih usluga i ono najvažnije, <br> iznimnom zadovoljstvu naših klijenata.</i></p> <br>
              <div class="rectangle">
                <p class="about"><br><b> RADNO VRIJEME: </b><br><br>
                PON I ČET - 13:00-20:00 <br><br> UTO , SRI , PET - 09:00-16:00 <br><br> SUB - PO DOGOVORU </p>
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

      .rectangle {
        margin-top: 7%;
        margin-left: 25% ;
        width: 450px;
        height: 370px;
        background-color: #FFB6C1;
        border-radius: 10px;
        
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
        padding-right: 5%;
      }

      @media (max-width: 600px) {
        
        .left {
          width: 100%;
        }
        .right {
          width: 100%;
          
        }
        .right img {
          width: 100%;
          margin-left: 8%;
        }
        .rectangle{
          margin-left: -1%;
          margin-bottom: 5%;
        }       
      }  
</style>



