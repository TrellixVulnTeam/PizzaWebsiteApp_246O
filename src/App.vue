<template>
<div>
<header>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link :to="{ name: 'Reservation' }">Reservation</router-link>
  </div>
</header>
      <router-view />
</div>
</template>
<script>

export default {
  name: 'App',
data(){
  return {
    page: 'products',
cart:[],

  }
},
  methods: {
     removeItemFromCart(product) {
      this.cart.splice(this.cart.indexOf(product), 1);
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

#nav {
  padding: 30px;
  float: right;
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
}
</style>
