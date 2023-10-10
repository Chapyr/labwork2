<template>
<div>
  <products/>
  <hr>
  <customers/>
  <hr>
  <AddCustomers/>
  <hr>
  <DeleteCustomers/>
  <hr>
  <UpdateCustomers/>
</div>
  </template>
  <script>
  import Products from "./components/ProductComponent.vue"
  import Customers from "./components/CustomerComponent.vue"
  import AddCustomers from "./components/AddCustomer.vue"
  import DeleteCustomers from "./components/DeleteCustomer.vue"
  import UpdateCustomers from "./components/UpdateCustomer.vue"

  export default {
    name:"App",
    components:{
      Products,Customers,AddCustomers,DeleteCustomers,UpdateCustomers}};
      </script>
    <style>
    </style>