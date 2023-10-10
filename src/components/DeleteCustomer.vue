<template>
    <div>
    <h2>Delete Customer</h2>
    <form @submit.prevent="deleteCustomer">
    <div class="form-group">
    <label for="customerId">Customer ID:</label>
    <input type="text" id="customerId" v-model="customerId" class="form-control" required />
    </div>
    <button type="submit" class="btn btn-danger">Delete Customer</button>
    </form>
    </div>
    </template>
    <script>
    export default {
    data() {
    return {
    customerId: '',
    };
    },
    methods: {
    deleteCustomer() {
    // Send a DELETE request to your server with the customer ID
    fetch(`http://localhost:4000/deletecustomer/${this.customerId}`, {
    method: 'DELETE',
    })
    .then((response) => {
    if (response.ok) {
    return response.json();
    } else {
    console.error('Failed to delete customer');
    throw new Error('Customer not found');
    }
    })
    .then((deletedCustomer) => {
    console.log('Customer deleted successfully:', deletedCustomer);
    // You can add a success message or redirection logic here if needed.
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