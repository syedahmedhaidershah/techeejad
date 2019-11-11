let col = null;

const getAll = async (req, res, next) => {
    const list = await col.find({}).toArray();
    res.send({ error: false, message: list });
};

module.exports = (router, io) => {
    col = (__filename.includes('\/')) ?
        db.collection(__filename.split('\/').splice(-1)[0].split('.')[0]) :
        db.collection(__filename.split('\\').splice(-1)[0].split('.')[0]);

    router.post('/getall', getAll);
};