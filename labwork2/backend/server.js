
const express = require('express'); // Express.js framework
const bodyParser = require('body-parser'); // Body parsing middleware
var cors = require('cors') // important for cross domain scripting between server port 4000 and Client port 3000
const routesHandler = require('./routes/handler.js'); // Custom route handler module
const mongoose = require('mongoose');
require('dotenv/config');

// Create an Express application instance
const app = express();

// Middleware setup
app.use(bodyParser.urlencoded({ extended: false })); // Parse URL-encoded bodies
app.use(bodyParser.json()); // Parse JSON bodies
app.use(cors())
// Mount route handler
app.use('/', routesHandler); // Mount routesHandler at the root path

//db connection to cloud
// mongoose.connect(process.env.DB_URI, {useNewUrlParser: true,useUnifiedTopology: true }).then(()=>{
//     console.log('DB connected');
//     }).catch( (err)=> {
//     console.log(err)
//     });

const PORT = process.env.PORT ||4000 // backend routing port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
