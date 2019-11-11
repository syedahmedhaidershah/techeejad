let col = null;

const placeOrder = async (req, res, next) => {
    const inserted = await col.insertOne(req.body);

    console.log(inserted);

    res.send({ error: false, message: `Your order for ${req.body.itemName} has been placed. Our representative will call you shortly.` });
};

module.exports = (router, io) => {
    col = (__filename.includes('\/')) ?
        db.collection(__filename.split('\/').splice(-1)[0].split('.')[0]) :
        db.collection(__filename.split('\\').splice(-1)[0].split('.')[0]);

    router.post('/placeorder', placeOrder);
};