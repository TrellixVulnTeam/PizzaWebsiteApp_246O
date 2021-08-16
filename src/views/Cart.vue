<template>
<div class="container"> 
    <header>
        <h1>Adress and payment method</h1>
          <button @click="back">Go back</button>
    </header>
    <form action="#" @submit.prevent="handleSubmit"> 
        <div class="columngroup">
        <div class="column">

        <label>Name: </label>
        <input type="text" requaired v-model.trim.lazy="name"> 

       <label>Email: </label>
        <input type="email" requaired v-model="email">

    

           <label>Telephone</label>
        <input type="number" requaired v-model.trim.number="telephone">
     
        </div>
    <div class="column">
        <label>Adress: </label>
        <input type="text">

        <label>zip-code: </label>
        <input type="email" requaired>

        <label>Additional information</label>
        <input type="text">
  
    </div>
        </div>
          <div class="submit">
        <button :disabled="isSending || sent">Submit</button>
    </div>

    </form>
         <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li class="nameerror" v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
  </p>
<!--  <div class="toast" v-else>Twoja wiadomość została wysłana!</div>-->
</div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            telephone: null,
            name: null,
            nameError: '',
             isSending: false,
            sent: false,
            errors: []
        }
    },
    filters: {

    },
    methods: {
  back() {
      this.$router.go(-1)
    },
    handleSubmit() {
         if (this.name  && this.telephone) {
        return true;
      }



         this.isSending = true;
    //  setTimeout(() => {           this.sent = true;       }, 2000);


    this.errors = [];

    if(!this.telephone) {
        this.errors.push("telephone required")
    } 
    else if(this.telephone.length < 9) {
        this.errors.push("telephone must contain at least 9 numbers")    
    };
                 if (!this.name) {
        this.errors.push('Name required.');
      }
        e.preventDefault();
    },

    },
 
    
}
</script>

<style lang="scss" scoped>
.container {
      max-width: 920px;
      height: 625px;   
      background: #555;
      border-radius: 15px;
      box-shadow: 3px 3px 0 black;
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
            margin-left: 40px;
        }
           
        p {
             margin-left: 17px;
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
            cursor: pointer;

    &:hover {
        background: orangered;
        color: black;
        cursor: pointer;
    }
}
    }
.nameerror {
    color: red;
}

form {
    width: 800px;
    margin: 30px 50px;
    padding: 30px;
    border-radius: 10px;
    
}
.columngroup {
display: flex;
}
.column {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 0 40px;
    flex-basis: 100%;
    width: 49%;
}
label {
    color: #aaa;
    display: inline-block;
    margin: 15px 0 15px;
    font-size: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid white;
    color: #555;
}

.submit {
    margin-top: 40px;
    text-align: center;

  button {
    background: orange;
    border-radius: 20px;
    margin: 0;
}
}

</style>