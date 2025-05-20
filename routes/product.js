const express = require('express');
const Product = require('../models/Product');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

//Create Product
router.post('/', auth, async (req, res) => {
    const { title, description, price, image } = req.body;
    const product = await Product.create({ title, description, price, image });
    res.json(product);
});

//Search Product
router.get('/search', auth, async (req, res) =>{
    const {q} = req.query;
    const product = await Product.find({
        $or: [
        {title: {$regex: q, $options: 'i'}},
        {description: {$regex: q, $options: 'i'}}
    ]
});
res.json(product);
});

module.exports = router;

