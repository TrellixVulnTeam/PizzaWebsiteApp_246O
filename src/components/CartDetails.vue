<template>
  <div class="main">
    <header class="non-scrollable">
      <h1>In Cart</h1>
      <router-link :to="{ name: 'Cart' }">Next</router-link>
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
        :key="selected"
      >
        <p>{{ selected }}</p>
      </div>
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
    removeItemFromCart(product) {
      this.cart.splice(this.cart.indexOf(product), 1);
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
  text-align: center;
  justify-content: center;
  margin: 40px auto;
  width: 80%;
  border: 2vh solid transparent;
}
.container {
  width: 920px;
  height: 450px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  display: inline-block;
  background: #555;
  box-shadow: 3px 3px 0 black;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
.container > :not(.scrollable):not(.non-scrollable) {
  flex-shrink: 0;
}
.container > .scrollable,
.non-scrollable {
  flex-grow: 1;
}
.non-scrollable {
  overflow: hidden;
}

.scrollable {
  overflow: auto;
}
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background-color: #ebebeb;
  -webkit-border-radius: 10px;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background: #6d6d6d;
}
header {
  max-width: 920px;
  margin: auto;
  box-shadow: 3px 3px 0 black;
  height: 60px;
  background: orange;
  padding: 10px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;

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
  margin-left: 20px;

  h4 {
    margin: 10px 78px;
  }
}
.addedPizzaInformation {
  display: inline-flex;
  border-bottom: 2px solid grey;

  p {
    margin: 10px 40px auto;
    font-size: 20px;
    color: #dddddd;
    font-family: monospace;
    max-width: 15ch;
    padding: 5px;
    width: calc(13em * 0.5);

    height: 110px;
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
