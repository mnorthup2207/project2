const db = require("../models");
const Sequelize = require('sequelize');
var Op = Sequelize.Op;
let user

const getUserStreamData = async (array) => {
    user = await db.Stream
        .findAll({
            where: {
                id: {
                    [Op.in]: array
                }
            },
            include: [{
                model: db.User,
                as: 'users',
            }]
        })
    return user;
}

module.exports = {
    streamCountByUser: (req, res) => {
        db.UserStreams
            .findAll(
            {
                where: {
                    userId: req.user.id
                }
            }
            )
            .then(dbModel => {
                let dataArray = [];
                for (data of dbModel) {
                    dataArray.push(data.dataValues.streamId);
                }
                getUserStreamData(dataArray);
                // console.log("response", response);
                res.json(user);
            })
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
    },
    getUserStreamData: (req, res) => {
        db.UserStreams
            .findAll(
            {
                where: {
                    streamId: {
                        [Op.in]: dataArray
                    }
                }
            }
            ).then(dbModel => console.log(dbModel));
    }

};