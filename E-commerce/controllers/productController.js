const { products } = require('../data/data');

exports.getProducts = (req, res) => {
    res.json(products);
};

exports.getProductById = (req, res) => {
    const product = products.find(p => p.id == req.params.id);
    res.json(product);
};

exports.addProduct = (req, res) => {
    const { name, price } = req.body;

    const newProduct = {
        id: products.length + 1,
        name,
        price
    };

    products.push(newProduct);
    res.json(newProduct);
};