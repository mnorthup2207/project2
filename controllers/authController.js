const db = require("../models");

module.exports = {
    create: (req, res) => {
        db.User
            .create({
            email: req.body.email,
            password: req.body.password
            })
            .then(() => res.redirect(307, "/login"))
            .catch((err) => res.status(401).json(err));
    }
}