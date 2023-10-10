const express = require('express');const router = express.Router();
const Schemas = require('../models/Schemas.js');
const { SchemaTypeOptions } = require('mongoose');
const path = require("path");
const axios = require('axios');
const { request } = require('express');
const bodyParser = require('body-parser');
router.use((req, res, next) => {res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type, Accept");
next();});
// This geneates welcomes message for the API at root url "/"
router.get('/', (req, res) => 
{res.end('This is my root API http response');});
router.get('/prods', (req, res) => {
    const responseObject = {message: 'This is a JSON response',
    data: {items: [{ id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },],},};
    res.json(responseObject);});

    router.get('/cust', (req, res) => {
        const responseObject = {
            message: 'This is a JSON response',
            data: {items: [
            { id: 1, name: 'Customer 1' },
            { id: 2, name: 'Customer 2' },
            { id: 3, name: 'Customer 3' },],},};
            res.json(responseObject);});module.exports = router;
            router.get('/fetchproducts', async (req, res) => { 
                 try { 
                 const purchases = Schemas.purchases; 
                 // Use await with find() to wait for the query to complete
                 const ProdData = await purchases.find({}).exec();
                
                 if (ProdData) {
                 res.end(JSON.stringify(ProdData));
                 console.log(ProdData);
                 } else { 
                 res.end();
                 } 
                 } catch (err) {
                 console.error(err); // Log the error for debugging purposes
                 res.status(500).send('Internal Server Error');
                 } 
                });
// insert into database
router.post('/insertdata', (req, res) => {
    const newData = new Schemas.customers ({
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
    city:req.body.city,
    status: "Active",
    });
    newData.save()
    .then(result => {
    //res.send('Data inserted successfully');
    console.log('Data inserted successfully');
    })
    .catch(error => {
    res.status(500).send(error);
    });
    });
    // delete from database
    router.delete('/deletecustomer/:id', async (req, res) => {
    try {
    const customerId = req.params.id;
    const deletedCustomer = await
    Schemas.customers.findByIdAndDelete(customerId).exec();
    if (deletedCustomer) {
    res.end(JSON.stringify(deletedCustomer));
    console.log('Customer deleted successfully');
    } else {
    res.status(404).send('Customer not found');
    }
    } catch (err) {
    console.error(err); // Log the error for debugging purposes
    res.status(500).send('Internal Server Error');
    }
    });
    //update from database
    router.put('/updatecustomer/:id', async (req, res) => {
    try {
    const customerId = req.params.id;
    const updates = req.body;
    const updatedCustomer = await
    Schemas.customers.findByIdAndUpdate(customerId, updates, { new: true
    }).exec();
    if (updatedCustomer) {
    res.end(JSON.stringify(updatedCustomer));
    console.log('Customer updated successfully');
    } else {
    res.status(404).send('Customer not found');
    }
    } catch (err) {
    console.error(err); // Log the error for debugging purposes
    res.status(500).send('Internal Server Error');
    }
    });