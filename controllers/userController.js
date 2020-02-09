const db = require("../models");
const Sequelize = require('sequelize');
var Op = Sequelize.Op;


module.exports = {
    GetUsers: (req, res) => {
        db.User
            .findAll({
                where: {
                    id: {
                        [Op.not]: req.user.id
                    }
                }
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(401).json(err))
    },
    getCurrentUser: (req, res) => {
        db.User
            .findOne({
                where: {
                    id: req.user.id
                }
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(401).json(err))
    }
}