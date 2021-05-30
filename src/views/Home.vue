<template>
<div>
<!--  <div class="home">
  <div class="middlebutton">
    <button class="one" type="submit">
      <router-link :to="{ name: 'Menu' }"> Check our menu</router-link>
     </button>
    <button class="two" type="submit">
      <router-link :to="{ name: 'Contact' }">Call us 725-321-909 </router-link>
    </button>
   </div>
  </div>-->
</div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.middlebutton {
  text-align: center;
  justify-content: center;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);


  button {
    width: 300px;
    height: 85px;
    font-weight: 800;
    background: orange;
    font-size: 20px;
    cursor: pointer;
    margin: 0;

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
</style>