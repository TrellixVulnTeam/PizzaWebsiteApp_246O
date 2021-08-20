<template>
<div class="main">
      <header class="non-scrollable">
      <h1>In Cart</h1>
      <button>
        <router-link :to="{ name: 'Home' }">
          buttonback
        </router-link>
      </button>
    </header>
  <div class="container scrollable">

    <div class="pizzaParametrs ">
      <h4>Name</h4>
      <h4>ingredients</h4>
      <h4>Quantity</h4>
      <h4>Price</h4>
    </div>

    <div
      class="addedPizzaInformation"
      v-for="selected in cart"
      :key="selected.id"
    >
      <p>{{ selected }}</p>
    </div>
    <router-link :to="{ name: 'Cart' }">Next</router-link>
  </div>
</div>
</template>
<script>
export default {
  props: {
    cart: Array,
  },

  methods: {
    back() {
      this.$router.go(-1);
    },

    removeItemFromCart(menu) {
      this.$emit("removeItemFromCart", menu);
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://use.fontawesome.com/releases/v5.8.2/css/all.css");

.main {
  width: 100%;
  text-align: center;
  
}
.container {
  max-width: 920px;
  height: 500px;
  display: inline-block;
  background: #555;
  border-radius: 15px;
  box-shadow: 3px 3px 0 black;

  .menu {
    display: flex;
  }
}
.container > :not(.scrollable):not(.non-scrollable) {
  flex-shrink: 0;
}
.container > .scrollable, .non-scrollable {
  flex-grow: 1;
}
.non-scrollable {
  overflow: hidden;
}

.scrollable {
  overflow: auto;
}
.light::-webkit-scrollbar {
  width: 15px;
}

header {
  max-width: 920px;

  height: 60px;
  margin: auto;
  background: orange;
   border-radius: 5px;
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
.pizzaParametrs {
  display: flex;

  h4 {
    margin: 10px 75px;
  }
}
.addedPizzaInformation {
  display: inline-flex;

  p {
    margin: 10px 40px;
    font-size: 20px;
    color: #dddddd;
    font-family: monospace;
    max-width: 15ch;
    padding: 5px;
    width: calc(13em * 0.5);;
    border: 2px solid black;
    height: 100px;
    word-wrap: break-word;
 
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
  padding: 0 20px 5px;
  color: rgb(184, 169, 169);
}

.pizzasize {
  display: flex;

  p {
    margin-top: 40px;
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
tr {
  text-align: center;
}
</style>
