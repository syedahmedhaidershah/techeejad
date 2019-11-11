const col = db.collection(__filename.split('\\').splice(-1)[0].split('.')[0]);

const getAll = async (req, res, next) => {
    let list = [];
    for (;list.length == 0;) {
        list = await col.find({}).toArray();
    }
    res.send({ error: false, message: list });
};

module.exports = (router, io) => {
    router.post('/getall', getAll);
};