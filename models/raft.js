module.exports = (sequelize, DataTypes) => {
    const Raft = sequelize.define("Raft", {
        name: {
            type: DataTypes.STRING
            , allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER
            , allowNull: false
        },
        type_id: {
            type: DataTypes.INTEGER
            , allowNull: false
            , defaultValue: 1
        },
        location: {
            type: DataTypes.STRING
            , allowNull: false
        }
    });

    return Raft;
};