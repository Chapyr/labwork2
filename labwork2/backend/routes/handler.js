const express = require('express');const router = express.Router();
//const Schemas = require('../models/Schemas.js');
//const { SchemaTypeOptions } = require('mongoose');
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