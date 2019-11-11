let col = null;

const getAll = async (req, res, next) => {
    const list = await db.collection('items').find({}).toArray();
    res.send({ error: false, message: list });
};

module.exports = (router, io) => {
    col = db.collection(__filename.split('\\').splice(-1)[0].split('.')[0]);
    console.log(__filename.split('\/').splice(-1)[0].split('.')[0]);
    router.post('/getall', getAll);
};