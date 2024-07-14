const fs = require('fs');

const tours1 = JSON.parse(
    fs.readFileSync(__dirname + '/../dev-data/data/tours-simple.json')
);

const getTours = (req, res) => {
    return res.status(200).json({
        status: 'sucess',
        data: {
            tours1,
        },
    });
};

const getByNumbers = (req, res) => {
    // i can put how much params that i want to at url
    const id = req.params.id;
    if (Number(id) > tours1.length)
        return res.status(404).json({ answer: 'not found' });
    const tour = tours1.find((el) => el.id === Number(id));
    return res.status(200).json({
        status: 'sucess',
        data: {
            tour: tour,
        },
    });
};

const postTours = (req, res) => {
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
};

const updateTours = (req, res) => {
    const id = req.params.id;
    lastid = Number(tours1[tours1.length - 1].id);
    if (Number(id) > lastid)
        return res.status(404).json({ answer: 'not exist' });
    res.status(200).json({ answer: 'it were updated' });
};

const deleteByNumber = (req, res) => {
    const id = Number(req.params.id);
    lastid = Number(tours1[tours1.length - 1].id);
    if (Number(id) > lastid)
        return res.status(404).json({ answer: 'not exist' });
    res.status(200).json({ answer: 'it were updated' });
};

module.exports = {
    deleteByNumber,
    getByNumbers,
    getTours,
    postTours,
    updateTours,
};
