const express = require('express');
const fs = require('fs');

const app = express();
const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/src/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
    return res.status(200).json({
        status: 'sucess',
        data: {
            tours,
        },
    });
});
app.post('/api/v1/tours', (req, res) => {
    console.log(req.body);
    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newId }, req.body);
    tours.push(newTour);

    fs.writeFile(
        `${__dirname}/src/dev-data/data/tours-simple.json`,
        JSON.stringify(tours),
        (err) => {
            if (err) return res.status(500).json({ annwer: err.message });
            res.status(201).json({ status: 'sucess', data: newTour });
            res.status(200).send('Done');
        }
    );
});

app.listen(5000, () => {
    console.log('listenning...');
});
