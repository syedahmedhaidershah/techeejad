const col = db.collection(__filename.split('\\').splice(-1)[0].split('.')[0]);

const getAll = async (req, res, next) => {
    col.find({}).toArray().then(a => console.log(a));
    db.collection('items').find({}).toArray().then(a => console.log(a));
    console.log(list);

    const list = await col.find({}).toArray();
    res.send({ error: false, message: list });
};

module.exports = (router, io) => {
    router.post('/getall', getAll);
};