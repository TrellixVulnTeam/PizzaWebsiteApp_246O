<template>
  <div>
    <button @click="navigateTo('cart')" class="cart">
      <p v-for="menu in cart" :key="menu">
        {{ counter }}
      </p>
      <i class="fas fa-shopping-cart"></i>
    </button>

    <div v-if="page === 'cart'">
      <CartDetails :removeItemFromCart="removeItemFromCart" :cart="cart" />
    </div>
    <div v-if="page === 'products'">
      <Menu @clicked="updateCart" @change="counter += 1" />
    </div>
  </div>
</template>
<script>
import Menu from "../views/Menu";
import CartDetails from "../components/CartDetails";

export default {
  components: {
    Menu,
    CartDetails,
  },
  data() {
    return {
      page: "products",
      cart: [],
      counter: 0,
    };
  },
  methods: {
    updateCart(menu, selected) {
      if (menu.quantity === 0) {
        menu.quantity += 1;
        this.cart.push(menu);
      } else {
        menu.quantity += 1;
      }
      if (selected === 421) {
        this.cart.push(menu.cm30price);
      } else if (selected === 422) {
        this.cart.push(menu.cm40price);
      } else {
        this.cart.push(menu.cm50price);
      }
    },

    navigateTo(page) {
      this.page = page;
    },
    removeItemFromCart(menu) {
      this.cart.splice(this.cart.indexOf(menu), 1);
    },
  },
};
</script>
<style lang="scss" scoped>
.greenColor {
  background: green;
}
.cart {
  text-decoration: none;
  text-align: left;
  background: none;

  .fa-shopping-cart {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: orangered;
    text-align: center;
    justify-content: center;
    font-size: 40px;
    margin-top: 15px;
    padding: 15px 0 10px;
  }
  p {
    position: absolute;
    margin: 15px 60px;
    color: white;
    font-size: 20px;
    font-weight: 700;
  }
}
</style>
