const { orders, products } = require('../data/data');

exports.createOrder = (req, res) => {
    const { productId, quantity } = req.body;

    const product = products.find(p => p.id == productId);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    const order = {
        id: orders.length + 1,
        product,
        quantity,
        total: product.price * quantity
    };

    orders.push(order);
    res.json(order);
};

exports.getOrders = (req, res) => {
    res.json(orders);
};