<template>
    <div>
    <h2>Add Customer</h2>
    <form @submit.prevent="insertData">
    <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="customer.name" class="form-control" required />
    </div>
    <div class="form-group">
    <label for="age">Age:</label>
    <input type="number" id="age" v-model="customer.age" class="formc-ontrol" required />
    </div>
    <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" id="email" v-model="customer.email" class="form-control" required />
    </div>
    <div class="form-group">
    <label for="city">City:</label>
    <input type="text" id="city" v-model="customer.city" class="form-control" required />
    </div>
    <button type="submit" class="btn btn-primary">Add Customer</button>
    </form>
    </div>
    </template>
    <script>
    export default {
    data() {
    return {
    customer: {
    name: '',
    age: 0,
    email: '',
    city: '',
    },
    };
    },
    methods: {
    insertData() {
    // Send a POST request to your server with customer data
    fetch('http://localhost:4000/insertdata', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(this.customer),
    })
    .then((response) => {
    if (response.ok) {
    console.log('Data inserted successfully');
    // You can add a success message or redirection logic here if needed
    }
     else {
    console.error('Failed to insert data');
    }
    })
    .catch((error) => {
    console.error('Error:', error);
    });
    },
    },
    };
    </script>
    <style scoped>
    /* Add your custom CSS styles here */
    </style>