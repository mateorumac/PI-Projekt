<template>

  <div class="container3">
    <h1>Lice</h1>
    <ul class="pricelist">
      <li v-for="(item, index) in items" :key="item.name" :class="{ 'item': true, 'no-bottom-border': index === items.length - 1 }">
        <span class="item-name">{{ item.name }}</span>
        <span class="item-price">{{ item.price }}</span>
      </li>     
    </ul>
    <div v-if="isUserLoggedIn">
      <button class="discount" @click="discount1">Primjeni 10% popusta na sve </button>              
      <button class="discount2" @click="discount2">Primjeni 20% popusta na sve</button>           
      <button class="remove" @click="removeDiscount">Ukloni popust</button>
    </div>
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

  <div class="container31">
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

.container31 {
  padding-top: 3%;
  padding-bottom: 5%;
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

.discount{
  font-family: 'Open Sans', sans-serif;
  background-color: #008000;
  color: white;
  padding: 15px 23px;
  font-size: 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-top: 30px;
}

.discount2{
  font-family: 'Open Sans', sans-serif;
  background-color: #008000;
  color: white;
  padding: 15px 23px;
  font-size: 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-top: 30px;
  margin-left:20%;
}

.remove{
  font-family: 'Open Sans', sans-serif;
  background-color: red;
  color: white;
  padding: 15px 23px;
  font-size: 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-top: 30px;
}

@media (max-width: 600px) {
  li.item {
    flex-direction: column;
    align-items: center;
  }
  .item-price {
    margin-top: 10px;
  }
  .discount {
    font-size: 18px;
    padding: 10px 15px;
  }
  .discount2 {
    font-size: 18px;
    padding: 10px 15px;
    margin-left:-1%;
  }
  .remove {
    font-size: 18px;
    padding: 10px 15px;
    margin-left:-1%;
  }
}

</style>

<script>
import firebase from '@/firebase';

export default {

  data() {
    return {
      isUserLoggedIn: false,
      appliedDiscount: false,
      items: [
        { name: 'Njega lica', price: '27€', originalPrice: 27 },
        { name: 'Anti-age njega lica', price: '34€', originalPrice:34},
        { name: 'Dubinsko čišćenje lica', price: '34€', originalPrice:34},
        { name: 'Anti-age dubinsko čišćenje lica', price: '47€',originalPrice:47}, ],

      items2: [
        { name: 'Manikura', price: '11€', originalPrice:11},
        { name: 'Lakiranje', price: '4€', originalPrice:4 },
        { name: 'Dipping na prirodne nokte', price: '20€', originalPrice:20 },
        { name: 'Dipping na produžene nokte', price: '27€', originalPrice:27 },
        { name: 'Skidanje gela / akrila / trajnog laka', price: '7€', originalPrice:7 },
        { name: 'Popravak jednog nokta', price: '4€', originalPrice:4 }, ],
       
      items3: [ 
        { name: 'Estetska pedikura', price: '16€', originalPrice:16 },
        { name: 'Trajni lak', price: '16€' , originalPrice:16},
        { name: 'Pedikura + trajni lak', price: '27€', originalPrice:27 },
        { name: 'Lakiranje', price: '6€', originalPrice:6 },
        { name: 'Rekonstrukcija nokta', price: '7€', originalPrice:7 }, ],

       items4: [ 
        { name: 'Depilacija naušnica', price: '4€', originalPrice:4 },
        { name: 'Depilacija brade', price: '4€', originalPrice:4 },
        { name: 'Korekcija obrva', price: '5€', originalPrice:5 },
        { name: 'Korekcija + bojanje obrva', price: '10€', originalPrice:10 },
        { name: 'Depilacija cijelih nogu', price: '15€', originalPrice:15 },
        { name: 'Parcijalna depilacija', price: '9€', originalPrice:9 },
        { name: 'Bikini', price: '6€', originalPrice:6 },
        { name: 'Brazilka', price: '8€', originalPrice:8 },
        { name: 'Brazilka šećernom pastom', price: '14€', originalPrice:14 },
        { name: 'Depilacija ruku', price: '8€', originalPrice:8 },
        { name: 'Depilacija pazuha', price: '5€', originalPrice:5 },
        { name: 'Depilacija leđa', price: '10€', originalPrice:10 }, ],
        
        items5: [ 
        { name: 'Masaža lica', price: '11€', originalPrice:11 },
        { name: 'Masaža lica i glave', price: '14€', originalPrice:14 },
        { name: 'Parcijalna masaža', price: '14€' , originalPrice:14},
        { name: 'Aroma masaža cijelog tijela', price: '26€', originalPrice:26 },
        { name: 'Anticelulitna parcijalna masaža', price: '20€' , originalPrice:20},
        { name: 'Aparativna limfna drenaža', price: '11€', originalPrice:11 },
        { name: 'Total relax', price: '34€', originalPrice:34 }, ],

        items6: [ 
        { name: 'Delux shape noge', price: '34€', originalPrice:34 },
        { name: 'Delux shape trbuh', price: '20€', originalPrice:20 },
        { name: 'Delux shape paket 10 tretmana noge', price: '279€', originalPrice:279 },
        { name: 'Delux shape paket 10 tretmana trbuh', price: '146€', originalPrice:146 },
        { name: 'Delux shape full body 10 tretmana', price: '340€', originalPrice:340 }, ],

        items7: [ 
        { name: 'Šminkanje', price: '27€' , originalPrice:27},
        { name: 'Šminkanje + trepavice', price: '34€' , originalPrice:34},
        { name: 'Brow lift', price: '30€', originalPrice:30 }, ]

};
},
mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isUserLoggedIn = true;
      } else {
        this.isUserLoggedIn = false;
      }
    });
  },
