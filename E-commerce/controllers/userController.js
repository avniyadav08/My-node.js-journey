const { users } = require('../data/data');

exports.getUsers = (req, res) => {
    res.json(users);
};

exports.registerUser = (req, res) => {
    const { name, email } = req.body;

    const newUser = {
        id: users.length + 1,
        name,
        email
    };

    users.push(newUser);
    res.json(newUser);
};