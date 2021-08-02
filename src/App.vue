<template>
  <div id="app">

      <Nav/>

   <div class="body">

       <Home/>

   </div>

   <div class="footer">

   </div>

 </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Home,
    Login
  },
  data() {
    return {

    }
  },
  computed: {
    purchaseSumCalc() {
      let sum = 0
      return sum + '₽'
    }
  }
}</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  transition: .1s ease;
  width:100%;
  padding: 0 !important;
}

div
{
    display: flex;
    flex-direction: column;
}



/******************************************************************************/
.body {
  background: ;
}

/******************************************************************************/
.footer {
  min-height: 34vh;
  position:;
  bottom: 0;
  background:  green;
}
</style>
