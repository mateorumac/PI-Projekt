<template>
    <div id="app">
      <div class="container1">
        <div class="row">
          
          <div class="column left">
            <!-- Add your main content here -->
            <img src="ana.jpg" alt="Ana" style="width: 80%; margin-left:-5%">
          </div>

          <div class="column right">
            <h2> TRETMANI LICA I TIJELA U PULI </h2>
            <p><i>Profesionalna usluga i stručnost naših zaposlenika vašoj koži će, kao najvećem organu našeg tijela,  dati ono što joj je potrebno kako bi postala i  ostala zdrava i lijepa, a vaše tijelo zadržalo  
          vitalnost i njegovan izgled. <br><br><br>
            Izgled nam je svima važan i prvi dojmovi  se brzo pamte i dugo traju. Ako ste pod stresom, umorni ili jednostavno želite uživati i  opustiti se dođite u naš salon.  <br> Uz stručni rad s vrhunskom kozmetikom 
            brinemo o vašoj ljepoti i zdravlju.</i></p>
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
    margin-bottom: 40px;
  }

      @media (max-width: 600px) {
        
        .left,
        .right {
          width: 100%;
        }
      }

      p{
        margin:5%;
        padding-top: 5%;
      }

      img {
  max-width: 70%;
  height: auto;
}
    </style>



