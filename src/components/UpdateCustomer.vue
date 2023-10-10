<template>
    <div>
    <h2>Update Customer</h2>
    <form @submit.prevent="updateCustomer">
    <div class="form-group">
    <label for="customerId">Customer ID:</label>
    <input type="text" id="customerId" v-model="customerId" class="form-control" required />
    </div>
    <div class="form-group">
    <label for="updateName">New Name:</label>
    <input type="text" id="updateName" v-model="updateData.name" 
    class="form-control" />
    </div>
    <div class="form-group">
    <label for="updateAge">New Age:</label>
    <input type="number" id="updateAge" v-model="updateData.age" 
    class="form-control" />
    </div>
    <div class="form-group">
    <label for="updateEmail">New Email:</label>
    <input type="email" id="updateEmail" v-model="updateData.email" 
    class="form-control" />
    </div>
    <div class="form-group">
    <label for="updateCity">New City:</label>
    <input type="text" id="updateCity" v-model="updateData.city" 
    class="form-control" />
    </div>
    <button type="submit" class="btn btn-primary">Update Customer</button>
    </form>
    </div>
    </template>
    <script>
    export default {
    data() {
    return {
    customerId: '',
    updateData: {
    name: '',
    age: 0,
    email: '',
    city: '',
    },
    };
    },
    methods: {
    updateCustomer() {
    // Send a PUT request to your server with the customer ID and updated data
    fetch(`http://localhost:4000/updatecustomer/${this.customerId}`, {
    method: 'PUT',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(this.updateData),
    })
    .then((response) => {
    if (response.ok) {
    return response.json();
    } else {
    console.error('Failed to update customer');
    throw new Error('Customer not found');
    }
    })
    .then((updatedCustomer) => {
    console.log('Customer updated successfully:', updatedCustomer);
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