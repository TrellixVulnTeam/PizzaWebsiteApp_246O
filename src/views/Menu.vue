<template>
  <div class="container">
    <header>
      <h1>
        Classic pizza
        <p>sasaasa {{ selected }}</p>
      </h1>

      <div class="psize">
        <p>30cm</p>
        <p>40cm</p>
        <p>50cm</p>
      </div>
    </header>
    <div class="menu" v-for="(menu, index) in menus" :key="index">
      <div class="pizzaname">
        <div class="pizzaname2">
          <h2>{{ menu.pizzaname }}</h2>
          <p>{{ menu.ingredients }}</p>
        </div>
        <div class="pizzasize">
          <p>{{ menu.cm30price }}</p>
          <p>{{ menu.cm40price }}</p>
          <p>{{ menu.cm50price }}</p>

          <div class="buttonSelect">
            <div @change="addItemToCart(menu,selected)">
              <select v-model="selected" class="form-select">
                <option disabled selected>Add to Cart</option>
                <option
                  v-for="option in options"
                  :value="option.id"
                  :key="option.id"
                >
               
                  {{ option.value }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>
<script>
export default {
  name: "Menu",
  data() {
    return {
      selected: "",
      menus: [
        {
          pizzaname: "Margaritta",
          ingredients: "tomato-souce,paprika,onion",
          cm30price: 19,
          cm40price: 26,
          cm50price: 39,
          id: 1321,
          quantity: 0,
          full30size: this.cm30price + "misio",
          selected: this.selected,
        },
        {
          pizzaname: "Matador",
          ingredients: "tomato-souce,ham,garlic,tomato",
          cm30price: 21,
          cm40price: 28,
          cm50price: 41,
          id: 2421,
          quantity: 0,
        },
        {
          pizzaname: "Diablo",
          ingredients: "tomato-souce,paprika,onion,chillli",
          cm30price: 24,
          cm40price: 30,
          cm50price: 39,
          id: 3321,
          quantity: 0,
        },
        {
          pizzaname: "Capriciossa",
          ingredients: "tomato-souce,paprika,onion,mushrooms",
          cm30price: 21,
          cm40price: 27,
          cm50price: 37,
          id: 4441,
          quantity: 0,
        },
      ],
      options: [
        {
          value: "30cm",
          id: 421,
        },
        {
          value: "40cm",
          id: 422,
        },
        {
          value: "50cm",
          id: 423,
        },
      ],
    };
  },

  methods: {
    addItemToCart(menu,selected) {
      this.$emit("clicked", menu,selected);
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://use.fontawesome.com/releases/v5.8.2/css/all.css");

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

.selectSize {
  width: 20px;
  height: 20px;
  background: none;
  border: none;
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
    margin-right: 90px;

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
select {
  width: 115px;
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
