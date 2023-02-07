<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div class="container4">
        <div class="row">
          <div class="column left">   
            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe width="600" height="650" 
                    id="gmap_canvas" src="https://maps.google.com/maps?q=Beauty%20by%20Ana%20Pula&t=&z=19&ie=UTF8&iwloc=&output=embed" 
                    frameborder="0" scrolling="yes" marginheight="0" marginwidth="0"></iframe>
            
                </div>
            </div>
          </div>

          <div class="column right">
            
            <img src="bba.png" class="logo1">
            <i class="fa-sharp fa-solid fa-location-dot"></i>
            <p class="contact">TRG KRALJA TOMISLAVA 8 <br>PULA<br><br><br>
            <i class="fa-sharp fa-solid fa-phone"></i>
            097 663 43 57 <br><br><br>
            <i class="fa-sharp fa-solid fa-envelopes-bulk"></i>
            AMMANEV@GMAIL.COM</p><br><br>
          
          </div>
        </div>
      </div> 
</template>

<style>
      @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

    * {
        box-sizing: border-box;
        
      }
      .container4 {
        padding-top: 4%;
        max-width: 100%;
        margin: 0 auto;
        padding-bottom: 4%;
        overflow: hidden;
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

      .mapouter{
        padding-left: 10%;
        position:relative;
        text-align:right;
        height: 650px;
        padding-bottom: 56%;
        margin-left: 12%;
        margin-right: 4%;
        
      }

      .gmap_canvas {
        overflow: hidden;
        background: none !important;
        height: 100%;
        width: 100%;
      }

      .gmap_canvas iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100% !important;
        height: 100% !important;
      }

      .contact{
        display: inline-block;        
        text-align: left;
        font-size: 30px;
        font-family: 'Open Sans', sans-serif;
      }
      
      .right{
        text-align: center;
             
      }
      .logo1{
        height: 700px;
        width: 700px;
        margin-top: -25%;
        margin-bottom: -27%;
      }
       
      @media (max-width: 600px) {
        .container {
          flex-direction: column;
        }
        .left,
        .right {
          width: 100%;
        }
        .mapouter{
          margin-top: 7%;
        }
      }
</style>