methods: {
    discount1() {
      if (!this.appliedDiscount) {
      this.items.forEach(item => {
        let [price, currency] = item.price.split(" ");
        price = Number(price.slice(0, -1));
        price = (price * 0.9).toFixed(2);
        item.price = `${price}€`;
      });
      this.appliedDiscount = true;
      localStorage.setItem("items", JSON.stringify(this.items));
      this.items2.forEach(item => {
        let [price, currency] = item.price.split(" ");
        price = Number(price.slice(0, -1));
        price = (price * 0.9).toFixed(2);
        item.price = `${price}€`;
      });
      localStorage.setItem("items2", JSON.stringify(this.items2));
      this.items3.forEach(item => {
        let [price, currency] = item.price.split(" ");
        price = Number(price.slice(0, -1));
        price = (price * 0.9).toFixed(2);
        item.price = `${price}€`;
      });
      localStorage.setItem("items3", JSON.stringify(this.items3));
      this.items4.forEach(item => {
        let [price, currency] = item.price.split(" ");
        price = Number(price.slice(0, -1));
        price = (price * 0.9).toFixed(2);
        item.price = `${price}€`;
      });
      localStorage.setItem("items4", JSON.stringify(this.items4));
      this.items5.forEach(item => {
        let [price, currency] = item.price.split(" ");
        price = Number(price.slice(0, -1));
        price = (price * 0.9).toFixed(2);
        item.price = `${price}€`;
      });
      localStorage.setItem("items5", JSON.stringify(this.items5));
      this.items6.forEach(item => {
        let [price, currency] = item.price.split(" ");
        price = Number(price.slice(0, -1));
        price = (price * 0.9).toFixed(2);
        item.price = `${price}€`;
      });
      localStorage.setItem("items6", JSON.stringify(this.items6));
      this.items7.forEach(item => {
        let [price, currency] = item.price.split(" ");
        price = Number(price.slice(0, -1));
        price = (price * 0.9).toFixed(2);
        item.price = `${price}€`;
      });
      localStorage.setItem("items7", JSON.stringify(this.items7));
      }
    },
    discount2() {
      if (!this.appliedDiscount) {
      this.items.forEach(item => {
        let [price, currency] = item.price.split(" ");
        price = Number(price.slice(0, -1));
        price = (price * 0.8).toFixed(2);
        item.price = `${price}€`;
      });
      this.appliedDiscount = true;
      this.items2.forEach(item => {
        let [price, currency] = item.price.split(" ");
        price = Number(price.slice(0, -1));
        price = (price * 0.8).toFixed(2);
        item.price = `${price}€`;
      });
      this.items3.forEach(item => {
        let [price, currency] = item.price.split(" ");
        price = Number(price.slice(0, -1));
        price = (price * 0.8).toFixed(2);
        item.price = `${price}€`;
      });
      this.items4.forEach(item => {
        let [price, currency] = item.price.split(" ");
        price = Number(price.slice(0, -1));
        price = (price * 0.8).toFixed(2);
        item.price = `${price}€`;
      });
      this.items5.forEach(item => {
        let [price, currency] = item.price.split(" ");
        price = Number(price.slice(0, -1));
        price = (price * 0.8).toFixed(2);
        item.price = `${price}€`;
      });
      this.items6.forEach(item => {
        let [price, currency] = item.price.split(" ");
        price = Number(price.slice(0, -1));
        price = (price * 0.8).toFixed(2);
        item.price = `${price}€`;
      });
      this.items7.forEach(item => {
        let [price, currency] = item.price.split(" ");
        price = Number(price.slice(0, -1));
        price = (price * 0.8).toFixed(2);
        item.price = `${price}€`;
      });
      }
    },
    removeDiscount() {
    if (this.appliedDiscount) {
      this.items.forEach(item => {
        item.price = item.originalPrice+'€';
      });
        this.appliedDiscount = false;
      localStorage.setItem("items", JSON.stringify(this.items));  
      this.items2.forEach(item => {
        item.price = item.originalPrice+'€';
      });
        this.appliedDiscount = false;
        localStorage.setItem("items2", JSON.stringify(this.items2));
      this.items3.forEach(item => {
        item.price = item.originalPrice+'€';
      });
      this.appliedDiscount = false;
      localStorage.setItem("items3", JSON.stringify(this.items3));
      this.items4.forEach(item => {
        item.price = item.originalPrice+'€';
      });
      this.appliedDiscount = false;
      localStorage.setItem("items4", JSON.stringify(this.items4));
      this.items5.forEach(item => {
        item.price = item.originalPrice+'€';
      });
      this.appliedDiscount = false;
      
    localStorage.setItem("items5", JSON.stringify(this.items5));
      this.items6.forEach(item => {
        item.price = item.originalPrice+'€';
      });
      this.appliedDiscount = false;
      
    localStorage.setItem("items6", JSON.stringify(this.items6));
      this.items7.forEach(item => {
        item.price = item.originalPrice+'€';
      });
      this.appliedDiscount = false;
     localStorage.setItem("items7", JSON.stringify(this.items7));           
  }  
},
created() {
  this.items = localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : this.items;
  this.appliedDiscount = localStorage.getItem("appliedDiscount")
    ? JSON.parse(localStorage.getItem("appliedDiscount"))
    : false;
}
},
};
</script>