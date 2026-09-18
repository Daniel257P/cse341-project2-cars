const swaggerAutogen = require('swagger-autogen')();

const host = process.env.RENDER_EXTERNAL_HOSTNAME || 'localhost:3000';
const schemes = process.env.RENDER_EXTERNAL_HOSTNAME ? ['https'] : ['http'];

const doc = {
  info: {
    title: 'Cars & Manufacturers API',
    description: 'API for managing cars and manufacturers'
  },
  host,
  schemes
};

const outputFile = './swagger.json';
const endpointsFiles = ['./server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
