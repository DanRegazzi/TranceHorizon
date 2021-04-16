const Bundler = require('parcel-bundler');
const server = require('express')();

require('dotenv').config();

const file = 'client/index.html'; // Pass an absolute path to the entrypoint here
const bundlerOptions = { production: process.env.NODE_ENV === 'production' };

// Initialize a new bundler using a file and options
const bundler = new Bundler(file, bundlerOptions);

// Let express use the bundler middleware, this will let Parcel handle every request over your express server
server.use(bundler.middleware());

// Listen on EvenNode Port
server.listen(process.env.PORT, () => console.log('Listening on port: ' + process.env.PORT));