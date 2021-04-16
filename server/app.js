const Bundler = require('parcel-bundler');
const express = require('express');
const server = express();

server.use(express.static('dist'))

require('dotenv').config();

server.listen(process.env.PORT, '0.0.0.0', () => console.log('Listening on port: ' + process.env.PORT));

//const file = 'client/index.html'; // Pass an absolute path to the entrypoint here
//const bundlerOptions = { production: process.env.NODE_ENV === 'production' };

// Initialize a new bundler using a file and options
//const bundler = new Bundler(file, bundlerOptions);

// Let express use the bundler middleware, this will let Parcel handle every request over your express server
//server.use(bundler.middleware());

// Listen on EvenNode Port
//server.listen(process.env.PORT, '0.0.0.0', () => console.log('Listening on port: ' + process.env.PORT));