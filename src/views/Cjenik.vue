<template>

  <div class="container3">
    <h1>Lice</h1>
    <ul class="pricelist">
      <li v-for="(item, index) in items" :key="item.name" :class="{ 'item': true, 'no-bottom-border': index === items.length - 1 }">
        <span class="item-name">{{ item.name }}</span>
        <span class="item-price">{{ item.price }}</span>
      </li>
      
    </ul>
  </div>

  <div class="container3">
    <h1> Nokti </h1>
    <ul class="pricelist">
      <li v-for="(item, index) in items2" :key="item.name" :class="{ 'item': true, 'no-bottom-border': index === items2.length - 1 }">
        <span class="item-name">{{ item.name }}</span>
        <span class="item-price">{{ item.price }}</span>
      </li>
      
    </ul>
  </div>

  <div class="container3">
    <h1> Stopala </h1>
    <ul class="pricelist">
      <li v-for="(item, index) in items3" :key="item.name" :class="{ 'item': true, 'no-bottom-border': index === items3.length - 1 }">
        <span class="item-name">{{ item.name }}</span>
        <span class="item-price">{{ item.price }}</span>
      </li>
      
    </ul>
  </div>

  <div class="container3">
    <h1> Depilacija </h1>
    <ul class="pricelist">
      <li v-for="(item, index) in items4" :key="item.name" :class="{ 'item': true, 'no-bottom-border': index === items4.length - 1 }">
        <span class="item-name">{{ item.name }}</span>
        <span class="item-price">{{ item.price }}</span>
      </li>
      
    </ul>
  </div>

  <div class="container3">
    <h1> Masaža </h1>
    <ul class="pricelist">
      <li v-for="(item, index) in items5" :key="item.name" :class="{ 'item': true, 'no-bottom-border': index === items5.length - 1 }">
        <span class="item-name">{{ item.name }}</span>
        <span class="item-price">{{ item.price }}</span>
      </li>
      
    </ul>
  </div>

  <div class="container3">
    <h1> Delux shape </h1>
    <ul class="pricelist">
      <li v-for="(item, index) in items6" :key="item.name" :class="{ 'item': true, 'no-bottom-border': index === items6.length - 1 }">
        <span class="item-name">{{ item.name }}</span>
        <span class="item-price">{{ item.price }}</span>
      </li>
      
    </ul>
  </div>

  <div class="container3">
    <h1> Šminkanje </h1>
    <ul class="pricelist">
      <li v-for="(item, index) in items7" :key="item.name" :class="{ 'item': true, 'no-bottom-border': index === items7.length - 1 }">
        <span class="item-name">{{ item.name }}</span>
        <span class="item-price">{{ item.price }}</span>
      </li>
      
    </ul>
  </div>
</template>
    
<style>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
h1{
  font-family: 'Great Vibes', cursive;
  font-size: 45px;
}
.container3 {
  padding-top: 3%;
  padding-bottom: 3%;
  width: 50%;
  margin: 0 auto;
  text-align: center;
  
}

.pricelist {
  list-style: none;
  padding: 0;
  margin: 0;
  border: 10px solid #FFB6C1;
  border-radius: 10px;
  overflow: hidden;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  border-bottom: 3px solid #FFB6C1;
  padding: 10px;
}

.no-bottom-border {
  border-bottom: none;
}

span {
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
}

@media (max-width: 768px) {
  li.item {
    flex-direction: column;
    align-items: center;
  }
  .item-price {
    margin-top: 10px;
  }
}


    </style>

<script>
export default {
  data() {
    return {
      items: [
        { name: 'Njega lica', price: '27€ / 203,43kn' },
        { name: 'Anti-age njega lica', price: '34€ / 256,17kn'},
        { name: 'Dubinsko čišćenje lica', price: '34€ / 256,17kn'},
        { name: 'Anti-age dubinsko čišćenje lica', price: '47€ / 354,12kn'}, ],

      items2: [
        { name: 'Manikura', price: '11€ / 82,88kn'},
        { name: 'Lakiranje', price: '4€ / 30,14kn' },
        { name: 'Dipping na prirodne nokte', price: '20€ / 150,69kn' },
        { name: 'Dipping na produžene nokte', price: '27€ / 203,43kn' },
        { name: 'Skidanje gela / akrila / trajnog laka', price: '7€ / 52,74kn' },
        { name: 'Popravak jednog nokta', price: '4€ / 30,14kn' }, ],
       
      items3: [ 
        { name: 'Estetska pedikura', price: '16€ / 120,55kn' },
        { name: 'Trajni lak', price: '16€ / 120,55kn' },
        { name: 'Pedikura + trajni lak', price: '27€ / 203,43kn' },
        { name: 'Lakiranje', price: '6€ / 45,21kn' },
        { name: 'Rekonstrukcija nokta', price: '7€ / 52,74kn' }, ],

       items4: [ 
        { name: 'Depilacija naušnica', price: '4€ / 30,14kn' },
        { name: 'Depilacija brade', price: '4€ / 30,14kn' },
        { name: 'Korekcija obrva', price: '5€ / 37,67kn' },
        { name: 'Korekcija + bojanje obrva', price: '10€ / 75,35kn' },
        { name: 'Depilacija cijelih nogu', price: '15€ / 113,02kn' },
        { name: 'Parcijalna depilacija', price: '9€ / 67,81kn' },
        { name: 'Bikini', price: '6€ / 45,21kn' },
        { name: 'Brazilka', price: '8€ / 60,28kn' },
        { name: 'Brazilka šećernom pastom', price: '14€ / 105,48kn' },
        { name: 'Depilacija ruku', price: '8€ / 60,28kn' },
        { name: 'Depilacija pazuha', price: '5€ / 37,67kn' },
        { name: 'Depilacija leđa', price: '10€ / 75,35kn' }, ],
        
        items5: [ 
        { name: 'Masaža lica', price: '11€ / 82,88kn' },
        { name: 'Masaža lica i glave', price: '14€ / 105,48kn' },
        { name: 'Parcijalna masaža', price: '14€ / 105,48kn' },
        { name: 'Aroma masaža cijelog tijela', price: '26€ / 195,90kn' },
        { name: 'Anticelulitna parcijalna masaža', price: '20€ / 150,69kn' },
        { name: 'Aparativna limfna drenaža', price: '11€ / 82,88kn' },
        { name: 'Total relax', price: '34€ / 256,17kn' }, ],

        items6: [ 
        { name: 'Delux shape noge', price: '34€ / 256,17kn' },
        { name: 'Delux shape trbuh', price: '20€ / 150,69kn' },
        { name: 'Delux shape paket 10 tretmana noge', price: '279€ / 2 102,13kn' },
        { name: 'Delux shape paket 10 tretmana trbuh', price: '146€ / 1 100,04kn' },
        { name: 'Delux shape full body 10 tretmana', price: '340€ / 2 561,73kn' }, ],

        items7: [ 
        { name: 'Šminkanje', price: '27€ / 203,63kn' },
        { name: 'Šminkanje + trepavice', price: '34€ / 256,17kn' },
        { name: 'Brow lift', price: '30€ / 226,04kn' }, ]

};
},
};
</script>


