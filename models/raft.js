module.exports = (sequelize, DataTypes) => {
    const Raft = sequelize.define("Raft", {
        name: {
            type: DataTypes.STRING
            , allowNull: false
        },
        location: {
            type: DataTypes.STRING
            , allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE(3),
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
            field: 'created_at',
        },
        updatedAt: {
            type: DataTypes.DATE(3),
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)'),
            field: 'updated_at',
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