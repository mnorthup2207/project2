const db = require("../models");

let count;

module.exports = {
    findByStream: function(req, res) {
        db.Message
            .findAll({
                where: {
                    StreamId: req.body.id
                }
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    createMessage: function (req, res) {
        // let id = req.body.streamId
        // getStreamMessageData(id, res);
        // console.log(data);
        db.Stream
            .findOne({
                where: {
                    id: req.body.id
                }
            })
            .then(data => {
                count = data.dataValues.count
                count++;
                console.log(count);
                db.Message
                    .create({
                        sequence: count,
                        message: req.body.message,
                        UserId: req.user.id,
                        StreamId: req.body.id
                    })
                    .then(dbModel => res.json(dbModel))
                    .catch(err => res.status(401).json(err));
            })
    }
}