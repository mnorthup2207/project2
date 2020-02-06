module.exports = (sequelize, DataTypes) => {
    const Raft = sequelize.define("Raft", {
        name: {
            type: DataTypes.STRING
            , allowNull: false
        },
        location: {
            type: DataTypes.STRING
            , allowNull: false
        }
    });


    Raft.associate = models => {
        Raft.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            },
        });

        Raft.belongsTo(models.RaftType, {
            foreignKey: {
                allowNull: false,
                defaultValue: 1
            },
        });
    };

    return Raft;
};