const db = require("../models");

module.exports = {
    streamCountByUser: (req, res) => {
        db.UserStreams
            .findAll({
                where: {
                    userId: req.user.id
                }
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(401).json(err));
    },
    createUserStream: (req, res) => {
        db.UserStreams
            .create({
                streamId: req.body.streamId,
                userId: req.body.userId
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(401).json(err));
    }
};