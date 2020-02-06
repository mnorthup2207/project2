const db = require("../models");

module.exports = {
    findByStream: function(req, res) {
        db.Stream
            .findAll({
                where: {
                    userId: req.user.id
                }
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }
}