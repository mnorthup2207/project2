const db = require("../models");

module.exports = {
    create: (req, res) => {
        db.User
            .create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: req.body.password
            })
            .then(() => res.redirect(307, "/api/auth/login"))
            .catch((err) => res.status(401).json(err));
    }
}