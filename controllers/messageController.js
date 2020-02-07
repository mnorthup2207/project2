const db = require("../models");

module.exports = {
    findByStream: function(req, res) {
        db.Stream
            .findAll({
                where: {
                    StreamId: req.params.streamId
                }
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }
}