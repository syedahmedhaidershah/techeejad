const col = db.collection(__filename.split('\\').splice(-1)[0].split('.')[0]);

const getAll = (req, res, next) => {
    col.find({})
        .toArray()
        .then(list => {
            res.send({ error: false, message: list });
            console.log(list);
        });
};

module.exports = (router, io) => {
    router.post('/getall', getAll);
};