const db = require("../models");

module.exports = {
    findByUser: function(req, res) {
        db.UserRafts
            .findAll({
                where: {
                    userId: req.user.id
                }
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findByRaft: function(req, res) {
        db.Rafts
            .findAll({
                where: {
                    id: req.user.id
                }
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    uploadRaft: function (req, res) {
        console.log(req)
        db.Raft
            .create(
            {
                name: req.name,
                location: req.location,
                UserId: req.UserId
            })
            // .then(data => res.json(data))
    }
}