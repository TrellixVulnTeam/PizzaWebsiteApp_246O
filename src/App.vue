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
</style>
