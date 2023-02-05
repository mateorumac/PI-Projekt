<template>
  <div class="container4">
        <div class="row">
          <div class="column left">   
            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe width="600" height="600" 
                    id="gmap_canvas" src="https://maps.google.com/maps?q=Trg%20Kralja%20Tomislava%208%20Pula&t=&z=19&ie=UTF8&iwloc=&output=embed" 
                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            
                </div>
            </div>
          </div>

          <div class="column right">
            <img src="logo.png">
          </div>
        </div>
      </div> 
</template>

<style>
* {
        box-sizing: border-box;
        
      }
      .container4 {
        padding-top: 4%;
        max-width: 100%;
        margin: 0 auto;
        padding-bottom: 4%;
        
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
    height:600px;
    width:600px;}
@media (max-width: 600px) {
  .container {
    flex-direction: column;
  }
}
</style>