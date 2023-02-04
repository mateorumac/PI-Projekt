<template>
    <div id="app">
      <div class="container1">
        <div class="row">
          
          <div class="column left">
            
            <img src="ana.jpg" alt="Ana">
          </div>

          <div class="column right">
            <h2> TRETMANI LICA I TIJELA U PULI </h2>
            <p class="homepage"><i>Profesionalna usluga i stručnost naših zaposlenika <br> vašoj koži će, 
               kao najvećem organu <br> našeg tijela,  dati ono što joj je potrebno <br> 
              kako bi postala i  ostala zdrava i lijepa, <br> a vaše tijelo zadržalo  
              vitalnost i njegovan izgled. <br><br><br>
            Izgled nam je svima važan i prvi dojmovi <br>  se brzo pamte i dugo traju. 
            <br> Ako ste pod stresom, umorni ili jednostavno 
             želite <br> uživati i  opustiti se dođite u naš salon.
            <br> Uz stručni rad s vrhunskom kozmetikom 
             <br>brinemo o vašoj ljepoti i zdravlju.</i></p>
          </div>
        </div>
      </div>     
    </div>
    </template>
<style>
      * {
        box-sizing: border-box;
        
      }
      .container1 {
        
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
      
      h2{
      margin-top: 13%;
      margin-bottom: 35px;
      font-size: 35px;
      }

      .homepage {
          font-size: 25px;
          margin:5%;
          
      }

      img {
        max-width: 80%;
        height: auto;
          }

      @media (max-width: 600px) {
        
        .left,
        .right {
          width: 100%;
        }
      }

      
    </style>



