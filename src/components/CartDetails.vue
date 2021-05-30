<template>
<div class="container"> 
    <header>
      <h1>In Cart </h1>
      <button @click="back()">buttonback</button>
    </header>
     <div v-for="(menu, index) in cart" :key="index">
                <h2> {{ menu.pizzaname }} </h2>
                <p> {{ menu.ingredients }} </p>  
     </div>
          <button class="minusbutton" v-show="cart > 0 " v-on:click="removeFromCart()">X</button>
      </div>
      
</template>
<script>
export default {
    props: ['cart'],
    methods: {
         back() {
      this.$router.go(-1)
    },
    menuBack() {
        this.$router.push({ name: 'Home' })
    },
      removeItemFromCart(product) {
      this.$emit("removeItemFromCart", product);
    },
    }
}

</script>

<style lang="scss" scoped>
  @import url('https://use.fontawesome.com/releases/v5.8.2/css/all.css');

.container {
      max-width: 920px;
      height: 500px;
      margin: 40px auto;
      background: #555;
      border-radius: 15px;
      box-shadow: 3px 3px 0 black;
    
   .menu {
      display: flex;
}
}
   header {
        width: 100%;
        height: 60px;
        background: orange;
        border-radius: 5px;
        display: flex;
        padding: 10px;
     
        h1 {
            width: 100%;
            text-align: left;
            margin-left: 60px;
        }

        .psize {
            width: 100%;
            display: flex; 
            text-align: center;
            justify-content: center;
            padding: 10px;
           

           p {
               margin-left: 17px;
               padding: 0;

           }
        }
    }
    i {
       pointer-events: none; 
    }

h2 {
    font-size: 30px;
    color: #dddddd;
    padding: 5px;
    margin-left: 15px;
}
a {
    text-decoration: none;
}
p {
    font-size: 20px;
    padding:0 20px 5px;
    color: rgb(184, 169, 169);
}

.pizzasize {
    display: flex;

    p {
        margin-top: 40px
    }
}

.pizzaname {
    display: flex;
    margin: 16px 45px 0;
    max-height: 80px;
    line-height: 30px;
}
.pizzaname2 {
    width: 500px;
}
button {
    width: 95px;
    height: 40px;
    margin: 32px 20px;
    line-height: 25px;
    font-size: 13px;
    background: orange;
    text-align: center;
    justify-content: center;
    font-weight: 600;

    &:hover {
        background: orangered;
        cursor: pointer;
    }
}

.minusbutton {
    text-align: center;
    justify-content: center;
    background: none;
    width: 30px;
    height: 30px;
    color: white;
    border-radius: 50%;
    background: red;
    margin: 37px auto;
    padding: 0;

    &:hover {
        background: #ff0000;
    }
}
</style>