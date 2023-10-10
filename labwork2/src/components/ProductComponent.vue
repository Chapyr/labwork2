<template>
<div>
    <h1>This is products data from node/express server</h1>
    <ul>
        <li v-for="item in responseData.data.items" :key="item.id">{{ item.name}}</li>
</ul>
</div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'ProductsPage',
    data() {
        return {
            responseData: {message: '',data: { items: [] },},};},
            mounted() {
                // Make an Axios GET request to your backend endpoint
                axios.get('http://localhost:4000/prods')
                .then((response) => {
                    // Assign the response data to the responseData property
                    this.responseData = response.data;})
                    .catch((error) => {console.error('Error fetching data:', error);});
                },}</script>
                
              <style scoped>
                
              </style>