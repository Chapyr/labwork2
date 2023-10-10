const mongoose = require('mongoose');
// Define schemas
const custSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    city: { type: String, required: true },
    status: { type: String, required: true }
//created_at: { type: Date, default: Date.now }
});const purchSchema = new mongoose.Schema({
    product: { type: String, required: true },
    qty: { type: Number, required: true },
    price: { type: String, required: true }});
    const customers = mongoose.model('customers', custSchema);
    const purchases = mongoose.model('purchases', purchSchema);
    const mySchemas = {'customers':customers,'purchases':purchases};
    module.exports = mySchemas