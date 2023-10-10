<template>
<div>
  <products/>
  <hr>
  <customers/>
  </div>
  </template>
  <script>import Products from "./components/ProductComponent.vue"
  import Customers from "./components/CustomerComponent.vue"
  export default {
    name:"App",
    components:{
      Products,Customers}};
      </script>
    <style>
    </style>