<template>
  <div class="container"> 
    <header>
        <h1>pizza dough</h1>
        <div class="psize">
        <p>30cm</p>
        <p>40cm</p>
        <p>50cm</p>
        </div>
    </header>
  <div class="menu" v-for="(menu, index) in menus" :key="index">
   <!--   <router-link :to="{ name: 'Menu'}"></router-link>-->
      <div class="pizzaname">
          <div class="pizzaname2">
          <h2> {{ menu.pizzaname }} </h2>
                <p> {{ menu.ingredients }} </p>   
              
          </div>
    <div class="pizzasize">
          <p> {{ menu.cm30price }} </p>
          <p> {{ menu.cm40price }} </p>
          <p> {{ menu.cm50price }} </p>

         <button class="button" @click="addItemToCart(menu)">Add to cart</button>   
          <button class="minusbutton" v-show="cart > 0 " v-on:click="removeFromCart()">X</button>
      </div>
  </div>
    
  </div>
  <div>
  </div>
</div>
</template>

<script>
export default {
    name: 'product-item',
    props: {
        productData: Object
    },
    methods: {
     addItemToCart() {
      this.$emit("clicked", this.productData.id);
    },
}
}
</script>

<style>

</style>