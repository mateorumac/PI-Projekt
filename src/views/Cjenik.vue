<template>

  <div class="container3">
    <h1> Cjenik usluga </h1>
    <ul class="pricelist">
      <li v-for="item in items" :key="item.name" class="item">
        <span class="item-name">{{ item.name }}</span>
        <span class="item-price">{{ item.price }}</span>
      </li>
    </ul>
  </div>
</template>
    
<style>
.container3 {
  padding-top: 3%;
  padding-bottom: 3%;
  width: 55%;
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

li.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  border-bottom: 1px solid #000000;
  padding: 10px;
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
        { name: 'Item 1', price: '$10' },
        { name: 'Item 2', price: '$20' },
        { name: 'Item 3', price: '$30' },
],
};
},
};
</script>


