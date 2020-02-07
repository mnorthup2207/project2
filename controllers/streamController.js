const db = require("../models");

module.exports = {
    createStream: (req, res) => {
        db.Stream
            .create({
                count: 0,
                createdBy: req.user.id
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(401).json(err));
    }
};