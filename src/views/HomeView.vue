<template>
<div class="slider">
  <div class="slide-track">
    <!--     ------5 img---- -->
    <div class="slide">
      <img src="https://images.pexels.com/photos/8066167/pexels-photo-8066167.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" href="">
      <div class="details">
        <div class="content">
          <h1>heading</h1>
          <p>this is a paragrapgh. nice to meet u dear. </p>
        </div>
      </div>

    </div>
    <div class="slide">
      <img src="https://images.pexels.com/photos/4348323/pexels-photo-4348323.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500">
      <div class="details">
        <div class="content">
          <h1>heading</h1>
          <p>this is a paragrapgh. nice to meet u dear. </p>
        </div>
      </div>
    </div>
    <div class="slide">
      <img src="https://images.pexels.com/photos/7419661/pexels-photo-7419661.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500">
      <div class="details">
        <div class="content">
          <h1>heading</h1>
          <p>this is a paragrapgh. nice to meet u dear. </p>
        </div>
      </div>
    </div>
    <div class="slide">
      <img src="https://images.pexels.com/photos/4999940/pexels-photo-4999940.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500">
      <div class="details">
        <div class="content">
          <h1>heading</h1>
          <p>this is a paragrapgh. nice to meet u dear. </p>
        </div>
      </div>
    </div>
    <div class="slide">
      <img src="https://images.pexels.com/photos/7223805/pexels-photo-7223805.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500">
      <div class="details">
        <div class="content">
          <h1>heading</h1>
          <p>this is a paragrapgh. nice to meet u dear. </p>
        </div>
      </div>
    </div>

    <!--     ----same 5 img---- -->
    <div class="slide">
      <img src="https://images.pexels.com/photos/8066167/pexels-photo-8066167.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500">
      <div class="details">
        <div class="content">
          <h1>heading</h1>
          <p>this is a paragrapgh. nice to meet u dear. </p>
        </div>
      </div>
    </div>
    <div class="slide">
      <img src="https://images.pexels.com/photos/4348323/pexels-photo-4348323.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500">
    </div>
    <div class="slide">
      <img src="https://images.pexels.com/photos/7419661/pexels-photo-7419661.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500">
      <div class="details">
        <div class="content">
          <h1>heading</h1>
          <p>this is a paragrapgh. nice to meet u dear. </p>
        </div>
      </div>
    </div>
    <div class="slide">
      <img src="https://images.pexels.com/photos/4999940/pexels-photo-4999940.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500">
    </div>
    <div class="slide">
      <img src="https://images.pexels.com/photos/7223805/pexels-photo-7223805.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500">
      <div class="details">
        <div class="content">
          <h1>heading</h1>
          <p>this is a paragrapgh. nice to meet u dear. </p>
        </div>
      </div>
    </div>
  </div>
</div>
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
    
    </template>
<style>
      * {
        box-sizing: border-box;
        
      }
      .container1 {
        padding-top: 5%;
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

      
.slider {
  padding-top: 5%;  
  padding-bottom: 5%;
  height: 320px;
  margin: auto;
  position: relative;
  width: 65%;
  display: grid;
  place-items: center;
  overflow: hidden;
}
.slide-track {
  display: flex;
  width: calc(250px * 10);
  animation: scroll 40s linear infinite;
}
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 5));
  }
}
.slide {
  height: 200px;
  width: 250px;
  padding: 15px;
  display: flex;
  align-items: center;
  perspective: 100px;
}
img {
  width: 100%;
  transition: transform 1s;
}
img:hover {
  transform: translateZ(20px);
}
.slider::before,
.slider::after {
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  content: " ";
  height: 100%;
  position: absolute;
  width: 15%;
  z-index: 2;
}
.slider::before {
  left: 0;
  top: 0;
}
.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.details {
  position: absolute;
  top: 10px;
  left: 25px;
  bottom: 10px;
  right: 10px;
  width: 200px;
  background: rgba(0, 0, 0, 0);
  transform: scaleY(0);
  transition: transform 0.5s;
}
.slide:hover .details {
  transform: scaleY(1);
}
.details .content {
  position: absolute;
  top: 0%;
  transform: translateY(8%);
  text-align: center;
  color: white;
}    

      @media (max-width: 600px) {
        
        .left,
        .right {
          width: 100%;
        }
      }

    </style>

