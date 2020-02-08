const db = require("../models");

module.exports = {
    findByStream: function(req, res) {
        db.Message
            .findAll({
                where: {
                    StreamId: req.params.streamId
                }
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    createMessage: (req, res) => {
        db.Stream
            .findOne({
                where: {
                    id: req.params.streamId
                }
            }).then(dbModel => dbModel)
        // db.Message
        //     .create({
                
        //     })
    }
}