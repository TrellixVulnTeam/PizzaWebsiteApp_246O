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
      switch (selected) {
        case (selected = 421):
          selected = menu.cm30price;
          break;
        case (selected = 422):
          selected = menu.cm40price;
          break;
        case (selected = 423):
          selected = menu.cm50price;
          break;
      }

      if (!this.cart.includes(menu.cm30price)) {
        ++menu.quantity;
        this.cart.push(
          menu.pizzaname,
          menu.ingredients,
          menu.quantity,
          selected
        );
      } else {
        ++menu.quantity;
      }
    },

    navigateTo(page) {
      this.page = page;
    },
  },
};
</script>
<style lang="scss" scoped>
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
