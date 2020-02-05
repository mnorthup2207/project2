module.exports = (sequelize, DataTypes) => {
    const RaftType = sequelize.define("RaftType", {
        type: {
            type: DataTypes.STRING
            , allowNull: false
            , defaultValues: "general"
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

    RaftType.associate = models => {
        RaftType.hasMany(models.Raft, {
            onDelete: "cascade"
        });
    };

    return RaftType;
};