<template>
<div>
<header>
  <div id="nav">
       <button @click="navigateTo('cart')">
        <div class="cart">
                  <p> {{ cart.length }} </p>
            <i class="fas fa-shopping-cart"></i>
             </div>
       </button>

      
        
    <router-link to="/">Home</router-link> 
    <router-link :to="{ name: 'Promotions' }">Promotions</router-link>
 
    <router-link :to="{  name: 'Contact' }">Contact</router-link>
 
  </div>
   <router-view />
  </header>

  <div v-if="page === 'cart'">
          <CartDetails
          v-on:removeItemFromCart="removeItemFromCart"
           :cart="cart" />
        </div>
         <div v-if="menu === true">

  <Menu
   @clicked="updateCart"
   v-if="page === 'products'"
    />
    
         </div>
       
</div>
</template>
<script>
import Menu from './views/Menu'
import CartDetails from './components/CartDetails'

export default {
  name: 'App',
  components: {
    Menu,
    CartDetails
  },
data(){
  return {
    page: 'products',
    cart: [],
    menu: true,
    
  }
},
  methods: {
    updateCart(menu) {
      this.cart.push(menu);
    },
     navigateTo(page) {
      this.page = page;
    },
     removeItemFromCart(product) {
      this.cart.splice(this.cart.indexOf(product), 1);
    },
    
  
    redirect() {
      this.$router.push({ name: 'Home'})
    },
    back() {
      this.$router.go(-3)
    },
    forward() {
      this.$router.go(1)
    },
  },
  
}

</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: url(./assets/pizza.jpg);
  background-size: cover;
}
header {
width: 100%;
}
.pizzalogo {
  background: whitesmoke;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
#nav {
  padding: 30px;
  text-align: right;
  display: flex;
}

#nav a {
  font-weight: bold;
  color: #ddd;
  font-size: 30px;
  text-decoration: none;
  padding: 10px 20px;
}

#nav a.router-link-exact-active {
  color: #42b983;
 border-bottom: 2px solid cyan;
 transition: 500ms ease;
}
button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 10px;
}
.middlebutton {
  text-align: center;
  justify-content: center;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

a {
  text-decoration: none;
  color: white;
}
  button {
    width: 300px;
    height: 85px;
    font-weight: 800;
    background: orange;
    font-size: 20px;
    cursor: pointer;
    margin: 0;
    text-decoration: none;
  

     &:hover {
       background: orangered;
     }
  } 
  .one {
    border-bottom-right-radius: 0;
    margin: 0 -10px;
  }
  .two {
    margin-top: 60px;
    border-top-left-radius: 0;
    color: black;
  }
}
.cart {
      text-decoration: none;
      text-align: left;

 .fa-shopping-cart {
   width: 50px;
   height: 50px;   
   border-radius: 50%;
   background-color: orangered;
   text-align: center;
   justify-content: center;
   font-size: 30px;
   padding: 10px 0 10px;
     
}
  p {
      position: fixed;
      margin:0 30px 0px;
    
      font-size: 20px;
      font-weight: 700;
     
      color: black;
  }
}
</style>
