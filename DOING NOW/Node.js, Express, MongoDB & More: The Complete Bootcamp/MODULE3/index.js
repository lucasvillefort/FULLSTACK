const express = require('express');

const {
    getTours,
    getByNumbers,
    postTours,
    updateTours,
    deleteByNumber,
} = require('./src/controllers/controller1');

const app = express();

app.get('/api/v1/tours', getTours);

app.get('/api/v1/tours/:id', getByNumbers);

app.post('/api/v1/tours', postTours);

app.patch('/api/v1/tours/:id', updateTours);

app.delete('/api/v1/tours/:id', deleteByNumber);

app.listen(5000, () => {
    console.log('listenning...');
});
